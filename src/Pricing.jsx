import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Course Pricing</h2>
      <div className="pricing-options">
        <div className="pricing-option">
          <h3>Standard Package</h3>
          <p>Access to all lessons, quizzes, and downloadable resources.</p>
          <p className="price">$99 (One-time payment)</p>
        </div>
        <div className="pricing-option">
          <h3>Premium Package</h3>
          <p>Includes everything in the Standard Package plus:</p>
          <ul>
            <li>One-on-one coaching sessions</li>
            <li>Access to advanced memecoin strategies</li>
            <li>VIP access to exclusive webinars and events</li>
          </ul>
          <p className="price">$249 (One-time payment)</p>
        </div>
      </div>
      <p className="discount">Limited-Time Offer: Sign up now and get 20% off your first purchase!</p>
      <a href="#course" className="cta-button">Join the Course Now</a>
    </section>
  );
};

export default Pricing;
