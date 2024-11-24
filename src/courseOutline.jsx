import React from 'react';
import './CourseOutline.css';

const courseData = [
  {
    section: "Introduction",
    lessons: [
      { title: "Introduction To Meme Coin" },
      { title: "Memecoin Terminology" },
      { title: "Setting up Wallet" },
    ],
  },
  {
    section: "Understanding Meme Coins & Technical Analysis",
    lessons: [
      { title: "Types of Trading Platforms & Bots" },
      { title: "Identifying Trading Opportunities" },
      { title: "Understanding Slippage & Trade Execution" },
      { title: "Rugs, Pulls and Jeets" },
      { title: "How To Analyse Meme Coins" },
      { title: "Understanding Long Term Meme Coin Pumps & Narratives" },
      { title: "Liquidity, Market Cap & Price" },
      { title: "Technical Analysis (TA)" },
      { title: "New Meme Coin Launches" },
      { title: "How to Avoid Shitcoins" },
    ],
  },
  {
    section: "Bonus Content",
    lessons: [
      { title: "The Power of Community" },
      { title: "Finding Whale Accounts" },
      { title: "Influencer Marketing & Meme Coin Scams" },
    ],
  },
];

const CourseOutline = () => {
  return (
    <section className="course-outline">
      <h2 className="course-heading">Unlock the Secrets of Meme Coins</h2>
      {courseData.map((section, index) => (
        <div key={index} className="course-section">
          <h3 className="section-title">{section.section}</h3>
          <ul className="lesson-list">
            {section.lessons.map((lesson, idx) => (
              <li key={idx} className="lesson-item">
                <div className="lesson-details">
                  <span className="lesson-title">{lesson.title}</span>
                </div>
                <button className="start-btn">Purchase</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default CourseOutline;
