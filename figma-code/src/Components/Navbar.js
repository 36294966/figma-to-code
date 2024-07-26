import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">MyLogo</div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <a href="/" className="block md:inline-block text-white py-2 px-4">Home</a>
          <a href="/about" className="block md:inline-block text-white py-2 px-4">About</a>
          <a href="/services" className="block md:inline-block text-white py-2 px-4">Services</a>
          <a href="/contact" className="block md:inline-block text-white py-2 px-4">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

