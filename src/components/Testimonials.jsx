import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Dave',
      testimonial: 'So far, I am really liking this service. I haven\'t really come across any issues. I\'ve been using it for a week and so far so good!',
      imageUrl: './src/assets/client1.jpeg', 
    },
    {
      id: 2,
      name: 'Clark',
      testimonial: 'I was looking for a cost-effective way to watch international channels and this IPTV service delivered. The channel selection is vast and the picture quality is impressive. I couldn\'t be happier.',
      imageUrl: './src/assets/client2.jpeg', 
    },
    {
      id: 3,
      name: 'Williams James',
      testimonial: 'I was hesitant to try yet another IPTV service, but I\'m so glad I gave this one a chance. The user interface is easy to navigate and the customer service is top-notch. I couldn\'t be happier with my experience.',
      imageUrl: './src/assets/client3.jpeg', 
    },
    {
      id: 4,
      name: 'Cassie Carleton',
      testimonial: 'I\'ve tried multiple IPTV services before, but this one stands out for its reliability and high-quality streaming. It\'s worth every penny and I recommend it to anyone looking for a great TV experience.',
      imageUrl: './src/assets/client4.jpeg', 
    }

  ]);

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Element name="testimonials">
    <div className="w-full min-h-screen p-6 md:p-10 flex flex-col items-center justify-center">
      <p className='text-xl md:text-2xl text-red-600 mb-2'>Testimonials</p>
      <h1 className='text-3xl md:text-5xl text-center font-bold mb-4 md:mb-8'>
        What our clients say about our IPTV subscriptions
      </h1>
      <div className="flex flex-col items-center justify-center">
        <img
          src={testimonials[currentTestimonialIndex].imageUrl}
          alt="Client"
          className='w-36 md:w-48 h-auto rounded-full mb-4'
        />
        <h3 className='text-lg md:text-xl font-semibold mb-2'>
          {testimonials[currentTestimonialIndex].name}
        </h3>
        <p className='text-1xl md:text-2xl text-center max-w-[500px]'>
          {testimonials[currentTestimonialIndex].testimonial}
        </p>
      </div>
    </div>
    </Element>
  );
    };


export default Testimonials;