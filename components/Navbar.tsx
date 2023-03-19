/* eslint-disable @next/next/no-img-element */
// components/Navbar.tsx
import React, { useState } from 'react';
import AccountCreation from './AccountCreation';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="bg-slate-700 mb-4 py-1 px-8 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <img src="/logo.png" alt="Logo" className="w-auto h-16" />
          <button
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
            onClick={openModal}
          >
            Sign In
          </button>
        </div>
      </nav>
      <AccountCreation isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Navbar;
