import React from 'react';
import './App.css';
import MemeCoinTimeline from './MemeCoinTimeline';
import CourseOverview from './CourseOverview';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1>Start Your Memecoin Journey Today</h1>
          <p>The easiest way to dive into the world of memecoins with a structured, step-by-step course.</p>
          <a href="#course" className="cta-button">Enroll in the Course</a>
        </div>
      </header>

      <section className="why-us">
        <h2>Why Memecoin Beginners?</h2>
        <p>
          Memecoins are more than just jokes—they're a booming part of the cryptocurrency world. But how do you get started and make sure you're not just another newbie? Memecoin Beginners is designed to take you from <strong>complete beginner</strong> to <strong>confident investor</strong>—all in simple, bite-sized lessons.
        </p>
      </section>

      <MemeCoinTimeline />
      <CourseOverview />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
