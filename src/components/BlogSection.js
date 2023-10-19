// import React, { useEffect } from "react";

import { Link } from 'react-router-dom';
import { short } from '../utility';

import '../../src/index.css';
import { MdRestoreFromTrash } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const BlogSection = ({ blogs, user, handleDelete }) => {
  const userId = user?.uid;
  return (
    <div className=' w-full flex justify-center items-center'>
      <div className='blog-heading text-start py-2 mb-4 p-8 grid gap-5'>
        {blogs?.map((item) => (
          <div
            className='row pb-4 border-[1px] bg-slate-100 border-orange-200  '
            key={item.id}
          >
            <div className='col-md-5'>
              <div className='h-60 w-3/4 overflow-hidden mt-4 ml-2'>
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className='h-full w-full overflow-hidden'
                />
                <div></div>
              </div>
            </div>
            <div className='col-md-7 mt-4 -ml-10'>
              <div className='text-start '>
                <h6 className='text-orange-500 text-lg font-bold'>
                  {item.category}
                </h6>
                <span className='title py-2 capitalize  text-base font-semobold'>
                  {item.title}
                </span>
                <span className='flex col -gap-2'>
                  <p className='font-bold text-base capitalize'>
                    {item.author}
                  </p>
                  <span className='ml-2 mt-[1px] text-sm font-normal '>
                    - {item.timestamp.toDate().toDateString()}
                  </span>
                </span>
              </div>
              <div className='short-description  '>
                {short(item.description, 120)}
              </div>
              <Link to={`/detail/${item.id}`}>
                <button className=' px-2  py-1.5 text-sm text-white font-semibold rounded-sm mt-2 bg-[#4287f5]  '>
                  Read More
                </button>
              </Link>
              {user?.uid && item.userId === user.uid && (
                <div className='float-right flex gap-4 mt-2'>
                  <MdRestoreFromTrash
                    name='trash'
                    style={{ cursor: 'pointer' }}
                    size='22px'
                    onClick={() => handleDelete(item.id)}
                  />
                  <Link to={`/update/${item.id}`}>
                    <FiEdit
                      name='edit'
                      style={{ cursor: 'pointer' }}
                      size='20px'
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
