import React from 'react';
import { FaTelegramPlane, FaXTwitter } from 'react-icons/fa';
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
        <FaTelegramPlane />
      </a>
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-icon"
        aria-label="X (Twitter)"
      >
        <FaXTwitter />
      </a>
    </nav>
  );
};

export default Navbar;

