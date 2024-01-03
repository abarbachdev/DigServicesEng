import React from 'react';
import Offer from './Offer';
import { Element } from 'react-scroll';
import BuyNowButton from './BuyNowButton';


const Offers = () => {
  
  const offerData = [
    {
      id: 1,
      duration: '1 Month',
      benefits: ['14.000+ Live TV Channels', '40.000+ VODs & Series', 'Premium Sport Channels', 'Anti Freeze System', 'All Devices are supported','m3u/xtream codes/portal', 'Technical Assistance','7 Days Money Back Guarantee' ],
      discountedPrice: 12.99,
      actualPrice: 9.99,
      btnurl: 'https://ordercheckoutpage.dpdcart.com/cart/buy?product_id=236400&product_price_id=257873&gateway=creditcard',
    },
    {
      id: 2,
      duration: '3 Months',
      benefits: ['14.000+ Live TV Channels', '40.000+ VODs & Series', 'Premium Sport Channels', 'Anti Freeze System', 'All Devices are supported','m3u/xtream codes/portal', 'Technical Assistance','7 Days Money Back Guarantee' ],
      discountedPrice: 23,
      actualPrice: 19.99,
      btnurl: 'https://ordercheckoutpage.dpdcart.com/cart/buy?product_id=236378&product_price_id=257851&gateway=creditcard',
    },
    {
      id: 3,
      duration: '6 Months',
      benefits: ['14.000+ Live TV Channels', '40.000+ VODs & Series', 'Premium Sport Channels', 'Anti Freeze System', 'All Devices are supported','m3u/xtream codes/portal', 'Technical Assistance','7 Days Money Back Guarantee' ],
      discountedPrice: 35,
      actualPrice: 29.99,
      btnurl: 'https://ordercheckoutpage.dpdcart.com/cart/buy?product_id=236409&product_price_id=257882&gateway=creditcard',
    },
    {
      id: 4,
      duration: '12 Months (Popular)',
      benefits: ['14.000+ Live TV Channels', '40.000+ VODs & Series', 'Premium Sport Channels', 'Anti Freeze System', 'All Devices are supported','m3u/xtream codes/portal', 'Technical Assistance','7 Days Money Back Guarantee' ],
      discountedPrice: 59,
      actualPrice: 49,
      btnurl: 'https://ordercheckoutpage.dpdcart.com/cart/buy?product_id=236410&product_price_id=257883&gateway=creditcard',
    }
  ];


  return (
    <Element name="pricing">
    <section className='bg-black w-full h-full flex flex-col justify-center items-center'>
    <div>
    <h1 className='text-3xl md:text-5xl font-semibold text-white p-4 md:p-10  text-center'>Choose your plan</h1>
    <h2 className='text-gray-300  text-lg md:text-2xl p-4 flex-row text-center '>Unleash the full potential of your entertainment with our unbeatable IPTV pricing plans. <br/>Choose the perfect package that suits your needs and enjoy more than 14,000 channels <br/>+40,000 VOD and Series in 4K/FHD/HD/SD quality <br/>that you can watch on any device.</h2>
    <h2 className='text-orange-500 text-2xl font-semibold flex items-center justify-center'>7 Days Money Back Guarantee</h2>
    </div>
    <div className='md:flex sm:flex-row sm:p-8 p-8 sm:gap-4  items-center justify-center'>
    {offerData.map((offer) => (
        <Offer key={offer.id} {...offer} />
   
      ))}
    </div>
    </section>
    </Element>
  );
};

export default Offers;
