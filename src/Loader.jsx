import React from 'react';
import './App.css';
import logo from './memecoin-beginner-logo.png'; // Replace with your logo path

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <img src={logo} alt="Memecoin Beginners Logo" className="loader-logo" />
        <div className="loader-animation"></div>
      </div>
    </div>
  );
};

export default Loader;
