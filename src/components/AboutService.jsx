import React from 'react';
import watchiptvimg from '../assets/watchip.png';

const AboutService = () => {
  return (
    <div className='w-full h-auto sm:h-screen flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20 px-4 sm:px-0 p-16'>
      <div className='max-w-[600px] text-center sm:text-justify mb-8 sm:mb-0'>
        <h1 className='text-3xl sm:text-5xl text-black font-bold mb-4 sm:mb-8'>
          <span className='text-red-500'>The best</span> IPTV provider in USA & all over the world
        </h1>
        <p className='text-sm sm:text-base'>
          Explore the world of entertainment with our IPTV subscriptions. As a trusted IPTV provider, we offer the best IPTV services, including a vast selection of HD IPTV channels and a comprehensive IPTV channel list. With us, you'll enjoy seamless access to your favorite sport games and TV shows. Don't wait - buy IPTV from us today and stay ahead in the world of entertainment.
        </p>
      </div>
      <div className='flex justify-center'>
        <img src={watchiptvimg} className='w-3/4 sm:max-w-[600px]' alt="Watch IPTV" />
      </div>
    </div>
  );
};

export default AboutService;
