import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
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
          <span className="text-purple-400">
            {id
              ?.split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h1 className="text-5xl font-bold text-white mb-6">
              AutoChat-Discord
            </h1>
            <p className="text-gray-400 mb-8">
              AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran
              Discord secara terjadwal. Pengguna dapat menentukan saluran
              tujuan, isi pesan, dan interval penundaan pengiriman pesan.
              Program ini berjalan 24/7, memungkinkan pengiriman pesan otomatis
              tanpa intervensi manual, sehingga memudahkan promosi atau
              komunikasi di Discord secara efisien.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <StatCard
                value="9"
                label="Total Teknologi"
                icon={<code className="text-lg">{"</>"}</code>}
              />
              <StatCard
                value="4"
                label="Fitur Utama"
                icon={<span className="text-lg">★</span>}
              />
            </div>
            <div className="flex gap-4 mb-12">
              <button className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                <ExternalLink size={20} />
                Live Demo
              </button>
              <button className="px-6 py-3 rounded-lg border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                <Github size={20} />
                Github
              </button>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <code className="text-purple-400">{"</>"}</code> Technologies
                Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "ReactJS",
                  "AOS",
                  "Tailwind CSS",
                  "Material UI",
                  "Python",
                  "Firebase",
                  "SweetAlert2",
                  "Vite",
                  "CSS",
                ].map((tech) => (
                  <TechnologyBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">★</span> Key Features
              </h3>
              <ul className="space-y-3">
                {[
                  "Customize the message content as needed.",
                  "Send messages to multiple Discord channels simultaneously.",
                  "Set custom delay intervals between messages for controlled messaging.",
                  "AutoChat runs non-stop to ensure continuous messaging.",
                ].map((feature, index) => (
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
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500"
                alt="AutoChat-Discord Preview"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>


      







      </div>
    </div>
  );
};
