import React, { useEffect, Suspense } from "react";
import "./App.css";
import { smoothScroll } from "./components/smoothScroll";
import Navbars from "./components/navbar";

// Lazy load the components
const SpaceParallax = React.lazy(() => import("./components/hero"));
const About = React.lazy(() => import("./components/about"));
const HowToBuy = React.lazy(() => import("./components/buysection"));
const Tokenomics = React.lazy(() => import("./components/tokenomics"));
const SpaceGallery = React.lazy(() => import("./components/gallery"));
const SunitaCard = React.lazy(() => import("./components/footer"));

const App = () => {
  const BREAKPOINT = 768;

  useEffect(() => {
    if (window.innerWidth > BREAKPOINT) {
      smoothScroll();
    }
  }, []);

  return (
    <>
      <Navbars />
      <div className="scrollContainer">
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>
    </>
  );
};

export default App;









