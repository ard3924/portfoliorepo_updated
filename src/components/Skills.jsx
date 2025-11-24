import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const technicalSkills = [
        'JavaScript', 'React', 'Node.js', 'Python', 'HTML', 'CSS', 'Tailwind CSS',
        'Git', 'MongoDB', 'Express.js', 'SQL', 'Generative AI'
    ];

    const softSkills = [
        'Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Time Management'
    ];

    return (
        <motion.section
            id="skills"
            className="py-20 bg-white dark:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Skills</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">Technical Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {technicalSkills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">Soft Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
