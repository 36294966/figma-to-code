import React, { useState } from 'react';
import { TbPentagonFilled } from 'react-icons/tb';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <nav className="bg-black p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-white text-2xl">
          <TbPentagonFilled className="mr-2 text-4xl" />
          <a href="/Browser" className="text-white mr-4 p-8 text-xl">Browser</a>
          <a href="/All-Access" className="text-white p-8 text-xl">All-Access</a>
          <div className="ml-4">
            <button 
              onClick={handleButtonClick}
              className={`rounded-lg px-4 py-2 ${isButtonClicked ? 'bg-gray-800 text-white' : 'bg-gray-400 text-pink-500'}`}
            >
              Epic Super Sale
            </button>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/Sign up" className="text-lg text-white py-2 px-4">Sign up</a>
          <a href="/Log in" className="text-lg text-white py-2 px-4">Log in</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl z-50 relative">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col justify-center items-center">
          <div className="text-white text-2xl mb-8">
            <TbPentagonFilled className="mr-2 inline-block" />
            <span>Your Brand</span>
          </div>
          <div className="text-white text-center space-y-8">
            <a href="/Sign up" className="text-lg block">Sign up</a>
            <a href="/Log in" className="text-lg block">Log in</a>
          </div>
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-3xl">
            
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





