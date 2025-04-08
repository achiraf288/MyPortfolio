import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { TechStack } from "./TechStack";
import { useNavigate } from "react-router-dom";
import IotProjectPic from "../assets/IotProjectPic.jpg";
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
      title: "House Rental System Android App (Final HND Project)",
      description:
        "A mobile and web-based platform that helps users find and list rental properties. Built with Android Studio and React using a Laravel API, it includes features like property comparison, reviews, and a chatbot for user support.",
      image:
        "https://cdn.dribbble.com/userupload/11935098/file/original-9c8d143ef80a46804e68b425f499ba4c.png?resize=1600x1200",
      demoLink: "#",
    },
    {
      title: "Time Management System (website) for Jayasiri Motors base on Laravel",
      description:
        "A Laravel-based web application developed for Jayasiri Motors to manage employee work hours, tasks, and schedules efficiently. The system improves productivity by tracking time logs and streamlining daily operations.",
      image:
        "https://png.pngtree.com/png-clipart/20210801/original/pngtree-time-management-website-homepage-template-png-image_6586724.jpg",
      demoLink: "#",
    },
    {
      title: "Agricultural spraying robot (IOT Robotic Project)",
      description:
        "An IoT-based robotic system designed to automate pesticide spraying in agricultural fields. It improves efficiency and safety by remotely controlling spray operations and monitoring field conditions.",
      image:
      IotProjectPic,
      demoLink: "#",
    },
    {
      title: "Bookshop management system",
      description:
        "A software application designed to manage book inventory, sales, customer records, and billing in a bookshop. It streamlines daily operations and improves overall efficiency for store management.",
      image:
        "https://2.bp.blogspot.com/-0WSA6wgAAXE/WXNkgGhmvxI/AAAAAAAAD8Y/uzmd31DFnloJrMbLkmK2H4H43AyCkzE-gCLcBGAs/w1200-h630-p-k-no-nu/book%2Bshop.jpg",
      demoLink: "#",
    },
    {
      title: "House Rental System Web (Final HND Project)",
      description:
        "A web-based platform built with React, PHP, and Laravel that allows users to search, compare, and list rental properties. It features real-time data, property reviews, and seamless integration with the mobile app via a Laravel API.",
      image:
        "https://cdn.dribbble.com/userupload/9263082/file/original-326af6b6ae5f6840c08957521746be0b.jpg?crop=0x0-1920x1440&resize=1600x1200",
      demoLink: "#",
    },
    {
      title: "",
      description:
        "",
      image:
        "",
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
