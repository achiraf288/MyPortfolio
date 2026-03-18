import React from "react";
import { Download, Code, Award, Globe, Mail, Phone, MapPin, Sparkles, ArrowRight } from "lucide-react";
import profilePic from "../assets/profilepic.jpg";
import cvFile from "../assets/Achira-Fonseka-CV-2026.pdf";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = cvFile;
  link.download = "Achira-Fonseka-CV-2026.pdf";
  link.click();
};

// Define the props for StatCard
interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  subLabel: string;
  delay?: number;
}

// Enhanced StatCard component with glass effect
const StatCard: React.FC<StatCardProps> = ({ icon, value, label, subLabel, delay = 0 }) => (
  <div 
    className="group relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-up"
    style={{ animationDelay: `${delay}s` }}
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-purple-600/20 rounded-xl group-hover:bg-purple-600/30 transition-colors duration-300">
          <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{icon}</div>
        </div>
        <span className="text-5xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{value}</span>
      </div>
      <div className="text-gray-400">
        <div className="font-semibold text-white mb-1">{label}</div>
        <div className="text-sm">{subLabel}</div>
      </div>
    </div>
  </div>
);

// Skill pill component
const SkillPill: React.FC<{ name: string; delay: number }> = ({ name, delay }) => (
  <div 
    className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 animate-slide-up cursor-default"
    style={{ animationDelay: `${delay}s` }}
  >
    {name}
  </div>
);

// About component
export const About: React.FC = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Tailwind CSS", 
    "Spring Boot", "Firebase", "Git", "REST APIs"
  ];

  return (
    <section id="about" className="w-full px-6 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-teal-900/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated heading */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full mb-6 animate-slide-up">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Get to know me</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.1s' }}>
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transforming creative ideas into powerful digital experiences with passion and precision
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-4xl font-bold mb-4">
                <span className="text-white">Hello, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Achira Fonseka</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mb-6"></div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A passionate Software Engineering student specializing in Full Stack development. 
                I focus on creating engaging digital experiences and always strive to provide the best solutions 
                in every project. My journey is driven by curiosity and a commitment to excellence.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently exploring modern web technologies and building innovative applications that 
                make a difference in people's digital lives.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Mail className="w-5 h-5 text-purple-500" />
                <span>achiraf28@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Phone className="w-5 h-5 text-purple-500" />
                <span>070 457 5314</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span>Mawanella, Sri Lanka</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={handleDownload}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download CV
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-purple-500/50 text-purple-400 font-semibold rounded-xl transition-all duration-300 hover:bg-purple-600/20 hover:border-purple-400 hover:text-white hover:scale-105"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
            
            {/* Profile image container */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full rotate-6 animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full -rotate-6 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-4 bg-gray-900 rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-white mb-8 text-center animate-slide-up" style={{ animationDelay: '0.7s' }}>
            Technical Skills
          </h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <SkillPill key={skill} name={skill} delay={0.8 + index * 0.1} />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            icon={<Code size={28} />} 
            value="11" 
            label="TOTAL PROJECTS" 
            subLabel="Innovative web solutions crafted" 
            delay={0.9}
          />
          <StatCard 
            icon={<Award size={28} />} 
            value="7" 
            label="CERTIFICATES" 
            subLabel="Professional skills validated" 
            delay={1.0}
          />
          <StatCard 
            icon={<Globe size={28} />} 
            value="3" 
            label="YEARS OF EXPERIENCE" 
            subLabel="Continuous learning journey" 
            delay={1.1}
          />
        </div>
      </div>
    </section>
  );
};
