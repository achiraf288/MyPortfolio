import React from "react";

export const Experiance = () => {
  return (
    <div>
      <h5 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
        <span className="text-2xl">💼</span> Professional Experience
      </h5>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-green-300"></div>
        
        {/* Experience Item */}
        <div className="relative flex items-center gap-6 group">
          <div className="relative z-10 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
            <span className="text-lg">🚀</span>
          </div>
          <div className="flex-1 bg-green-900/20 rounded-lg p-6 backdrop-blur-sm border border-green-800/30 hover:bg-green-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 animate-slide-up">
            <h6 className="text-lg font-semibold text-white mb-1">Full Stack Developer Intern</h6>
            <p className="text-green-400 text-sm mb-2">2025 | Capital Maharaja Group (CMG)</p>
            <p className="text-gray-400 text-sm">Successfully completed six months of internship gaining hands-on experience in full stack development, working with modern web technologies and contributing to real-world projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};