import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Lightbulb, Target, Download } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'Proficient in MERN stack and modern web technologies'
    },
    {
      icon: Lightbulb,
      title: 'AI Enthusiast',
      description: 'Experience with Generative AI and machine learning models'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Passionate about creating innovative solutions'
    },
    {
      icon: User,
      title: 'Team Player',
      description: 'Collaborative and adaptable in dynamic environments'
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            About <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Dedicated Computer Science student with a strong foundation in <span className="font-semibold text-blue-600">Full Stack Development</span> and practical experience
              in <span className="font-semibold text-purple-600">Generative AI</span>. Eager to apply technical and collaborative skills to solve complex problems in a dynamic
              environment.
            </p>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/Aravind_R_Resume.pdf"
              download
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto dark:from-blue-600 dark:to-purple-600">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;