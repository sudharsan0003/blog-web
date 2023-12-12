import React from 'react';
import { Link } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa';

const Header = ({ active, setActive, handleLogout, user }) => {
  const userId = user?.uid;

  return (
    <div className='w-full h-14 bg-slate-700  text-whiteText flex flex-row justify-between items-center gap-5 sticky top-0 z-50'>
      <div className=' px-4  flex flex-row items-center gap-3 '>
        <Link to='/home' className='no-underline'>
          <div className=' flex flex-col text-white mb-3 '>
            <FaBlog />
          </div>
        </Link>
        <Link to='/home' className='no-underline'>
          <div className='headerHover  mdl:inline-flex'>
            <p className='text-lg  text-white  no-underline font-normal flex flex-col'>
              Home
            </p>
          </div>
        </Link>
        <Link to='/create' className='no-underline'>
          <div className='headerHover  mdl:inline-flex'>
            <p className='text-lg pl-2 text-white font-normal flex flex-col'>
              Create
            </p>
          </div>
        </Link>
        <Link to='/about' className='no-underline'>
          <div className='headerHover  mdl:inline-flex'>
            <p className='text-lg pl-2 text-white font-normal flex flex-col'>
              About
            </p>
          </div>
        </Link>
      </div>
      <div className='px-4  flex flex-row items-center justify-center gap-2 '>
        {userId ? (
          <>
            <Link to='/profile' className='no-underline'>
              <div className='  flex justify-center items-center px-1 mt-2 mb-2 rounded-lg -ml-[3rem] md:ml-0  '>
                <div className='flex justify-center items-center -mt-3'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT73EzN_QVLcofrYPYGfZl0RQ-rfo4fwRkQQ&usqp=CAU'
                    alt=''
                    className='w-5 h-5  rounded-full'
                  />
                </div>
              </div>
            </Link>
            <Link to='/' className='no-underline'>
              <p
                className='text-whiteText font-normal text-sm headerHover'
                onClick={handleLogout}
              >
                Logout
              </p>
            </Link>
          </>
        ) : (
          <Link to='/' className='no-underline'>
            <div className='flex justify-center font-normal text-white headerHover'>
              <p>Login</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
