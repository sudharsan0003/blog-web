import {
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth, provider } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const Login = ({ setActive }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const { email, password } = state;
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
    if (email && password) {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      // setUser(user);
      setActive('Home');
    } else {
      return toast.error('All fields are mandatory to fill');
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
          <div className='w-full flex flex-col justify-center items-center heading '>
            <form className='row  ' onSubmit={handleAuth}>
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

              <div className='col-12 py-3 text-center'>
                <button
                  className={`btn ${
                    !signUp ? 'btn-sign-in' : 'btn-sign-up'
                  } "border-2 border-white px-5 rounded "`}
                  type='submit'
                  style={{ color: '#fff', fontWeight: '800' }}
                >
                  Sign-in
                </button>
              </div>
              <h5 className='text-center '> Or</h5>
              <div className=' flex justify-center items-center rounded'>
                <button
                  onClick={handleLogin}
                  className='border-1 border-white p-2 rounded mb-3 text-base'
                >
                  Sign-in with Google
                </button>
              </div>
            </form>
            <div>
              <div className='text-center justify-content-center mt-2 pt-2'>
                <p className='small fw-bold -mt-4 pt-1 mb-0'>
                  Don't have an account ?
                  <Link
                    to='/registration'
                    className='ml-1 text-yellow-400'
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                    onClick={() => setSignUp(true)}
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              {/* <div className='text-center justify-content-center mt-2 pt-2'>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='flex   justify-center items-center mt-2 '>
        <button
          className='px-2  py-1.5 text-sm text-white font-semibold rounded-sm mt-2 bg-[#4287f5]'
          onClick={() => setShow(!show)}
        >
          View Test Credential
        </button>
        {show ? (
          <div className=' flex flex-col  border-1 px-3 bg-blue-100 ml-3 border-blue-400 rounded mb-3'>
            <h6 className='font-semibold '>User Credential</h6>
            <p>
              <span className='font-semibold '>Email :</span> test1@gmail.com
            </p>
            <p className='-mt-4'>
              <span className='font-semibold  '>Password :</span> 121212
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
