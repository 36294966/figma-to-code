import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">MyLogo</div>
        <a href="/Browser" className="text-white text-xl">Browser</a>
        <a href="/All-Access" className="text-white text-xl">All-Access</a>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <a href="/Sign up" className="block md:inline-block text-lg text-white py-2 px-4">Sign up</a>
          <a href="/Log in" className="block md:inline-block text-lg text-white py-2 px-4">Log in</a>
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

