// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4 px-8 text-white">
      <div className="container mx-auto">
        <p className="text-center">&copy; {new Date().getFullYear()} Solana Coding Bounties. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
