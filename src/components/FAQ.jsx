import React, { useState } from 'react';

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'Why use React?',
      answer: 'React provides a way to create reusable UI components and offers a virtual DOM for better performance.',
    },
    {
        id: 3,
        question: 'Why use React?',
        answer: 'React provides a way to create reusable UI components and offers a virtual DOM for better performance.',
      },
      {
        id: 4,
        question: 'Why use React?',
        answer: 'React provides a way to create reusable UI components and offers a virtual DOM for better performance.',
      },
      {
        id: 5,
        question: 'Why use React?',
        answer: 'React provides a way to create reusable UI components and offers a virtual DOM for better performance.',
      },{
        id: 6,
        question: 'Why use React?',
        answer: 'React provides a way to create reusable UI components and offers a virtual DOM for better performance.',
      }
    
  ];

  const handleToggle = (id) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <div className=" w-full h-screen bg-black ">
        <div className='flex items-center justify-center'>
      <h1 className="text-5xl font-semibold mb-4 text-white ">Frequently Asked Questions</h1>
      </div>
      <div className=''>
      {questions.map((item) => (
        <div key={item.id} className="bg-gray-700 rounded-md mb-2 max-w-[1000px]  ">
          <div
            className={`p-6 cursor-pointer text-white font-bold ${expanded === item.id ? 'bg-gray-500' : ''}`}
            onClick={() => handleToggle(item.id)}
          >
            {item.question}
          </div>
          {expanded === item.id && (
            <div className="p-4 text-white font-bold">{item.answer}</div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default FAQ;
