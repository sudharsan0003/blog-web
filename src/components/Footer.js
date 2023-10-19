import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-black text-whiteText '>
      <div className='w-full border-b-[1px] border-gray-500 '>
        <div className='max-w-5xl mx-auto text-gray-300 '>
          <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-6 md:place-items-center md:items-start p-4'>
              <div>
                <h3 className='font-titleFont text-white text-base font-medium text-center mb-3'>
                  Community
                </h3>
                <ul className='flex flex-col gap-2 font-bodyFont'>
                  <li className='footerLink'>Careers</li>
                  <li className='footerLink'> Blog</li>
                  <li className='footerLink'>About</li>
                </ul>
              </div>
              <div>
                <h3 className='font-titleFont text-white text-base font-medium text-center  mb-3'>
                  Let us Help
                </h3>
                <ul className='flex flex-col gap-2 font-bodyFont'>
                  <li className='footerLink'>Help Center</li>
                  <li className='footerLink'>Help Forum</li>
                  <li className='footerLink'>Tutorials</li>
                </ul>
              </div>
              <div>
                <h3 className='font-titleFont text-white text-base  text-end font-medium ml-6 mb-3'>
                  Developers
                </h3>
                <ul className='flex flex-col gap-2 font-bodyFont'>
                  <li className='footerLink'>Blogger Api</li>
                  <li className='footerLink'>Dev Forum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='font-bodyFont text-white text-xs text-center flex flex-col justify-center p-3'>
        <p>Condition of use Privacy Notice</p>
        <p>© 1997-2023, Bloggers.com,Inc.or.its affiliates</p>
      </div>
    </div>
  );
};

export default Footer;
