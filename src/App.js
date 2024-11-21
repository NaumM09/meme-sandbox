import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'
import './App.css';
import MemeCoinTimeline from './MemeCoinTimeline';
import CourseOverview from './CourseOverview';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Footer from './Footer';
import Hero from './HeroSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Simulates a 3-second load time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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


