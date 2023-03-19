// components/AccountCreation.tsx
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const AccountCreation: React.FC<Props> = ({ isOpen, closeModal }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle account creation logic here
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={closeModal}
      ></div>
      <div
        className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-lg mx-4 z-10"
        onClick={handleModalClick}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <form className="space-y-3">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-2 px-4 mt-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
          >
            Create Account
          </button>
        </form>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Sign in with GitHub
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Sign in with Discord
          </button>
        </div>
        <p className="mt-8 text-center text-gray-500 text-xs">
          By creating an account, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default AccountCreation;
