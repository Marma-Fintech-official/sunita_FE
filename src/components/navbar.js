import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { title: "HOME", href: "#home" },
    { title: "ABOUT", href: "#about" },
    { title: "HOW TO BUY", href: "#how-to-buy" },
    { title: "TOKENOMICS", href: "#tokenomics" },
    { title: "GALLERY", href: "#gallery" },
    { title: "BUY TOKEN", href: "#buy-token" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => item.href.substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 px-2 right-0 flex justify-center w-full z-50 mt-4 lg:mt-8 ">
      <div className="w-full lg:w-[70%] mx-auto px-4 py-3 lg:px-10 bg-[#FFFFFF1A] backdrop-blur-md rounded-[10px] lg:rounded-lg">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-18 overflow-hidden">
              <img
                src="/Group 587.png"
                alt="Logo"
                width={46}
                height={46}
                className="object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex gap-3">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.substring(1));
                  }}
                  className={`relative px-4 py-2 transition-colors ${
                    item.title === "BUY TOKEN"
                      ? "text-green-600 hover:text-green-700"
                      : activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "Squada One",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "21.14px",
                  }}
                >
                  {item.title}
                  {activeSection === item.href.substring(1) && item.title !== "BUY TOKEN" && (
                    <span className="absolute -bottom-6 left-0 h-1 w-full bg-[#DEDEDE78]"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute  top-[85px] left-0 w-full bg-[#FFFFFF1A] backdrop-blur-md rounded-lg text-white p-2">
            <nav
              className="flex flex-col gap-2 p-2 items-center"
              style={{
                fontFamily: "Squada One",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`relative text-lg ${
                    item.title === "BUY TOKEN"
                      ? "text-green-600 hover:text-green-700"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.title}
                  {activeSection === item.href.substring(1) && item.title !== "BUY TOKEN" && (
                    <span className="absolute -bottom-1 rounded-[44px] left-0 h-[1.9px] w-full bg-[#DEDEDE78]"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbars;