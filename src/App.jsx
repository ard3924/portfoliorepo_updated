import React, { useState, useEffect, memo } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Mail, Phone, Github, Linkedin, User, Code, Lightbulb, Target,
  Download, Briefcase, MapPin, Calendar, ExternalLink,
  GraduationCap, Award, Sun, Moon, Menu, X, ArrowUp, Send, Atom, FileCode,
  Palette, Wind, Move, Server, Database, DatabaseZap, Puzzle, Users,
  MessageSquare, RefreshCw, Clock, Bot, ChevronRight, ChevronLeft, Wrench, Cloud, Box,
  PenTool, HandHeart
} from 'lucide-react';
import { useTheme } from './context/ThemeContext.jsx';

// Import project images from assets folder
import localfinds from './assets/localfinds.png';
import localfinds2 from './assets/localfinds2.png';
import localfinds3 from './assets/localfinds3.png';
import localfinds4 from './assets/localfinds4.png';
import localfinds5 from './assets/localfinds5.png';
import localfinds6 from './assets/localfinds6.png';
import localfinds7 from './assets/localfinds7.png';
import localfinds8 from './assets/localfinds8.png';
import ignite from './assets/ignite.png';
import ignite2 from './assets/ignite2.png';
import ignite3 from './assets/ignite3.png';
import ignite4 from './assets/ignite4.png';
import ignite5 from './assets/ignite5.png';
import ignite6 from './assets/ignite6.png';
import ignite7 from './assets/ignite7.png';
import ignite8 from './assets/ignite8.png';
import aiTextbook from './assets/AI TextBook Assistant.png';
import aiTextbook2 from './assets/aitextbookassistent2.png';
import malware from './assets/Malware.png';
import malware1 from './assets/Malware1.png';
import malware3 from './assets/Malware3.png';
import malware4 from './assets/Malware4.png';
import foodDeli from './assets/Food Deli.png';
import foodDeli2 from './assets/Food Deli2.png';
import foodDeli3 from './assets/Food Deli3.png';
import sowMiniApp from './assets/sowminiapp.png';
import sowMiniApp2 from './assets/sowminiapp2.png';
import sowMiniApp3 from './assets/sowminiapp3.png';
import sowMiniApp4 from './assets/sowminiapp4.png';
import aiVoiceAssistant from './assets/aivoiceagent.png';
import aiVoiceAssistant1 from './assets/aivoiceagent1.png';

// Import certificate logo images from assets folder
import ictAcademyLogo from './assets/ICT_Academy_Kerala.webp.png';
import universityLogo from './assets/uok.png';
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
import framerIcon from './assets/framermotion.png';
import bootstrapIcon from './assets/bootstrap1.png';
import materialuiIcon from './assets/mui.png';
import nodejsIcon from './assets/nodejs-original.svg';
import expressIcon from './assets/express-original.svg';
import pythonIcon from './assets/python-original.svg';
import mongodbIcon from './assets/mongodb-original.svg';
import mysqlIcon from './assets/mysql-original.svg';
import postgresIcon from './assets/postgresql-removebg-preview.png';
import neonIcon from './assets/neondb1.png';
import gitIcon from './assets/git-original.svg';
import githubIcon from './assets/GitHub_logo.png';
import vscodeIcon from './assets/vscode-original.svg';
import azureIcon from './assets/azure-original.svg';
import dockerIcon from './assets/docker-original.svg';
import postmanIcon from './assets/getpostman-icon.svg';
import figmaIcon from './assets/figma-original.svg';
import awsIcon from './assets/amazonwebservices-original-wordmark.svg';
import renderIcon from './assets/render.jpg';
import stitchuiIcon from './assets/stitichUI.png';
import vercelIcon from './assets/vercel.png';
import geminilogo from './assets/gemini-removebg-preview.png';
import cursorlogo from './assets/cursorlogo-removebg-preview.png';
import antigravitylogo from './assets/antigravity.png';

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
      className="relative min-h-screen flex items-center justify-center pt-24 md:pt-0 bg-white dark:bg-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ willChange: 'opacity' }}
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[20%] right-[-10%] w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
                  'Associate Software Engineer at EY GDS',
                  2000,
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
      description: 'Building scalable enterprise and web solutions'
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
      description: 'Thriving in global, cross-functional team environments'
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
              Innovative Computer Science graduate and Associate Software Engineer at EY GDS, passionate about crafting digital experiences that matter. Specializing in <span className="font-semibold text-blue-600">Full Stack Development</span> and <span className="font-semibold text-purple-600">Generative AI</span>, I build scalable solutions ranging from enterprise services to intelligent assistants. Driven by curiosity and collaboration, I thrive on turning complex challenges into elegant, user-centric innovations.
            </p>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <a
              href="/autoCV (1).pdf"
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
  postgreSQL: <img src={postgresIcon} alt="PostgreSQL" className="w-12 h-12" />,
  neon: <img src={neonIcon} alt="Neon DB" className="w-12 h-12" />,
  git: <img src={gitIcon} alt="Git" className="w-12 h-12" />,
  vscode: <img src={vscodeIcon} alt="VS Code" className="w-12 h-12" />,
  azure: <img src={azureIcon} alt="Microsoft Azure" className="w-12 h-12" />,
  docker: <img src={dockerIcon} alt="Docker" className="w-12 h-12" />,
  postman: <img src={postmanIcon} alt="Postman" className="w-12 h-12" />,
  figma: <img src={figmaIcon} alt="Figma" className="w-12 h-12" />,
  aws: <img src={awsIcon} alt="AWS" className="w-12 h-12 dark:invert" />,
  genai: <img src={geminilogo} alt="Generative AI" className="w-12 h-12" />,
  github: <img src={githubIcon} alt="GitHub" className="w-12 h-12" />,
  render: <img src={renderIcon} alt="Render" className="w-12 h-12" />,
  stitchui: <img src={stitchuiIcon} alt="Stitch UI" className="w-12 h-12" />,
  vercel: <img src={vercelIcon} alt="Vercel" className="w-12 h-12" />,
  problem: <Puzzle className="w-12 h-12 text-blue-500" />,
  collaboration: <Users className="w-12 h-12 text-blue-500" />,
  communication: <MessageSquare className="w-12 h-12 text-blue-500" />,
  adaptability: <RefreshCw className="w-12 h-12 text-blue-500" />,
  time: <Clock className="w-12 h-12 text-blue-500" />,
  volunteering: <HandHeart className="w-12 h-12 text-blue-500" />,
  bootstrap: <img src={bootstrapIcon} alt="Bootstrap" className="w-12 h-15" />,
  materialui: <img src={materialuiIcon} alt="Material UI" className="w-12 h-12" />,
  cursor: <img src={cursorlogo} alt="Cursor AI" className="w-15 h-12" />,
  antigravity: <img src={antigravitylogo} alt="AntiGravity AI" className="w-12 h-12" />,
  strategy: <Target className="w-12 h-12 text-blue-500" />,
  consulting: <Briefcase className="w-12 h-12 text-blue-500" />,
  innovation: <Lightbulb className="w-12 h-12 text-blue-500" />,
};

const Skills = memo(() => {
  const getCategoryGradient = (color) => {
    const gradients = {
      blue: 'from-blue-600 to-indigo-600',
      green: 'from-emerald-600 to-teal-600',
      cyan: 'from-cyan-600 to-blue-600',
      orange: 'from-orange-500 to-red-600',
      pink: 'from-pink-500 to-rose-600',
      purple: 'from-purple-600 to-fuchsia-600',
    };
    return gradients[color] || 'from-blue-600 to-purple-600';
  };

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
        { name: 'Bootstrap', icon: skillIcons.bootstrap },
        { name: 'Material UI', icon: skillIcons.materialui },
      ],
      color: 'blue',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: skillIcons.nodejs },
        { name: 'Express.js', icon: skillIcons.express },
        { name: 'Python', icon: skillIcons.python },
        { name: 'MongoDB', icon: skillIcons.mongodb },
        { name: 'SQL', icon: skillIcons.sql },
        { name: 'PostgreSQL', icon: skillIcons.postgreSQL },
        { name: 'Neon DB', icon: skillIcons.neon },
      ],
      color: 'green',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'Microsoft Azure', icon: skillIcons.azure },
        { name: 'Docker', icon: skillIcons.docker },
        { name: 'AWS (EC2)', icon: skillIcons.aws },
        { name: 'Render', icon: skillIcons.render },
        { name: 'Vercel', icon: skillIcons.vercel },
      ],
      color: 'cyan',
    },
    {
      title: 'Tools & AI',
      icon: Bot,
      skills: [
        { name: 'Git', icon: skillIcons.git },
        { name: 'GitHub', icon: skillIcons.github },
        { name: 'VS Code', icon: skillIcons.vscode },
        { name: 'Postman', icon: skillIcons.postman },
        { name: 'Figma', icon: skillIcons.figma },
        { name: 'Cursor AI', icon: skillIcons.cursor },
        { name: 'Generative AI', icon: skillIcons.genai },
        { name: 'AntiGravity AI', icon: skillIcons.antigravity },
        { name: 'Stitch UI', icon: skillIcons.stitchui },
      ],
      color: 'orange',
    },
    {
      title: 'Consulting & Strategy',
      icon: Briefcase,
      skills: [
        { name: 'Strategic Planning', icon: skillIcons.strategy },
        { name: 'Business Consulting', icon: skillIcons.consulting },
        { name: 'Innovation', icon: skillIcons.innovation },
        { name: 'Agile & Scrum', icon: skillIcons.adaptability },
      ],
      color: 'purple',
    },
    {
      title: 'Soft Skills',
      icon: User,
      skills: [
        { name: 'Volunteering', icon: skillIcons.volunteering },
        { name: 'Team Collaboration', icon: skillIcons.collaboration },
        { name: 'Communication', icon: skillIcons.communication },
        { name: 'Adaptability', icon: skillIcons.adaptability },
        { name: 'Time Management', icon: skillIcons.time },
      ],
      color: 'pink',
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryGradient(category.color)} rounded-xl flex items-center justify-center mr-4 shadow-md`}>
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
      title: 'Associate Software Engineer',
      company: 'EY Global Delivery Services (EY GDS)',
      location: 'Technopark Campus & Kinfra IT Park, Trivandrum, Kerala',
      period: 'Feb 2026 – Present',
      type: 'Full-time',
      achievements: [
        {
          title: 'Global Consulting & Service Delivery',
          description: 'Partnering with the Consulting service line to deliver innovative, scalable business services that support EY’s global operations and drive digital transformation for international clients.',
          tech: ['Consulting', 'Scalable Services', 'Digital Transformation']
        },
        {
          title: 'Advanced Technology Integration',
          description: 'Utilizing advanced technologies such as automation, AI, and cloud-based delivery models to engineer efficient solutions that solve complex business challenges.',
          tech: ['Automation', 'Artificial Intelligence', 'Cloud Delivery']
        },
        {
          title: 'Global Collaboration & Value Creation',
          description: 'Collaborating with diverse, cross-functional global teams to foster innovation, build client trust, and deliver sustainable long-term value.',
          tech: ['Global Collaboration', 'Agile', 'Client Value']
        }
      ]
    },
    {
      title: 'Project Intern',
      company: 'Track Genesis',
      location: 'Trivandrum, Kerala',
      period: 'Oct 2024 – Nov 2024',
      type: 'Internship',
      achievements: [
        {
          title: 'Full-Stack Application Development',
          description: 'Architected and built a robust Local Marketplace platform using the MERN stack. Engineered secure RESTful APIs and real-time features to facilitate seamless transactions between local buyers and sellers.',
          tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js']
        },
        {
          title: 'Frontend Engineering & UX Design',
          description: 'Developed a high-performance, responsive user interface using Tailwind CSS. Implemented reusable components and optimized rendering paths to ensure a consistent and engaging experience across all devices.',
          tech: ['Tailwind CSS', 'Responsive Design', 'UI/UX']
        },
        {
          title: 'Cloud Infrastructure & Deployment',
          description: 'Orchestrated the deployment of backend services on Microsoft Azure. Configured scalable cloud resources and managed integration pipelines to ensure high availability and reliability of the application.',
          tech: ['Azure', 'Cloud Computing', 'CI/CD']
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
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg mr-5 flex-shrink-0">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">{exp.company}</h4>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
                   <span className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full">
                      {exp.type}
                   </span>
                   <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {exp.period}
                   </div>
                   <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {exp.location}
                   </div>
                </div>
              </div>

              <div className="space-y-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-5 border-l-4 border-blue-500 dark:border-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                    <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{achievement.title}</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">{achievement.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.tech.map((tech, tIndex) => (
                        <span key={tIndex} className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-700/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col h-full cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" 
          className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 text-gray-900 text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="pt-4 mt-auto border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} className="mr-1.5" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} className="mr-1.5" />
                Demo
              </a>
            )}
          </div>
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Details <ChevronRight size={14} className="ml-0.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = project.images || [project.image];
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <motion.div
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div 
          className="w-full lg:w-3/5 bg-gray-100 dark:bg-black relative flex items-center justify-center min-h-[250px] sm:min-h-[350px] lg:h-auto group"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${project.title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-contain max-h-[50vh] lg:max-h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/5 p-6 lg:p-8 overflow-y-auto bg-white dark:bg-gray-900">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
     title: 'LocalFinds – Local Marketplace Platform',
  description: 'LocalFinds is a full-stack e-commerce marketplace platform designed to connect local buyers and sellers within the same community. The application supports multi-role authentication (buyers, sellers, and admins), real-time chat and notifications using Socket.io, secure JWT-based authentication with OTP-driven password recovery, and a complete order lifecycle with invoice generation. Sellers are provided with dashboards for product, order, and business management, while admins can moderate users, products, and platform activity. The platform is built with scalability, security, and real-world marketplace workflows in mind.',
  image: localfinds,
  images: [localfinds, localfinds2, localfinds3, localfinds4, localfinds5, localfinds6, localfinds7, localfinds8],
  technologies: [
    'React',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Azure',
    'Socket.io',
    'JWT',
    'Cloudinary',
    'PDFKit'
  ],
      github: 'https://github.com/ard3924/localfinds.git',
      demo: 'https://localfinds-two.vercel.app/'
    },
    {
      title: 'Ignite - Freelance Collaboration Platform',
  description: 'Ignite is a full-stack MERN web application designed to connect clients with freelance developers for group-based projects. The platform supports role-based authentication, project posting, applicant management, task tracking, and a complete work submission and review workflow. It features secure JWT-based authentication, RESTful APIs, cloud-based media handling with Cloudinary, and a responsive, interactive React frontend. Built with scalability and real-world collaboration workflows in mind.',
      image: ignite,
      images: [ignite, ignite2, ignite3, ignite4, ignite5, ignite6, ignite7, ignite8],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Cloudinary', 'Framer Motion', 'Azure'],
      github: 'https://github.com/ard3924/Ignite.git',
      demo: 'https://ignite-woad.vercel.app/home'
    },
    {
      title: 'AI Textbook Assistant – RAG-Based Academic Q&A System',
      description: 'AI Textbook Assistant is a Retrieval-Augmented Generation (RAG) application that transforms any PDF textbook into an interactive academic assistant. The system enables users to ask complex, textbook-specific questions and receive detailed, context-aware answers strictly grounded in the source material, complete with page-level citations. It leverages a local Sentence-Transformer model for cost-free embeddings, a FAISS vector store for efficient retrieval, and Google Gemini 2.5 Pro for high-quality generation. The application also supports proactive follow-up questions, configurable retrieval parameters, and optional external web search when textbook knowledge is insufficient.',
      image: aiTextbook,
      images: [aiTextbook, aiTextbook2],
      technologies: ['Python', 'Streamlit', 'Google Gemini', 'FAISS', 'Sentence-Transformers', 'RAG', 'LangChain'],
      github: 'https://github.com/ard3924/AI_TextBook_Assitant.git',
    },
    {
  title: 'SOW Mini App – Login, Terms & Pricelist',
  description: 'A full-stack single-page web application developed as part of a Statement of Work (SOW) for a company. The app was built to closely match a real production system specification, including JWT-based authentication, multilingual support (EN/SE) powered by PostgreSQL, a responsive UI across mobile, tablet, and desktop, and an editable pricelist with live data persistence. Deployed on Linux-based cloud infrastructure but do to free-tier limitations switched the backend to render and frontend to vercel.',
  image: sowMiniApp,
  images: [sowMiniApp, sowMiniApp2, sowMiniApp3, sowMiniApp4],
  technologies: ['React.js (Vite)', 'Vanilla CSS', 'Node.js', 'Express.js', 'PostgreSQL (Neon)', 'JWT', 'Render'],
  github: 'https://github.com/ard3924/Mini_app_master',
  demo: 'https://mini-app-master.onrender.com/'
},
{
 title: 'Voice-Based Restaurant Booking Assistant',
  description: 'An intelligent voice-driven restaurant booking assistant that enables hands-free table reservations through natural conversation. The system uses browser-based speech recognition and synthesis to guide users through a structured booking flow, collecting preferences, special requests, and confirmation details. It integrates real-time weather data to recommend indoor or outdoor seating, supports full CRUD booking management, and maintains conversational session state for a smooth user experience. Built with a modern React frontend and a Node.js backend, Vaiu AI demonstrates applied conversational AI, API integration, and real-world booking workflows.',
  image: aiVoiceAssistant,
  images: [aiVoiceAssistant, aiVoiceAssistant1],
  technologies: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Web Speech API',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'JWT',
    'OpenWeatherMap API'
  ],
  github: 'https://github.com/ard3924/AI_Voice_Assitant.git',
}
,
    {
      title: 'Android Malware Detection – Permission-Based ML Classifier',
  description: 'A web-based machine learning application that detects whether an Android application is malicious or benign based on the permissions it requests. The system uses pre-trained classification models, including Logistic Regression and Extra Trees Classifier, to provide real-time predictions through an intuitive Flask-based interface. Users can manually select permissions to simulate application behavior, visualize prediction outcomes, compare model performance, and export results as downloadable PDF reports. The project demonstrates applied machine learning for cybersecurity use cases with a focus on interpretability and usability.',
      image: malware,
      images: [malware, malware1, malware3, malware4],
      technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Bootstrap', 'Google Charts'],
      github: 'https://github.com/ard3924/Major_Project.git',
      demo: null
    },
    {
      title: 'FoodDeli - Restaurant Delivery App',
  description: 'A full-stack food delivery application that enables users to browse food items, manage carts, place orders, and complete secure payments using Stripe. The platform includes a customer-facing frontend, a dedicated admin panel for managing food items and orders, and a robust backend API with JWT-based authentication. Built with a scalable MERN architecture, the app supports image uploads, order history tracking, and responsive design for seamless use across devices.',
      image: foodDeli,
      images: [foodDeli, foodDeli2, foodDeli3],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/ard3924/Minor_Project.git',
      demo: null
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const Education = () => {
  const education = [
    {
      institution: 'ICT Academy of Kerala',
      degree: 'Industry Readiness Program in Full Stack Development (MERN)',
      period: 'June 2025 – Oct 2025',
      description: 'Intensive training program focusing on modern web development technologies including MongoDB, Express.js, React, and Node.js.',
      logo: ictAcademyLogo
    },
    {
      institution: 'University Of Kerala',
      degree: 'Bachelor of Computer Science',
      period: 'Sept 2022 – May 2025',
      description: 'Core computer science curriculum covering algorithms, data structures, software engineering, and database management.',
      logo: universityLogo
    }
  ];

  return (
    <motion.section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto grid gap-8"
          variants={staggerContainer}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300">
                    <img src={edu.logo} alt={edu.institution} className={`w-full h-full object-contain ${(edu.institution.includes('ICT') || edu.institution.includes('University')) ? '' : 'rounded-2xl'}`} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full mt-2 md:mt-0 w-fit">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {edu.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{edu.institution}</h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
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
      logo: <img src={ictAcademyLogo} alt="ICT Academy Kerala" className="w-full h-full object-contain" />,
      link: 'https://drive.google.com/file/d/1hr2cpLptC2Q2hEQMrx8AQls5iGQaIqqy/view?usp=drive_link'
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker Inc. & LinkedIn Learning",
      date: "2025",
      description:
        "Mastered containerization concepts including Docker images, containers, volumes, and essential DevOps workflows.",
      logo: <img src={dockerLogo} alt="Docker" className="w-full h-full object-contain rounded-2xl" />,
      link: 'https://www.linkedin.com/learning/certificates/24f289a97f4c4eff898934f9e5a88c47c6fc6c8cd135e04c266e0c5f78d9d582?trk=share_certificate'
    },
    {
      title: "React Essential Training",
      issuer: "LinkedIn Learning",
      date: "2025",
      description:
        "Covered core React fundamentals including components, hooks, state management, props, and building dynamic UI.",
      logo: <img src={linkedinLogo} alt="LinkedIn Learning" className="w-full h-full object-contain rounded-2xl" />,
      link: 'https://www.linkedin.com/learning/certificates/b42c273722cd6facf79b895bab4aefd085e82f0c0e1874a6dcb36388a866b8ef'
    },
    {
      title: "React: Creating and Hosting a Full-Stack Site",
      issuer: "LinkedIn Learning",
      date: "2025",
      description:
        "Built a complete full-stack web application and deployed it using modern hosting workflows and best practices.",
      logo: <img src={linkedinLogo} alt="LinkedIn Learning" className="w-full h-full object-contain rounded-2xl" />,
      link: 'https://www.linkedin.com/learning/certificates/7d79af4723688cb485242933ec61d9c673a43185211bdc9089138a417a4b9a78'
    },
    {
      title: "Node.js Certification",
      issuer: "Unstop",
      date: "2025",
      description:
        "Gained hands-on experience building server-side applications with Node.js, Express, routing, and API development.",
      logo: <img src={unstopLogo} alt="Unstop" className="w-full h-full object-contain rounded-2xl" />,
      link: 'https://unstop.com/certificate-preview/13835c57-1d7f-43d5-a5a2-04e490818681'
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "2025",
      description:
        "Gained foundational knowledge in generative AI, prompt engineering, machine learning basics, and AI productivity tools.",
      logo: <img src={microsoftLogo} alt="Microsoft" className="w-full h-full object-contain rounded-2xl" />,
      link: 'https://www.linkedin.com/learning/certificates/abeef268d93d43214b2e097f8446ff6ebdd553006fd9b3c24a9b796d22f3f97d'
    },
    {
      title: "Agile Project Management",
      issuer: "LinkedIn Learning",
      date: "2025",
      description:
        "Learned Agile workflows, sprint planning, issue tracking, and project organization using Jira Cloud for efficient software development.",
      logo: <img src={linkedinLogo} alt="LinkedIn Learning" className="w-full h-full object-contain rounded-2xl" />,
      link: 'https://www.linkedin.com/learning/certificates/ce89d188cba6ccdcf27abb00294247ad65d783b3d5f76f950ac23066b3be959a?trk=share_certificate'
    },
    {
      title: "Google Developers Group Learning Badge",
      issuer: "Google Developers Group",
      date: "2025",
      description:
        "Earned recognition for completing hands-on learning modules focused on Google Cloud CLI, Generative AI fundamentals, and the Google Gemini ecosystem.",
      logo: <img src={googleDevelopersLogo} alt="Google Developers" className="w-full h-full object-contain rounded-2xl" />,
      link: 'https://developers.google.com/profile/badges/recognitions/learnings/'
    },
    {
      title: "Gen AI: Navigate the Landscape",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      description:
        "Explored the modern generative AI ecosystem, including model types, real-world use cases, and core concepts behind LLM-driven applications.",
      logo: <img src={googleCloudLogo} alt="Google Cloud" className="w-full h-full object-contain rounded-2xl scale-125" />,
      link: 'https://www.cloudskillsboost.google/public_profiles/32a92ffd-70a1-42aa-8490-b3a80f606d67/badges/18489594?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    }
  ];

  return (
    <motion.section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col h-full group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {cert.logo}
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h3>
              
              <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                <Award className="w-4 h-4 mr-1.5 text-blue-500" />
                {cert.issuer}
                <span className="mx-2">•</span>
                {cert.date}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                {cert.description}
              </p>
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
            Let's connect and discuss technology, innovation, and shared interests
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
              I'm always open to connecting with professionals and discussing interesting projects.
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

// --- Main App Component ---

const App = () => {
  return (
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
  );
};

export default App;
