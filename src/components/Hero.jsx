import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 md:pt-0 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aravind R
            </motion.h1>
            <motion.div
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Computer Science Gradute',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'AI Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a href="mailto:aravindr3924@gmail.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Mail className="w-5 h-5 mr-2" /> aravindr3924@gmail.com
              </motion.a>
              <motion.a href="https://github.com/ard3924" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Github className="w-5 h-5 mr-2" /> GitHub
              </motion.a>
              <motion.a href="https://linkedin.com/in/-aravind-r" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, duration: 1, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full filter blur-xl opacity-70"></div>
              <img
                src="/profile-pic.jpg"
                alt="Aravind R"
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
