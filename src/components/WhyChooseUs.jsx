import React from 'react';
import WhyUs from './WhyUs';

const WhyChooseUs = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div className='text-center'>
        <h1 className='text-2xl  md:text-4xl lg:text-5xl text-white font-semibold py-4 md:py-8'>
          Why Choose our Premium Iptv Service?
        </h1>
        <p className='text-gray-300 text-center  px-4 md:px-8'>
          We take pride in offering you the best-in-class entertainment experience with our PREMIUM IPTV service. Our commitment to delivering top-notch quality and an unparalleled viewing experience sets us apart from the rest. Here's why you should choose our PREMIUM IPTV for all your streaming needs:
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 md:p-20 items-center justify-center'>
        <WhyUs
          icon="path/to/your/icon.png"
          title="SERVER STABILITY"
          text="No more freezing, stuttering. Our IPTV Services are always ready with our powerful streaming servers."
        />

<WhyUs 
        icon="path/to/your/icon.png"
        title="RELIABLE 24/7 SUPPORT"
        text="We're here for you, day and night. Get assistance anytime with our 24/7 support."
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
        text="Our Iptv subscription is compatible with all devices, such as Smart TVs, MAG devices, smartphones and tablets, Amazon Fire Stick, MAC, Android devices, Fire TV, Windows, and more."
        />
       <WhyUs 
          icon="path/to/your/icon.png"
          title="INSTANT IPTV ACTIVATION"
          text="Subscribe and enjoy instant activation for your Iptv account via email or Whatsapp. Start streaming right away!"
          padding="p-4"
        />
       
        <WhyUs 
        icon="path/to/your/icon.png"
        title="COMPETITIVE PRICING"
        text="We believe that quality entertainment should be accessible to all. That's why we offer competitive pricing plans that cater to your budget without compromising on quality."
        />

      </div>
    </div>
  );
};

export default WhyChooseUs;
