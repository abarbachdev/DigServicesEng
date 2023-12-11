import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between items-center w-full p-4 sm:p-8 fixed z-10'>
      <h1 className='text-white text-2xl md:text-4xl font-semibold cursor-pointer'>
        <span className='text-orange-500'>4K</span> Iptv <span className='text-orange-500'>Box</span>
      </h1>

      <div className='hidden sm:block'>
        <ul className='flex text-white font-semibold gap-4 sm:gap-8 cursor-pointer'>
          <li>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed based on your layout
            duration={500}
          >
            Home
          </Link>           
          </li>
          <li>
          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed based on your layout
            duration={500}
          >
            Pricing
          </Link>          
          </li>
          <li>
          <Link
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed based on your layout
            duration={500}
          >
            Testimonials
          </Link>           
           </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;