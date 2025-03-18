import React, { useEffect, useState } from "react";
import "./App.css";
import SpaceParallax from "./components/hero";
import HowToBuy from "./components/buysection";
import Tokenomics from "./components/tokenomics";
import About from "./components/about";
import SunitaCard from "./components/footer";
import SpaceGallery from "./components/gallery";
import Navbars from "./components/navbar";
import { smoothScroll } from "./components/smoothScroll";

const App = () => {
  const BREAKPOINT = 768;
  const [loading, setLoading] = useState(true); // State for preloader
  const [progress, setProgress] = useState(0); // State for progress bar
    const [loadingStatus, setLoadingStatus] = useState({
      SpaceParallax: false,
      About: false,
      HowToBuy:false,
      Tokenomics: false,
      SpaceGallery: false,
      SunitaCard: false,
      Navbars: false,
      preloaderImage: false
    });

    // this for smoothness 
    useEffect(() => {
      if (window.innerWidth > BREAKPOINT) {
        smoothScroll();
      }})
// preload operation condition

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
<div className="min-h-screen ">
{loading ? (
        <div className="fixed inset-0   flex items-center justify-center w-full z-50">
        {/* style={{
          backgroundImage: "url('https://res.cloudinary.com/dprlidj0p/image/upload/v1734611699/earth_qnfdkr.webp')",
          backgroundRepeat: "no-repeat", // Optional, prevents the background from repeating
          backgroundSize: "cover", // Optional, adjusts how the image fits the container
          backgroundPosition: "center", // Optional, centers the image
        }} */}
          <div className="text-center ">
            {/* <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1734604760/preloader_v1rvjq.gif"
              alt="Loading..."
              className="w-50 h-44 mx-auto"
            /> */}
            <div className="mt-4">

               <div className="h-1 bg-gray-800 mx-auto rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transition-all duration-1000 ease-out"
                style={{
                  width: `${progress}%`,
                  animation: "shimmer 5s linear infinite",
                   fontFamily:"Akira Expanded, sans-serif",
                }}
              />
            </div>
              <p className="text-white mt-2"
                style={{ 
                fontFamily:"Akira Expanded, sans-serif" ,
                letterSpacing:"0.7em"}}>{Math.round(progress)}% Loaded</p>
            </div>
          </div>
        </div>
        

    ) : (
        <>
                 <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}</style>

          <Navbars />
          <div className="scrollContainer">
            <section id="home">
              <SpaceParallax />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="how-to-buy">
              <HowToBuy />
            </section>
            <section id="tokenomics">
              <Tokenomics />
            </section>
            <section id="gallery">
              <SpaceGallery />
            </section>
            <footer>
              <SunitaCard />
            </footer>
          </div>
        </>
      )}
            </div>
              );
            };
            
            export default App;

