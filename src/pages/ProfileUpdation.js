// import React, { useState, useEffect } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate, Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { ref } from 'firebase/storage';
// import { getDownloadURL, uploadBytesResumable } from 'firebase/storage';
// import {
//   addDoc,
//   collection,
//   getDoc,
//   serverTimestamp,
//   doc,
//   updateDoc,
// } from 'firebase/firestore';
// import { db, storage } from '../firebase';

// const initialState = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
//   city: '',
//   contact: '',
// };

// const ProfileUpdation = ({ setActive, user }) => {
//   const [state, setState] = useState(initialState);
//   const navigate = useNavigate();
//   const [file, setFile] = useState(null);
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [progress, setProgress] = useState(null);
//   const { id } = useParams();
//   const { email, password, firstName, lastName, city, contact } = state;

//   useEffect(() => {
//     id && getSingleUser();
//   }, [id]);

//   const getSingleUser = async () => {
//     const docRef = doc(db, 'users', id);
//     const snapshot = await getDoc(docRef);
//     if (snapshot.exists()) {
//       setState({ ...snapshot.data() });
//     }
//   };

//   useEffect(() => {
//     id && userDetail();
//   }, [id]);

//   const userDetail = async () => {
//     const docRef = doc(db, 'users', id);
//     const snapshot = await getDoc(docRef);
//     if (snapshot.exists()) {
//       setState({ ...snapshot.data() });
//     }
//     setActive(null);
//   };

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setIsSubmit(true);
//     if (!id) {
//       try {
//         await addDoc(collection(db, 'users'), {
//           ...state,
//           timestamp: serverTimestamp(),
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       try {
//         await updateDoc(doc(db, 'users', id), {
//           ...state,
//           timestamp: serverTimestamp(),
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     navigate('/home');
//   };

//   return (
//     <div>
//       <div className='w-full'>
//         <div className=' border-[1px]  mt-4  w-[350px] mx-auto flex flex-col items-center text-white bg-gradient-to-r from-sky-400 to-indigo-400 rounded '>
//           <div>
//             <div className='w-full flex justify-center items-center heading mt-4'>
//               Updation
//             </div>
//           </div>
//           <div className=' text-white font-titleFont text-lg font-semibold px-6 py-2 flex justify-center items-center '>
//             <div className='w-full flex flex-col justify-center items-center heading '>
//               <form className='row  '>
//                 <div className='col-6 py-3'>
//                   <input
//                     type='text'
//                     className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
//                     placeholder='First Name'
//                     name='firstName'
//                     value={firstName}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className='col-6 py-3'>
//                   <input
//                     type='text'
//                     className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
//                     placeholder='Last Name'
//                     name='lastName'
//                     value={lastName}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className='col-12 py-3'>
//                   <input
//                     type='email'
//                     className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
//                     placeholder='Email'
//                     name='email'
//                     value={email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className='col-12 py-3'>
//                   <input
//                     type='text'
//                     className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
//                     placeholder='City'
//                     name='city'
//                     value={city}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className='col-12 py-3'>
//                   <input
//                     type='number'
//                     className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
//                     placeholder='Contact'
//                     name='contact'
//                     value={contact}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className='col-12 py-3'>
//                   <input
//                     type='password'
//                     className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
//                     placeholder='Password'
//                     name='password'
//                     value={password}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className='col-12 py-3 text-center'>
//                   <button
//                     className='border-2 border-white px-5 rounded '
//                     type='submit'
//                     style={{ color: '#fff', fontWeight: '800' }}
//                     onClick={handleUpdate}
//                   >
//                     Update user
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProfileUpdation;
