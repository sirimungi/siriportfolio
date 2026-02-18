import { motion } from "framer-motion";
import { useState } from "react";

// Navigation Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];
  
  return (
    <nav className="fixed top-0 w-full glassmorphism z-50 border-b border-accent/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-3xl font-bold gradient-text">
          SM
        </motion.a>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-300 hover:text-accent transition-all font-medium relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accentLight group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-accent transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glassmorphism border-t border-accent/20">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-300 hover:text-accent hover:bg-secondary/50 transition-all">
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
        featured ? 'glow-border shadow-2xl shadow-accent/30' : 'border border-accent/20'
      }`}>
      {featured && (
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-bold text-primary bg-gradient-to-r from-accent to-accentLight rounded-full shadow-lg">
          ⭐ Featured
        </motion.span>
      )}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <h3 className="text-xl font-bold mb-3 text-gray-100 relative z-10">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed relative z-10">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {tech.map(t => (
          <span key={t} className="px-3 py-1.5 text-xs bg-secondary/80 text-accent rounded-full border border-accent/30 hover:bg-accent/20 transition-all">
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
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accentLight text-white rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all font-medium text-sm">
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
            className="flex items-center gap-2 px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all font-medium text-sm">
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
      className="glassmorphism rounded-2xl p-6 border border-accent/20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <motion.span 
          className="text-3xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
          {icon}
        </motion.span>
        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-100 to-accent bg-clip-text text-transparent">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 relative z-10">
        {skills.map((skill, index) => (
          <motion.span 
            key={skill} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-3 py-2 bg-secondary/80 text-gray-300 rounded-lg text-sm border border-accent/30 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all cursor-default">
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
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col lg:flex-row justify-center items-center text-center lg:text-left px-6 pt-16 relative overflow-hidden gap-12">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accentLight/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-highlight/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Animated Developer Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 w-full lg:w-1/2 max-w-md lg:max-w-lg hidden lg:block">
          <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl">
            {/* Desk */}
            <rect x="50" y="350" width="400" height="20" fill="#1a0b2e" rx="5">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
            </rect>
            
            {/* Monitor */}
            <rect x="150" y="180" width="200" height="150" fill="#0a0118" stroke="#a855f7" strokeWidth="4" rx="8">
              <animate attributeName="stroke" values="#a855f7;#d946ef;#fbbf24;#a855f7" dur="4s" repeatCount="indefinite"/>
            </rect>
            
            {/* Screen Glow */}
            <rect x="160" y="190" width="180" height="130" fill="url(#screenGlow)" rx="4"/>
            
            {/* Code Lines on Screen */}
            <line x1="170" y1="205" x2="250" y2="205" stroke="#a855f7" strokeWidth="2">
              <animate attributeName="x2" values="170;250;170" dur="2s" repeatCount="indefinite"/>
            </line>
            <line x1="170" y1="220" x2="280" y2="220" stroke="#d946ef" strokeWidth="2">
              <animate attributeName="x2" values="170;280;170" dur="2.5s" repeatCount="indefinite"/>
            </line>
            <line x1="170" y1="235" x2="230" y2="235" stroke="#fbbf24" strokeWidth="2">
              <animate attributeName="x2" values="170;230;170" dur="1.8s" repeatCount="indefinite"/>
            </line>
            <line x1="170" y1="250" x2="320" y2="250" stroke="#a855f7" strokeWidth="2">
              <animate attributeName="x2" values="170;320;170" dur="2.2s" repeatCount="indefinite"/>
            </line>
            <line x1="170" y1="265" x2="270" y2="265" stroke="#d946ef" strokeWidth="2">
              <animate attributeName="x2" values="170;270;170" dur="2.8s" repeatCount="indefinite"/>
            </line>
            
            {/* Monitor Stand */}
            <rect x="230" y="330" width="40" height="30" fill="#1a0b2e" rx="3"/>
            <rect x="200" y="355" width="100" height="10" fill="#1a0b2e" rx="5"/>
            
            {/* Developer Person */}
            <g className="animate-float">
              {/* Head */}
              <circle cx="250" cy="320" r="25" fill="#d946ef">
                <animate attributeName="cy" values="320;315;320" dur="3s" repeatCount="indefinite"/>
              </circle>
              
              {/* Body */}
              <rect x="230" y="342" width="40" height="50" fill="#a855f7" rx="8">
                <animate attributeName="height" values="50;52;50" dur="3s" repeatCount="indefinite"/>
              </rect>
              
              {/* Arms - Typing Animation */}
              <g>
                {/* Left Arm */}
                <line x1="230" y1="350" x2="200" y2="365" stroke="#a855f7" strokeWidth="6" strokeLinecap="round">
                  <animate attributeName="x2" values="200;195;200" dur="0.8s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="365;368;365" dur="0.8s" repeatCount="indefinite"/>
                </line>
                
                {/* Right Arm */}
                <line x1="270" y1="350" x2="300" y2="365" stroke="#a855f7" strokeWidth="6" strokeLinecap="round">
                  <animate attributeName="x2" values="300;305;300" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="365;368;365" dur="1s" repeatCount="indefinite"/>
                </line>
              </g>
            </g>
            
            {/* Keyboard */}
            <rect x="180" y="360" width="140" height="15" fill="#1a0b2e" stroke="#a855f7" strokeWidth="2" rx="3">
              <animate attributeName="fill" values="#1a0b2e;#2a1b3e;#1a0b2e" dur="1.5s" repeatCount="indefinite"/>
            </rect>
            
            {/* Floating Code Particles */}
            <circle cx="100" cy="150" r="3" fill="#a855f7">
              <animate attributeName="cy" values="150;100;150" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="380" cy="200" r="3" fill="#d946ef">
              <animate attributeName="cy" values="200;150;200" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="120" cy="250" r="2" fill="#fbbf24">
              <animate attributeName="cy" values="250;200;250" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Coffee Cup */}
            <g transform="translate(360, 340)">
              <rect x="0" y="10" width="30" height="30" fill="#1a0b2e" stroke="#a855f7" strokeWidth="2" rx="3"/>
              <rect x="5" y="15" width="20" height="20" fill="#fbbf24" opacity="0.3">
                <animate attributeName="height" values="20;15;20" dur="2s" repeatCount="indefinite"/>
              </rect>
              {/* Steam */}
              <path d="M 8 10 Q 8 0 10 0" stroke="#d946ef" strokeWidth="1.5" fill="none" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M 15 10 Q 15 -5 17 -5" stroke="#a855f7" strokeWidth="1.5" fill="none" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite"/>
              </path>
              <path d="M 22 10 Q 22 0 24 0" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.6">
                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.2s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* Gradients */}
            <defs>
              <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2">
                  <animate attributeName="stopColor" values="#a855f7;#d946ef;#fbbf24;#a855f7" dur="5s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.1">
                  <animate attributeName="stopColor" values="#d946ef;#fbbf24;#a855f7;#d946ef" dur="5s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full lg:w-1/2">\n          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Hi, I'm <span className="gradient-text">Siri M</span>
          </motion.h1>
          <motion.p 
            className="text-3xl md:text-4xl text-gray-300 mb-6 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}>
            Software Engineer
          </motion.p>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}>
            <span className="text-accent font-semibold">Backend & Distributed Systems</span> (Java/Node/AWS)
          </motion.p>
          <motion.p 
            className="text-lg text-gray-500 max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}>
            <span className="text-gray-400">Cloud-Native Services</span> | <span className="text-gray-400">Microservices</span> | <span className="text-gray-400">Full-Stack</span>
          </motion.p>
          
          <motion.div 
            className="flex gap-6 justify-center lg:justify-start flex-wrap mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-accent to-accentLight text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/30">
              View My Work →
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 font-bold rounded-xl transition-all">
              Get In Touch
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex gap-8 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}>
            <motion.a 
              href="https://github.com/sirimungi" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5, color: "#a855f7" }}
              className="text-gray-400 hover:text-accent transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/siri-mungi" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5, color: "#a855f7" }}
              className="text-gray-400 hover:text-accent transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="mailto:Msirimungi9@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5, color: "#a855f7" }}
              className="text-gray-400 hover:text-accent transition-colors">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            <span className="text-accent font-semibold">Software Engineer</span> with <span className="text-accent font-semibold">4+ years</span> building backend services and integration-heavy platforms across <span className="text-accent">research</span> and <span className="text-accent">enterprise financial systems</span>. Hands-on ownership from design and implementation through <span className="text-gray-300">testing, CI/CD, and production support</span>.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Known for untangling legacy systems (clearer interfaces, better tests, more predictable releases) and shipping reliable software under real constraints — from <span className="text-accent">financial middleware</span> handling thousands of <span className="text-accent">banking transactions</span> per hour to <span className="text-accent">VR research platforms</span> coordinating distributed experiments on <span className="text-accent">AWS</span>.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            <span className="text-accent">M.S. in Computer Science</span> (GPA 3.9/4.0) with focus on <span className="text-gray-300">Machine Learning & Software Engineering</span>. Specialize in <span className="text-accent">Java/Spring Boot</span>, <span className="text-accent">Node.js/Express</span>, <span className="text-accent">AWS cloud services</span>, <span className="text-accent">microservices architecture</span>, and <span className="text-accent">distributed systems</span>.
          </p>
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" className="bg-gray-900/30">
        <div className="space-y-12 max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-accent">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-gray-100">Software Developer</h3>
              <p className="text-accent font-semibold">University of Central Florida — VERA Lab</p>
              <p className="text-gray-500">June 2025 – Present | <span className="text-gray-400">VR/AR Research • Cloud Platform • AWS</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Architected and built <strong className="text-accent">distributed backend platform on AWS</strong> to orchestrate experiment workflows, participant sessions, and <strong className="text-accent">telemetry ingestion</strong>, designing <strong className="text-accent">REST APIs</strong>, structured <strong className="text-accent">data schemas</strong>, and <strong className="text-accent">event-driven processing</strong> for concurrent <strong className="text-gray-300">VR experiment execution</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Designed researcher collaborator system with permissions management, reducing coordination overhead by <strong className="text-gray-300">~70%</strong>, using <strong className="text-accent">Node.js/Express</strong> and <strong className="text-accent">MongoDB</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built complete <strong className="text-accent">data collection and analysis pipeline</strong> with <strong className="text-accent">AWS CloudWatch (S3, RUM, Athena, EC2)</strong>, structured storage, and visualization for experiment <strong className="text-accent">telemetry</strong> and participant metadata</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Introduced <strong className="text-accent">middleware-based architecture</strong> to <strong className="text-accent">Node.js</strong> codebase for centralized authentication, authorization, validation, logging, and error handling, reducing bugs by <strong className="text-gray-300">~30%</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Implemented integrated survey and informed consent system, improving completion rates using <strong className="text-accent">React</strong> frontend and <strong className="text-accent">RESTful backend APIs</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Established end-to-end testing with <strong className="text-accent">Playwright & Jest</strong>, reducing UI issues by <strong className="text-gray-300">40%+</strong> with full CI/CD integration</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-accent">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-gray-100">Graduate Teaching & Research Assistant</h3>
              <p className="text-accent font-semibold">University of Central Florida</p>
              <p className="text-gray-500">Jan 2024 – May 2025 | <span className="text-gray-400">Full-Stack Development • Backend Mentoring • Testing</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Supported <strong className="text-gray-300">200+ students</strong> in full-stack development course covering <strong className="text-accent">React</strong>, <strong className="text-accent">Node.js/Express</strong>, <strong className="text-accent">MongoDB</strong>, <strong className="text-accent">REST APIs</strong>, and deployment strategies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Provided office hours support on <strong className="text-accent">backend architecture</strong>, <strong className="text-accent">API design</strong>, <strong className="text-accent">authentication patterns (OAuth, JWT)</strong>, deployment, and <strong className="text-accent">debugging distributed applications</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Guided students on <strong className="text-accent">testing practices (unit, integration, E2E)</strong>, <strong className="text-accent">CI/CD pipelines</strong>, and debugging production deployments on <strong className="text-accent">AWS</strong> and <strong className="text-accent">Vercel</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Mentored capstone teams on <strong className="text-accent">database modeling (SQL/NoSQL)</strong>, <strong className="text-accent">RESTful API development</strong>, and <strong className="text-accent">microservices communication</strong></span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-accent">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-gray-100">Software Engineer</h3>
              <p className="text-accent font-semibold">Temenos</p>
              <p className="text-gray-500">July 2021 – July 2023 | <span className="text-gray-400">Financial Services • Banking Middleware • Microservices</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Owned development and maintenance of <strong className="text-accent">middleware APIs</strong> connecting <strong className="text-accent">mobile/web banking</strong> to <strong className="text-accent">core banking systems</strong> using <strong className="text-accent">Java, Spring Boot, and Hibernate</strong>, handling thousands of <strong className="text-accent">transactions</strong> per hour for <strong className="text-gray-300">100,000+ users</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Designed high-volume <strong className="text-accent">email notification service</strong> for <strong className="text-accent">banking platform</strong>, reducing notification failures by <strong className="text-gray-300">90%+</strong> through <strong className="text-accent">queuing, retry mechanisms</strong>, and monitoring</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Integrated <strong className="text-accent">Apache Kafka</strong> for <strong className="text-accent">asynchronous event-driven processing</strong>, improving fault isolation and system stability during downstream outages</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Led <strong className="text-accent">security hardening</strong> implementing <strong className="text-accent">OAuth 2.0 & JWT</strong> authentication, including emergency response to Log4j zero-day vulnerability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built <strong className="text-accent">middleware adapters</strong> integrating with <strong className="text-accent">Python, Go, Salesforce</strong>, and external partner platforms for <strong className="text-accent">heterogeneous system communication</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Optimized <strong className="text-accent">SQL queries and Hibernate mappings (PostgreSQL, MySQL, Oracle)</strong>, reducing average response times by <strong className="text-gray-300">~30%</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Explored <strong className="text-accent">LLM-driven automation</strong> for internal knowledge retrieval and issue triage, experimenting with <strong className="text-accent">RAG (Retrieval-Augmented Generation)</strong> pipelines</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-accent">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-gray-100">Software Engineer Intern</h3>
              <p className="text-accent font-semibold">Thomson Reuters</p>
              <p className="text-gray-500">November 2020 – June 2021 | <span className="text-gray-400">Tax Compliance • Full-Stack • Testing</span></p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built <strong className="text-accent">Angular-based user interfaces</strong> for indirect tax compliance system with MVC-driven screens for tax calculations and validation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Developed <strong className="text-accent">Selenium and Katalon Studio</strong> test suites for end-to-end workflows, reducing manual regression testing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Verified service contracts using <strong className="text-accent">SOAP UI</strong> with <strong className="text-accent">XML assertions and REST validations</strong> to prevent breaking changes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Extended backend endpoints using <strong className="text-accent">Java and Python</strong> within MVC architecture for UI features</span>
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
      <Section id="skills" title="Technical Skills" className="bg-gray-900/30">
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
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Master of Science – Computer Science</h3>
                <p className="text-accent font-semibold text-lg">University of Central Florida</p>
              </div>
              <div className="text-gray-400 md:text-right mt-2 md:mt-0">
                <p className="font-semibold">August 2023 – May 2025</p>
                <p className="text-accent font-bold mt-1">GPA: 3.9/4.0</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">
                <span className="text-gray-300 font-semibold">Specialization:</span> Machine Learning & Software Engineering
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
          <p className="text-lg text-gray-400 mb-8">
            I'm currently <span className="text-accent font-semibold">open to new opportunities</span>. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:Msirimungi9@gmail.com"
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a href="https://linkedin.com/in/siri-mungi" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          
          <div className="text-gray-500">
            <p>Msirimungi9@gmail.com</p>
            <p className="mt-2">Based in Orlando, FL</p>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-600 border-t border-gray-800">
        <p className="mb-2">© 2026 Siri M. Built with React & Tailwind CSS</p>
        <p className="text-sm">Designed & Developed by Siri M</p>
      </footer>

    </div>
  );
}
