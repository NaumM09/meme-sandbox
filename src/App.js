import React from 'react';
import './App.css';
import MemeCoinTimeline from './MemeCoinTimeline';
import CourseOverview from './CourseOverview';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Footer from './Footer';
import HeroSection from './HeroSection';

function App() {
  return (
    <HeroSection/>
      <MemeCoinTimeline />
      <CourseOverview />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
