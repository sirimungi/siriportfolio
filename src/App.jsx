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
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-3xl font-bold gradient-text cursor-pointer">
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
                <span className="text-lavender-dark dark:text-lavender-light font-semibold">Backend & Distributed Systems</span> (Java/Node/AWS) • 
                Cloud-Native Services • Full-Stack
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
            
            {/* Right Side - Animated Developer with Laptop Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center items-center">
              
              {/* Animated Developer Character */}
              <svg viewBox="0 0 600 700" className="w-full max-w-md md:max-w-lg">
                <defs>
                  <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD1B8" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#FFC4A8" stopOpacity="1"/>
                  </linearGradient>
                  <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8A9D4" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#9B88B8" stopOpacity="0.2"/>
                  </linearGradient>
                  <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#9B88B8" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#B8A9D4" stopOpacity="1"/>
                  </linearGradient>
                  <radialGradient id="glowEffect">
                    <stop offset="0%" stopColor="#B8A9D4" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#B8A9D4" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                
                {/* Floating particles/sparkles */}
                <g opacity="0.4">
                  <motion.circle cx="150" cy="150" r="3" className="fill-lavender"
                    animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                  />
                  <motion.circle cx="450" cy="200" r="2" className="fill-dusty"
                    animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                  <motion.circle cx="500" cy="350" r="3" className="fill-lavender-light"
                    animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.circle cx="100" cy="400" r="2" className="fill-dusty-light"
                    animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}
                  />
                </g>
                
                {/* Shadow beneath character */}
                <ellipse cx="300" cy="650" rx="200" ry="35" fill="url(#glowEffect)" opacity="0.3">
                  <animate attributeName="rx" values="200;220;200" dur="4s" repeatCount="indefinite"/>
                </ellipse>
                
                {/* Person sitting with laptop */}
                <g transform="translate(300, 400)">
                  
                  {/* Desk/Table surface */}
                  <rect x="-180" y="90" width="360" height="15" rx="5" className="fill-dusty/40 dark:fill-dusty-light/30"/>
                  
                  {/* Coffee cup on desk */}
                  <g transform="translate(120, 75)">
                    <rect x="-12" y="0" width="24" height="30" rx="3" className="fill-beige dark:fill-beige-light" stroke="#9B88B8" strokeWidth="1.5"/>
                    <ellipse cx="0" cy="0" rx="13" ry="5" className="fill-dusty-light dark:fill-dusty"/>
                    {/* Steam from coffee */}
                    <motion.path d="M -8 -5 Q -8 -15 -5 -20" stroke="#B8A9D4" strokeWidth="1.5" fill="none" opacity="0.6"
                      animate={{ opacity: [0.6, 0.2, 0.6], y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.path d="M 0 -5 Q 0 -18 3 -23" stroke="#B8A9D4" strokeWidth="1.5" fill="none" opacity="0.6"
                      animate={{ opacity: [0.6, 0.2, 0.6], y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                  </g>
                  
                  {/* Legs (sitting position) */}
                  <g>
                    {/* Left leg */}
                    <path d="M -45 85 Q -50 110 -60 130" stroke="#5A4A6A" strokeWidth="22" fill="none" strokeLinecap="round"/>
                    <ellipse cx="-60" cy="135" rx="18" ry="12" fill="#4A3A5A"/>
                    
                    {/* Right leg */}
                    <path d="M 45 85 Q 50 110 60 130" stroke="#5A4A6A" strokeWidth="22" fill="none" strokeLinecap="round"/>
                    <ellipse cx="60" cy="135" rx="18" ry="12" fill="#4A3A5A"/>
                  </g>
                  
                  {/* Torso/Body */}
                  <ellipse cx="0" cy="0" rx="75" ry="95" fill="url(#shirtGradient)">
                    <animate attributeName="ry" values="95;98;95" dur="3s" repeatCount="indefinite"/>
                  </ellipse>
                  
                  {/* Collar detail */}
                  <path d="M -30 -40 Q 0 -30 30 -40" stroke="#8A7A9A" strokeWidth="3" fill="none"/>
                  
                  {/* Arms typing on laptop */}
                  <motion.g
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    {/* Left arm */}
                    <path d="M -60 -10 Q -100 20 -110 55" stroke="url(#skinGradient)" strokeWidth="20" fill="none" strokeLinecap="round"/>
                    <circle cx="-110" cy="60" r="12" fill="#FFD1B8"/>
                    
                    {/* Right arm */}
                    <path d="M 60 -10 Q 100 20 110 55" stroke="url(#skinGradient)" strokeWidth="20" fill="none" strokeLinecap="round"/>
                    <circle cx="110" cy="60" r="12" fill="#FFC4A8"/>
                  </motion.g>
                  
                  {/* Laptop */}
                  <g transform="translate(0, 55)">
                    {/* Laptop base/keyboard */}
                    <rect x="-95" y="0" width="190" height="15" rx="5" className="fill-overcast-dark dark:fill-beige-dark" stroke="#7A6A8A" strokeWidth="2"/>
                    <rect x="-85" y="3" width="170" height="9" rx="2" className="fill-dusty-dark/20 dark:fill-beige/20"/>
                    
                    {/* Laptop screen */}
                    <g transform="rotate(-10)" transformOrigin="0 0">
                      <rect x="-90" y="-110" width="180" height="120" rx="8" className="fill-overcast-dark dark:fill-overcast" stroke="#B8A9D4" strokeWidth="3"/>
                      
                      {/* Screen content with glow */}
                      <rect x="-82" y="-102" width="164" height="104" rx="5" fill="url(#laptopScreen)"/>
                      
                      {/* Code lines on screen - animated */}
                      <g opacity="0.9">
                        <rect x="-70" y="-90" width="80" height="5" rx="2" className="fill-lavender-light dark:fill-lavender">
                          <animate attributeName="width" values="80;95;80" dur="2.5s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="-70" y="-75" width="120" height="5" rx="2" className="fill-dusty-light dark:fill-dusty">
                          <animate attributeName="width" values="120;110;120" dur="3s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="-70" y="-60" width="90" height="5" rx="2" className="fill-lavender dark:fill-lavender-light">
                          <animate attributeName="width" values="90;105;90" dur="2.8s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="-70" y="-45" width="130" height="5" rx="2" className="fill-beige-dark dark:fill-beige">
                          <animate attributeName="width" values="130;120;130" dur="3.2s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="-70" y="-30" width="75" height="5" rx="2" className="fill-lavender-light dark:fill-lavender">
                          <animate attributeName="width" values="75;90;75" dur="2.6s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="-70" y="-15" width="110" height="5" rx="2" className="fill-dusty dark:fill-dusty-light">
                          <animate attributeName="width" values="110;100;110" dur="3.1s" repeatCount="indefinite"/>
                        </rect>
                      </g>
                      
                      {/* Blinking cursor */}
                      <rect x="45" y="-18" width="2" height="7" className="fill-lavender-light dark:fill-lavender">
                        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                      </rect>
                    </g>
                  </g>
                  
                  {/* Neck */}
                  <rect x="-18" y="-95" width="36" height="28" rx="8" fill="#FFD1B8"/>
                  
                  {/* Head */}
                  <motion.ellipse cx="0" cy="-130" rx="52" ry="58" fill="url(#skinGradient)"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Facial features */}
                  <g>
                    {/* Eyes - focused on screen */}
                    <ellipse cx="-20" cy="-135" rx="5" ry="7" fill="#3A2A4A"/>
                    <ellipse cx="20" cy="-135" rx="5" ry="7" fill="#3A2A4A"/>
                    {/* Eye shine */}
                    <circle cx="-18" cy="-137" r="2" fill="#FFFFFF" opacity="0.8"/>
                    <circle cx="22" cy="-137" r="2" fill="#FFFFFF" opacity="0.8"/>
                    
                    {/* Eyebrows */}
                    <path d="M -30 -145 Q -20 -147 -12 -146" stroke="#3A2A4A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <path d="M 12 -146 Q 20 -147 30 -145" stroke="#3A2A4A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    
                    {/* Smile - concentrated */}
                    <path d="M -18 -115 Q 0 -112 18 -115" stroke="#3A2A4A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </g>
                  
                  {/* Hair - modern style */}
                  <g>
                    <ellipse cx="0" cy="-160" rx="55" ry="38" className="fill-overcast-dark dark:fill-dusty-dark"/>
                    <path d="M -45 -155 Q -55 -140 -50 -120" className="fill-overcast-dark dark:fill-dusty-dark"/>
                    <path d="M 45 -155 Q 55 -140 50 -120" className="fill-overcast-dark dark:fill-dusty-dark"/>
                    {/* Hair strands for detail */}
                    <path d="M -25 -180 Q -20 -170 -22 -160" stroke="#2A1A3A" strokeWidth="2" opacity="0.3" fill="none"/>
                    <path d="M 0 -185 Q 0 -175 1 -165" stroke="#2A1A3A" strokeWidth="2" opacity="0.3" fill="none"/>
                    <path d="M 25 -180 Q 20 -170 22 -160" stroke="#2A1A3A" strokeWidth="2" opacity="0.3" fill="none"/>
                  </g>
                  
                  {/* Headphones - detailed */}
                  <g>
                    {/* Headband */}
                    <path d="M -50 -145 Q 0 -190 50 -145" stroke="#B8A9D4" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <path d="M -48 -145 Q 0 -185 48 -145" stroke="#9B88B8" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    
                    {/* Left ear cup */}
                    <ellipse cx="-52" cy="-120" rx="18" ry="22" fill="#B8A9D4" stroke="#9B88B8" strokeWidth="2"/>
                    <ellipse cx="-52" cy="-120" rx="12" ry="16" className="fill-overcast-dark dark:fill-beige-dark" opacity="0.6"/>
                    {/* Sound waves */}
                    <motion.circle cx="-52" cy="-120" r="8" stroke="#C8B9E4" strokeWidth="1.5" fill="none" opacity="0.6"
                      animate={{ r: [8, 12, 8], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Right ear cup */}
                    <ellipse cx="52" cy="-120" rx="18" ry="22" fill="#B8A9D4" stroke="#9B88B8" strokeWidth="2"/>
                    <ellipse cx="52" cy="-120" rx="12" ry="16" className="fill-overcast-dark dark:fill-beige-dark" opacity="0.6"/>
                    {/* Sound waves */}
                    <motion.circle cx="52" cy="-120" r="8" stroke="#C8B9E4" strokeWidth="1.5" fill="none" opacity="0.6"
                      animate={{ r: [8, 12, 8], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                  </g>
                </g>
                
                {/* Floating code symbols around character */}
                <g opacity="0.4" className="text-lavender dark:text-lavender-light">
                  <motion.text x="80" y="250" className="text-2xl font-mono" fill="currentColor"
                    animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}>
                    {'{ }'}
                  </motion.text>
                  <motion.text x="480" y="300" className="text-2xl font-mono" fill="currentColor"
                    animate={{ y: [0, -12, 0], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}>
                    {'< />'}
                  </motion.text>
                  <motion.text x="120" y="520" className="text-xl font-mono" fill="currentColor"
                    animate={{ x: [0, -8, 0], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
                    ()
                  </motion.text>
                  <motion.text x="450" y="480" className="text-2xl font-mono" fill="currentColor"
                    animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}>
                    [ ]
                  </motion.text>
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
              href="mailto:sirimungi9@gmail.com"
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
          {/* UCF VERA Lab */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-lavender">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-lavender rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper">Software Developer</h3>
              <p className="text-lavender-dark dark:text-lavender-light font-semibold">University of Central Florida — VERA Lab</p>
              <p className="text-dusty dark:text-beige-light">Jun 2025 – Present | <span className="text-dusty-dark dark:text-beige">Backend, Distributed Systems, AWS</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built a distributed backend on AWS to run VR experiments at scale—think dozens of researchers, hundreds of participants, and a lot of moving parts. Designed the APIs, data models, and event-driven flows from scratch, then kept them running (and debuggable) in production.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Created a collaborator system so researchers could co-author, manage permissions, and run live studies together. This cut down on Slack chaos and made multi-researcher VR studies actually possible (and less stressful).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Refactored a legacy Node.js codebase with middleware for auth, validation, and error handling—no more copy-paste bugs, and onboarding new devs got way easier.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Integrated survey and consent flows based on real VR research, so we could trust our data and keep IRB happy. Dynamic surveys, better completion rates, fewer headaches.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Set up end-to-end tests with Playwright and Jest—caught bugs before they hit users, and let us ship changes without breaking everything else.</span>
              </li>
            </ul>
          </motion.div>

          {/* UCF Teaching/Research Assistant */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-lavender">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-lavender rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper">Graduate Teaching & Research Assistant</h3>
              <p className="text-lavender-dark dark:text-lavender-light font-semibold">University of Central Florida (VERA Lab)</p>
              <p className="text-dusty dark:text-beige-light">Jan 2024 – May 2025 | <span className="text-dusty-dark dark:text-beige">Full-Stack, Mentoring, Testing</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Guided 100+ students through building real web apps—React, Node, SQL, the works. Debugged everything from broken login flows to SQL joins gone wild.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Reviewed backend projects for clean routing, layered design, and secure auth. Helped students see why "just make it work" isn't enough for production code.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Ran labs on database modeling, indexing, and query optimization—because slow queries are the worst.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Co-created grading rubrics and project specs to keep things fair and focused on real-world skills, not just "does it run?"</span>
              </li>
            </ul>
          </motion.div>

          {/* Temenos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-lavender">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-lavender rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper">Software Engineer</h3>
              <p className="text-lavender-dark dark:text-lavender-light font-semibold">Temenos</p>
              <p className="text-dusty dark:text-beige-light">Jul 2021 – Feb 2023 | <span className="text-dusty-dark dark:text-beige">Banking Middleware, Java, Spring Boot</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Kept critical banking APIs running—Java, Spring Boot, Hibernate—handling thousands of transactions per hour. If something broke, I was on the call (and fixing it fast).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Designed and shipped a high-volume email notification service for 100k+ users. Built in queuing, retries, and monitoring so alerts actually got delivered, even during peak hours.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Helped lead the security response to Log4j—patched, tested, and then overhauled our auth to use OAuth 2.0 and JWT. No more "just trust the header" hacks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Integrated Java services with Python, Go, Salesforce, and more—making sure data moved smoothly between systems (and didn’t break in the middle of the night).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Optimized SQL and Hibernate mappings to cut response times by 30%. Tuning queries is my kind of puzzle.</span>
              </li>
            </ul>
          </motion.div>

          {/* Thomson Reuters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-lavender">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-lavender rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-overcast-dark dark:text-paper">Software Engineer Intern</h3>
              <p className="text-lavender-dark dark:text-lavender-light font-semibold">Thomson Reuters</p>
              <p className="text-dusty dark:text-beige-light">Nov 2020 – Jun 2021 | <span className="text-dusty-dark dark:text-beige">Tax Compliance, .NET, Angular</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built and tested backend endpoints in C#/.NET for tax compliance features—lots of edge cases, lots of regulatory rules, and lots of learning.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Developed Angular UIs that made complex tax calculations actually understandable for users (and for me, after a few tries).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Automated end-to-end tests with Selenium and Katalon Studio, so we could catch bugs before our customers did.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Verified service contracts with SOAP UI and REST validations—no breaking changes on my watch.</span>
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
            title="Phishing URL Detection with GANs"
            description="Trained a GAN-based phishing URL classifier on 1M+ URLs, reaching ~97.5% accuracy. Reduced false positives by 30% using a self-attention discriminator and deployed as a production microservice with sub-200ms inference latency."
            tech={["Python", "GANs", "TensorFlow", "Flask", "Machine Learning"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            featured
            title="Distributed Web Crawling and Indexing System"
            description="Built horizontally scalable crawlers with rate limiting, deduplication, and fault tolerance using Kafka-backed task queues. Implemented orchestration and monitoring services to manage crawl jobs and persist metadata for downstream analytics and ML experimentation."
            tech={["Kafka", "Java", "Docker", "Distributed Systems", "Microservices"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            title="LLM-Based Retrieval System (RAG)"
            description="Built a retrieval-augmented generation pipeline to answer domain-specific questions over internal documents. Implemented document chunking, embedding generation, and semantic search to retrieve relevant context before passing it to an LLM for response synthesis."
            tech={["Python", "RAG", "LLMs", "Embeddings", "Semantic Search"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            title="Service Reliability Monitoring Tool"
            description="Implemented a lightweight monitoring system that ingests application logs and metrics to detect anomalous behavior such as latency spikes and error bursts. Exposed trend analysis and alert inspection through a simple web interface."
            tech={["Python", "Monitoring", "Analytics", "Web Interface"]}
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
            skills={["Python", "Java", "C++", "C#", "JavaScript", "TypeScript", "SQL", "Bash", "Go"]}
          />

          <SkillCategory
            title="Backend & APIs"
            icon="⚙️"
            skills={["Node.js", "Express", "Spring Boot", ".NET", "REST", "SOAP", "Microservices", "Flask", "FastAPI"]}
          />

          <SkillCategory
            title="Frontend"
            icon="🎨"
            skills={["React", "Angular", "HTML/CSS", "JavaScript", "TypeScript", "MVC Patterns"]}
          />

          <SkillCategory
            title="Datastores"
            icon="💾"
            skills={["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis", "DynamoDB", "Oracle", "MariaDB"]}
          />

          <SkillCategory
            title="Cloud & DevOps"
            icon="☁️"
            skills={["AWS (EC2, ECS, Lambda, S3, CloudWatch)", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]}
          />

          <SkillCategory
            title="Testing & Automation"
            icon="🧪"
            skills={["Playwright", "Selenium", "Katalon Studio", "Jest", "JUnit", "pytest", "Testcontainers", "Postman", "SOAP UI"]}
          />

          <SkillCategory
            title="CI/CD & Tools"
            icon="🔧"
            skills={["GitHub Actions", "Jenkins", "Maven", "Git", "Linux/Unix", "Jira", "Confluence", "Notion", "Figma"]}
          />

          <SkillCategory
            title="Data & Analytics"
            icon="📊"
            skills={["Metabase", "Data Modeling", "Experiment Analytics", "Dashboards", "Data Validation"]}
          />

          <SkillCategory
            title="Architecture & Security"
            icon="🔒"
            skills={["Distributed Systems", "Event-Driven Architecture", "OAuth 2.0", "JWT", "IAM", "RBAC", "TLS"]}
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
            <a href="mailto:sirimungi9@gmail.com"
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
            <p>sirimungi9@gmail.com</p>
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
