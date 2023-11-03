import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Login = ({ setActive }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const { email, password, firstName, lastName, confirmPassword } = state;
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLogin = (user) => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      setTimeout(() => {
        navigate('/home');
      }, 1500);
      toast.success('Login Successfully');
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem('email'));
  });

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        // setUser(user);
        setActive('Home');
      } else {
        return toast.error('All fields are mandatory to fill');
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password doesn't match");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setActive('home');
      } else {
        return toast.error('All fields are mandatory to fill');
      }
    }
    navigate('/home');
  };

  return (
    <div className='w-full'>
      <div className=' border-[1px]  mt-4  w-[350px] mx-auto flex flex-col items-center text-white bg-gradient-to-r from-sky-400 to-indigo-400 rounded '>
        <div>
          <div className='w-full flex justify-center items-center heading mt-4'>
            {!signUp ? 'Sign-In' : 'Sign-Up'}
          </div>
        </div>
        <div className=' text-white font-titleFont text-lg font-semibold px-6 py-2 flex justify-center items-center '>
          <div className='w-full flex flex-col justify-center items-center heading mt-4'>
            <form className='row ' onSubmit={handleAuth}>
              {signUp && (
                <>
                  <div className='col-6 py-3'>
                    <input
                      type='text'
                      className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
                      placeholder='First Name'
                      name='firstName'
                      value={firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-6 py-3'>
                    <input
                      type='text'
                      className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
                      placeholder='Last Name'
                      name='lastName'
                      value={lastName}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              <div className='col-12 py-3'>
                <input
                  type='email'
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className='col-12 py-3'>
                <input
                  type='password'
                  className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                />
              </div>
              {signUp && (
                <div className='col-12 py-3'>
                  <input
                    type='password'
                    className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className='col-12 py-3 text-center'>
                <button
                  className={`btn ${!signUp ? 'btn-sign-in' : 'btn-sign-up'}`}
                  type='submit'
                >
                  {!signUp ? 'Sign-in' : 'Sign-up'}
                </button>
              </div>
              <h5> Or</h5>
              <div className=' flex justify-center items-center rounded'>
                <button
                  onClick={handleLogin}
                  className='bg-gradient-to-r from-orange-500 to-transparent text-white py-2.5 px-12'
                >
                  Sign-In with Google
                </button>
                          
              </div>
            </form>
            <div>
              {!signUp ? (
                <>
                  <div className='text-center justify-content-center mt-2 pt-2'>
                    <p className='small fw-bold mt-2 pt-1 mb-0'>
                      Don't have an account ?
                      <span
                        className='ml-1 text-yellow-400'
                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                        onClick={() => setSignUp(true)}
                      >
                        Sign Up
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className='text-center justify-content-center mt-2 pt-2'>
                    <p className='small fw-bold mt-2 pt-1 mb-0'>
                      Already have an account ?
                      <span
                        className='ml-1 text-yellow-400'
                        style={{
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        onClick={() => setSignUp(false)}
                      >
                        Sign In
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => setShow(!show)}>View Test Credential</button>
        {show ? (
          <div>
            <h6>User Credential</h6>
            <p>
              <span>Email :</span> test
            </p>
            <p>
              <span>Password :</span> 12
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
