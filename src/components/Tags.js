import React from 'react';
import { Link } from 'react-router-dom';

const Tags = ({ tags }) => {
  return (
    <div>
      <div className='blog-heading text-start py-2 mb-4'>Tags</div>
      <div className='tags'>
        <Link to={'/'}>
          <span>Technology</span>
          <span>IT</span>
          <span>Devops</span>
          <span>Trend</span>
          <span>Cricket</span>
          <span>Academy</span>
        </Link>
      </div>
    </div>
  );
};

export default Tags;
