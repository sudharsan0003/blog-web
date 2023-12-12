import { UserConsumer } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();
  const {
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
    fetchProfileData,
  } = UserConsumer();

  useEffect(() => {
    fetchProfileData();
    userProfile();
  }, []);

  const updateFunc = async (e) => {
    e.preventDefault();
    if (userName && email && number && gender && city && imageURL) {
      if (number.length === 10) {
        try {
          const itemToEditRef = doc(db, 'usersProfileData', id);
          await updateDoc(itemToEditRef, {
            id,
            userName,
            email,
            number,
            gender,
            city,
            image: imageURL,
          });
          fetchProfileData();
          toast.success('Profile Update Successfully !');
          setTimeout(() => {
            navigate('/home');
          }, 1500);
        } catch (error) {
          console.log(error);
        }
      } else toast.warning('Enter valid phone number !');
    } else toast.warning('Input Field Is Mandatory !');
  };

  return (
    <div className=' h-screen w-full flex flex-col bg-gray-400'>
      <div className='w-[80%] mx-auto mt-[4rem] rounded-lg bg-orange-300 '>
        <div className='profile-data'>
          <h3 className='text-center m-2 text-white/90 font-semibold'>
            {' '}
            Profile
          </h3>
          <div className='flex justify-center items-center mx-auto'>
            <div className=''>
              {imageURL && (
                <div className='w-full my-2 '>
                  <img
                    src={imageURL}
                    alt={userName}
                    className='w-[100px] h-[100px] rounded-full '
                  />
                </div>
              )}
            </div>
          </div>
          <div className=' text-black font-titleFont text-lg font-semibold px-6 py-2 flex justify-center items-center '>
            <div className=' flex flex-col  justify-center items-center heading '>
              <div className=''>
                <div className='flex justify-between mb-2'>
                  <label>User Name :</label>
                  <input
                    type='text'
                    value={userName}
                    name='name'
                    className='py-1 ml-2 border border-black px-2 text-base rounded-sm outline-none  text-black bg-transparent'
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className='flex justify-between mb-2'>
                  <label>Email :</label>
                  <input
                    type='email'
                    value={email}
                    name='cmp_email'
                    className='py-1 ml-2 border border-black px-2 text-base rounded-sm outline-none  text-black bg-transparent'
                    id='id_cmp_email'
                    readOnly
                  />
                </div>
                <div className='flex justify-between mb-2'>
                  <label>Mobile Number :</label>
                  <input
                    type='number'
                    value={number}
                    name='number'
                    className='py-1 ml-2 border border-black px-2 text-base rounded-sm outline-none  text-black bg-transparent'
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                <div className='w-f flex justify-between'>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    id='gender'
                    placeholder='Gender'
                    className='text-black font-medium text-md'
                  >
                    <option defaultChecked>Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Women'>Women</option>
                    <option value='Other'>Other</option>
                  </select>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    id='city'
                    placeholder='City'
                    className='text-black font-medium text-md'
                  >
                    <option defaultChecked>City</option>
                    <option value='Coimbatore'>Coimbatore</option>
                    <option value='Chennai'>Chennai</option>
                    <option value='Salem'>Salem</option>
                  </select>
                </div>
                <div className='font-light  '>
                  <label htmlFor='image'>Profile Img :</label>
                  <input
                    type='file'
                    name='image'
                    accept='image/*'
                    id='image'
                    onChange={(event) => getImageUrl(event)}
                  />
                </div>
                <div className='flex justify-center items-center my-3'>
                  <button
                    onClick={updateFunc}
                    className='border px-4 rounded-md bg-black text-white font-light '
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
