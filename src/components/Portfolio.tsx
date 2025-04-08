import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { TechStack } from "./TechStack";
import { useNavigate } from "react-router-dom";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
}
const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-purple-900/20 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300 animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <a
            href={demoLink}
            className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 text-sm"
          >
            Live Demo <ExternalLink size={16} />
          </a>
          <button
            onClick={() =>
              navigate(`/project/${title.toLowerCase().replace(/\s+/g, "-")}`)
            }
            className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 text-sm"
          >
            Details <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const projects = [
    {
      title: "House Rental System (Final HND Project)",
      description:
        "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
      demoLink: "#",
    },
    {
      title: "Time Management System (website) for Jayasiri Motors base on Laravel",
      description:
        "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500",
      demoLink: "#",
    },
    {
      title: "Agricultural spraying robot (IOT Robotic Project)",
      description:
        "Buku Catatan adalah website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500",
      demoLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing my projects and skills.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      demoLink: "#",
    },
    {
      title: "Education Platform",
      description:
        "An interactive learning platform for students and educators.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500",
      demoLink: "#",
    },
    {
      title: "Personal Blog",
      description:
        "A minimalist blog platform for sharing thoughts and experiences.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500",
      demoLink: "#",
    },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "Tech Stack":
        return <TechStack />;
      case "Certificates":
        return (
          <div className="text-center text-gray-400 py-12">
            Certificates section coming soon...
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        );
    }
  };
  return (
    <section className="w-full px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold text-purple-400 mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
        <div className="flex justify-center gap-8 mb-12">
          {["Projects", "Certificates", "Tech Stack"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-lg transition-all duration-300 ${activeTab === tab ? "bg-purple-600 text-white" : "bg-purple-900/20 text-gray-400 hover:bg-purple-900/30"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderContent()}
      </div>
    </section>
  );
};
