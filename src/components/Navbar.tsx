import { useNavigate } from "react-router-dom";
import React from 'react';


export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center animate-fade-in">
      {/* Logo */}
      {/* <div
        onClick={() => navigate("/")}
        className="text-purple-400 text-2xl font-bold hover:text-purple-300 transition-colors duration-300 cursor-pointer"
      >
        Ekizr
      </div> */}

      {/* Navigation Links */}
      <div className="flex gap-8 ml-auto"> {/* Added ml-auto to push items to the right */}
        {["", "", "", ""].map((item, index) => (
          <button
            key={item}
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => navigate(`/${item.toLowerCase()}`)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};
