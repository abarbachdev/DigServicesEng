import React from 'react';
import WhyUs from './WhyUs';

const WhyChooseUs = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div className='text-center'>
        <h1 className='text-2xl  md:text-4xl lg:text-5xl text-white font-semibold py-4 md:py-8'>
        Warum sollten Sie unseren Premium Iptv Service wählen?
        </h1>
        <p className='text-gray-300 text-center  px-4 md:px-8'>
        Wir sind stolz darauf, Ihnen mit unserem PREMIUM IPTV-Service ein erstklassiges Unterhaltungserlebnis zu bieten. Unser Engagement für erstklassige Qualität und ein unvergleichliches Seherlebnis hebt uns von anderen Anbietern ab. Hier sind die Gründe, warum Sie unser PREMIUM IPTV für Ihre Streaming-Anforderungen wählen sollten:
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 md:p-20 items-center justify-center'>
        <WhyUs
          icon="path/to/your/icon.png"
          title="SERVER-STABILITÄT"
          text="Kein Einfrieren und Stottern mehr. Unsere IPTV-Dienste sind mit unseren leistungsstarken Streaming-Servern immer bereit."
        />

<WhyUs 
        icon="path/to/your/icon.png"
        title="ZUVERLÄSSIGER 24/7-SUPPORT"
        text="Wir sind für Sie da, Tag und Nacht. Holen Sie sich jederzeit Hilfe mit unserem 24/7-Support."
        />
        
         <WhyUs 
        icon="path/to/your/icon.png"
        title="4K ULTRA HD"
        text="Bei über 18.000 Live-Kanälen, +8.400 Serien und +60.000 Filmen finden Sie bestimmt das, was Sie lieben.
        Sport, Nachrichten, Action, Kinder, International, Lokal, HD und UHD."
        />
        <WhyUs 
        icon="path/to/your/icon.png"
        title="KOMPATIBILITÄT"
        text="Unser Iptv-Abonnement ist mit allen Geräten kompatibel, wie Smart TVs, MAG-Geräte, Smartphones und Tablets, Amazon Fire Stick, MAC, Android-Geräte, Fire TV, Windows und mehr."
        />
       <WhyUs 
          icon="path/to/your/icon.png"
          title="SOFORTIGE IPTV-AKTIVIERUNG"
          text="Abonnieren Sie und genießen Sie die sofortige Aktivierung Ihres Iptv-Kontos per E-Mail oder Whatsapp. Sofort mit dem Streaming beginnen!"
          padding="p-4"
        />
       
        <WhyUs 
        icon="path/to/your/icon.png"
        title="WETTBEWERBSFÄHIGE PREISE"
        text="Wir glauben, dass hochwertige Unterhaltung für alle zugänglich sein sollte. Deshalb bieten wir wettbewerbsfähige Preispläne an, die Ihrem Budget entsprechen, ohne Kompromisse bei der Qualität einzugehen."
        />

      </div>
    </div>
  );
};

export default WhyChooseUs;
