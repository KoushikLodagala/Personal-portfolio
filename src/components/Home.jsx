import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/images/profile.jpg';
import heroBg from '../assets/images/hero-bg.jpg';
import profileimg from '../assets/images/profileimg/mypic.png';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hi, I'm <span className="text-indigo-400">Lodagala Koushik</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                React Developer
              </h2>
              <p className="text-gray-400 mb-8">
                I specialize in crafting user-friendly and high-performing web applications using modern technologies. Let's collaborate to bring your digital vision to life.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/projects"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-indigo-600 text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/KoushikLodagala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/koushik-lodagala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <img
                src={profileimg}
                alt="Profile"
                className="rounded-full shadow-lg w-80 h-80 object-cover mx-auto border-4 border-indigo-600 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;