import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Trending = ({ blogs }) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    slideSpeed: 200,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div className=' h-80 ml-3'>
        <div>
          <div className='text-black text-2xl text-center font-bold py-2 mb-4 '>
            <span className='text-orange-500'>Trend</span>ing
          </div>
        </div>
        <OwlCarousel className='owl-theme w-3/4  ' {...options}>
          {blogs?.map((item) => (
            <div className='item px-2' key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <div className='relative overflow-hidden z-5 cursor-pointer'>
                  <div className='h-60 w-60 overflow-hidden '>
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className=' relative h-60  w-60 min-w-full'
                    />
                  </div>
                  <div className='absolute h-full w-full top-0 right-0 z-0'></div>
                  <div className='absolute w-full text-center z-0 p-2.5 bottom-0'>
                    <span className='text-white text-center'>{item.title}</span>
                    <div className='text-sm text-white text-center capitalize -ml-5'>
                      {item.author} - {item.timestamp.toDate().toDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};

export default Trending;
