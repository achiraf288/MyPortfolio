import React from "react";
import { Download, Code, Award, Globe } from "lucide-react";
import profilePic from "../assets/profilepic.jpg";

// Define the props for StatCard
interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  subLabel: string;
}

// StatCard component
const StatCard: React.FC<StatCardProps> = ({ icon, value, label, subLabel }) => (
  <div className="bg-purple-900/20 p-6 rounded-xl backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300 cursor-pointer animate-fade-in">
    <div className="flex items-start justify-between mb-4">
      <div className="text-purple-400">{icon}</div>
      <span className="text-4xl font-bold text-white">{value}</span>
    </div>
    <div className="text-gray-400 text-sm">
      <div className="font-medium text-gray-300">{label}</div>
      <div>{subLabel}</div>
    </div>
  </div>
);

// About component
export const About: React.FC = () => {
  return (
    <section className="w-full px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold text-purple-400 mb-4">About Me</h2>
          <p className="text-gray-400">✨ Transforming ideas into digital experiences ✨</p>
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Left Side */}
          <div className="md:w-2/3 animate-slide-up">
            <h3 className="text-4xl font-bold mb-6">
              <span className="text-purple-400">Hello, I'm</span>
              <br />
              <span className="text-white">Achira Fonseka</span>
            </h3>
            <p className="text-gray-400 mb-7">
              A Software Engineering student passionate about Front-End development. I focus on
              creating engaging digital experiences and always strive to provide the best solutions
              in every project.
            </p>

            {/* Buttons Section */}
            <div className="flex flex-col gap-5">
              {/* See More Button */}
              <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-transparent h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
      See more
    </button>

              {/* Download CV & View Projects in Next Line */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                {/* Download CV Button */}
                <button className="h-14 w-64 px-6 rounded-lg bg-purple-600 text-white text-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <Download size={20} />
                  Download CV
                </button>

                {/* View Projects Button */}
                <button className="h-14 w-64 px-6 rounded-lg border border-purple-600 text-purple-400 text-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <Code size={20} />
                  View Projects
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className="md:w-1/3 animate-fade-in-delay">
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-800 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard icon={<Code size={24} />} value="11" label="TOTAL PROJECTS" subLabel="Innovative web solutions crafted" />
          <StatCard icon={<Award size={24} />} value="7" label="CERTIFICATES" subLabel="Professional skills validated" />
          <StatCard icon={<Globe size={24} />} value="3" label="YEARS OF EXPERIENCE" subLabel="Continuous learning journey" />
        </div>
      </div>
    </section>
  );
};
