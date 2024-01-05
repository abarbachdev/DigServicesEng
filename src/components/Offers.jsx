import React from 'react';
import Offer from './Offer';
import { Element } from 'react-scroll';
import BuyNowButton from './BuyNowButton';


const Offers = () => {
  
  const offerData = [
    {
      id: 1,
      duration: '1 Monat',
      benefits: ['14.000+ Live-TV-Kanäle', '40.000+ VODs & Serien', 'Premium-Sportkanäle', 'Anti-Frost-System', 'Alle Geräte werden unterstützt','m3u/xtream codes/portal', 'Technische Unterstützung','7 Tage Geld-zurück-Garantie' ],
      discountedPrice: 12.99,
      actualPrice: 9.99,
      btnurl: 'https://ordercheckoutpage.dpdcart.com/cart/buy?product_id=236400&product_price_id=257873&gateway=creditcard',
    },
    {
      id: 2,
      duration: '3 Monate',
      benefits: ['14.000+ Live-TV-Kanäle', '40.000+ VODs & Serien', 'Premium-Sportkanäle', 'Anti-Frost-System', 'Alle Geräte werden unterstützt','m3u/xtream codes/portal', 'Technische Unterstützung','7 Tage Geld-zurück-Garantie' ],
      discountedPrice: 23,
      actualPrice: 19.99,
      btnurl: 'https://ordercheckoutpage.dpdcart.com/cart/buy?product_id=236378&product_price_id=257851&gateway=creditcard',
    },
    {
      id: 3,
      duration: '6 Monate',
      benefits: ['14.000+ Live-TV-Kanäle', '40.000+ VODs & Serien', 'Premium-Sportkanäle', 'Anti-Frost-System', 'Alle Geräte werden unterstützt','m3u/xtream codes/portal', 'Technische Unterstützung','7 Tage Geld-zurück-Garantie' ],
      discountedPrice: 35,
      actualPrice: 29.99,
      btnurl: 'https://ordercheckoutpage.dpdcart.com/cart/buy?product_id=236409&product_price_id=257882&gateway=creditcard',
    },
    {
      id: 4,
      duration: '12 Monate (Beliebt)',
      benefits: ['14.000+ Live-TV-Kanäle', '40.000+ VODs & Serien', 'Premium-Sportkanäle', 'Anti-Frost-System', 'Alle Geräte werden unterstützt','m3u/xtream codes/portal', 'Technische Unterstützung','7 Tage Geld-zurück-Garantie' ],
      discountedPrice: 59,
      actualPrice: 49,
      btnurl: 'https://ordercheckoutpage.dpdcart.com/cart/buy?product_id=236410&product_price_id=257883&gateway=creditcard',
    }
  ];


  return (
    <Element name="pricing">
    <section className='bg-black w-full h-full flex flex-col justify-center items-center'>
    <div>
    <h1 className='text-3xl md:text-5xl font-semibold text-white p-4 md:p-10  text-center'>Wählen Sie Ihren Plan</h1>
    <h2 className='text-gray-300  text-lg md:text-2xl p-4 flex-row text-center '>Schöpfen Sie das volle Potenzial Ihrer Unterhaltung mit unseren unschlagbaren IPTV-Tarifen aus. <br/>Wählen Sie das perfekte Paket, das Ihren Bedürfnissen entspricht, und genießen Sie mehr als 14.000 Kanäle <br/>+40.000 VOD und Serien in 4K/FHD/HD/SD-Qualität <br/>die Sie auf jedem Gerät ansehen können.</h2>
    <h2 className='text-orange-500 text-2xl font-semibold flex items-center justify-center'>7 Tage Geld-zurück-Garantie</h2>
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
