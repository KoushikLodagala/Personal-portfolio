import React from 'react';
import { motion } from 'framer-motion';
import reactHooksImage from '../assets/images/blog/react.jpg';
import mernStackImage from '../assets/images/blog/mern.jpeg';
import awsCloudImage from '../assets/images/blog/aws.jpeg';

const Blog = () => {
  const posts = [
    {
      title: 'Mastering MERN Stack Development',
      date: 'March 15, 2024',
      excerpt: 'A comprehensive guide to building full-stack applications with MongoDB, Express, React, and Node.js.',
      image: mernStackImage,
    },
    {
      title: 'State Management with Redux',
      date: 'March 10, 2024',
      excerpt: 'Learn how to effectively manage application state using Redux in React applications.',
      image: reactHooksImage,
    },
    {
      title: 'Deploying Applications on AWS',
      date: 'March 5, 2024',
      excerpt: 'Step-by-step guide to deploying and scaling your applications using AWS services.',
      image: awsCloudImage,
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
            Blog
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;