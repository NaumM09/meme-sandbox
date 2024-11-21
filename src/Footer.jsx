// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 to-red-500 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          Memecoin Beginners - Your Gateway to the Meme Coin World 🚀
        </p>
        <div className="flex justify-center gap-8 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            Discord
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            GitHub
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Memecoin Beginners. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
