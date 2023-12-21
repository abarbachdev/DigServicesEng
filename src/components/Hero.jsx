import React from 'react';
import homeimg from '../assets/iptv2.jpeg';
import { Element } from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
  return (
    <Element name="hero">
    <div className='w-full relative top-10'>
      <img src={homeimg} className="w-full h-auto sm:h-screen object-cover" alt="IPTV Image"/>

      <div className='absolute top-1/2 transform -translate-y-1/2 text-center w-full px-6 sm:px-36'>
        <h1 className='text-4xl sm:text-6xl text-orange-500 font-bold mb-4 sm:mb-10'>
          Discover Premium <br className="sm:hidden"/> IPTV Subscriptions
        </h1>

        <h2 className='text-2xl  sm:text-4xl text-white font-semibold mb-8 sm:mb-16'>
          Your Trusted IPTV Provider <br className="sm:hidden"/> for the Best Services
        </h2>

        <div>
          <button type='button' className='bg-orange-500 text-lg sm:text-2xl text-white rounded-md px-8 sm:px-20 py-2 hover:text-black'>
          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed based on your layout
            duration={500}
          >
            Get Yours Now
          </Link>   
            
          </button>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Hero;
