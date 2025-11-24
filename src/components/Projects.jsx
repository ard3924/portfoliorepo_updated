import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Local Marketplace Web Application',
            description: 'A full-stack web application built with MERN Stack to connect local buyers and sellers. Features responsive UI with React and Tailwind CSS, backend integration, and deployed on Microsoft Azure.',
            image: '/project-local-marketplace.png',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Azure'],
            github: 'https://github.com/ard3924/local-marketplace',
            demo: 'https://local-marketplace-demo.com'
        },
        {
            title: 'Generative AI Chatbot',
            description: 'An AI-powered chatbot application using modern web technologies and machine learning models for interactive conversations and assistance.',
            image: '/project-ai-chatbot.png',
            technologies: ['Python', 'JavaScript', 'React.js', 'Node.js', 'Generative AI'],
            github: 'https://github.com/ard3924/ai-chatbot',
            demo: 'https://ai-chatbot-demo.com'
        }
    ];

    return (
        <motion.section
            id="projects"
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
                        Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                </motion.div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-700/50 transition-all duration-300 overflow-hidden"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative z-0 mb-4">
                                    <img src={project.image} alt={project.title} className="rounded-lg w-full h-48 object-cover" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-lg"></div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                                        >
                                            <Github className="w-5 h-5 mr-2" />
                                            Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                                        >
                                            <ExternalLink className="w-5 h-5 mr-2" />
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
