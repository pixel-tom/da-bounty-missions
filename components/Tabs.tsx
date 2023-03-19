// components/Tabs.tsx
import React, { useState } from 'react';
import BountyCard from './BountyCard';

const sampleBounties = [
    {
    title: 'Build a React Native Mobile App',
    description: 'Create a mobile app using React Native that allows users to search for and view information about movies and TV shows.',
    reward: 20,
    codingLanguage: 'JavaScript',
    live: true,
    imageUrl: 'https://via.placeholder.com/150',
    },
    {
    title: 'iOS Game Development',
    description: 'Develop a simple iOS game using Swift that involves user interaction and scoring.',
    reward: 30,
    codingLanguage: 'Swift',
    live: false,
    imageUrl: 'https://via.placeholder.com/150',
    },
    {
    title: 'Python Data Analysis Tool',
    description: 'Create a Python script that can process and analyze large datasets, outputting insights and visualizations.',
    reward: 40,
    codingLanguage: 'Python',
    live: true,
    imageUrl: 'https://via.placeholder.com/150',
    },
    {
    title: 'Node.js Web App with MongoDB',
    description: 'Develop a Node.js web application with MongoDB that allows users to create and manage their own todo lists.',
    reward: 25,
    codingLanguage: 'JavaScript',
    live: true,
    imageUrl: 'https://via.placeholder.com/150',
    },
    {
    title: 'Ethereum Smart Contract',
    description: 'Write a smart contract on the Ethereum blockchain that implements a simple voting system.',
    reward: 50,
    codingLanguage: 'Solidity',
    live: false,
    imageUrl: 'https://via.placeholder.com/150',
    },
    ];

const Tabs: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedReward, setSelectedReward] = useState('');
  
    const filteredBounties = sampleBounties.filter((bounty) => {
      const matchesSearch = searchTerm
        ? bounty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bounty.description.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
  
      const matchesLanguage = selectedLanguage ? bounty.codingLanguage === selectedLanguage : true;
  
      const matchesReward = selectedReward ? bounty.reward >= parseInt(selectedReward) : true;
  
      return matchesSearch && matchesLanguage && matchesReward;
    });
  
    return (
      <div>
        <div className="flex mb-4 justify-center space-x-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-t-lg">
          <input
            type="text"
            placeholder="Search bounties..."
            className="w-1/2 px-4 py-2 rounded bg-white dark:bg-gray-700 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-1/4 px-4 py-2 rounded bg-white dark:bg-gray-700 transition-colors"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="">All Languages</option>
            <option value="Rust">Rust</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Anchor">Anchor</option>
            {/* Add more language options here */}
          </select>
          <select
            className="w-1/4 px-4 py-2 rounded bg-white dark:bg-gray-700 transition-colors"
            value={selectedReward}
            onChange={(e) => setSelectedReward(e.target.value)}
          >
            <option value="">All Rewards</option>
            <option value="10">10+ SOL</option>
            <option value="50">50+ SOL</option>
            <option value="100">100+ SOL</option>
            {/* Add more reward options here */}
          </select>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-b-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredBounties.map((bounty, index) => (
              <BountyCard key={index} bounty={bounty} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Tabs;