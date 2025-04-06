import React, { useState } from "react";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Share2,
  Linkedin,
  Image,
} from "lucide-react";
const FormInput = ({
  icon: Icon,
  placeholder,
  type = "text",
  textArea = false,
}: {
  icon: any;
  placeholder: string;
  type?: string;
  textArea?: boolean;
}) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 text-gray-400">
        <Icon size={20} />
      </div>
      {textArea ? (
        <textarea
          className="w-full h-32 bg-gray-900/50 rounded-lg pl-12 pr-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="w-full bg-gray-900/50 rounded-lg pl-12 pr-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
export const Contact = () => {
  const [commentName, setCommentName] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  return (
    <section className="w-full px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold text-purple-400 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-purple-900/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Share2 className="text-purple-400" />
                Get in Touch
              </h3>
              <p className="text-gray-400 mb-8">
                Have something to discuss? Send me a message and let's talk.
              </p>
              <form className="space-y-6">
                <FormInput icon={User} placeholder="Your Name" />
                <FormInput icon={Mail} placeholder="Your Email" type="email" />
                <FormInput
                  icon={MessageSquare}
                  placeholder="Your Message"
                  textArea
                />
                <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect With Me
                </h4>
                <button className="w-full px-6 py-3 bg-[#0077B5]/20 text-[#0077B5] rounded-lg hover:bg-[#0077B5] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Linkedin size={20} />
                  Let's Connect on LinkedIn
                </button>
              </div>
            </div>
          </div>
          {/* Comments Section */}
          <div className="animate-slide-up delay-100">
            <div className="bg-purple-900/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="text-purple-400" />
                Comments (1)
              </h3>
              <form className="space-y-6 mb-8">
                <div>
                  <label className="block text-gray-400 mb-2">
                    Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-900/50 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder="Enter your name"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    className="w-full h-32 bg-gray-900/50 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder="Write your message here..."
                    value={commentMessage}
                    onChange={(e) => setCommentMessage(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">
                    Profile Photo (optional)
                  </label>
                  <button className="w-full px-6 py-3 bg-gray-900/50 text-gray-400 rounded-lg hover:bg-purple-900/20 transition-all duration-300 flex items-center justify-center gap-2">
                    <Image size={20} />
                    Choose Profile Photo
                  </button>
                  <p className="text-gray-500 text-sm mt-2">
                    Max file size: 5MB
                  </p>
                </div>
                <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <Send size={20} />
                  Post Comment
                </button>
              </form>
              {/* Existing Comment */}
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                    P
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Perera</h4>
                    <p className="text-gray-500 text-sm">8 ago</p>
                  </div>
                </div>
                <p className="text-gray-400">Keep it up..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
