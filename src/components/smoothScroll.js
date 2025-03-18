import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const smoothScroll = () => {
  const scrollContainer = document.querySelector(".smooth-scroll");

  if (!scrollContainer) return;

  const updateHeight = () => {
    // Set body height to match the scrollable content
    document.body.style.height = `${scrollContainer.scrollHeight}px`;
  };

  // Add height update on ScrollTrigger initialization
  ScrollTrigger.addEventListener("refreshInit", updateHeight);

  // Smooth scrolling effect
  gsap.to(scrollContainer, {
    y: () => -(scrollContainer.scrollHeight - window.innerHeight), // Stop at the last section
    ease: "power4.out", // Abnormally smooth easing
    scrollTrigger: {
      trigger: scrollContainer,
      start: "top top",
      smooth:2,
      smoothTouch:0.1,
      end: () => `${scrollContainer.scrollHeight - window.innerHeight}px`,
      scrub: true, // High scrub value for a slow, smooth response
      invalidateOnRefresh: true, // Recalculate on resize
    },
  });

  ScrollTrigger.refresh();
};

