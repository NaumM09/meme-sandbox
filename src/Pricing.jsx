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
          <div className="installment-info">
            <img src="https://via.placeholder.com/100x40" alt="Payment Options" className="installment-icon" />
            <p>As low as US$25/month or interest-free</p>
          </div>
          <p className="coupon-info">
            Flexible payment options available! Pay in full or choose monthly installments as low as $25/month. Start your journey today with ease!
          </p>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
