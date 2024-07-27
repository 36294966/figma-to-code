import React from 'react';


const AllAccess = () => {
  return (
    <div className="bg-hero-home bg-cover bg-center  ">
      <h1 className="text-white p-32 flex-nowrap  flex items-center justify-center
         -mt-80 text-6xl font-bold">9,498
        curated design resources
        to <br/>
        speed up your creative workflow.</h1>

        <h1 className="text-white text-3xl  ml-48">Build a Responsive Website with us an earn yourself</h1>
        < div className="text-white flex flex-center p-8 bg-blue w-full">
    <button className="bg-blue-400 text-2xl  ml-32 m-12 rounded-full h-[75px] w-[250px]">
        Featured
    </button>
    
    <button className="bg-blue-400 hover-white text-2xl  m-12 rounded-full h-[75px] w-[250px]">
        Trending
    </button>
    
    <button className="bg-blue-400 text-2xl m-12 rounded-full h-[75px] w-[250px]">
        Latest
    </button>

    </div>
    <div className="text-white">
<h2 className="text-white text-2xl">Browser</h2>

</div>
    </div>
  );
};

export default AllAccess;


