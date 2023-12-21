import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutService from './components/AboutService';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Offers from './components/Offers';
import Footer from './components/Footer';
import FAQ from './components/FAQ';




const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutService/>
        <WhyChooseUs/>
        <Testimonials/>
        <Offers/>
        <FAQ/>
        <Footer/> 
      </div>

  )
}

export default App