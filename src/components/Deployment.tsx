import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Deployment: React.FC = () => {
  return (
    <div className="nextjs-container py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Let's Connect Badge */}
        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Let's Connect
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Meet Our Team
        </h2>

        {/* Description */}
        <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
          Our exceptional team brings vision and expertise to every project. Each member contributes unique skills that drive innovation and excellence.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">

          {/* Team Member 1 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden flex items-center justify-center">
              {/* Placeholder for image */}
              <img src="priyank.jpg" alt="Team Member" className="object-cover w-full h-full"/>
            </div>
            <span className="text-lg font-semibold text-gray-900 mb-1">Priyank Panchal</span>
            <span className="text-sm text-gray-600 mb-3">Full Stack & Technical Architect</span>
            <p className="text-xs text-gray-500 text-center mb-4">
           "Architecting ideas. Building on blockchain. Let’s connect."
            </p>
            <div className="flex gap-3 text-gray-600 mt-2">
              {/* GitHub Link */}
              <a href="https://github.com/Priyank911" aria-label="GitHub" className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full hover:border-gray-700 hover:text-gray-900 transition-colors duration-200">
                <FaGithub className="w-4 h-4"/>
              </a>
              {/* Instagram Link */}
              <a href="https://www.instagram.com/developer.priyank/" aria-label="Instagram" className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full hover:border-gray-700 hover:text-gray-900 transition-colors duration-200">
                <FaInstagram className="w-4 h-4"/>
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden flex items-center justify-center">
              {/* Placeholder for image */}
               <img src="prayers.png" alt="Team Member" className="object-cover w-full h-full"/>
            </div>
            <span className="text-lg font-semibold text-gray-900 mb-1">Prayers Khristi</span>
            <span className="text-sm text-gray-600 mb-3">AI ML Developer | Security Engineer</span>
            <p className="text-xs text-gray-500 text-center mb-4">
              "Crafted intelligent AI with unwavering fortress-grade security."
            </p>
            <div className="flex gap-3 text-gray-600 mt-2">
              {/* GitHub Link */}
              <a href="https://github.com/Prayers-2004" aria-label="GitHub" className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full hover:border-gray-700 hover:text-gray-900 transition-colors duration-200">
                <FaGithub className="w-4 h-4"/>
              </a>
              {/* Instagram Link */}
              <a href="https://www.instagram.com/prayerskhristi/" aria-label="Instagram" className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full hover:border-gray-700 hover:text-gray-900 transition-colors duration-200">
                <FaInstagram className="w-4 h-4"/>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Deployment;
