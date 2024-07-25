import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative">
      <div className="bg-blue-950 flex items-center justify-between max-w-[1500px] mx-auto p-4">
        <div className="flex px-8 items-center">
          <h1 className="text-white">My App</h1>
        </div>
        <ul className="hidden md:flex p-4 mr-32 flex-1 justify-end space-x-16">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden z-50">
          {nav ? (
            <AiOutlineClose size={24} className="text-white" />
          ) : (
            <AiOutlineMenu size={24} className="text-white" />
          )}
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed top-0 left-0 h-screen w-screen bg-black opacity-80 z-40 backdrop-blur-lg"
            : "hidden"
        }
        onClick={handleNav}
      ></div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 h-[90%] w-full border-b border-b-gray-900 bg-blue-950 ease-in-out duration-500 z-40 transform translate-y-0"
            : "fixed top-0 left-0 h-[90%] w-full border-b border-b-gray-900 bg-blue-950 ease-in-out duration-500 z-40 transform -translate-y-full"
        }
      >
        <ul className="uppercase mt-28 p-4 space-y-20 text-center md:hidden">
          <li>
            <Link to="/" onClick={handleNav} className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNav} className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNav} className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
