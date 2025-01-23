import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import travelApp from '../assets/images/projects/travel.jpg';
import foodapp from '../assets/images/projects/food.jpg';
import portfolioapp from '../assets/images/projects/portfolioo.jpeg';
// import profileimg from '../assets/images/profileimg/';

const Projects = () => {
  const projects = [
    {
      title: 'Travel-Trove Web Application',
      description: 'A full-stack MERN application with Redux state management and AWS deployment.',
      image: travelApp,
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Vendor Dasboard for Restaurents',
      description: 'Modern social networking platform built with MERN stack and real-time features.',
      image: foodapp,
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Node.jS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Portfolio',
      description: 'Advanced calculator application with React and Redux integration.',
      image: portfolioapp,
      technologies: ['React', 'Redux', 'Node.js', 'Express.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-indigo-400 transition-colors duration-300"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-indigo-400 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;