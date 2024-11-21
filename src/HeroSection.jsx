import React from 'react';
import './App.css';
import heroImage from './hero-image.png'; // Replace with the path to your image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to MemeCoin Beginners</h1>
        <p>Master the art of trading memecoins with ease and fun!</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Enroll in Course</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
