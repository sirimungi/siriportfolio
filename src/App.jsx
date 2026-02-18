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
      
      {/* Hero Section with Frame */}
      <section id="home" className="min-h-screen flex justify-center items-center px-6 pt-24 pb-12 relative overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-24 left-12 w-20 h-20 border-4 border-accent/40 rotate-12 animate-float" style={{ transformStyle: 'preserve-3d' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rotate-45 animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-24 w-24 h-24 border-4 border-accentLight/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-12 w-12 h-12 bg-highlight/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-32 w-20 h-20 border-4 border-accent/30 -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Main Hero Frame Container */}
        <div className="hero-frame relative w-full max-w-7xl rounded-3xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-secondary/80 to-primary/80 backdrop-blur-sm">
          {/* Social Icons - Left Edge */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex-col gap-6 bg-secondary/90 p-4 rounded-2xl border-2 border-accent/40 shadow-lg">
            <motion.a 
              href="https://github.com/sirimungi" 
              target="_blank"
              whileHover={{ scale: 1.2, x: 10 }}
              className="text-gray-400 hover:text-accent transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/siri-mungi" 
              target="_blank"
              whileHover={{ scale: 1.2, x: 10 }}
              className="text-gray-400 hover:text-accent transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="mailto:Msirimungi9@gmail.com"
              whileHover={{ scale: 1.2, x: 10 }}
              className="text-gray-400 hover:text-accent transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </motion.a>
          </div>
          
          {/* Hamburger Menu - Top Left */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-8 left-8 lg:left-12">
            <div className="w-8 h-6 flex flex-col justify-between cursor-pointer group">
              <span className="w-full h-0.5 bg-white group-hover:bg-accent transition-colors"></span>
              <span className="w-full h-0.5 bg-white group-hover:bg-accent transition-colors"></span>
              <span className="w-full h-0.5 bg-white group-hover:bg-accent transition-colors"></span>
            </div>
          </motion.div>
          
          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
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
                className="text-gray-400 text-lg font-light tracking-widest">
                Hello 👋
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight">
                I'm <span className="text-white">Siri Mungi</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-gray-300 font-medium">
                A <span className="gradient-text font-bold">Software Engineer</span> specializing in
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-400 leading-relaxed max-w-xl">
                <span className="text-accent font-semibold">Backend & Distributed Systems</span> • Cloud-Native Architecture • 
                Microservices • <span className="text-accentLight">Financial Services</span> • Banking Systems
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
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent to-accentLight text-white font-bold text-lg rounded-xl shadow-lg shadow-accent/50 hover:shadow-accent/70 transition-all">
                  Learn more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Right Side - 3D Developer Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center items-center">
              
              {/* 3D Character Illustration */}
              <svg viewBox="0 0 600 700" className="w-full max-w-md md:max-w-lg">
                {/* Shadow */}
                <ellipse cx="300" cy="650" rx="180" ry="30" fill="#000" opacity="0.3">
                  <animate attributeName="rx" values="180;200;180" dur="4s" repeatCount="indefinite"/>
                </ellipse>
                
                {/* Person Base - Sitting Cross-legged */}
                <g transform="translate(300, 400)">
                  {/* Legs crossed */}
                  <ellipse cx="-40" cy="100" rx="35" ry="15" fill="#ff8555" transform="rotate(-20)"/>
                  <ellipse cx="40" cy="100" rx="35" ry="15" fill="#ff6b35" transform="rotate(20)"/>
                  <path d="M -50 80 Q -60 100 -70 110" stroke="#ff6b35" strokeWidth="25" fill="none" strokeLinecap="round"/>
                  <path d="M 50 80 Q 60 100 70 110" stroke="#ff8555" strokeWidth="25" fill="none" strokeLinecap="round"/>
                  
                  {/* Body/Torso */}
                  <ellipse cx="0" cy="0" rx="70" ry="90" fill="#ff6b35">
                    <animate attributeName="ry" values="90;93;90" dur="3s" repeatCount="indefinite"/>
                  </ellipse>
                  
                  {/* Shirt detail */}
                  <path d="M -50 0 Q 0 10 50 0" stroke="#ff8555" strokeWidth="3" fill="none"/>
                  
                  {/* Arms holding laptop */}
                  <g className="animate-float">
                    {/* Left arm */}
                    <path d="M -50 -20 Q -90 0 -100 40" stroke="#ff6b35" strokeWidth="22" fill="none" strokeLinecap="round">
                      <animate attributeName="d" values="M -50 -20 Q -90 0 -100 40;M -50 -20 Q -90 0 -100 45;M -50 -20 Q -90 0 -100 40" dur="2s" repeatCount="indefinite"/>
                    </path>
                    {/* Right arm */}
                    <path d="M 50 -20 Q 90 0 100 40" stroke="#ff8555" strokeWidth="22" fill="none" strokeLinecap="round">
                      <animate attributeName="d" values="M 50 -20 Q 90 0 100 40;M 50 -20 Q 90 0 100 45;M 50 -20 Q 90 0 100 40" dur="2s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* Laptop */}
                  <g transform="translate(0, 50)">
                    {/* Laptop base */}
                    <rect x="-80" y="-5" width="160" height="12" fill="#1a1a1a" rx="4"/>
                    {/* Laptop screen */}
                    <g transform="rotate(-10)">
                      <rect x="-75" y="-90" width="150" height="100" fill="#0a0a0a" stroke="#ff6b35" strokeWidth="4" rx="6"/>
                      {/* Screen glow */}
                      <rect x="-68" y="-82" width="136" height="84" fill="url(#screenOrange)" rx="4"/>
                      {/* Code lines on screen */}
                      <line x1="-60" y1="-70" x2="0" y2="-70" stroke="#ff6b35" strokeWidth="2.5">
                        <animate attributeName="x2" values="-60;0;-60" dur="2s" repeatCount="indefinite"/>
                      </line>
                      <line x1="-60" y1="-55" x2="30" y2="-55" stroke="#ff8555" strokeWidth="2.5">
                        <animate attributeName="x2" values="-60;30;-60" dur="2.5s" repeatCount="indefinite"/>
                      </line>
                      <line x1="-60" y1="-40" x2="-10" y2="-40" stroke="#ffa500" strokeWidth="2.5">
                        <animate attributeName="x2" values="-60;-10;-60" dur="1.8s" repeatCount="indefinite"/>
                      </line>
                      <line x1="-60" y1="-25" x2="50" y2="-25" stroke="#ff6b35" strokeWidth="2.5">
                        <animate attributeName="x2" values="-60;50;-60" dur="2.2s" repeatCount="indefinite"/>
                      </line>
                    </g>
                  </g>
                  
                  {/* Neck */}
                  <rect x="-15" y="-90" width="30" height="25" fill="#ffa085" rx="8"/>
                  
                  {/* Head */}
                  <circle cx="0" cy="-120" r="50" fill="#ffb499">
                    <animate attributeName="cy" values="-120;-117;-120" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Face details */}
                  <circle cx="-18" cy="-125" r="4" fill="#333"/>
                  <circle cx="18" cy="-125" r="4" fill="#333"/>
                  <path d="M -12 -110 Q 0 -105 12 -110" stroke="#333" strokeWidth="2" fill="none"/>
                  
                  {/* Hair */}
                  <path d="M -35 -145 Q -50 -130 -45 -110 L -45 -100 Q -48 -140 -35 -150 Z" fill="#1a1a1a"/>
                  <path d="M 35 -145 Q 50 -130 45 -110 L 45 -100 Q 48 -140 35 -150 Z" fill="#1a1a1a"/>
                  <ellipse cx="0" cy="-150" rx="50" ry="35" fill="#1a1a1a"/>
                  
                  {/* Headphones */}
                  <path d="M -50 -135 Q -65 -120 -65 -100" stroke="#ff6b35" strokeWidth="5" fill="none" strokeLinecap="round"/>
                  <path d="M 50 -135 Q 65 -120 65 -100" stroke="#ff6b35" strokeWidth="5" fill="none" strokeLinecap="round"/>
                  <circle cx="-65" cy="-110" r="12" fill="#ff6b35"/>
                  <circle cx="65" cy="-110" r="12" fill="#ff6b35"/>
                  <path d="M -45 -160 Q 0 -175 45 -160" stroke="#ff6b35" strokeWidth="6" fill="none"/>
                </g>
                
                {/* Floating emoji face */}
                <g transform="translate(500, 200)" className="animate-bounce-slow">
                  <circle cx="0" cy="0" r="40" fill="#ff6b35" opacity="0.9"/>
                  <circle cx="-12" cy="-5" r="5" fill="#fff"/>
                  <circle cx="12" cy="-5" r="5" fill="#fff"/>
                  <path d="M -15 10 Q 0 20 15 10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </g>
                
                {/* Floating code symbols */}
                <text x="80" y="150" className="text-3xl fill-accent opacity-60 animate-float">&lt;/&gt;</text>
                <text x="480" y="400" className="text-3xl fill-accentLight opacity-60 animate-float" style={{ animationDelay: '1s' }}>{ }</text>
                <text x="120" y="550" className="text-2xl fill-highlight opacity-60 animate-float" style={{ animationDelay: '0.5s' }}>( )</text>
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="screenOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#ff8555" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Circular arrow button for slider */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-accent bg-secondary/80 flex items-center justify-center hover:bg-accent/20 transition-all">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
          
          {/* Scroll Down Indicator - Bottom Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm tracking-wider rotate-0 lg:-rotate-90 origin-center">SCROLL DOWN</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent lg:rotate-0"></motion.div>
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
