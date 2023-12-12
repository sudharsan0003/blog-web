import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const profileCollectionRef = collection(db, 'users');

const setProfileData = async (data) => {
  const profileRef = doc(db, 'users', `${Date.now()}`);
  await setDoc(profileRef, data, { merge: true });
};

const getProfileData = async () => {
  const data = await getDocs(profileCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export { setProfileData, getProfileData };
