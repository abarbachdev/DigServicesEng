import React from 'react'
import WhyUs from './WhyUs';

const WhyChooseUs = () => {
  return (
    <div className='bg-black w-full min-h-screen '>
      <div className=' '>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold flex items-center justify-center p-4 md:p-8'>
          Why Choose Us?
        </h1>
      </div>
      <div className='grid  sm:flex-row  justify-center md:grid-cols-2 lg:grid-cols-3   items-center p-4 md:p-20'>
        <WhyUs 
          icon="path/to/your/icon.png"
          title="HD SPORTS"
          text="Stream all your favorite live HD sports from all around the world. Don’t miss your favorite teams anymore!"
          padding="p-4"
        />
         <WhyUs 
        icon="path/to/your/icon.png"
        title="4K ULTRA HD"
        text="Over 18,000 live channels, +8,400 series, and +60,000 movies you will definitely find the one you love.
        Sports, news, action, kids, international, local, HD, and UHD."
        />
        <WhyUs 
        icon="path/to/your/icon.png"
        title="COMPATIBILITY"
        text="MAG, Dreamlink T1, Avov, Android, WebTV (browser), and XBMC/KODI are the supported platforms."
        />
        <WhyUs 
        icon="path/to/your/icon.png"
        title="GREAT SUPPORT"
        text="Stream all your favorite live HD sports from all around the world. Don’t miss your favorite teams anymore!"
        />
        <WhyUs 
        icon="path/to/your/icon.png"
        title="SERVER STABILITY"
        text="No more freezing, stuttering. Our IPTV Services are always ready with our powerful streaming servers."
        />
        <WhyUs 
        icon="path/to/your/icon.png"
        title="VIDEO ON DEMAND"
        text="Enjoy more than 1500 Movies, and TV shows instantly! All our VOD are updated on daily basis."
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
