import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaAws, FaGit } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiExpress } from 'react-icons/si';
import aboutImage from '../assets/images/about/about-me.jpg';
import mernImage from '../assets/images/skills/mern.jpg';
import reduxImage from '../assets/images/skills/redux.jpg';
import awsImage from '../assets/images/skills/aws.jpg';
import profileimg from '../assets/images/profileimg/me.jpg';
import resume from '../assets/images/about/koushik_React_SpSimpleResume.pdf.pdf';

const About = () => {
  const skills = [
    { name: 'React', icon: FaReact, level: 90, image: mernImage },
    { name: 'Node.js', icon: FaNode, level: 85, image: mernImage },
    { name: 'MongoDB', icon: SiMongodb, level: 85, image: mernImage },
    { name: 'Express.js', icon: SiExpress, level: 80, image: mernImage },
    { name: 'Redux', icon: SiRedux, level: 85, image: reduxImage },
    { name: 'AWS', icon: FaAws, level: 75, image: awsImage },
    { name: 'Git', icon: FaGit, level: 80, image: mernImage },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <motion.img
                src= {profileimg}
                alt="About Me"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate MERN Stack Developer with expertise in building
                modern web applications. I specialize in creating responsive, user-friendly
                interfaces using React and implementing robust backend solutions with Node.js.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                My experience includes working with Redux for state management, AWS for cloud solutions,
                and implementing CI/CD pipelines for efficient deployment workflows.
              </p>
              <motion.a
                href={resume}
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute h-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                    />
                  </div>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;