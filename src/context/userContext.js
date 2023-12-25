import { createContext, useContext, useState, useEffect } from 'react';
import { storage, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getProfileData } from '../utils/firebaseFunction';
import { toast } from 'react-toastify';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [id, setId] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [gender, setGender] = useState();
  const [city, setCity] = useState();
  const [imageURL, setImageURL] = useState();

  const getImageUrl = (event) => {
    const imageFile = event.target.files[0];

    const storageRef = ref(
      storage,
      `usersImage/${Date.now()}/${imageFile.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case 'paused':
            toast.info('Upload is Paused!');
            break;
          case 'running':
            toast.warning('Waiting for Image Upload !');
            break;
        }
      },
      (error) => {
        console.log('Error', error);
        toast.error('Error... Try Again!');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageURL(downloadURL);
          toast.success('Image Uploaded Successfully!');
        });
      }
    );
  };

  const fetchProfileData = async () => {
    await getProfileData().then((data) => {
      setProfileData(data);
    });
  };

  const userProfile = () => {
    const filterUser = profileData.find((item) => item.email === email);
    if (filterUser) {
      setId(filterUser.id);
      setEmail(filterUser.email);
      setUserName(filterUser.userName);
      setGender(filterUser.gender);
      setCity(filterUser.city);
      setImageURL(filterUser.image);
      setNumber(filterUser.number);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  useEffect(() => {
    let subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAccessToken(user.providerData[0]);
        setEmail(user.providerData[0].email);
      }
    });

    return subscriber;
  }, []);

  return (
    <UserContext.Provider
      value={{
        profileData,
        setProfileData,
        userName,
        setUserName,
        email,
        setEmail,
        number,
        setNumber,
        gender,
        setGender,
        city,
        setCity,
        imageURL,
        setImageURL,
        getImageUrl,
        id,
        setId,
        userProfile,
        profileData,
        fetchProfileData,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, UserConsumer };
