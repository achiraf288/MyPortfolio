import React from 'react';

export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      url: "https://github.com/achirafonseka"
    },
    {
      name: "LinkedIn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      url: "https://linkedin.com/in/achira-fonseka"
    },
    {
      name: "Twitter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
      url: "https://twitter.com/achirafonseka"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-20 px-6 py-12 animate-fade-in">
      {/* Glass effect background */}
      <div className="max-w-7xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-8 py-12 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Achira Fonseka</h3>
            <p className="text-gray-300 mb-4">
              Passionate Software Engineer creating innovative digital solutions with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/40 transition-all duration-300 hover:scale-110 transform animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 transform inline-block"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-purple-400">📧</span>
                <span className="text-gray-300">achiraf28@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">📱</span>
                <span className="text-gray-300">070 457 5314</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">📍</span>
                <span className="text-gray-300">Mawanella, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/20 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0 text-center">
              © 2024 Achira Fonseka. All rights reserved.
            </p>
            {/* <p className="text-gray-400 text-sm">
              Built with ❤️ using React, TypeScript & Tailwind CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
