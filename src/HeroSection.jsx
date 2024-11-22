import React from 'react';
import heroImage from './hero-image.png'; // Adjust the path based on your project structure
import './App.css';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Sparkle Decorations */}
      <div className="sparkle" style={{ top: '10%', left: '15%' }}></div>
      <div className="sparkle" style={{ top: '20%', right: '10%' }}></div>
      <div className="sparkle" style={{ bottom: '15%', left: '5%' }}></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Welcome to MemeCoin Beginners!</h1>
        <p>Learn, trade, and profit with the best guide to the crypto craze.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>

      {/* Hero Image */}
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
};

export default HeroSection;

