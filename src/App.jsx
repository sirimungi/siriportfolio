import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Theme Toggle Component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-lg bg-lavender/20 hover:bg-lavender/30 dark:bg-lavender-dark/20 dark:hover:bg-lavender-dark/30 transition-all"
      aria-label="Toggle theme">
      {isDark ? (
        <svg className="w-5 h-5 text-lavender" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-lavender-dark" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </motion.button>
  );
}

// Navigation Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];
  
  return (
    <nav className="fixed top-0 w-full glassmorphism z-50 border-b border-lavender/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-3xl font-bold gradient-text">
          SM
        </motion.a>
        
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-dusty-dark dark:text-beige hover:text-lavender dark:hover:text-lavender-light transition-all font-medium relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lavender to-lavender-light group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-dusty-dark dark:text-beige hover:text-lavender transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glassmorphism border-t border-lavender/20">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-dusty-dark dark:text-beige hover:text-lavender dark:hover:text-lavender-light hover:bg-lavender/10 transition-all">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

// Section Component
function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-20 px-6 max-w-6xl mx-auto ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center">
        <span className="gradient-text">{title}</span>
      </motion.h2>
      {children}
    </section>
  );
}

// Project Card Component
function ProjectCard({ title, description, tech, github, demo, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`card-hover glassmorphism rounded-2xl p-6 relative overflow-hidden ${
        featured ? 'glow-border shadow-2xl shadow-lavender/30' : 'border border-lavender/20'
      }`}>
      {featured && (
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-bold text-paper dark:text-overcast-dark bg-gradient-to-r from-lavender to-lavender-light rounded-full shadow-lg">
          ⭐ Featured
        </motion.span>
      )}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lavender/10 to-transparent rounded-full blur-3xl"></div>
      <h3 className="text-xl font-bold mb-3 text-overcast-dark dark:text-paper relative z-10">{title}</h3>
      <p className="text-dusty-dark dark:text-beige mb-4 leading-relaxed relative z-10">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {tech.map(t => (
          <span key={t} className="px-3 py-1.5 text-xs bg-lavender/20 dark:bg-lavender-dark/20 text-lavender-dark dark:text-lavender-light rounded-full border border-lavender/30 hover:bg-lavender/30 dark:hover:bg-lavender-dark/30 transition-all">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 relative z-10">
        {github && (
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lavender to-lavender-light text-paper dark:text-overcast-dark rounded-lg hover:shadow-lg hover:shadow-lavender/50 transition-all font-medium text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Code
          </motion.a>
        )}
        {demo && (
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-lavender text-lavender-dark dark:text-lavender-light rounded-lg hover:bg-lavender/10 transition-all font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

// Skill Category Component
function SkillCategory({ title, skills, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glassmorphism rounded-2xl p-6 border border-lavender/20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <motion.span 
          className="text-3xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
          {icon}
        </motion.span>
        <h3 className="text-xl font-bold bg-gradient-to-r from-overcast-dark to-lavender-dark dark:from-paper dark:to-lavender bg-clip-text text-transparent">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 relative z-10">
        {skills.map((skill, index) => (
          <motion.span 
            key={skill} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-3 py-2 bg-lavender/20 dark:bg-lavender-dark/20 text-dusty-dark dark:text-beige rounded-lg text-sm border border-lavender/30 hover:border-lavender hover:text-lavender-dark dark:hover:text-lavender-light hover:bg-lavender/30 dark:hover:bg-lavender-dark/30 transition-all cursor-default">
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section with Frame */}
      <section id="home" className="min-h-screen flex justify-center items-center px-4 md:px-6 pt-20 pb-8 relative overflow-hidden">
        {/* Subtle Floating Geometric Shapes - Corners Only */}
        <div className="absolute top-32 left-8 w-16 h-16 border-2 border-lavender/30 rotate-12 animate-float"></div>
        <div className="absolute top-32 right-8 w-12 h-12 border-2 border-lavender-light/30 -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-8 w-14 h-14 bg-lavender/10 rotate-45 animate-pulse-slow"></div>
        
        {/* Main Hero Frame Container */}
        <div className="hero-frame relative w-full max-w-6xl rounded-3xl p-6 md:p-10 lg:p-12 bg-gradient-to-br from-beige-light/80 to-paper/90 dark:from-overcast/80 dark:to-overcast-dark/90 backdrop-blur-sm">
          
          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6">
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-dusty dark:text-beige text-lg font-light tracking-widest">
                Hello 👋
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight">
                I'm <span className="text-overcast dark:text-paper">Siri Mungi</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-dusty-dark dark:text-beige-light font-medium">
                A <span className="gradient-text font-bold">Software Engineer</span> specializing in
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-dusty dark:text-beige leading-relaxed max-w-xl">
                <span className="text-lavender-dark dark:text-lavender-light font-semibold">Backend & Distributed Systems</span> • Cloud-Native Architecture • 
                Microservices • <span className="text-lavender dark:text-lavender-light">Financial Services</span> • Banking Systems
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-6">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-lavender to-lavender-light text-paper dark:text-overcast-dark font-bold text-lg rounded-xl shadow-lg shadow-lavender/50 hover:shadow-lavender/70 transition-all">
                  Learn more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Modern Developer Workspace Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center items-center">
              
              {/* Modern Abstract Developer Illustration */}
              <svg viewBox="0 0 600 600" className="w-full max-w-md md:max-w-lg">
                <defs>
                  <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="dark:stop-lavender-light stop-lavender-dark" stopOpacity="0.8"/>
                    <stop offset="100%" className="dark:stop-lavender-dark stop-lavender" stopOpacity="0.6"/>
                  </linearGradient>
                  <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="dark:stop-lavender-light stop-lavender-dark" stopOpacity="0.3"/>
                    <stop offset="100%" className="dark:stop-dusty stop-dusty-light" stopOpacity="0.1"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Floating Code Window */}
                <g transform="translate(300, 250)">
                  {/* Main code window */}
                  <motion.rect 
                    x="-180" y="-120" width="360" height="240" 
                    className="fill-paper dark:fill-overcast-dark" 
                    stroke="url(#codeGradient)" 
                    strokeWidth="3" 
                    rx="12"
                    initial={{ y: -120 }}
                    animate={{ y: [-120, -115, -120] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Window header */}
                  <rect x="-180" y="-120" width="360" height="40" className="fill-lavender/20 dark:fill-lavender-dark/20" rx="12"/>
                  <circle cx="-150" cy="-100" r="6" className="fill-dusty-dark dark:fill-dusty-light"/>
                  <circle cx="-130" cy="-100" r="6" className="fill-dusty dark:fill-dusty-light"/>
                  <circle cx="-110" cy="-100" r="6" className="fill-lavender dark:fill-lavender-light"/>
                  
                  {/* Code lines with animation */}
                  <g className="code-lines">
                    <rect x="-160" y="-60" width="120" height="8" className="fill-lavender dark:fill-lavender-light" rx="4" opacity="0.8">
                      <animate attributeName="width" values="120;140;120" dur="3s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="-160" y="-40" width="200" height="8" className="fill-dusty dark:fill-dusty-light" rx="4" opacity="0.8">
                      <animate attributeName="width" values="200;180;200" dur="2.5s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="-160" y="-20" width="160" height="8" className="fill-lavender-dark dark:fill-lavender" rx="4" opacity="0.8">
                      <animate attributeName="width" values="160;190;160" dur="2.8s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="-160" y="0" width="180" height="8" className="fill-dusty-dark dark:fill-beige" rx="4" opacity="0.8">
                      <animate attributeName="width" values="180;160;180" dur="3.2s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="-160" y="20" width="140" height="8" className="fill-lavender dark:fill-lavender-light" rx="4" opacity="0.8">
                      <animate attributeName="width" values="140;170;140" dur="2.7s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="-160" y="40" width="210" height="8" className="fill-dusty dark:fill-dusty-light" rx="4" opacity="0.8">
                      <animate attributeName="width" values="210;190;210" dur="3.1s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Cursor blinking */}
                  <rect x="60" y="36" width="3" height="12" className="fill-lavender-dark dark:fill-lavender-light">
                    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                  </rect>
                </g>
                
                {/* Floating geometric shapes representing data/cloud */}
                <g opacity="0.6">
                  {/* Hexagon cluster - top right */}
                  <motion.g
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                    <path d="M 450 100 L 470 110 L 470 130 L 450 140 L 430 130 L 430 110 Z" 
                          className="fill-lavender/30 dark:fill-lavender-light/20" 
                          stroke="url(#codeGradient)" strokeWidth="2"/>
                    <path d="M 480 120 L 495 128 L 495 144 L 480 152 L 465 144 L 465 128 Z" 
                          className="fill-dusty/30 dark:fill-dusty-light/20" 
                          stroke="url(#codeGradient)" strokeWidth="2"/>
                  </motion.g>
                  
                  {/* Circle cluster - bottom left */}
                  <motion.g
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                    <circle cx="120" cy="480" r="25" className="fill-lavender/20 dark:fill-lavender-dark/20" 
                            stroke="url(#codeGradient)" strokeWidth="2"/>
                    <circle cx="170" cy="500" r="18" className="fill-dusty/20 dark:fill-dusty-light/20" 
                            stroke="url(#codeGradient)" strokeWidth="2"/>
                  </motion.g>
                  
                  {/* Triangle - top left */}
                  <motion.path 
                    d="M 100 150 L 130 150 L 115 120 Z" 
                    className="fill-lavender-dark/20 dark:fill-lavender/20" 
                    stroke="url(#codeGradient)" strokeWidth="2"
                    animate={{ rotate: [0, 10, 0], y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                </g>
                
                {/* Binary/data streams in background */}
                <g opacity="0.15" className="text-lavender dark:text-lavender-light">
                  <text x="50" y="100" className="fill-current text-xs font-mono">01001000</text>
                  <text x="480" y="180" className="fill-current text-xs font-mono">11010110</text>
                  <text x="80" y="380" className="fill-current text-xs font-mono">10110101</text>
                  <text x="500" y="420" className="fill-current text-xs font-mono">01110011</text>
                </g>
                
                {/* Connecting lines/network effect */}
                <g opacity="0.3" stroke="url(#codeGradient)" strokeWidth="1.5" fill="none">
                  <motion.line 
                    x1="450" y1="120" x2="320" y2="200"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.line 
                    x1="120" y1="480" x2="260" y2="370"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                </g>
              </svg>
            </motion.div>
          </div>
          
          {/* Social Icons - Bottom Center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-6 mt-8 lg:hidden">
            <motion.a 
              href="https://github.com/sirimungi" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-dusty dark:text-beige hover:text-lavender dark:hover:text-lavender-light transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/siri-mungi" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-dusty dark:text-beige hover:text-lavender dark:hover:text-lavender-light transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="mailto:Msirimungi9@gmail.com"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-dusty dark:text-beige hover:text-lavender dark:hover:text-lavender-light transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto">
          <p className="text-lg text-dusty-dark dark:text-beige leading-relaxed mb-6">
            <span className="text-lavender-dark dark:text-lavender-light font-semibold">Software Engineer</span> with <span className="text-lavender-dark dark:text-lavender-light font-semibold">4+ years</span> building backend services and integration-heavy platforms across <span className="text-lavender-dark dark:text-lavender-light">research</span> and <span className="text-lavender-dark dark:text-lavender-light">enterprise financial systems</span>. Hands-on ownership from design and implementation through <span className="text-dusty-dark dark:text-beige-light">testing, CI/CD, and production support</span>.
          </p>
          <p className="text-lg text-dusty-dark dark:text-beige leading-relaxed mb-6">
            Known for untangling legacy systems (clearer interfaces, better tests, more predictable releases) and shipping reliable software under real constraints — from <span className="text-lavender-dark dark:text-lavender-light">financial middleware</span> handling thousands of <span className="text-lavender-dark dark:text-lavender-light">banking transactions</span> per hour to <span className="text-lavender-dark dark:text-lavender-light">VR research platforms</span> coordinating distributed experiments on <span className="text-lavender-dark dark:text-lavender-light">AWS</span>.
          </p>
          <p className="text-lg text-dusty-dark dark:text-beige leading-relaxed">
            <span className="text-lavender-dark dark:text-lavender-light">M.S. in Computer Science</span> (GPA 3.9/4.0) with focus on <span className="text-dusty-dark dark:text-beige-light">Machine Learning & Software Engineering</span>. Specialize in <span className="text-lavender-dark dark:text-lavender-light">Java/Spring Boot</span>, <span className="text-lavender-dark dark:text-lavender-light">Node.js/Express</span>, <span className="text-lavender-dark dark:text-lavender-light">AWS cloud services</span>, <span className="text-lavender-dark dark:text-lavender-light">microservices architecture</span>, and <span className="text-lavender-dark dark:text-lavender-light">distributed systems</span>.
          </p>
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" className="bg-lavender/5 dark:bg-overcast/30">
        <div className="space-y-12 max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-lavender">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-lavender rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper">Software Developer</h3>
              <p className="text-lavender-dark dark:text-lavender-light font-semibold">University of Central Florida — VERA Lab</p>
              <p className="text-dusty dark:text-beige-light">June 2025 – Present | <span className="text-dusty-dark dark:text-beige">VR/AR Research • Cloud Platform • AWS</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Architected and built <strong className="text-lavender-dark dark:text-lavender-light">distributed backend platform on AWS</strong> to orchestrate experiment workflows, participant sessions, and <strong className="text-lavender-dark dark:text-lavender-light">telemetry ingestion</strong>, designing <strong className="text-lavender-dark dark:text-lavender-light">REST APIs</strong>, structured <strong className="text-lavender-dark dark:text-lavender-light">data schemas</strong>, and <strong className="text-lavender-dark dark:text-lavender-light">event-driven processing</strong> for concurrent <strong className="text-dusty-dark dark:text-beige-light">VR experiment execution</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Designed researcher collaborator system with permissions management, reducing coordination overhead by <strong className="text-dusty-dark dark:text-beige-light">~70%</strong>, using <strong className="text-lavender-dark dark:text-lavender-light">Node.js/Express</strong> and <strong className="text-lavender-dark dark:text-lavender-light">MongoDB</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built complete <strong className="text-lavender-dark dark:text-lavender-light">data collection and analysis pipeline</strong> with <strong className="text-lavender-dark dark:text-lavender-light">AWS CloudWatch (S3, RUM, Athena, EC2)</strong>, structured storage, and visualization for experiment <strong className="text-lavender-dark dark:text-lavender-light">telemetry</strong> and participant metadata</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Introduced <strong className="text-lavender-dark dark:text-lavender-light">middleware-based architecture</strong> to <strong className="text-lavender-dark dark:text-lavender-light">Node.js</strong> codebase for centralized authentication, authorization, validation, logging, and error handling, reducing bugs by <strong className="text-dusty-dark dark:text-beige-light">~30%</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Implemented integrated survey and informed consent system, improving completion rates using <strong className="text-lavender-dark dark:text-lavender-light">React</strong> frontend and <strong className="text-lavender-dark dark:text-lavender-light">RESTful backend APIs</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Established end-to-end testing with <strong className="text-lavender-dark dark:text-lavender-light">Playwright & Jest</strong>, reducing UI issues by <strong className="text-dusty-dark dark:text-beige-light">40%+</strong> with full CI/CD integration</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-lavender">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-lavender rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper">Graduate Teaching & Research Assistant</h3>
              <p className="text-lavender-dark dark:text-lavender-light font-semibold">University of Central Florida</p>
              <p className="text-dusty dark:text-beige-light">Jan 2024 – May 2025 | <span className="text-dusty-dark dark:text-beige">Full-Stack Development • Backend Mentoring • Testing</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Supported <strong className="text-dusty-dark dark:text-beige-light">200+ students</strong> in full-stack development course covering <strong className="text-lavender-dark dark:text-lavender-light">React</strong>, <strong className="text-lavender-dark dark:text-lavender-light">Node.js/Express</strong>, <strong className="text-lavender-dark dark:text-lavender-light">MongoDB</strong>, <strong className="text-lavender-dark dark:text-lavender-light">REST APIs</strong>, and deployment strategies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Provided office hours support on <strong className="text-lavender-dark dark:text-lavender-light">backend architecture</strong>, <strong className="text-lavender-dark dark:text-lavender-light">API design</strong>, <strong className="text-lavender-dark dark:text-lavender-light">authentication patterns (OAuth, JWT)</strong>, deployment, and <strong className="text-lavender-dark dark:text-lavender-light">debugging distributed applications</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Guided students on <strong className="text-lavender-dark dark:text-lavender-light">testing practices (unit, integration, E2E)</strong>, <strong className="text-lavender-dark dark:text-lavender-light">CI/CD pipelines</strong>, and debugging production deployments on <strong className="text-lavender-dark dark:text-lavender-light">AWS</strong> and <strong className="text-lavender-dark dark:text-lavender-light">Vercel</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Mentored capstone teams on <strong className="text-lavender-dark dark:text-lavender-light">database modeling (SQL/NoSQL)</strong>, <strong className="text-lavender-dark dark:text-lavender-light">RESTful API development</strong>, and <strong className="text-lavender-dark dark:text-lavender-light">microservices communication</strong></span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-lavender">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-lavender rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper">Software Engineer</h3>
              <p className="text-lavender-dark dark:text-lavender-light font-semibold">Temenos</p>
              <p className="text-dusty dark:text-beige-light">July 2021 – July 2023 | <span className="text-dusty-dark dark:text-beige">Financial Services • Banking Middleware • Microservices</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Owned development and maintenance of <strong className="text-lavender-dark dark:text-lavender-light">middleware APIs</strong> connecting <strong className="text-lavender-dark dark:text-lavender-light">mobile/web banking</strong> to <strong className="text-lavender-dark dark:text-lavender-light">core banking systems</strong> using <strong className="text-lavender-dark dark:text-lavender-light">Java, Spring Boot, and Hibernate</strong>, handling thousands of <strong className="text-lavender-dark dark:text-lavender-light">transactions</strong> per hour for <strong className="text-dusty-dark dark:text-beige-light">100,000+ users</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Designed high-volume <strong className="text-lavender-dark dark:text-lavender-light">email notification service</strong> for <strong className="text-lavender-dark dark:text-lavender-light">banking platform</strong>, reducing notification failures by <strong className="text-dusty-dark dark:text-beige-light">90%+</strong> through <strong className="text-lavender-dark dark:text-lavender-light">queuing, retry mechanisms</strong>, and monitoring</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Integrated <strong className="text-lavender-dark dark:text-lavender-light">Apache Kafka</strong> for <strong className="text-lavender-dark dark:text-lavender-light">asynchronous event-driven processing</strong>, improving fault isolation and system stability during downstream outages</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Led <strong className="text-lavender-dark dark:text-lavender-light">security hardening</strong> implementing <strong className="text-lavender-dark dark:text-lavender-light">OAuth 2.0 & JWT</strong> authentication, including emergency response to Log4j zero-day vulnerability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built <strong className="text-lavender-dark dark:text-lavender-light">middleware adapters</strong> integrating with <strong className="text-lavender-dark dark:text-lavender-light">Python, Go, Salesforce</strong>, and external partner platforms for <strong className="text-lavender-dark dark:text-lavender-light">heterogeneous system communication</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Optimized <strong className="text-lavender-dark dark:text-lavender-light">SQL queries and Hibernate mappings (PostgreSQL, MySQL, Oracle)</strong>, reducing average response times by <strong className="text-dusty-dark dark:text-beige-light">~30%</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Explored <strong className="text-lavender-dark dark:text-lavender-light">LLM-driven automation</strong> for internal knowledge retrieval and issue triage, experimenting with <strong className="text-lavender-dark dark:text-lavender-light">RAG (Retrieval-Augmented Generation)</strong> pipelines</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-lavender">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-lavender rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper">Software Engineer Intern</h3>
              <p className="text-lavender-dark dark:text-lavender-light font-semibold">Thomson Reuters</p>
              <p className="text-dusty dark:text-beige-light">November 2020 – June 2021 | <span className="text-dusty-dark dark:text-beige">Tax Compliance • Full-Stack • Testing</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built <strong className="text-lavender-dark dark:text-lavender-light">Angular-based user interfaces</strong> for indirect tax compliance system with MVC-driven screens for tax calculations and validation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Developed <strong className="text-lavender-dark dark:text-lavender-light">Selenium and Katalon Studio</strong> test suites for end-to-end workflows, reducing manual regression testing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Verified service contracts using <strong className="text-lavender-dark dark:text-lavender-light">SOAP UI</strong> with <strong className="text-lavender-dark dark:text-lavender-light">XML assertions and REST validations</strong> to prevent breaking changes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Extended backend endpoints using <strong className="text-lavender-dark dark:text-lavender-light">Java and Python</strong> within MVC architecture for UI features</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <ProjectCard
            featured
            title="Distributed Web Crawling and Indexing System"
            description="Built horizontally scalable crawlers with rate limiting, deduplication, and fault tolerance using Kafka-backed task queues. Implemented orchestration and monitoring services to manage crawl jobs and persist metadata for downstream analytics and ML experimentation."
            tech={["Kafka", "Java", "Docker", "Distributed Systems", "Microservices"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            featured
            title="Phishing URL Detection with GANs"
            description="Trained a GAN-based phishing URL classifier on 1M+ URLs, reaching ~97.5% accuracy. Reduced false positives by 30% using a self-attention discriminator and deployed as a production microservice with sub-200ms inference latency."
            tech={["Python", "GANs", "TensorFlow", "Flask", "Machine Learning"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            title="LLM-Based Retrieval System (RAG)"
            description="Built a retrieval-augmented generation pipeline to answer domain-specific questions over internal documents. Implemented document chunking, embedding generation, and semantic search to retrieve relevant context before passing it to an LLM for response synthesis."
            tech={["Python", "RAG", "LLMs", "Embeddings", "Semantic Search", "Vector DB"]}
            github="https://github.com/sirimungi"
          />

        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills" className="bg-lavender/5 dark:bg-overcast/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <SkillCategory
            title="Languages"
            icon="💻"
            skills={["Python", "Java", "JavaScript", "TypeScript", "C++", "C#", "SQL", "Bash", "Go"]}
          />

          <SkillCategory
            title="Backend & APIs"
            icon="⚙️"
            skills={["Node.js", "Express", "Spring Boot", ".NET", "REST", "SOAP", "Microservices", "Flask", "FastAPI"]}
          />

          <SkillCategory
            title="Frontend"
            icon="🎨"
            skills={["React", "Angular", "HTML/CSS", "AJAX", "MVC Patterns", "TypeScript"]}
          />

          <SkillCategory
            title="Databases"
            icon="💾"
            skills={["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Oracle", "Hibernate"]}
          />

          <SkillCategory
            title="Cloud & DevOps"
            icon="☁️"
            skills={["AWS (EC2, ECS, Lambda, S3)", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]}
          />

          <SkillCategory
            title="Testing & Automation"
            icon="🧪"
            skills={["Playwright", "Selenium", "Katalon Studio", "Jest", "JUnit", "pytest", "SOAP UI", "Postman"]}
          />

          <SkillCategory
            title="CI/CD & Tools"
            icon="🔧"
            skills={["GitHub Actions", "Jenkins", "Maven", "Git", "Jira", "Confluence", "Linux/Unix"]}
          />

          <SkillCategory
            title="Message Queues & Events"
            icon="📨"
            skills={["Apache Kafka", "RabbitMQ", "Event-Driven Architecture", "Async Processing"]}
          />

          <SkillCategory
            title="Security & Auth"
            icon="🔒"
            skills={["OAuth 2.0", "JWT", "IAM", "RBAC", "TLS", "Secure SDLC"]}
          />

        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          
          <div className="bg-gradient-to-br from-beige to-beige-light dark:from-overcast-dark dark:to-overcast rounded-xl p-8 border border-lavender/30 dark:border-lavender/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper mb-2">Master of Science – Computer Science</h3>
                <p className="text-lavender-dark dark:text-lavender-light font-semibold text-lg">University of Central Florida</p>
              </div>
              <div className="text-dusty-dark dark:text-beige md:text-right mt-2 md:mt-0">
                <p className="font-semibold">August 2023 – May 2025</p>
                <p className="text-lavender-dark dark:text-lavender-light font-bold mt-1">GPA: 3.9/4.0</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-dusty-dark dark:text-beige">
                <span className="text-dusty-dark dark:text-beige-light font-semibold">Specialization:</span> Machine Learning & Software Engineering
              </p>
            </div>
          </div>

        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-dusty-dark dark:text-beige mb-8">
            I'm currently <span className="text-lavender-dark dark:text-lavender-light font-semibold">open to new opportunities</span>. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:Msirimungi9@gmail.com"
              className="px-8 py-4 bg-lavender hover:bg-lavender/90 dark:bg-lavender-dark dark:hover:bg-lavender text-paper dark:text-paper font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a href="https://linkedin.com/in/siri-mungi" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-lavender text-lavender-dark dark:text-lavender-light hover:bg-lavender/20 dark:hover:bg-lavender-dark/20 font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          
          <div className="text-dusty dark:text-beige-light">
            <p>Msirimungi9@gmail.com</p>
            <p className="mt-2">Based in Orlando, FL</p>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="text-center py-10 text-dusty dark:text-beige border-t border-lavender/20">
        <p className="mb-2">© 2026 Siri M. Built with React & Tailwind CSS</p>
        <p className="text-sm">Designed & Developed by Siri M</p>
      </footer>

    </div>
  );
}
