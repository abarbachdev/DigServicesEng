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
        Entdecken Sie  <br className="sm:hidden"/> Premium-IPTV-Abos
        </h1>

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
            Holen Sie sich jetzt Ihre
          </Link>   
            
          </button>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Hero;
