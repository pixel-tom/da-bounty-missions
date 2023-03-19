// components/BountyModal.tsx
import React from "react";
import { Bounty } from "./BountyCard";

interface Props {
  bounty: Bounty;
  isOpen: boolean;
  closeModal: () => void;
}

const BountyModal: React.FC<Props> = ({ bounty, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-2xl mx-4 z-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          {bounty.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {bounty.description}
        </p>
        <div className="space-y-2 mb-6">
          <p className="text-green-600 dark:text-green-400 font-bold">
            {bounty.reward} SOL
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Language: {bounty.codingLanguage}
          </p>
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${
                bounty.live ? "bg-green-500" : "bg-red-500"
              } transition-colors`}
            ></div>
            <span className="text-gray-600 dark:text-gray-300">
              {bounty.live ? "Live" : "Inactive"}
            </span>
          </div>
        </div>
        <button
          onClick={closeModal}
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BountyModal;
