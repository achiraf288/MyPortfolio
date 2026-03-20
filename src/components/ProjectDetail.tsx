import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import IotProjectPic from "../assets/IotProjectPic.jpg";
import FoodHealinePic from "../assets/foodhealinepic.png";
import imaxheadlinepic from "../assets/imaxheadlinepic.png";
interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}
const StatCard = ({ value, label, icon }: StatCardProps) => (
  <div className="bg-purple-900/20 p-4 rounded-xl backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300">
    <div className="flex items-center gap-3">
      <div className="text-purple-400">{icon}</div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  </div>
);
const TechnologyBadge = ({ name }: { name: string }) => (
  <div className="bg-purple-900/30 px-4 py-2 rounded-lg text-purple-300 text-sm hover:bg-purple-900/40 transition-all duration-300">
    {name}
  </div>
);
export const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const projects = {
    "woner-imax-cinema-booking-system": {
      title: "Woner Imax Cinema Booking System",
      description: "A comprehensive cinema ticket booking platform that allows users to browse movies, select seats, and book tickets online. Features include real-time seat availability, secure payment integration, movie showtime management, and user account functionality. Built with React, Node.js, and MongoDB for a seamless movie-going experience.",
      image: imaxheadlinepic,
      demoLink: "https://dark-cherry-1d9e.achiraf28.workers.dev/",
      githubLink: "#",
      techCount: "6",
      featureCount: "8",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API", "JWT"],
      features: [
        "Real-time seat selection and availability",
        "Secure online payment processing",
        "Movie showtime management system",
        "User registration and authentication",
        "Booking history and ticket management",
        "Movie ratings and reviews",
        "Admin dashboard for cinema management",
        "Mobile-responsive design"
      ]
    },
    "food-ordering-system": {
      title: "Food Ordering System",
      description: "A comprehensive food ordering platform with real-time order tracking, secure payments, restaurant ratings, and advanced filtering. Built with modern web technologies to provide seamless user experience for both customers and restaurant owners.",
      image: FoodHealinePic,
      demoLink: "https://quiet-limit-3a31.achiraf28.workers.dev/",
      githubLink: "https://github.com/achiraf288/QuickBites-fe.git",
      techCount: "7",
      featureCount: "8",
      technologies: ["React", "Node.js",  "Tailwind CSS"],
      features: [
        "Real-time order tracking with live updates",
        "Secure payment processing with Stripe integration",
        "Restaurant ratings and review system",
        "Advanced search and filtering options",
        "User authentication and profile management",
        "Order history and tracking dashboard",
        "Restaurant owner management panel",
        "Mobile-responsive design"
      ]
    },
    
    "house-rental-system-android-app-(final-hnd-project)": {
      title: "House Rental System Android App",
      description: "A mobile and web-based platform that helps users find and list rental properties. Built with Android Studio and React using a Laravel API, it includes features like property comparison, reviews, and a chatbot for user support.",
      image: "https://cdn.dribbble.com/userupload/11935098/file/original-9c8d143ef80a46804e68b425f499ba4c.png?resize=1600x1200",
      demoLink: "#",
      githubLink: "#",
      techCount: "6",
      featureCount: "7",
      technologies: ["Android Studio", "React", "Laravel", "MySQL", "REST API", "Firebase"],
      features: [
        "Property search with advanced filters",
        "Real-time property availability status",
        "User reviews and rating system",
        "Property comparison tool",
        "AI-powered chatbot for support",
        "In-app messaging between users",
        "Location-based property recommendations"
      ]
    },
    "time-management-system-(website)-for-jayasiri-motors-base-on-laravel": {
      title: "Time Management System for Jayasiri Motors",
      description: "A Laravel-based web application developed for Jayasiri Motors to manage employee work hours, tasks, and schedules efficiently. The system improves productivity by tracking time logs and streamlining daily operations.",
      image: "https://png.pngtree.com/png-clipart/20210801/original/pngtree-time-management-website-homepage-template-png-image_6586724.jpg",
      demoLink: "#",
      githubLink: "#",
      techCount: "5",
      featureCount: "6",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
      features: [
        "Employee time tracking and logging",
        "Task assignment and management",
        "Schedule creation and management",
        "Automated reporting system",
        "Employee performance analytics",
        "Leave request and approval workflow"
      ]
    },
    "agricultural-spraying-robot-(iot-robotic-project)": {
      title: "Agricultural Spraying Robot (IoT Project)",
      description: "An IoT-based robotic system designed to automate pesticide spraying in agricultural fields. It improves efficiency and safety by remotely controlling spray operations and monitoring field conditions.",
      image: IotProjectPic,
      demoLink: "#",
      githubLink: "#",
      techCount: "8",
      featureCount: "5",
      technologies: ["Arduino", "Raspberry Pi", "Python", "IoT Sensors", "MQTT", "React", "Node.js", "MongoDB"],
      features: [
        "Remote control via web interface",
        "Real-time field condition monitoring",
        "Automated spraying patterns",
        "GPS-guided navigation system",
        "Safety sensors and emergency stop"
      ]
    },
    "bookshop-management-system": {
      title: "Bookshop Management System",
      description: "A software application designed to manage book inventory, sales, customer records, and billing in a bookshop. It streamlines daily operations and improves overall efficiency for store management.",
      image: "https://2.bp.blogspot.com/-0WSA6wgAAXE/WXNkgGhmvxI/AAAAAAAAD8Y/uzmd31DFnloJrMbLkmK2H4H43AyCkzE-gCLcBGAs/w1200-h630-p-k-no-nu/book%2Bshop.jpg",
      demoLink: "#",
      githubLink: "#",
      techCount: "6",
      featureCount: "7",
      technologies: ["Java", "JavaFX", "MySQL", "Hibernate", "Spring Boot", "JUnit"],
      features: [
        "Inventory management with stock tracking",
        "Point of sale system",
        "Customer database management",
        "Sales reporting and analytics",
        "Supplier management",
        "Barcode scanning integration",
        "Automated reorder notifications"
      ]
    },
    "house-rental-system-web-(final-hnd-project)": {
      title: "House Rental System Web",
      description: "A web-based platform built with React, PHP, and Laravel that allows users to search, compare, and list rental properties. It features real-time data, property reviews, and seamless integration with the mobile app via a Laravel API.",
      image: "https://cdn.dribbble.com/userupload/9263082/file/original-326af6b6ae5f6840c08957521746be0b.jpg?crop=0x0-1920x1440&resize=1600x1200",
      demoLink: "#",
      githubLink: "#",
      techCount: "7",
      featureCount: "8",
      technologies: ["React", "PHP", "Laravel", "MySQL", "REST API", "Tailwind CSS", "Redux"],
      features: [
        "Advanced property search and filters",
        "Interactive map-based property viewing",
        "Real-time property availability updates",
        "User review and rating system",
        "Property comparison tool",
        "Saved favorites and alerts",
        "Mobile-responsive design",
        "Admin dashboard for property management"
      ]
    }
  };

  const currentProject = projects[id as keyof typeof projects];

  if (!currentProject) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-12 text-gray-400">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <span>Projects</span>
          <span>/</span>
          <span className="text-purple-400">{currentProject.title}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h1 className="text-5xl font-bold text-white mb-6">
              {currentProject.title}
            </h1>
            <p className="text-gray-400 mb-8">
              {currentProject.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <StatCard
                value={currentProject.techCount}
                label="Total Technologies"
                icon={<code className="text-lg">{"</>"}</code>}
              />
              <StatCard
                value={currentProject.featureCount}
                label="Key Features"
                icon={<span className="text-lg">★</span>}
              />
            </div>
            <div className="flex gap-4 mb-12">
              <a 
                href={currentProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a 
                href={currentProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
              >
                <Github size={20} />
                Github
              </a>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <code className="text-purple-400">{"</>"}</code> Technologies
                Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentProject.technologies.map((tech) => (
                  <TechnologyBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">★</span> Key Features
              </h3>
              <ul className="space-y-3">
                {currentProject.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="animate-fade-in-delay">
            <div className="bg-purple-900/20 rounded-xl overflow-hidden backdrop-blur-sm p-4">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>


      







      </div>
    </div>
  );
};
