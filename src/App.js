import React from 'react';
import './App.css';
import MemeCoinTimeline from './MemeCoinTimeline';
import CourseOverview from './CourseOverview';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Footer from './Footer';
import Hero from './HeroSection';

function App() {
  return (
    <div>
    <Hero />
      <MemeCoinTimeline />
      <CourseOverview />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
