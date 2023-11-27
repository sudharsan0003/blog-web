import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';

const Searchbar = ({ search, handleChange }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search?searchQuery=${search}`);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className='text-center'>
      {/* <div>Search</div> */}
      <form onSubmit={handleSubmit}>
        <div className='flex flex-row justify-center items-center mb-2'>
          <input
            type='text'
            value={search}
            placeholder='Search With Title & Category'
            onChange={handleChange}
            className='w-2/4 text-base  border-2 border-gray-400  px-2 rounded-tl-md rounded-bl-md'
          />
          <button className='w-12 h-[28px] flex items-center justify-center bg-orange-400  cursor-pointer rounded-tr-md rounded-br-md -ml-15'>
            <LuSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
