import { Github, Linkedin, Instagram, Facebook, ArrowRight, Code, Zap, Sparkles } from "lucide-react";
import React from "react";

// Animated background particles component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }}
      />
    ))}
  </div>
);

// Tech stack pill component
const TechPill: React.FC<{ name: string; index: number }> = ({ name, index }) => (
  <div
    className="group relative px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 animate-slide-up cursor-default"
    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
  >
    <span className="relative z-10">{name}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

// Social link component
const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string; delay: number }> = ({ 
  href, icon, label, delay 
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 animate-slide-up"
    style={{ animationDelay: `${delay}s` }}
    aria-label={label}
  >
    <div className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
      {icon}
    </div>
    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
  </a>
);

export const Hero = () => {
  const techStack = ["React", "TypeScript", "Node.js", "Tailwind CSS", "Spring Boot"];
  
  const socialLinks = [
    { href: "https://github.com/achiraf288", icon: <Github size={20} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/achira-fonseka-7a9936272/", icon: <Linkedin size={20} />, label: "LinkedIn" },
    { href: "https://www.instagram.com/compact_r_a_c_e_r/?next=%2F", icon: <Instagram size={20} />, label: "Instagram" },
    { href: "https://www.facebook.com/profile.php?id=100010499584646", icon: <Facebook size={20} />, label: "Facebook" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-teal-900/30"></div>
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full animate-slide-up">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Software Engineer</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white block">Full Stack</span>
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent block">Developer</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Passionate about creating innovative, functional, and user-friendly digital solutions. 
              Transforming ideas into powerful web experiences with modern technologies.
            </p>

            {/* Tech stack */}
            {/* <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 text-gray-400">
                <Code className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <TechPill key={tech} name={tech} index={index} />
                ))}
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Zap size={20} />
                  View Projects
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-purple-500/50 text-purple-400 font-semibold rounded-xl transition-all duration-300 hover:bg-purple-600/20 hover:border-purple-400 hover:text-white hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-sm font-medium">Connect with me</span>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <SocialLink 
                    key={social.label}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                    delay={0.6 + index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
            
            {/* Original animation container */}
            <div className="relative flex justify-center">
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
        </div>
      </div>
    </section>
  );
};
