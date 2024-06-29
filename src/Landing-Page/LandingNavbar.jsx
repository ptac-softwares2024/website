import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { FaHome, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="max-w-full cursor-pointer">
      <div className='p-3 rounded-2xl bg-white bg-opacity-90 shadow-2xl fixed top-2 min-w-full z-50 mx-auto flex items-center justify-between'>
      <Link to="/" className="flex items-center font-bold text-2xl text-white
      hover:text-red-700" onClick={scrollToTop}>
        <img
                className="w-[100px] h-[50px] object-contain mr-6"
                src={logo}
                alt="Logo"
              />
        </Link>
      <div className="flex items-center">
          <div className="flex flex-row ml-auto">
            <Link to="/" className="group relative text-[#4FA9D7] mx-2 font-bold text-md">
              <FaHome className="mr-1" size={30} />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] text-white bg-[#4FA9D7] rounded-md px-2 py-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Home
              </span>
            </Link>
            <Link to="/login" className="group relative text-[#4FA9D7] mx-2 font-bold text-md">
              <FaSignInAlt className="mr-1" size={30} />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] text-white bg-[#4FA9D7] rounded-md px-2 py-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
