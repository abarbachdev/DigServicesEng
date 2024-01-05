import React from 'react'
import BuyNowButton from './BuyNowButton';


const Offer = ({ duration, benefits, discountedPrice, actualPrice, btnurl }) => {



    const renderBenefits = () => {
      return benefits.map((benefit, index) => (
        <li key={index} className="flex items-center">
        <svg
        className="w-4 h-4 mr-2 fill-current text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>{benefit}</li>
      ));
    };
  
    const handleBuyClick = () => {
      
      console.log('Buy button clicked!');
    };
  
    return (
      
      <div className=" border border-gray-300 p-4 rounded-md max-w-[300px] ">
        <div className=" bg-orange-300  p-2 mb-4 rounded-md font-bold text-2xl flex items-center justify-center">{duration}</div>
        <div className=" bg-white p-4 rounded-md mb-4 ">
          <ul className=''>{renderBenefits()}</ul>
        </div>
        <div className=" flex items-center justify-center gap-4">
          <div className="font-semibold text-red-500 line-through ">
          €{discountedPrice}
          </div>
          <div className="flex justify-between items-center text-green-500 text-2xl font-semibold">
             : €{actualPrice}
          </div>
        </div>
       <BuyNowButton url={btnurl} />
       <div className='text-gray-300 flex items-center justify-center p-2'>
       Fertig in 5-10 Minuten
       </div>
      </div>
      
    );
  };

export default Offer

