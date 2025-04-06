import { Github, Linkedin, Instagram } from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-20 w-full max-w-7xl mx-auto">
      <div className="md:w-1/2 animate-fade-in">
        <div className="inline-block px-4 py-2 rounded-full bg-opacity-20 bg-purple-500 text-purple-300 mb-6 animate-slide-up">
          Ready to innovate
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up-delay-1">
          <span className="text-white">Frontend</span>
          <br />
          <span className="text-purple-400">Developer</span>
        </h1>

        <p className="text-gray-400 mb-8 animate-slide-up-delay-2">
          Network & Telecom Student | Creating innovative, functional, and
          user-friendly websites for digital solutions.
        </p>

        <div className="flex flex-wrap gap-3 mb-8 animate-slide-up-delay-3">
          {["React", "JavaScript", "Node.js", "Tailwind"].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-opacity-20 bg-purple-500 text-purple-300 hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-8 animate-slide-up-delay-4">
          <button className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Projects
          </button>
          <button className="px-6 py-3 rounded-lg border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Contact
          </button>
        </div>

        <div className="flex gap-4 animate-slide-up-delay-5">
          {[Github, Linkedin, Instagram].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform"
            >
              <Icon size={24} className="animate-pulse-slow" style={{ animationDelay: `${index * 0.2}s` }} />
            </a>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-delay flex justify-center">
        <div className="modelViewPort">
          <div className="eva">
            <div className="head">
              <div className="eyeChamber">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
            </div>
            <div className="body">
              <div className="hand"></div>
              <div className="hand"></div>
              <div className="scannerThing"></div>
              <div className="scannerOrigin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
