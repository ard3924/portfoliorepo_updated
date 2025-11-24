import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            institution: 'ICT Academy of Kerala',
            degree: 'Industry Readiness Program in Full Stack Development (MERN)',
            period: 'June 2025 – Oct 2025'
        },
        {
            institution: 'University Of Kerala',
            degree: 'Bachelor of Computer Science',
            period: 'Sept 2022 – May 2025'
        }
    ];

    return (
        <motion.section
            id="education"
            className="py-20 bg-white dark:bg-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Education</h2>
                <div className="max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-700/50 mb-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-4">
                                <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Education;
