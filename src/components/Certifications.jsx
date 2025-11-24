import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Specialist in Full Stack Development (MERN) ',
      issuer: 'ICT Academy of Kerala',
      date: '2025',
      description: 'Intensive program covering MongoDB, Express.js, React, and Node.js for modern web development.',
      logo: <Award className="w-6 h-6 text-white" />
    },
    {
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google',
      date: '2022',
      description: 'Comprehensive understanding of IT support fundamentals and troubleshooting.',
      logo: <svg className="w-6 h-6 text-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.36 1.95-4.25 1.95-3.52 0-6.33-2.88-6.33-6.4s2.81-6.4 6.33-6.4c1.9 0 3.21.73 4.1 1.64l2.5-2.5C18.16 3.7 15.66 2.4 12.48 2.4 7.18 2.4 3 6.6 3 12s4.18 9.6 9.48 9.6c2.73 0 4.9-1 6.48-2.58s2.4-4.14 2.4-6.6v-.42h-8.4z" /></svg>
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Basic knowledge of cloud services and Azure platform.',
      logo: <svg className="w-6 h-6 text-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Microsoft</title><path d="M0 0h11.4v11.4H0V0zm12.6 0H24v11.4H12.6V0zM0 12.6h11.4V24H0V12.6zm12.6 12.6H24V24H12.6v-1.2z" /></svg>
    }
  ];

  return (
    <motion.section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-700/50 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex-grow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {cert.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{cert.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.issuer} &bull; {cert.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
