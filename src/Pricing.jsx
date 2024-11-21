import React, { useState } from "react";
import './App.css';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingOptions = [
    {
      name: "Basic Plan",
      price: "$19.99/month",
      description: "Access to basic course materials and resources.",
      features: [
        "1 Course Access",
        "Email Support",
        "Community Access",
        "Weekly Newsletter"
      ],
    },
    {
      name: "Premium Plan",
      price: "$49.99/month",
      description: "All features of Basic Plan plus advanced content.",
      features: [
        "5 Course Access",
        "Priority Email Support",
        "Exclusive Webinars",
        "Private Telegram Group",
        "Weekly 1-on-1 Coaching"
      ],
    },
    {
      name: "Ultimate Plan",
      price: "$99.99/month",
      description: "Full access to all course materials and personalized coaching.",
      features: [
        "All Course Access",
        "Personalized Coaching",
        "Exclusive Content",
        "Lifetime Updates",
        "Direct Access to Course Creators"
      ],
    },
  ];

  return (
    <section className="pricing">
      <h2 className="pricing-heading">Choose Your Plan</h2>
      <div className="pricing-cards">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`pricing-card ${selectedPlan === option.name ? "selected" : ""}`}
            onClick={() => setSelectedPlan(option.name)}
          >
            <h3 className="pricing-title">{option.name}</h3>
            <p className="pricing-price">{option.price}</p>
            <p className="pricing-description">{option.description}</p>
            <ul className="pricing-features">
              {option.features.map((feature, i) => (
                <li key={i} className="pricing-feature">
                  <span role="img" aria-label="checkmark" className="checkmark">✔️</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="btn-primary">Select {option.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
