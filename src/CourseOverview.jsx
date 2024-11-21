import React from 'react';

const CourseOverview = () => {
  return (
    <section className="course-overview" id="course">
      <h2>Course Overview</h2>
      <div className="course-details">
        <h3>What You’ll Learn</h3>
        <ul>
          <li>Memecoin Basics: Learn what memecoins are, how they work, and why they’ve taken over the crypto space.</li>
          <li>Getting Started: Step-by-step guidance on setting up wallets, choosing exchanges, and making your first memecoin purchase.</li>
          <li>Understanding Risks and Rewards: Know the risks involved and how to navigate the volatility.</li>
          <li>Profit Strategies: How to find opportunities for profit in the memecoin market.</li>
          <li>Staying Safe: Avoid scams and make smart decisions in the memecoin space.</li>
        </ul>

        <h3>Course Features</h3>
        <ul>
          <li>Comprehensive Lessons: 10+ modules with engaging videos and tutorials.</li>
          <li>Interactive Quizzes: Test your knowledge as you progress.</li>
          <li>Exclusive Community: Join a private group of memecoin enthusiasts for networking and discussions.</li>
          <li>Lifetime Access: Revisit the material whenever you need to refresh your knowledge.</li>
        </ul>
      </div>
    </section>
  );
};

export default CourseOverview;
