import React from 'react';

const NetflixCarousel = () => {
  const netflixData = [
    { id: 1, image: './src/assets/movie1.jpeg' },
    { id: 2, image: './src/assets/movie2.jpeg' },
    { id: 3, image: './src/assets/movie3.jpeg' },
    { id: 4, image: './src/assets/movie4.jpeg' },
    { id: 5, image: './src/assets/movie5.jpeg' },
  
    
  ];

  return (
    <div className='w-full h-screen'>
        <h1 className='text-6xl font-semibold text-black flex items-center justify-center text-center p-4'>Best IPTV <br/>Subscription Provider</h1>
        <p className='flex items-center justify-center text-center p-4'>With Our Service, You Can Access Thousands Of Channels From Around The World.<br/>
Thousands Of Movies, And Hundreds Of Series!</p>
    <div className="carousel animation relative w-full overflow-hidden">
      <div className="flex items-center justify-center animation">
        {netflixData.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-64  px-2 mb-4">
            <img src={item.image} alt={item.title} className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default NetflixCarousel;
