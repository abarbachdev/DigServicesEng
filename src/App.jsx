import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutService from './components/AboutService';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Offers from './components/Offers';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import NetflixCarousel from './components/NetflixCarousel';



const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutService/>
        <WhyChooseUs/>
        <Testimonials/>
        <Offers/>
        <Footer/> 
      </div>

  )
}

export default App