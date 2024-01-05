import React, { useState } from 'react';
import { Element } from 'react-scroll';

const IPTVFaq = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    { question: 'Was ist IPTV?',
      answer: 'IPTV steht für Internet Protocol Television. Dabei handelt es sich um einen Dienst, der Fernsehprogramme über das Internet statt über herkömmliche Kabel- oder Satellitenmethoden überträgt. Mit IPTV können Sie über eine Internetverbindung und kompatible Geräte Live-Fernsehkanäle, Filme, Serien und mehr streamen.' },

      { question: 'Wie funktioniert IPTV?',
      answer: `Bereitstellung von Inhalten: TV-Kanäle und Videoinhalte werden kodiert und an einen IPTV-Server übertragen.
      Benutzeranforderung: Sie, der Zuschauer, fordern bestimmte Inhalte über Ihr IPTV-Abonnement und ein kompatibles Gerät an.
     Vorteile der besten IPTV-Abonnements:
      - Inhalte auf Abruf: Zugriff auf eine umfangreiche Bibliothek von Filmen und Fernsehsendungen auf Abruf.
      - Live-TV: Sehen Sie Live-Übertragungen Ihrer Lieblingssender und Sportereignisse.
      - Multi-Device-Kompatibilität: Nutzen Sie das beste IPTV auf einer Vielzahl von Geräten.` },

    { question: 'Wie kann ich den Dienst abonnieren?',
      answer: 'Das Abonnieren unseres Dienstes ist einfach. Sie können einen Abonnementplan wählen, der Ihren Bedürfnissen entspricht, und die Zahlung online vornehmen. Sobald Sie ein Abonnement abgeschlossen haben, erhalten Sie Anweisungen, wie Sie unseren IPTV-Dienst auf Ihren bevorzugten Geräten nutzen können.' },

    { question: 'Kann ich IPTV auf mehreren Geräten nutzen?',
      answer: 'Ja, unser Dienst ermöglicht das gleichzeitige Streaming auf mehreren Geräten. Sie können unseren IPTV-Dienst auf verschiedenen Geräten wie Smart-TVs, Computern, Smartphones, Tablets und Streaming-Geräten nutzen. Melden Sie sich einfach mit Ihren Kontodaten an und genießen Sie Ihre Lieblingsinhalte auf verschiedenen Geräten gleichzeitig.' },

    { question: 'Brauche ich ein VPN, um das IPTV zu nutzen?',
      answer: 'Nein, Sie brauchen kein VPN, um IPTV zu sehen, da wir sehr fortschrittliche Lösungen verwenden, um ISP-Sperren zu umgehen.' },

    { question: 'Wie viele Kanäle sind verfügbar?',
      answer: 'Unser Service ermöglicht den Zugang zu einer breiten Palette von Kanälen aus verschiedenen Kategorien. Wir bieten eine umfangreiche Auswahl an Live-TV-Kanälen, darunter lokale, regionale, nationale und internationale Kanäle. Sie können auch Premium-Kanäle, Sport, Filme, Serien und On-Demand-Inhalte genießen.' },

    { question: 'Was ist, wenn ich technische Probleme habe?',
      answer: 'Unser engagiertes Support-Team steht Ihnen bei allen technischen Problemen und Fragen zur Seite. Wenn Sie Probleme mit dem Dienst haben, z. B. Streaming-Probleme, Login-Probleme oder Probleme mit der Gerätekompatibilität, können Sie sich per E-Mail oder Live-Chat an unser Support-Team wenden, das Ihnen umgehend hilft.' },

      { question: 'Was brauche ich für den Einstieg?',
      answer: ' Eine gute Internetverbindung (10 MB oder mehr), ein kompatibles Gerät wie ein Smart-TV, eine Set-Top-Box oder ein Smartphone, ein Abonnement für einen unserer Iptv-Dienste' },
  ];

  const toggleExpand = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  return (

    <Element name="faq">
    <div className=' min-h-screen text-white'>


      <div className='p-4 md:p-8 '>
        <h1 className='text-3xl md:text-5xl font-semibold text-center text-black'>
        häufig gestellte Fragen
        </h1>
        <div className='text-center '>
        <h2 className='text-2xl md:text-3xl font-bold p-4 text-orange-500'>
        Wie können wir Ihnen heute helfen?
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
                Team Kundenbetreuung
                </h1>
                <p className='text-black'>
                Wir stehen Ihnen bei allen Problemen zur Seite und geben Ihnen Hinweise, wie Sie Ihr Abonnement optimal nutzen können.                </p>
              </div>

              <div className='p-4 text-center'>
                <h1 className='text-lg font-bold border-2 border-black px-6 py-2 rounded-md text-black'>
                Live-Chat
                </h1>
              </div>

              <div className='p-4 border-2 border-black rounded-md text-center'>
                <h1 className='text-lg font-bold text-black'>
                E-Mail
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
