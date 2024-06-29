import React, { useState } from 'react';
import { FaFileAlt, FaBoxOpen, FaCalculator, FaClipboardList, FaChevronDown, FaCogs } from 'react-icons/fa';

const CoreModules = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const modules = [
    {
      title: 'Accounting',
      icon: <FaCalculator size={30} color='#4FA9D7'  />,
      description: `PTAC® offers comprehensive accounting features to manage your financial data efficiently, including real-time analytics and integrated tools to streamline your accounting processes. 
      Track all your financial transactions, generate accurate reports, and ensure compliance with regulatory standards. Our advanced features include budget management, expense tracking, and automated reconciliation. Stay ahead with real-time data and insightful financial analytics.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682299257648-a19f5879e226?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bgColor: 'bg-white'
    },
    {
      title: 'Inventory',
      icon: <FaBoxOpen size={30} color='#4FA9D7'  />,
      description: `Manage your inventory with ease using PTAC®. Keep track of stock levels, automate reorder points, and ensure you never run out of essential items.
      Our system supports barcode scanning, batch and serial number tracking, and multiple warehouse management. Seamlessly integrate with suppliers, automate purchase orders, and manage returns efficiently. Gain complete visibility into your inventory with our powerful reporting tools.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682270037677-94032baab5f0?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bgColor: 'bg-white'
    },
    {
      title: 'Taxation',
      icon: <FaFileAlt size={30} color='#4FA9D7'  />,
      description: `PTAC® simplifies your taxation process by providing up-to-date tax calculations, reporting, and compliance features to ensure you stay on top of your tax obligations.
      Handle multiple tax regimes, configure tax rules, and automate tax filing processes. Our system ensures accurate tax computation and timely submissions. Stay compliant with the latest tax laws and avoid penalties with our automated reminders and comprehensive tax reports.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1711987600850-8700b60a0586?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bgColor: 'bg-white'
    },
    {
      title: 'Orders',
      icon: <FaClipboardList size={30} color='#4FA9D7'  />,
      description: `Efficiently manage orders with PTAC®. Track order status, manage customer relationships, and ensure timely delivery of products and services.
      Our order management system supports multi-channel sales, order fulfillment, and drop shipping. Automate order processing, manage backorders, and enhance customer satisfaction with real-time order tracking. Generate detailed sales reports and gain insights into your order trends.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682298485852-79eb8ffe4320?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bgColor: 'bg-white'
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-4 mb-5">
            <span className='text-[#4FA9D7]'>CORE MODULES</span>
            <FaCogs size={40} className="text-[#4FA9D7]" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 bg-white p-6 shadow-lg rounded-2xl">
        {modules.map((module, index) => (
          <div key={index} className={`border rounded-md ${openIndex === index ? module.bgColor : module.bgColor} hover:scale-95 duration-500`}>
            <div 
              className="flex items-center justify-between p-2 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center">
                {module.icon}
                <h3 className="text-xl font-bold ml-2 text-[#4FA9D7]">{module.title.toLocaleUpperCase()}</h3>
              </div>
              <FaChevronDown className={`transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'} text-[#4FA9D7]`} />
            </div>
            {openIndex === index && (
              <div className="p-4 flex flex-col md:flex-row rounded-2xl">
                <img src={module.imageUrl} alt={module.title} className="w-full md:w-1/2 h-[300px] object-contain mb-4 md:mb-0 md:mr-4 rounded-2xl" />
                <p className="md:w-1/2 font-semibold text-justify">{module.description.toLocaleUpperCase()}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreModules;
