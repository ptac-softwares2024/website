import React from 'react';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <img src='https://as1.ftcdn.net/v2/jpg/02/58/86/16/1000_F_258861636_mnO4l9VnineFvCIkkjCnblgregf0KC2w.jpg' alt="404 Illustration" className="max-w-xs md:max-w-lg mb-8" />
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        We are working on this page. It will come soon. <FaTools className="inline-block text-xl align-middle ml-2" />
      </p>
      <Link to="/" className="text-blue-600 hover:underline">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
