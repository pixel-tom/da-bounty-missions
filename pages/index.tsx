// pages/index.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tabs from '../components/Tabs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Bounty System for Solana Coding</title>
        <meta name="description" content="Bounty platform for completing coding missions related to Solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <section className="text-center">
            <h1 className="text-5xl font-bold mb-12 tracking-wide">Bounty Board</h1>
            
          </section>

          <section>
            <Tabs />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
