// components/Tabs.tsx
import React, { useState } from 'react';
import BountyCard from './BountyCard';
import nodeImage from '../public/node.png';
import nextImage from '../public/next.png';
import pythonImage from '../public/python.png';
import rustImage from '../public/rust.png';

const sampleBounties = [
  {
    title: 'Solana Wallet',
    description: 'Develop a Solana wallet using Rust, allowing users to securely manage their SOL and SPL Tokens.',
    reward: 60,
    codingLanguage: 'Rust',
    live: true,
    imageUrl: 'https://pbs.twimg.com/media/Frmd8hVXgAAGjNS?format=jpg&name=large',
  },
  {
    title: 'Smart Contract Code Audit',
    description: 'Perform a thorough code audit on a Node.js-based Solana project, identifying potential security vulnerabilities and inefficiencies.',
    reward: 45,
    codingLanguage: 'Node.js',
    live: true,
    imageUrl: 'https://pbs.twimg.com/media/FrmeBFGWIBMYOeG?format=jpg&name=large',
  },
  {
    title: 'NFT Marketplace',
    description: 'Build an NFT marketplace on Solana using Rust, allowing users to buy, sell, and trade NFTs.',
    reward: 100,
    codingLanguage: 'Rust',
    live: true,
    imageUrl: 'https://pbs.twimg.com/media/FrmhbVcXsAIfFzu?format=jpg&name=large',
  },
  {
    title: 'Front End Coinflip Game',
    description: 'Create a front end for a Solana-based coinflip game using Next.js, allowing users to wager and win SOL and other SPL Tokens.',
    reward: 35,
    codingLanguage: 'Next.js',
    live: true,
    imageUrl: 'https://pbs.twimg.com/media/Frmd-iFWIAAN-xk?format=png&name=large',
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