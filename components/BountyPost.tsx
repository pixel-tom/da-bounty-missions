// components/BountyPost.tsx
import React, { useState } from "react";
import { Bounty } from "./BountyCard";
import axios from "axios";

export interface Props {
  isOpen: boolean;
  closeModal: () => void;
  createBounty: (bounty: Bounty) => void;
}

const BountyPost: React.FC<Props> = ({ isOpen, closeModal, createBounty }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reward, setReward] = useState(0);
  const [codingLanguage, setCodingLanguage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/bounties", {
        title,
        description,
        reward,
        codingLanguage,
        live: true,
        imageUrl,
      });

      createBounty(response.data);
      closeModal();
    } catch (error) {
      console.error("Error saving bounty:", error);
    }
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
        className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-3xl mx-4 z-10"
        onClick={handleModalClick}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Create a New Bounty
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Fill out the form below to create a new bounty. Provide as much
          information as possible to help developers understand the task and
          complete it successfully.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:border-blue-500 focus:outline-none"
            rows={5}
          ></textarea>
          <input
            type="number"
            placeholder="Reward (SOL)"
            value={reward}
            onChange={(e) => setReward(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Coding Language"
            value={codingLanguage}
            onChange={(e) => setCodingLanguage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors focus:outline-none"
          >
            Create Bounty
          </button>
        </form>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          * By creating a bounty, you agree to our Terms of Service and Privacy
          Policy. Make sure to follow all guidelines and rules while using the
          platform.
        </p>
      </div>
    </div>
  );
};

export default BountyPost;
