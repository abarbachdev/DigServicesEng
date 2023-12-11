import React from 'react'


const WhyUs = ({ title, text }) => {
    return (
      <div className='max-w-[300px] flex flex-col items-center justify-center mb-20 '>
        <h2 className='text-3xl font-semibold text-white  gap-10 '>{title}</h2>
        <p className='text-white text-center	'>{text}</p>
      </div>
    
    );
  };
  
  export default WhyUs;