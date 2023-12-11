import React from 'react';

const BuyNowButton = ({ url }) => {

  const handleBuyClick = () => {
    window.location.href = url;
  };

  return (
    <button onClick={handleBuyClick} className="w-full bg-green-500 text-white py-2 px-4 rounded-md mt-4">Buy Now</button>
  );
};

export default BuyNowButton;