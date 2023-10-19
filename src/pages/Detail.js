import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Detail = (setActive) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, 'blogs', id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
    // setActive();
  };
  return (
    <div>
      <div className='w-3/4 h-2/4'>
        <div className='w-full  '>
          <div className='text-center mt-2 font-bold text-lg capitalize'>
            <h2>{blog?.category}</h2>
          </div>
          <div className='flex justify-center items-center mt-2 ml-2'>
            <img
              src={blog?.imgUrl}
              alt='Blog image'
              className='w-full h-[450px] '
            />
            <span className='ml-5 text-start text-lg font-bold'>
              By <p className='author capitalize '>{blog?.author}</p>
              {blog?.timestamp.toDate().toDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className='ml-3 pb-4 pt-4 '>
        <div className='text-center mt-2 font-bold text-lg capitalize'>
          <h2>{blog?.title}</h2>
        </div>
        <div className='ml-3'>
          <p className='px-5 text-start w-3/2'>{blog?.description}</p>
        </div>
      </div>
      <Link to='/' className=''>
        <button className=' flex justify-center items-center gap-2 w- ml-5  py-2 px-3 text-sm text-white font-semibold rounded-sm bg-[#4287f5] fixed bottom-0 right-5 mb-2  '>
          Back to <FaHome className='w-[20px] h-[20px]' />
        </button>
      </Link>
    </div>
  );
};

export default Detail;
