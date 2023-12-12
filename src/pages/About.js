import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const About = () => {
  return (
    <div className='container padding'>
      <div className='col-md-12'>
        <div className='row mx-0'>
          <h3>About Us</h3>
          <p>
            <p>
              All around the world, Building a new web, and a New workplace.
              Join us!
            </p>
            <p>
              We’re a distributed company with 1,935 Automatticians in 95
              countries speaking 119 different languages. We’re committed to
              diversity, equity, and inclusion, and our common goal is to
              democratize publishing and commerce so that anyone with a story
              can tell it, and anyone with a product can sell it, regardless of
              income, gender, politics, language, or where they live in the
              world.
            </p>
            <p>
              We believe in Open Source and the vast majority of our work is
              available under this state. We strive to live by the work.
              Automattic is a Most Loved Company and Disability Confident
              Committed. (Here’s what that might mean for you.) Come work with
              us.
            </p>
            <p>
              Learn more about what happened next, and how you or your business
              can dedicate time to the future of blog at Five for the Future.
            </p>
          </p>
        </div>
      </div>
      <Link to='/home' className=''>
        <button className=' flex justify-center items-center gap-2 w- ml-5  py-2 px-3 text-sm text-white font-semibold rounded-sm bg-[#4287f5] fixed bottom-5 right-5 mb-2  '>
          Back to <FaHome className='w-[20px] h-[20px]' />
        </button>
      </Link>
    </div>
  );
};

export default About;
