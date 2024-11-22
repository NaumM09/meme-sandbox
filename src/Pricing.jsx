import React, { useState } from "react";
import './App.css';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingOptions = [
    {
      name: "Basic Plan",
      price: "$49.99",
      description: "Access to basic course materials and resources.",
      features: [
        "How to Set Up Wallet",
        "Basic Technical Analysis",
        "Downloadable Course Material",
        "Weekly Newsletter"
      ],
    },
    {
      name: "Premium Plan",
      price: "$99.99",
      description: "All features of Basic Plan plus advanced content.",
      features: [
      "How Set Up Crypo Wallet"
"Technical Analysis"
        "Understanding Risks and Reward"
        "Downloadable Course Material"
"Weekly Newsletter"
      ],
    },
    {
      name: "Ultimate Plan",
      price: "$149.99",
      description: "Full access to all course materials and personalized coaching.",
      features: [
      "How Set Up Crypo Wallet"
"Technical Analysis"
        "Understanding Risks and Reward"
        "Tracking Whale Wallets"
        "Downloadable Course Material"
"Weekly Newsletter"
"Exclusive Bonus Content",
"Lifetime Updates on All Courses",
"Access to Ask the Instructor Sessions"
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
