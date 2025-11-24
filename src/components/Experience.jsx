import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Project Intern',
      company: 'Track Genesis',
      location: 'Trivandrum, Kerala',
      period: 'Oct 2024 – Nov 2024',
      type: 'Internship',
      achievements: [
        {
          title: 'Full-Stack Development',
          description: 'Developed a Local Marketplace web application using MERN Stack to connect local buyers and sellers',
          tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js']
        },
        {
          title: 'UI/UX Excellence',
          description: 'Created responsive, high-performance user interfaces ensuring seamless experience across all devices',
          tech: ['Tailwind CSS', 'Responsive Design']
        },
        {
          title: 'Cloud Deployment',
          description: 'Collaborated on backend integration and deployed application on Microsoft Azure for scalable hosting',
          tech: ['Azure', 'Cloud Computing']
        }
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
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
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-gray-700/50 overflow-hidden mb-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-blue-100 text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-blue-100">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="p-6">
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: achIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{achievement.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{achievement.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {achievement.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
