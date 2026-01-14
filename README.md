# Aravind R - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer and AI Enthusiast.

## 🚀 Live Demo

[View Portfolio](https://portfoliorepo-updated-tdjh.vercel.app/)

## 📋 Overview

This is a single-page application built with React that features smooth animations, dark/light theme toggle, and a mobile-first responsive design. The portfolio highlights my journey as a Computer Science graduate with expertise in MERN stack development and Generative AI.

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting
- **Vite** - Development and build tooling

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Theme** - Automatic theme detection with manual toggle
- **Smooth Animations** - Framer Motion powered transitions
- **Interactive Elements** - Hover effects and micro-interactions
- **Performance Optimized** - Lazy loading and efficient rendering
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessibility** - ARIA labels and keyboard navigation

## 🔄 Recent Improvements

- **Enhanced SEO** - Added comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Performance Optimization** - Implemented lazy loading for project images to improve initial load times
- **Code Quality** - Removed duplicate code and cleaned up ThemeContext implementation
- **Search Engine Optimization** - Added robots.txt and XML sitemap for better crawling
- **Bundle Optimization** - Cleaned up redundant CSS imports and optimized asset loading

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Aravind_R_Resume.pdf
│   └── IMG_0809 (1).jpg
├── src/
│   ├── assets/          # Images, icons, and SVGs
│   ├── context/         # React context providers
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── Dockerfile           # Docker configuration
├── nginx.conf          # NGINX configuration
├── robots.txt          # Search engine crawling instructions
├── sitemap.xml         # XML sitemap for search engines
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ard3924/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio .
```

### Run Container

```bash
docker run -p 80:80 portfolio
```

The application will be available at `http://localhost`

## 📱 Sections

- **Hero** - Introduction with animated typing effect
- **About** - Personal summary and key highlights
- **Skills** - Technical skills categorized by type
- **Experience** - Work experience and achievements
- **Projects** - Featured projects with live demos
- **Education** - Academic background
- **Certifications** - Professional certifications
- **Contact** - Contact information and social links

## 🎨 Customization

### Theme Colors

The theme uses a blue-to-purple gradient. To customize:

1. Update Tailwind classes in components
2. Modify gradient definitions in `src/App.jsx`

### Content Updates

- Update personal information in `src/App.jsx`
- Replace images in `public/` and `src/assets/`
- Modify project data and links

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial page load
- **SEO**: Proper meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📞 Contact

**Aravind R**
- Email: aravindr3924@gmail.com
- LinkedIn: [Aravind R](https://linkedin.com/in/-aravind-r)
- GitHub: [ard3924](https://github.com/ard3924)
- Phone: +91 9745251033

---

Built with ❤️ using React and Tailwind CSS
