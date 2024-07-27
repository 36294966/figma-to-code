import React from 'react';

const AllAccess = () => {
  const items = [
    'Featured Products',
    'UI Kits',
    'Coded Templates',
    'Wireframe Kits',
    'Illustrations'
  ];

  return (
    <div className="bg-hero-home bg-cover bg-center">
      <h1 className="text-white mt-8 p-32 flex-nowrap flex items-center justify-center  text-6xl font-bold">
        9,498 curated design resources to <br />
        speed up your creative workflow.
      </h1>

      <h1 className="text-white text-3xl  ml-48">
        Build a Responsive Website with us and earn yourself
      </h1>
      
      <div className="text-white flex justify-center p-8 bg-blue w-full">
        <button className="bg-blue-400 text-2xl ml-32 m-12 rounded-full h-[75px] w-[250px]">
          Featured
        </button>
        
        <button className="bg-blue-400 hover:bg-white text-2xl m-12 rounded-full h-[75px] w-[250px]">
          Trending
        </button>
        
        <button className="bg-blue-400 text-2xl m-12 rounded-full h-[75px] w-[250px]">
          Latest
        </button>
      </div>

      <div className="text-white">
        <h2 className="text-white text-4xl mb-4">Resources</h2>
        <ul className="list-none ml-0">
          {items.map((item, index) => (
            <li key={index} className="text-2xl mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllAccess;


