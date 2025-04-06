import React from "react";
interface TechCardProps {
  name: string;
  icon: string;
}
const TechCard = ({ name, icon }: TechCardProps) => (
  <div className="bg-gray-900/50 p-6 rounded-xl hover:bg-purple-900/20 transition-all duration-300 cursor-pointer group animate-fade-in">
    <div className="flex flex-col items-center gap-4">
      <img
        src={icon}
        alt={name}
        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-gray-400 text-sm font-medium">{name}</span>
    </div>
  </div>
);
export const TechStack = () => {
  const technologies = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Node JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Vercel",
      icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    },
    {
      name: "SweetAlert2",
      icon: "https://sweetalert2.github.io/images/SweetAlert2.png",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {technologies.map((tech, index) => (
        <TechCard key={index} {...tech} />
      ))}
    </div>
  );
};
