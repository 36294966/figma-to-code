// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllAccess from "./Pages/AllAccess";
import Browser from "./Pages/Browser";
import heroImage from './assests/hero-home.webp';

const App = () => {
  const bgStyle = {
    backgroundImage: `url(${heroImage})`,
  };

  return (
    <Router>
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ ...bgStyle, filter: 'blur(6px)' }}
        ></div>
        <div className="relative flex flex-col h-full z-10">
          <Navbar />
          <div className="flex-grow flex items-center justify-center">
            <Routes>
              <Route path="/All-Access" element={<AllAccess />} />
              <Route path="/Browser" element={<Browser />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

