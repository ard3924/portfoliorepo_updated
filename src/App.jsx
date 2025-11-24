import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Phone, Github, Linkedin, User, Code, Lightbulb, Target, Download, Briefcase, MapPin, Calendar, ChevronRight, ExternalLink, GraduationCap, Award, Sun, Moon, Menu, X, ArrowUp } from 'lucide-react';

// Theme Context
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

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Navbar Component
const Navbar = () => {
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
        const handleScroll = () => {
            const sections = navLinks.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveLink(navLinks[i].href);
                    break;
                }
            }

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setActiveLink('#contact');
            }
        };

        const unlisten = scrollY.onChange((latest) => {
            handleScroll();
            const isScrollingDown = latest > scrollY.getPrevious();
            if (latest > 150 && isScrollingDown && isOpen === false) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            setScrolled(latest > 50);
        });

        window.addEventListener('scroll', handleScroll);
        return () => { unlisten(); window.removeEventListener('scroll', handleScroll); };
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

        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            variants={navVariants}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
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
                    <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                        {theme === 'light' ? <Moon size={20} className="text-gray-800" /> : <Sun size={20} className="text-yellow-400" />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 mr-4">
                        {theme === 'light' ? <Moon size={20} className="text-gray-800" /> : <Sun size={20} className="text-yellow-400" />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="md:hidden pb-4"
                >
                    <div className="flex flex-col items-center space-y-4">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
