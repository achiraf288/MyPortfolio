import React from "react";

export const Education = () => {
  return (
    <div className="mb-12">
      <h5 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
        <span className="text-2xl">🎓</span> Educational Path
      </h5>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-300"></div>
        
        {/* Timeline Items */}
        <div className="space-y-8">
          <div className="relative flex items-center gap-6 group">
            <div className="relative z-10 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">📚</span>
            </div>
            <div className="flex-1 bg-purple-900/20 rounded-lg p-6 backdrop-blur-sm border border-purple-800/30 hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-slide-up">
              <h6 className="text-lg font-semibold text-white mb-1">Bachelor of Software Engineering</h6>
              <p className="text-purple-400 text-sm mb-2">Currently Pursuing</p>
              <p className="text-gray-400 text-sm">Advanced software engineering studies with focus on modern development practices</p>
            </div>
          </div>

          <div className="relative flex items-center gap-6 group">
            <div className="relative z-10 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">🏆</span>
            </div>
            <div className="flex-1 bg-purple-900/20 rounded-lg p-6 backdrop-blur-sm border border-purple-800/30 hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <h6 className="text-lg font-semibold text-white mb-1">Higher National Diploma in Software Engineering</h6>
              <p className="text-purple-400 text-sm mb-2">2024 | National Institute of Business Management</p>
              <p className="text-gray-400 text-sm">Comprehensive software engineering program with industry-relevant curriculum</p>
            </div>
          </div>

          <div className="relative flex items-center gap-6 group">
            <div className="relative z-10 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">📜</span>
            </div>
            <div className="flex-1 bg-purple-900/20 rounded-lg p-6 backdrop-blur-sm border border-purple-800/30 hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h6 className="text-lg font-semibold text-white mb-1">Diploma in Software Engineering</h6>
              <p className="text-purple-400 text-sm mb-2">2023</p>
              <p className="text-gray-400 text-sm">Foundation in software engineering principles and practices</p>
            </div>
          </div>

          <div className="relative flex items-center gap-6 group">
            <div className="relative z-10 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">☕</span>
            </div>
            <div className="flex-1 bg-purple-900/20 rounded-lg p-6 backdrop-blur-sm border border-purple-800/30 hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <h6 className="text-lg font-semibold text-white mb-1">Certificate Course in JAVA</h6>
              <p className="text-purple-400 text-sm mb-2">2019 | SLIIT Kandy Campus</p>
              <p className="text-gray-400 text-sm">Specialized training in Java programming and application development</p>
            </div>
          </div>

          <div className="relative flex items-center gap-6 group">
            <div className="relative z-10 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">🎯</span>
            </div>
            <div className="flex-1 bg-purple-900/20 rounded-lg p-6 backdrop-blur-sm border border-purple-800/30 hover:bg-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h6 className="text-lg font-semibold text-white mb-1">GCE A/Ls in Maths Stream</h6>
              <p className="text-purple-400 text-sm mb-2">Sri Chandananda Buddhist College Kandy</p>
              <p className="text-gray-400 text-sm">Advanced level education with mathematics specialization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};