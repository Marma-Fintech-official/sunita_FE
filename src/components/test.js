

import React, { useEffect, useState } from 'react';
import { Rocket, Info, ShoppingCart, PieChart, Image, } from 'lucide-react';
import SunitaCard from './components/footer';


// Mock section components to demonstrate loading
const Section = ({ title, icon: Icon, color }) => (
  <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-gray-800">
    <div className="max-w-2xl w-full bg-gray-800 rounded-lg p-8 shadow-xl">
      <div className="flex items-center gap-4 mb-6">
        <Icon size={32} className={color} />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="h-64 bg-gray-700 rounded-lg animate-pulse"></div>
    </div>
  </div>
);

const Hero = () => (
  <Section title="Welcome to Space" icon={Rocket} color="text-blue-500" />
);

const About = () => (
  <Section title="About Us" icon={Info} color="text-green-500" />
);

const BuySection = () => (
  <Section title="How to Buy" icon={ShoppingCart} color="text-purple-500" />
);

const Tokenomics = () => (
  <Section title="Tokenomics" icon={PieChart} color="text-yellow-500" />
);

const Gallery = () => (
  <Section title="Gallery" icon={Image} color="text-pink-500" />
);



const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Rocket className="text-blue-500" />
          <span className="text-white font-bold">Space Project</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {['Home', 'About', 'Buy', 'Tokenomics', 'Gallery'].map((item) => (
            <button key={item} className="text-gray-300 hover:text-white transition-colors">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState({
    hero: false,
    about: false,
    buySection: false,
    tokenomics: false,
    gallery: false,
    footer: false,
    mainBackground: false,
    preloaderGif: false
  });

  // Function to simulate loading an image
  const preloadImage = (src) => {
    return new Promise((resolve) => {
      // Simulate network delay
      setTimeout(() => {
        setLoadingStatus(prev => ({
          ...prev,
          [src]: true
        }));
        resolve(src);
      }, Math.random() * 1000 + 500);
    });
  };

  // Calculate total progress based on loaded items
  const calculateProgress = (status) => {
    const totalItems = Object.keys(status).length;
    const loadedItems = Object.values(status).filter(Boolean).length;
    return (loadedItems / totalItems) * 100;
  };

  useEffect(() => {
    const loadAssets = async () => {
      try {
        // Simulate loading all sections and assets
        const assetPromises = Object.keys(loadingStatus).map(key => 
          preloadImage(key)
        );

        // Wait for all assets to load
        await Promise.all(assetPromises);
        
        // Add a small delay for smooth transition
        setTimeout(() => setLoading(false), 500);
      } catch (error) {
        console.error('Failed to load some assets:', error);
        setLoading(false);
      }
    };

    loadAssets();
  }, []);

  // Update progress whenever loadingStatus changes
  useEffect(() => {
    setProgress(calculateProgress(loadingStatus));
  }, [loadingStatus]);

  return (
    <div className="min-h-screen bg-gray-900">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center w-full z-50 bg-gray-900">
          <div className="text-center px-4">
            <div className="w-24 h-24 mb-8 mx-auto">
              <Rocket 
                className="w-full h-full text-blue-500 animate-bounce" 
                strokeWidth={1.5}
              />
            </div>
            <div className="max-w-md w-full mx-auto">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
              <p className="text-white mt-4 font-mono">
                Loading... {Math.round(progress)}%
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="pt-16">
            <section id="home"><Hero /></section>
            <section id="about"><About /></section>
            <section id="how-to-buy"><BuySection /></section>
            <section id="tokenomics"><Tokenomics /></section>
            <section id="gallery"><Gallery /></section>
          <section> <SunitaCard /></section>
          </main>
        </>
      )}
    </div>
  );
};

export default App;