import { useNavigate } from "react-router-dom";
import React from 'react';

export const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Portfolio", path: "#projects" },
    { name: "My Journey", path: "#journey" },
    { name: "Contact", path: "#contact" }
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      // Smooth scroll to section
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 animate-fade-in">
      {/* Glass effect background */}
      <div className="max-w-7xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => {
              const element = document.querySelector("#home");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-purple-400 text-2xl font-bold hover:text-purple-300 transition-all duration-300 cursor-pointer hover:scale-110 transform animate-float"
          >
            Achira Fonseka
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform font-medium animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleNavClick(item.path)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
