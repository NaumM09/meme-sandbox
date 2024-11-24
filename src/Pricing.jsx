import React from 'react';
import './App.css';

const PricingPlan = () => {
  return (
    <section className="pricing-plan">
      <h2 className="pricing-heading">Choose a Pricing Option</h2>
      <div className="pricing-card">
        <div className="pricing-info">
          <h3 className="pricing-title">
            <span className="price-strike">$399</span> <span className="current-price">$299</span>
          </h3>
          <p className="pricing-description">
            Meme Coin Mastery
            <br />
            Everything You Need To Make Consistent Profits Trading Meme Coins or pay in installments:
          </p>
          <p className="coupon-info">
            Flexible payment options available! Pay in full or choose monthly installments. Start your journey today with ease!
          </p>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
