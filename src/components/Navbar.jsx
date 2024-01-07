import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='bg-black flex justify-between items-center w-full p-4 sm:p-8 fixed z-10'>
      <h1 className='text-white text-2xl md:text-4xl font-semibold cursor-pointer'>
        <span className='text-orange-500'>4K</span> Iptv <span className='text-orange-500'>Deutschland</span>
      </h1>

      <div className='block sm:hidden'>
        {/* Hamburger menu icon */}
        <div onClick={toggleMenu} className="cursor-pointer">
        <FontAwesomeIcon icon={showMenu ? faTimes : faBars} className="text-white text-3xl" />
        </div>
      </div>

      {/* Responsive menu */}
      {showMenu && (
        <div className='sm:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex justify-center items-center'>
          <ul className='flex flex-col text-white font-semibold gap-4 sm:gap-8 cursor-pointer'>
            <li>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu} // Close menu on link click
              >
                Heim
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                Preisgestaltung
              </Link>
            </li>
            <li>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              häufig gestellte Fragen
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
          </li>
          </ul>
        </div>
      )}

      {/* Regular desktop view */}
      <div className='hidden sm:block'>
        {/* Your existing navigation links */}
        <ul className='flex text-white font-semibold gap-4 sm:gap-8 cursor-pointer'>
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Heim
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Preisgestaltung
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              häufig gestellte Fragen
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
