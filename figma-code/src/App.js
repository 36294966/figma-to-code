// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllAccess from "./Pages/AllAccess";
import Browser from "./Pages/Browser";
import heroImage from './assests/hero-home.webp'; // Adjust the path as needed

const App = () => {
  const bgStyle = {
    backgroundImage: `url(${heroImage})`,
  };

  return (
    <Router>
      <div
        className="h-screen bg-cover bg-center flex flex-col"
        style={bgStyle}
      >
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/All-Access" element={<AllAccess />} />
            <Route path="/Browser" element={<Browser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

