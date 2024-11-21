import React from 'react';
import './App.css';

const coursePricing = [
  {
    title: 'Basic Course',
    price: '$29.99',
    description: 'This course covers the basics of meme coins and how to get started.',
    features: ['Basic Introduction', 'Community Access', 'Email Support'],
    buttonText: 'Enroll Now'
  },
  {
    title: 'Advanced Course',
    price: '$79.99',
    description: 'Dive deeper into meme coin strategies, trading, and market analysis.',
    features: ['Advanced Strategies', 'Expert Community Access', '1-on-1 Coaching'],
    buttonText: 'Get Started'
  },
  {
    title: 'Master Course',
    price: '$149.99',
    description: 'Become an expert in meme coins with personalized mentoring and hands-on experience.',
    features: ['Expert Strategies', 'Lifetime Access', 'Personalized Mentoring'],
    buttonText: 'Master the Market'
  }
];

const Pricing = () => {
  return (
    <section className="course-pricing">
      <h2>Choose Your Plan</h2>
      <div className="pricing-container">
        {coursePricing.map((course, index) => (
          <div className="pricing-card" key={index}>
            <h3>{course.title}</h3>
            <p className="price">{course.price}</p>
            <p className="description">{course.description}</p>
            <ul className="features">
              {course.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn-primary">{course.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
