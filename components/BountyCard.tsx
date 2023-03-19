/* eslint-disable @next/next/no-img-element */
// components/BountyCard.tsx
import React, { useState } from 'react';
import BountyModal from './BountyModal';

export interface Bounty {
  title: string;
  description: string;
  reward: number;
  codingLanguage: string;
  live: boolean;
  imageUrl?: string;
}

interface Props {
  bounty: Bounty;
}

const BountyCard: React.FC<Props> = ({ bounty }) => {
  const { imageUrl = 'https://via.placeholder.com/150', title, description, reward, codingLanguage, live } = bounty;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg shadow-lg p-2 flex flex-col overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="space-y-2">
          <p className="text-green-600 dark:text-green-400 text-xl font-bold">{reward} SOL</p>
          <p className="text-gray-600 dark:text-gray-300">Language: {codingLanguage}</p>
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${live ? 'bg-green-500' : 'bg-red-500'} transition-colors`}
            ></div>
            <span className="text-gray-600 dark:text-gray-300">{live ? 'Live' : 'Inactive'}</span>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors">
              Apply
            </button>
            <button
              className="w-full py-2 px-4 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white rounded transition-colors"
              onClick={openModal}
            >
              Details
            </button>
          </div>
        </div>
      </div>
      <BountyModal bounty={bounty} isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default BountyCard;
