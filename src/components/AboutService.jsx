import React from 'react';
import watchiptvimg from '../assets/watchip.png';
import moviesimg from '../assets/movies.png';
import sportsimg from '../assets/sports.png';
import { Link, animateScroll as scroll } from 'react-scroll';



const AboutService = () => {
  return (
    <>
    <div className='w-full '>
    <div className='  w-full  flex flex-col sm:flex-row  justify-center gap-8 sm:gap-20 px-8 sm:px-0 p-20'>
      <div className='max-w-[600px] text-center sm:text-justify mb-8 sm:mb-0'>
        <h1 className='text-3xl text-red-500 sm:text-5xl  font-bold mb-4 sm:mb-8'>
         Elevate Your Entertainment with Premium IPTV
        </h1>
        <p className='text-sm sm:text-base'>
        Explore the world of entertainment with our IPTV subscriptions. 
        As a trusted IPTV provider, we offer the best IPTV services, 
        including a vast selection of HD IPTV channels and a comprehensive IPTV 
        channel list. With us, you'll enjoy seamless access to your favorite sport
         games and TV shows. Don't wait - buy IPTV from us today and stay ahead 
         in the world of entertainment.
        </p>
      </div>
      <div className='flex items-start justify-center'>
        <img src={watchiptvimg} className='w-3/4 sm:max-w-[600px]' alt="Watch IPTV" />
      </div>
      
    </div>

    <div className=' flex items-center justify-center '>
      <h1 className='text-2xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-left'>
    <span className='text-red-500'> Why we are renowned  </span> as the best IPTV provider in the market.
    </h1>
    </div>

    <p className='p-4 text-center'>
    When it comes to IPTV subscriptions, we stand out as the best IPTV provider in the industry. 
    Our commitment to delivering the highest quality services,<br/> including HD IPTV channels and an 
    extensive IPTV channel list, sets us apart as the premium IPTV provider of choice. We take pride
     in offering the best IPTV <br/>services that ensure you never miss your favorite sport games or TV shows. 
     With us, you can confidently buy IPTV, knowing you&apos;re making the right <br/>choice for your entertainment needs.
      Explore our offerings and discover why we are the best IPTV provider around.
    </p>
    <div className='flex flex-col items-center justify-center p-8 ' >
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center'>
        Unlock all premium IPTV HD sports channels <br/>and access Premium channels for top movies,<br/> series, and exclusive content. <br/> 
      </h1>
      <div className='p-4'>
      <h2 className='flex items-center justify-center  text-red-500 text-3xl text-center sm:text-4xl font-bold'>
      Elevate your Entertainment Experience Now.
      </h2>
      </div>
      <div className='flex  items-center justify-center'>
      <button type='button' className='bg-orange-500 text-lg sm:text-2xl text-white rounded-md px-8 sm:px-30 py-2 hover:text-black'>
          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed based on your layout
            duration={500}
          >
            Get Your Iptv Account Now
          </Link>   
            
          </button>
      </div>
    </div>
    </div>

    <div className='flex flex-col items-center justify-center px-8'>

  <div className='flex flex-col items-center justify-center sm:flex-row gap-8  sm:max-w-4xl'>
    <div className='flex flex-col items-center justify-center'>
      <img src={sportsimg} className='w-full  max-w-sm sm:max-w-[800px]' alt="Watch IPTV" />
      <div className='max-w-sm sm:max-w-[600px]   text-center sm:text-justify mb-8 sm:mb-0 p-4'>
        <h1 className='text-2xl font-semibold flex items-center justify-center'>
          <span className='text-red-500 text-2xl font-semibold'>Premium &nbsp;</span> Sport Channels
        </h1>
        <p className='text-sm sm:text-base text-center p-4'>
          Never miss your favorite sport event again! Enjoy all premium sport channels from all over the world.
        </p>
      </div>
    </div>
    
    <div className='flex flex-col items-center justify-center'>
      <img src={moviesimg} className='w-full  max-w-sm sm:max-w-[800px]' alt="Watch IPTV" />
      <div className='max-w-sm sm:max-w-[600px] text-center  sm:text-justify mb-8 sm:mb-0 p-4'>
        <h1 className='text-2xl font-semibold flex justify-center'>
          <span className='text-red-500 text-2xl font-semibold'>Cinema &nbsp;</span> Family & Kids
        </h1>
        <p className='text-sm sm:text-base text-center p-4'>
          With 4k IPTV, there’s something for everyone in your home. You can enjoy watching kids-friendly shows and your favorite Movies & Series.
        </p>
      </div>
   
    </div>
  </div>

</div>




    </>
  );
};

export default AboutService;