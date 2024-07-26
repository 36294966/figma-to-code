// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllAccess from "./Pages/AllAccess";
import Browser from "./Pages/Browser";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/All-Access" element={<AllAccess />} />
        <Route path="/Browser" element={<Browser />} />
      </Routes>
    </Router>
  );
};

export default App;

