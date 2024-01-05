import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Dave',
      testimonial: 'Bis jetzt gefällt mir dieser Dienst wirklich gut. Ich bin nicht wirklich auf irgendwelche Probleme gestoßen. Ich benutze ihn seit einer Woche und so weit, so gut!',
      imageUrl: '/client1.jpeg', 
    },
    {
      id: 2,
      name: 'Clark',
      testimonial: 'Ich war auf der Suche nach einer kostengünstigen Möglichkeit, internationale Kanäle zu sehen, und dieser IPTV-Dienst hat mich überzeugt. Die Kanalauswahl ist riesig und die Bildqualität ist beeindruckend. Ich könnte nicht glücklicher sein.',
      imageUrl: '/client2.jpeg', 
    },
    {
      id: 3,
      name: 'Williams James',
      testimonial: 'Ich zögerte, einen weiteren IPTV-Dienst auszuprobieren, aber ich bin so froh, dass ich diesem eine Chance gegeben habe. Die Benutzeroberfläche ist einfach zu navigieren und der Kundenservice ist erstklassig. Ich könnte mit meiner Erfahrung nicht zufriedener sein.',
      imageUrl: '/client3.jpeg', 
    },
    {
      id: 4,
      name: 'Cassie Carleton',
      testimonial: 'Ich habe schon mehrere IPTV-Dienste ausprobiert, aber dieser zeichnet sich durch seine Zuverlässigkeit und die hohe Qualität des Streaming aus. Er ist jeden Cent wert und ich empfehle ihn jedem, der ein tolles TV-Erlebnis sucht.',
      imageUrl: '/client4.jpeg', 
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
      <p className='text-2xl md:text-2xl text-red-600 mb-4 font-semibold text-center'>Mehr als 8000 zufriedene Kunden</p>
      <h1 className='text-3xl md:text-5xl text-center font-bold mb-4 md:mb-8'>
      Was unsere Kunden über unsere IPTV-Abonnements sagen
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
