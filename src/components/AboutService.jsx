import React from 'react';
import watchiptvimg from '../assets/watchip.png';
import moviesimg from '../assets/movies.png';
import sportsimg from '../assets/sports.png';
import { Link, animateScroll as scroll } from 'react-scroll';



const AboutService = () => {
  return (
    <>
    <div className='w-full '>
    <div className='  w-full  flex flex-col sm:flex-row  justify-center gap-8 sm:gap-20 px-8 sm:px-0 p-20'>
      <div className='max-w-[600px] text-center sm:text-justify mb-8 sm:mb-0'>
        <h1 className='text-3xl text-red-500 sm:text-5xl  font-bold mb-4 sm:mb-8'>
        Verbessern Sie Ihre Unterhaltung mit Premium IPTV
        </h1>
        <p className='text-sm sm:text-base'>
        Entdecken Sie die Welt der Unterhaltung mit unseren IPTV-Abonnements. 
        Als zuverlässiger IPTV-Anbieter bieten wir die besten IPTV-Dienste, 
        einschließlich einer großen Auswahl an HD-IPTV-Kanälen und einer umfassenden IPTV 
        Senderliste. Mit uns genießen Sie nahtlosen Zugang zu Ihrem Lieblingssport
         Spiele und Fernsehsendungen. Warten Sie nicht - kaufen Sie noch heute IPTV bei uns und bleiben Sie an der Spitze 
         in der Welt der Unterhaltung.
        </p>
      </div>
      <div className='flex items-start justify-center'>
        <img src={watchiptvimg} className='w-3/4 sm:max-w-[600px]' alt="Watch IPTV" />
      </div>
      
    </div>

    <div className=' flex items-center justify-center '>
      <h1 className='text-2xl sm:text-4xl lg:text-4xl font-semibold text-center lg:text-left'>
    <span className='text-red-500'> Warum wir als der beste  </span> IPTV-Anbieter auf dem Markt bekannt sind.
    </h1>
    </div>

    <p className='p-4 text-center'>
    Wenn es um IPTV-Abonnements geht, heben wir uns als bester IPTV-Anbieter der Branche ab. 
    Unser Engagement für die Bereitstellung von Diensten höchster Qualität, einschließlich HD IPTV-Kanälen und einer 
    umfangreiche IPTV-Kanalliste, zeichnet uns als Premium-IPTV-Anbieter der Wahl aus. Wir sind stolz darauf
     Wir sind stolz darauf, die besten IPTV-Dienste anzubieten, die sicherstellen, dass Sie Ihre Lieblingssportarten oder Fernsehsendungen nicht verpassen. 
     Bei uns können Sie getrost IPTV kaufen und wissen, dass Sie die richtige Wahl für Ihre Unterhaltungsbedürfnisse treffen.
      Erkunden Sie unser Angebot und entdecken Sie, warum wir der beste IPTV-Anbieter sind.
    </p>
    <div className='flex flex-col items-center justify-center p-8 ' >
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center'>
      Schalten Sie alle Premium IPTV HD-Sportkanäle frei <br/>und Zugang zu Premium-Kanälen für Top-Filme,<br/> Serien und exklusive Inhalte. <br/> 
      </h1>
      <div className='p-4'>
      <h2 className='flex items-center justify-center  text-red-500 text-3xl text-center sm:text-4xl font-bold'>
      Erhöhen Sie jetzt Ihr Unterhaltungserlebnis.
      </h2>
      </div>
      <div className='flex  items-center justify-center'>
      <button type='button' className='bg-orange-500 text-lg sm:text-2xl text-white rounded-md px-8 sm:px-30 py-2 hover:text-black'>
          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed based on your layout
            duration={500}
          >
            Holen Sie sich jetzt Ihr Iptv-Konto
          </Link>   
            
          </button>
      </div>
    </div>
    </div>

    <div className='flex flex-col items-center justify-center px-8'>

  <div className='flex flex-col items-center justify-center sm:flex-row gap-8  sm:max-w-4xl'>
    <div className='flex flex-col items-center justify-center'>
      <img src={sportsimg} className='w-full  max-w-sm sm:max-w-[800px]' alt="Watch IPTV" />
      <div className='max-w-sm sm:max-w-[600px]   text-center sm:text-justify mb-8 sm:mb-0 p-4'>
        <h1 className='text-2xl font-semibold flex items-center justify-center'>
          <span className='text-red-500 text-2xl font-semibold'>Premium </span>-Sportkanäle
        </h1>
        <p className='text-sm sm:text-base text-center p-4'>
        Verpassen Sie nie wieder Ihr Lieblingssportereignis! Genießen Sie alle Premium-Sportkanäle aus der ganzen Welt.
        </p>
      </div>
    </div>
    
    <div className='flex flex-col items-center justify-center'>
      <img src={moviesimg} className='w-full  max-w-sm sm:max-w-[800px]' alt="Watch IPTV" />
      <div className='max-w-sm sm:max-w-[600px] text-center  sm:text-justify mb-8 sm:mb-0 p-4'>
        <h1 className='text-2xl font-semibold flex justify-center'>
          <span className='text-red-500 text-2xl font-semibold'>Kino &nbsp;</span>  Familie & Kinder
        </h1>
        <p className='text-sm sm:text-base text-center p-4'>
        Mit 4k IPTV ist für jeden in Ihrem Zuhause etwas dabei. Sie können kinderfreundliche Sendungen und Ihre Lieblingsfilme und -serien genießen.
        </p>
      </div>
   
    </div>
  </div>

</div>




    </>
  );
};

export default AboutService;