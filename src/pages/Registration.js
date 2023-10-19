import React, { useState } from 'react';

const Registration = () => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleName = (e) => {};
  const handleEmail = (e) => {};
  const handlePassword = (e) => {};
  const handleConfirmPassword = (e) => {};
  const clickHandlerRegistration = (e) => {};
  return (
    <div className='w-full'>
      <div className='w-full bg-white pb-10 '>
        <form className='w-[350px] mx-auto flex flex-col items-center '>
          <div className='w-full border bg-gray-300 border-zinc-200 p-6 mt-5'>
            <h2 className='font-titleFont text-3xl font-medium mb-4 '>
              Create Account
            </h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Your Name</p>
                <input
                  onChange={handleName}
                  type='text'
                  value={clientName}
                  className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Enter your Email</p>
                <input
                  onChange={handleEmail}
                  type='email'
                  value={email}
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Password</p>
                <input
                  onChange={handlePassword}
                  type='password'
                  value={password}
                  className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Confirm-Password</p>
                <input
                  onChange={handleConfirmPassword}
                  type='password'
                  value={confirmPassword}
                  className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
              </div>
              <p className='text-xs text-gray-500 -mt-2'>
                Password must be atleast 8 character
              </p>
              <button
                onClick={clickHandlerRegistration}
                className='w-full  py-1.5 text-sm font-normal rounded-sm bg-[#f0c14b]  active:border-yellow-800 active:shadow-amazonInput mt-2'
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
