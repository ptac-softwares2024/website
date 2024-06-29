import React, { useState } from 'react';
import { FaUsers, FaFileAlt, FaStore, FaShoppingCart, FaCogs, FaClock, FaCalendarAlt, FaIndustry } from 'react-icons/fa';

const OptionalModules = () => {
  const [visibleModules, setVisibleModules] = useState(4); // Number of modules to display initially

  const modules = [
    {
      title: 'CRM',
      icon: <FaUsers size={30} color='#4FA9D7'  />,
      description: `Manage your sales pipeline and effectively track leads. It simplifies reporting and monitoring of the sales team. Data capturing can be automated through lead integration and API for your website, Just Dial, Sulekha, Urban Pro, etc.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682299257648-a19f5879e226?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Doc. Management',
      icon: <FaFileAlt size={30} color='#4FA9D7'  />,
      description: `Save paper and GO-GREEN with e-documents. You can attach supporting documents to each voucher and quickly search, download, print, and mail documents from any location.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1711987524385-e7d03bb72e9a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Customer Portal',
      icon: <FaStore size={30} color='#4FA9D7'  />,
      description: `Allow your customers to log in from your website. Depending on your settings, they can view, download, and print Orders, Invoices, and Ledger. They can also be allowed to create Orders, complaint tickets, and track their status.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682310703468-80b49ebd750e?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'e-Shop',
      icon: <FaShoppingCart size={30} color='#4FA9D7'  />,
      description: `Create your own e-Commerce site and allow customers to register, place orders, and make payments. Products in item masters are automatically shown on your e-Shop, based on availability. Orders and payments are automatically updated in TEZ ERP®.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682311028452-0220af078701?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'AMC',
      icon: <FaCogs size={30} color='#4FA9D7'  />,
      description: `Create trouble tickets for your customer complaints. Track tickets for complaints and preventive maintenance, assign tickets to employees, and get customer feedback for closed tickets. Track tickets and monitor the Turn-Around-Time (TAT).`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682300600211-e68a6cd17ea2?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Time-Management',
      icon: <FaClock size={30} color='#4FA9D7'  />,
      description: `Create jobs/tasks with estimated time required and due-date. Employees can update timesheets and status of each task assigned to them. Calculate the cost of each job based on employee CTC. Track profitability from customers and productivity of employees.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1683141276872-eb53433608b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Payroll',
      icon: <FaCalendarAlt size={30} color='#4FA9D7'  />,
      description: `Payroll with Attendance & Leave Management. You can manage attendance with biometric readers and calculate salaries. Define leave structures, allow employees to apply for leaves and management to approve/decline requests online.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682300787142-5613cccb6652?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Manufacturing',
      icon: <FaIndustry size={30} color='#4FA9D7'  />,
      description: `Enter work orders based on sales orders received, generate indents based on BOM, make production entries, and manage quality control. Analyze expected vs. actual production. Generate variance reports for expected vs. actual consumption.`,
      imageUrl: 'https://plus.unsplash.com/premium_vector-1682306948038-66d5dc89e50a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const handleLoadMore = () => {
    setVisibleModules(modules.length);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-4">
        <span className='text-[#4FA9D7]'>OPTIONAL MODULES</span>
        <FaCogs size={40} className="text-[#4FA9D7]" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5 bg-white p-3 shadow-2xl rounded-2xl">
        {modules.slice(0, visibleModules).map((module, index) => (
          <div key={index} className="bg-white border p-3 rounded-lg shadow-xl flex flex-col items-center hover:scale-105 cursor-pointer duration-500">
            <img src={module.imageUrl} alt={module.title} className="w-full h-[250px] object-contain mb-4 rounded-2xl hover:scale-95 duration-500" />
            <div className="flex items-center mb-4">
              {module.icon}
              <h3 className="text-2xl font-bold ml-2 text-[#4FA9D7]">{module.title.toUpperCase()}</h3>
            </div>
            <p className="text-justify text-black">{module.description}</p>
          </div>
        ))}
      </div>
      {visibleModules < modules.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 text-white bg-red-300 font-semibold rounded-lg shadow-2xl hover:bg-purple-400 focus:outline-none"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default OptionalModules;
