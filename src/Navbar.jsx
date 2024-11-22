import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="centered-navbar">
      <a
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-icon"
        aria-label="Telegram"
      >
        <i className="fab fa-telegram-plane"></i>
      </a>
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-icon"
        aria-label="Twitter (X)"
      >
        <i className="fab fa-x-twitter"></i>
      </a>
    </nav>
  );
};

export default Navbar;
