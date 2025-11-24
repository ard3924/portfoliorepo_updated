import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aravindr3924@gmail.com',
      href: 'mailto:aravindr3924@gmail.com',
      color: 'from-red-400 to-pink-500',
      description: 'Drop me a message'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9745251033',
      href: 'tel:+919745251033',
      color: 'from-green-400 to-emerald-500',
      description: 'Call or WhatsApp'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ard3924',
      href: 'https://github.com/ard3924',
      color: 'from-gray-600 to-gray-800',
      description: 'Check my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Aravind R',
      href: 'https://linkedin.com/in/-aravind-r',
      color: 'from-blue-500 to-blue-700',
      description: 'Connect professionally'
    }
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 dark:block hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss opportunities to work together
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/15 transition-all duration-300 h-full shadow-md hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <Send className="w-5 h-5 text-gray-400 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.label}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{contact.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{contact.description}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-white dark:bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-gray-200 dark:border-white/20 shadow-sm">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Trivandrum, Kerala, India</span>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <motion.a
              href="mailto:aravindr3924@gmail.com"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
