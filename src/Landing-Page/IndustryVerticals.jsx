import React, { useState } from 'react';
import { FaBuilding, FaCogs, FaIndustry, FaLightbulb, FaUniversity, FaUserTie } from 'react-icons/fa';

const IndustryVerticals = () => {
const [verticals] = useState([
  {
    id: 1,
    title: 'Traders',
    description: 'Empower your trading operations with PTAC. Seamlessly manage inventory, orders, and invoices to enhance efficiency and profitability.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1697729611749-0156e2ddc909?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <FaUserTie size={40} className="text-[#4FA9D7]" />,
  },
  {
    id: 2,
    title: 'Manufacturers',
    description: 'Enhance your manufacturing processes with PTAC. Optimize production, manage inventory, and ensure quality with ease and precision.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1682305554998-8696c4053148?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <FaIndustry size={40} className="text-[#4FA9D7]" />,
  },
  {
    id: 3,
    title: 'Serv. Providers',
    description: 'Transform service delivery with PTAC. Streamline operations, manage clients, and enhance service quality to drive customer satisfaction.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1682303142476-2bbe1fb22729?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <FaBuilding size={40} className="text-[#4FA9D7]" />,
  },
  {
    id: 4,
    title: 'CA & Accounts',
    description: 'Simplify accounting and compliance with PTAC. Manage finances, automate reporting, and ensure regulatory compliance effortlessly.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1713364407288-bdef037b212c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <FaCogs size={40} className="text-[#4FA9D7]" />,
  },
  {
    id: 5,
    title: 'Institutes',
    description: 'Empower educational institutes with PTAC. Manage admissions, student records, and academic processes efficiently for seamless operations.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1697729742720-9306a6f8f154?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <FaUniversity size={40} className="text-[#4FA9D7]" />,
  },
  {
    id: 6,
    title: 'Societies',
    description: 'Manage society affairs effortlessly with PTAC. Automate billing, manage members, and ensure compliance for smooth community management.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1697729628713-42c517a52dfb?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <FaBuilding size={40} className="text-[#4FA9D7]" />,
  },
]);


  const handleCardFlip = (id) => {
    const card = document.getElementById(`vertical-${id}`);
    card.classList.toggle('is-flipped');
  };

  return (
    <div className="p-2 mt-5 bg-white shadow-2xl rounded-2xl m-2">
      <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-4 text-[#4FA9D7] mb-5 mt-5">
        <span className='text-[#4FA9D7]'>INDUSTRY VERTICALS</span>
        <FaIndustry size={40} className="text-[#4FA9D7]" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-5">
        {verticals.map((vertical) => (
          <div key={vertical.id} className="h-full relative ">
            <div
              id={`vertical-${vertical.id}`}
              className="card-container cursor-pointer perspective relative"
              onMouseEnter={() => handleCardFlip(vertical.id)}
              onMouseLeave={() => handleCardFlip(vertical.id)}
            >
              <div className="card front rounded-2xl transition duration-500 hover:scale-105">
                <img
                  src={vertical.imageUrl}
                  alt={vertical.title.toLocaleUpperCase()}
                  className="w-full h-[200px] object-contain rounded-2xl rounded-t-md hover:scale-105 duration-500"
                />
                <div className="p-4 bg-gray-200 rounded-2xl mt-2">
                    <div className='flex flex-row gap-3'>
                    <span className="text-2xl font-bold mt-4">{vertical.icon}</span>
                    <h3 className="text-lg font-bold mt-4 ">{vertical.title.toLocaleUpperCase()}</h3>
                    </div>
                <p className="text-[#000] text-justify text-md mt-3">{vertical.description}</p>
                </div>
              </div>
              <div className="card back absolute top-0 left-0 w-full h-full bg-white border rounded-md p-4 transform rotate-y-180 hidden">
                <p className="text-gray-800">{vertical.description}</p>
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryVerticals;
