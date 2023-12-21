import React, { useState } from 'react';
import { Element } from 'react-scroll';

const IPTVFaq = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    { question: 'What is IPTV?',
      answer: 'IPTV stands for Internet Protocol Television. It is a service that delivers television programming over the internet instead of traditional cable or satellite methods. With IPTV, you can stream live TV channels, movies, series, and more using an internet connection and compatible devices.' },

      { question: 'How Does IPTV work?',
      answer: `Content Delivery: TV channels and video content are encoded and transmitted to an IPTV server.
       User Request: You, the viewer, request specific content through your IPTV subscription and compatible device.
      Benefits of Best IPTV Subscriptions:
       - On-Demand Content: Access a vast library of on-demand movies and TV shows.
       - Live TV: Watch live broadcasts of your favorite channels and sports events.
       - Multi-Device Compatibility: Use the best IPTV on a variety of devices.` },

    { question: 'How do I subscribe to the service?',
      answer: 'Subscribing to our service is simple. You can choose a subscription plan that suits your needs and make the payment online. Once subscribed, you will receive instructions on how to access our IPTV service on your preferred devices.' },

    { question: 'Can I use IPTV on multiple devices?',
      answer: 'Yes, our service allows simultaneous streaming on multiple devices. You can access our IPTV service on various devices such as smart TVs, computers, smartphones, tablets, and streaming devices. Just log in with your account credentials and enjoy your favorite content on different devices at the same time.' },

    { question: 'Do I need a VPN to use the IPTV?',
      answer: 'No, you will not need any VPN to watch the IPTV as we use very advanced solutions to bypass ISP blocking.' },

    { question: 'How many channels are available?',
      answer: 'Our service provides access to a wide range of channels from different categories. We offer an extensive selection of live TV channels, including local, regional, national, and international channels. You can also enjoy premium channels, sports, movies, series, and on-demand content.' },

    { question: 'What if I face technical issues?',
      answer: 'Our dedicated support team is available to assist you with any technical issues or queries. If you encounter any problems with the service, such as streaming issues, login problems, or device compatibility concerns, you can reach out to our support team via email or live chat for prompt assistance.' },

      { question: 'What do I need to get Started?',
      answer: ' A good internet connection.(10 MB or more).A compatible device such as a smart TV, set-top box, or smartphone.A subscription to one of our Iptv services' },
  ];

  const toggleExpand = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  return (

    <Element name="faq">
    <div className=' min-h-screen text-white'>


      <div className='p-4 md:p-8 '>
        <h1 className='text-3xl md:text-5xl font-semibold text-center text-black'>
        Frequently Asked Questions
        </h1>
        <div className='text-center '>
        <h2 className='text-2xl md:text-3xl font-bold p-4 text-orange-500'>
        How Can We Help You Today?
        </h2>
        
        </div>
      </div>

<div className='bg-orange-100 p-4 md:p-8 rounded-2xl'>
    
    <div className='flex flex-col md:flex-row '>

    <div className="w-full md:w-2/3 md:border-r md:border-gray-300 md:pr-4 bg-black rounded-lg">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 p-2 ">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <span className="mr-2 text-white">{expanded === index ? '-' : '+'}</span>
            <h3 className="font-medium text-white">{faq.question}</h3>
          </div>
          {expanded === index && (
            <p className="mt-2 text-white ">{faq.answer}</p>
          )}
        </div>
      ))}
      
    </div>

    <div className='w-full md:w-1/3 p-4 md:pl-4'>
              <div className='text-center'>
                <h1 className='text-2xl font-bold text-black'>
                  Customer Support Team
                </h1>
                <p className='text-black'>
                  We are available to assist you with any issues you may encounter and to provide guidance on how to get the most out of your subscription.
                </p>
              </div>

              <div className='p-4 text-center'>
                <h1 className='text-lg font-bold border-2 border-black px-6 py-2 rounded-md text-black'>
                  Live Chat
                </h1>
              </div>

              <div className='p-4 border-2 border-black rounded-md text-center'>
                <h1 className='text-lg font-bold text-black'>
                  Email
                </h1>
                <p className='text-black'>4kiptv.services.pro@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default IPTVFaq;
