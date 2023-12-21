import React from 'react'


const WhyUs = ({ title, text }) => {
    return (
      <div className='max-w-[400px] flex flex-col items-center justify-center mb-20 '>
        <h2 className='text-2xl font-semibold text-white  gap-10 mb-2'>{title}</h2>
        <p className='text-white text-center'>{text}</p>
      </div>
    
    );
  };
  
  export default WhyUs;