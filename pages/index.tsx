import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import BountyPost from "../components/BountyPost";

export default function Home() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const openPostModal = () => setIsPostModalOpen(true);
  const closePostModal = () => setIsPostModalOpen(false);

  const createBounty = async (bounty: any) => {
    // Your API call to create a new bounty
    console.log("Creating a new bounty:", bounty);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Bounty System for Solana Coding</title>
        <meta
          name="description"
          content="Bounty platform for completing coding missions related to Solana"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <section className="text-center">
            <button
              onClick={openPostModal}
              className="w-full mb-6 bg-slate-700 border border-solid hover:bg-blue-600 px-4 py-2 rounded text-white"
            >
              Post a Bounty
            </button>
          </section>
          <section>
            <BountyPost
              isOpen={isPostModalOpen}
              closeModal={closePostModal}
              createBounty={createBounty}
            />
            <Tabs />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
