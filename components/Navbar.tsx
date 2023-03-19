// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-700 py-4 px-8 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Solana Coding Bounties</h1>
      </div>
    </nav>
  );
};

export default Navbar;
