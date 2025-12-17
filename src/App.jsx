import React, { useState, useEffect, createContext, useContext, memo } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Mail, Phone, Github, Linkedin, User, Code, Lightbulb, Target,
  Download, Briefcase, MapPin, Calendar, ExternalLink,
  GraduationCap, Award, Sun, Moon, Menu, X, ArrowUp, Send, Atom, FileCode,
  Palette, Wind, Move, Server, Database, DatabaseZap, Puzzle, Users,
  MessageSquare, RefreshCw, Clock, Bot, ChevronRight, Wrench, Cloud, Box,
  PenTool
} from 'lucide-react';

// Import project images from assets folder
import localfinds from './assets/localfinds.png';
import ignite from './assets/ignite.png';
import aiTextbook from './assets/AI TextBook Assistant.png';
import malware from './assets/Malware.png';
import foodDeli from './assets/Food Deli.png';

// Import certificate logo images from assets folder
import ictAcademyLogo from './assets/ICT_Academy_Kerala.webp.png';
import dockerLogo from './assets/docker-logo.png';
import linkedinLogo from './assets/LinkedIn_logo_initials.png.webp';
import unstopLogo from './assets/unstop-icon-800x800.png';
import microsoftLogo from './assets/Microsoft_icon.svg.png';
import googleCloudLogo from './assets/google cloud.png';
import googleDevelopersLogo from './assets/googledeveloperslogo.png';

// Import SVG icons from assets folder
import jsIcon from './assets/js.svg';
import reactIcon from './assets/react.svg';
import html5Icon from './assets/html5-original.svg';
import css3Icon from './assets/css3-original.svg';
import tailwindIcon from './assets/tailwindcss-original.svg';
import framerIcon from './assets/framermotion-original.svg';
import nodejsIcon from './assets/nodejs-original.svg';
import expressIcon from './assets/express-original.svg';
import pythonIcon from './assets/python-original.svg';
import mongodbIcon from './assets/mongodb-original.svg';
import mysqlIcon from './assets/mysql-original.svg';
import gitIcon from './assets/git-original.svg';
import vscodeIcon from './assets/vscode-original.svg';
import azureIcon from './assets/azure-original.svg';
import dockerIcon from './assets/docker-original.svg';
import postmanIcon from './assets/getpostman-icon.svg';
import figmaIcon from './assets/figma-original.svg';
import awsIcon from './assets/amazonwebservices-original-wordmark.svg';
import geminiIcon from './assets/gemini.svg';

// --- Theme Context ---
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// --- Animation Variants (Reusable) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// --- Components ---

const Navbar = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const { scrollY } = useScroll();

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    // 1. Efficient Scroll Spy using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Active when section is in the middle
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach(link => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    // 2. Optimized Navbar Hide/Show
    const unlisten = scrollY.on("change", (latest) => {
      const isScrollingDown = latest > scrollY.getPrevious();
      if (latest > 150 && isScrollingDown && !isOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrolled(latest > 50);
    });

    return () => {
      observer.disconnect();
      unlisten();
    };
  }, [scrollY, isOpen, navLinks]);

  const navVariants = {
    visible: { y: 0 },
    hidden: { y: '-100%' },
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer" whileHover={{ scale: 1.05 }}>
          Aravind R.
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`transition-colors font-medium ${activeLink === link.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              {link.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 transition-colors">
            {theme === 'light' ? <Moon size={20} className="text-gray-800" /> : <Sun size={20} className="text-yellow-400" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 mr-4 transition-colors">
            {theme === 'light' ? <Moon size={20} className="text-gray-800" /> : <Sun size={20} className="text-yellow-400" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="md:hidden pb-4 bg-white/95 dark:bg-gray-800/95 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 pt-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`transition-colors text-lg ${activeLink === link.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

const Hero = memo(() => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 md:pt-0 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ willChange: 'opacity' }}
    >
      <div className="container mx-auto px-6">
        {/* Added 'max-w-5xl mx-auto' to bring content closer to the center */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

          {/* Removed 'md:text-left' to keep text centered on all screens */}
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
            >
              Aravind R
            </motion.h1>
            <motion.div
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Computer Science Graduate',
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

            {/* Removed 'md:justify-start' so icons stay centered */}
            <motion.div
              className="flex flex-wrap justify-center gap-x-8 gap-y-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.6 }}
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

          {/* Image Section - Kept centered */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
              <img
                src="/IMG_0809 (1).jpg"
                alt="Aravind R"
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

const About = memo(() => {
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12"
            variants={fadeInUp}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Dedicated Computer Science student with a strong foundation in <span className="font-semibold text-blue-600">Full Stack Development</span> and practical experience
              in <span className="font-semibold text-purple-600">Generative AI</span>. Eager to apply technical and collaborative skills to solve complex problems in a dynamic
              environment.
            </p>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <a
              href="/Aravind_R_Resume.pdf"
              download
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto dark:from-blue-600 dark:to-purple-600">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

const SkillIcon = ({ icon, name }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl dark:shadow-gray-700/50 transition-all duration-300"
    whileHover={{ y: -5, scale: 1.05 }}
  >
    <div className="w-16 h-16 mb-4 flex items-center justify-center">
      {icon}
    </div>
    <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">{name}</span>
  </motion.div>
);

const skillIcons = {
  javascript: <img src={jsIcon} alt="JavaScript" className="w-12 h-12" />,
  react: <img src={reactIcon} alt="React" className="w-12 h-12" />,
  html5: <img src={html5Icon} alt="HTML5" className="w-12 h-12" />,
  css3: <img src={css3Icon} alt="CSS3" className="w-12 h-12" />,
  tailwind: <img src={tailwindIcon} alt="Tailwind CSS" className="w-12 h-12" />,
  framer: <img src={framerIcon} alt="Framer Motion" className="w-12 h-12" />,
  nodejs: <img src={nodejsIcon} alt="Node.js" className="w-12 h-12" />,
  express: <img src={expressIcon} alt="Express.js" className="w-12 h-12 dark:invert" />,
  python: <img src={pythonIcon} alt="Python" className="w-12 h-12" />,
  mongodb: <img src={mongodbIcon} alt="MongoDB" className="w-12 h-12" />,
  sql: <img src={mysqlIcon} alt="SQL" className="w-12 h-12" />,
  git: <img src={gitIcon} alt="Git" className="w-12 h-12" />,
  vscode: <img src={vscodeIcon} alt="VS Code" className="w-12 h-12" />,
  azure: <img src={azureIcon} alt="Microsoft Azure" className="w-12 h-12" />,
  docker: <img src={dockerIcon} alt="Docker" className="w-12 h-12" />,
  postman: <img src={postmanIcon} alt="Postman" className="w-12 h-12" />,
  figma: <img src={figmaIcon} alt="Figma" className="w-12 h-12" />,
  aws: <img src={awsIcon} alt="AWS" className="w-12 h-12 dark:invert" />,
  genai: <img src={geminiIcon} alt="Generative AI" className="w-12 h-12" />,
  problem: <Puzzle className="w-12 h-12 text-blue-500" />,
  collaboration: <Users className="w-12 h-12 text-blue-500" />,
  communication: <MessageSquare className="w-12 h-12 text-blue-500" />,
  adaptability: <RefreshCw className="w-12 h-12 text-blue-500" />,
  time: <Clock className="w-12 h-12 text-blue-500" />,
};

const Skills = memo(() => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code, // Main category icon
      skills: [
        { name: 'JavaScript (ES6+)', icon: skillIcons.javascript },
        { name: 'React', icon: skillIcons.react },
        { name: 'HTML5', icon: skillIcons.html5 },
        { name: 'CSS3', icon: skillIcons.css3 },
        { name: 'Tailwind CSS', icon: skillIcons.tailwind },
        { name: 'Framer Motion', icon: skillIcons.framer },
      ],
      color: 'blue',
    },
    {
      title: 'Backend',
      icon: Briefcase,
      skills: [
        { name: 'Node.js', icon: skillIcons.nodejs },
        { name: 'Express.js', icon: skillIcons.express },
        { name: 'Python', icon: skillIcons.python },
        { name: 'MongoDB', icon: skillIcons.mongodb },
        { name: 'SQL', icon: skillIcons.sql },
      ],
      color: 'green',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', icon: skillIcons.git },
        { name: 'VS Code', icon: skillIcons.vscode },
        { name: 'Microsoft Azure', icon: skillIcons.azure },
        { name: 'Docker', icon: skillIcons.docker },
        { name: 'Postman', icon: skillIcons.postman },
        { name: 'Figma', icon: skillIcons.figma },
        { name: 'AWS (EC2)', icon: skillIcons.aws },
        { name: 'Generative AI', icon: skillIcons.genai },
      ],
      color: 'orange',
    },
    {
      title: 'Soft Skills',
      icon: User,
      skills: [
        { name: 'Problem Solving', icon: skillIcons.problem },
        { name: 'Team Collaboration', icon: skillIcons.collaboration },
        { name: 'Communication', icon: skillIcons.communication },
        { name: 'Adaptability', icon: skillIcons.adaptability },
        { name: 'Time Management', icon: skillIcons.time },
      ],
      color: 'red',
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon key={skillIndex} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
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
              variants={fadeInUp}
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
                <motion.div
                  className="grid md:grid-cols-1 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                >
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      variants={fadeInUp}
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-700/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-300 dark:bg-blue-900/50 dark:hover:bg-blue-800/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const carouselRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  const projects = [
    {
      title: 'Local Marketplace Web Application',
      description: 'A full-stack web application built with MERN Stack to connect local buyers and sellers. Features responsive UI with React and Tailwind CSS, backend integration, and deployed on Microsoft Azure.',
      image: localfinds,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Azure'],
      github: 'https://github.com/ard3924/localfinds.git',
      demo: 'https://localfinds-two.vercel.app/'
    },
    {
      title: 'Ignite - Freelance Collaboration Platform',
      description: 'A full-stack project management platform connecting clients with freelance developers for group-based collaborations. Features role-based authentication, task tracking, and cloud-based media management.',
      image: ignite,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Cloudinary', 'Framer Motion', 'Azure'],
      github: 'https://github.com/ard3924/Ignite.git',
      demo: 'https://ignite-fuelyourpassion-b6gjaneubzcyh6h0.canadacentral-01.azurewebsites.net/home'
    },
    {
      title: 'AI Textbook Assistant',
      description: 'A sophisticated RAG application transforming PDF textbooks into interactive AI assistants. Features context-aware answers, strict page-level citations, and external web search fallback using Google Gemini 2.5 Pro.',
      image: aiTextbook,
      technologies: ['Python', 'Streamlit', 'Google Gemini', 'FAISS', 'Sentence-Transformers', 'RAG', 'LangChain'],
      github: 'https://github.com/ard3924/AI_TextBook_Assitant.git',
    },
    {
      title: 'Android Malware Detection System',
      description: 'A Machine Learning powered web application that classifies Android apps as benign or malicious based on permission requests. Features real-time prediction using Logistic Regression and Extra Trees classifiers.',
      image: malware,
      technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Bootstrap', 'Google Charts'],
      github: 'https://github.com/ard3924/Major_Project.git', // Update with actual link
      demo: null // Set to null since this is likely a local project, or add link if deployed
    },
    {
      title: 'FoodDeli - Restaurant Delivery App',
      description: 'A full-stack food ordering platform featuring a dynamic menu system, real-time cart management with Redux, and secure payment processing. Includes a dedicated admin panel for order tracking and inventory management.',
      image: foodDeli,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/ard3924/Minor_Project.git', // Update with actual link
      demo: null // Update with actual link
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>
        <motion.div
          ref={carouselRef}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex space-x-8 p-4"
          >
            {projects.map((project, index) => (
              <motion.div key={index} className="min-w-[90%] md:min-w-[60%] lg:min-w-[50%]">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
          <p>Drag to scroll through projects</p>
        </div>
      </div>
    </motion.section>
  );
};

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Education</h2>
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-700/50 mb-6"
              variants={fadeInUp}
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
        </motion.div>
      </div>
    </motion.section>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Specialist in Full Stack Development (MERN) ',
      issuer: 'ICT Academy of Kerala',
      date: '2025',
      description: 'Intensive program covering MongoDB, Express.js, React, and Node.js for modern web development.',
      logo: <img src={ictAcademyLogo} alt="ICT Academy Kerala" className="w-8 h-8 object-contain" />,
      link: 'https://drive.google.com/file/d/1hr2cpLptC2Q2hEQMrx8AQls5iGQaIqqy/view?usp=drive_link'
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker Inc. & LinkedIn Learning",
      date: "2025",
      description:
        "Mastered containerization concepts including Docker images, containers, volumes, and essential DevOps workflows.",
      logo: <img src={dockerLogo} alt="Docker" className="w-8 h-8 object-contain" />,
      link: 'https://www.linkedin.com/learning/certificates/24f289a97f4c4eff898934f9e5a88c47c6fc6c8cd135e04c266e0c5f78d9d582?trk=share_certificate'
    },
    {
      title: "React Essential Training",
      issuer: "LinkedIn Learning",
      date: "2025",
      description:
        "Covered core React fundamentals including components, hooks, state management, props, and building dynamic UI.",
      logo: <img src={linkedinLogo} alt="LinkedIn Learning" className="w-8 h-8 object-contain" />,
      link: 'https://www.linkedin.com/learning/certificates/b42c273722cd6facf79b895bab4aefd085e82f0c0e1874a6dcb36388a866b8ef'
    },
    {
      title: "React: Creating and Hosting a Full-Stack Site",
      issuer: "LinkedIn Learning",
      date: "2025",
      description:
        "Built a complete full-stack web application and deployed it using modern hosting workflows and best practices.",
      logo: <img src={linkedinLogo} alt="LinkedIn Learning" className="w-8 h-8 object-contain" />,
      link: 'https://www.linkedin.com/learning/certificates/7d79af4723688cb485242933ec61d9c673a43185211bdc9089138a417a4b9a78'
    },
    {
      title: "Node.js Certification",
      issuer: "Unstop",
      date: "2025",
      description:
        "Gained hands-on experience building server-side applications with Node.js, Express, routing, and API development.",
      logo: <img src={unstopLogo} alt="Unstop" className="w-8 h-8 object-contain" />,
      link: 'https://unstop.com/certificate-preview/13835c57-1d7f-43d5-a5a2-04e490818681'
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "2025",
      description:
        "Gained foundational knowledge in generative AI, prompt engineering, machine learning basics, and AI productivity tools.",
      logo: <img src={microsoftLogo} alt="Microsoft" className="w-8 h-8 object-contain" />,
      link: 'https://www.linkedin.com/learning/certificates/abeef268d93d43214b2e097f8446ff6ebdd553006fd9b3c24a9b796d22f3f97d'
    },
    {
      title: "Agile Project Management",
      issuer: "LinkedIn Learning",
      date: "2025",
      description:
        "Learned Agile workflows, sprint planning, issue tracking, and project organization using Jira Cloud for efficient software development.",
      logo: <img src={linkedinLogo} alt="LinkedIn Learning" className="w-8 h-8 object-contain" />,
      link: 'https://www.linkedin.com/learning/certificates/ce89d188cba6ccdcf27abb00294247ad65d783b3d5f76f950ac23066b3be959a?trk=share_certificate'
    },
    {
      title: "Google Developers Group Learning Badge",
      issuer: "Google Developers Group",
      date: "2025",
      description:
        "Earned recognition for completing hands-on learning modules focused on Google Cloud CLI, Generative AI fundamentals, and the Google Gemini ecosystem.",
      logo: <img src={googleDevelopersLogo} alt="Google Developers" className="w-8 h-8 object-contain" />,
      link: 'https://developers.google.com/profile/badges/recognitions/learnings/'
    },
    {
      title: "Gen AI: Navigate the Landscape",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      description:
        "Explored the modern generative AI ecosystem, including model types, real-world use cases, and core concepts behind LLM-driven applications.",
      logo: <img src={googleCloudLogo} alt="Google Cloud" className="w-8 h-8 object-contain" />,
      link: 'https://www.cloudskillsboost.google/public_profiles/32a92ffd-70a1-42aa-8490-b3a80f606d67/badges/18489594?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    }
  ];

  return (
    <motion.section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-700/50 transition-all duration-300 flex flex-col cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex-grow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {cert.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{cert.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.issuer} &bull; {cert.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

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
      initial="hidden"
      whileInView="visible"
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
          variants={fadeInUp}
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
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                variants={fadeInUp}
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
          </motion.div>

          {/* Location */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center bg-white dark:bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-gray-200 dark:border-white/20 shadow-sm">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Trivandrum, Kerala, India</span>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
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

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Optimized Scroll Listener (using passive true for better performance)
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 w-14 h-14 bg-blue-600/80 dark:bg-purple-600/80 text-white backdrop-blur-sm border border-blue-700/50 dark:border-purple-700/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Go to top"
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-20 right-5 w-14 h-14 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <Moon className="text-gray-800" /> : <Sun className="text-yellow-400" />}
      </motion.div>
    </motion.button>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
};

export default App;