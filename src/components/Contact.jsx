import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import contactBg from '../assets/images/contact/contact-bg.jpg';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStatus('success');
          formRef.current.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <div 
      className="min-h-screen pt-20 pb-16 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6">
                I'm always open to new opportunities and collaborations. Feel free to
                reach out if you'd like to work together or just want to say hi!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-300">Email:</span>
                  <a
                    href="mailto:lodagalakoushik1510@gmail.com"
                    className="ml-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  >
                    lodagalakoushik1510@gmail.com
                  </a>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/KoushikLodagala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/koushik-lodagala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaTwitter size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'sending'
                    ? 'Sending...'
                    : status === 'success'
                    ? 'Message Sent!'
                    : 'Send Message'}
                </motion.button>
                {status === 'error' && (
                  <p className="text-red-500 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;