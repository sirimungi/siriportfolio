import { motion } from "framer-motion";
import { useState } from "react";

// Navigation Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];
  
  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold gradient-text">
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
              className="text-gray-300 hover:text-accent transition-colors">
              {item}
            </motion.a>
          ))}
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-gray-800">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-300 hover:text-accent hover:bg-gray-900">
              {item}
            </a>
          ))}
        </div>
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
      className={`card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border ${
        featured ? 'border-accent shadow-lg shadow-accent/20' : 'border-gray-700'
      }`}>
      {featured && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-primary bg-accent rounded-full">
          Featured
        </span>
      )}
      <h3 className="text-xl font-bold mb-3 text-gray-100">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map(t => (
          <span key={t} className="px-3 py-1 text-xs bg-gray-800 text-accent rounded-full border border-gray-700">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-primary rounded-lg transition-colors text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
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
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-accent hover:text-accent transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="bg-primary text-gray-200 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            Hi, I'm <span className="gradient-text">Siri M</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-4">
            Software Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mb-8">
            Building scalable backend systems, cloud-native platforms, and distributed architectures
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects"
              className="px-8 py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg transition-all hover:scale-105">
              View My Work
            </a>
            <a href="#contact"
              className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold rounded-lg transition-all">
              Get In Touch
            </a>
          </div>
          
          <div className="flex gap-6 justify-center mt-8">
            <a href="https://github.com/sirimungi" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/siri-mungi" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:sirimungi9@gmail.com"
              className="text-gray-400 hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
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
            I'm a <span className="text-accent font-semibold">Software Developer</span> with <span className="text-accent font-semibold">4+ years</span> of experience 
            building production-grade backend systems, event-driven architectures, and cloud-native platforms.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            My expertise lies in designing reliable, scalable systems that handle real-world complexity — from 
            <span className="text-gray-300"> financial middleware processing thousands of transactions per hour</span> to 
            <span className="text-gray-300"> research platforms coordinating distributed VR experiments on AWS</span>.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            I specialize in <span className="text-accent">Java/Spring Boot</span>, <span className="text-accent">Node.js</span>, 
            <span className="text-accent"> Apache Kafka</span>, and <span className="text-accent">AWS</span>, with a focus on 
            building systems that are maintainable, testable, and production-ready.
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
              <p className="text-gray-500">January 2025 – Present</p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Led full-stack <strong className="text-gray-300">MERN development</strong> of collaborative VR research platform deployed on <strong className="text-gray-300">AWS</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Designed researcher collaboration & permission system reducing coordination overhead by <strong className="text-gray-300">70%</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built data ingestion & analytics pipeline using <strong className="text-gray-300">S3, Athena, EC2, and CloudWatch</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Introduced middleware architecture reducing production bugs by <strong className="text-gray-300">30%</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Established <strong className="text-gray-300">Playwright & Jest</strong> E2E testing strategy for reliability</span>
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
              <p className="text-gray-500">July 2021 – August 2023</p>
            </div>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Developed <strong className="text-gray-300">Spring Boot middleware APIs</strong> handling high-volume banking transactions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Built event-driven workflows using <strong className="text-gray-300">Apache Kafka</strong> for reliable message processing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Reduced notification failures by <strong className="text-gray-300">90%</strong> via queue + retry architecture</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Led <strong className="text-gray-300">OAuth 2.0 & JWT</strong> security hardening across microservices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▹</span>
                <span>Optimized <strong className="text-gray-300">SQL/Hibernate</strong> queries reducing response times by <strong className="text-gray-300">30%</strong></span>
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
            title="VERA Platform - VR Research System"
            description="Full-stack collaborative VR research platform with AWS data pipelines, researcher permission management, and real-time analytics. Handles complex multi-tenant workflows for university research."
            tech={["Node.js", "React", "MongoDB", "AWS S3", "Athena", "CloudWatch"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            featured
            title="Distributed Web Crawler"
            description="Kafka-backed distributed crawling system with fault tolerance, deduplication, and scalable indexing pipelines. Handles concurrent crawling across multiple workers with message-driven coordination."
            tech={["Kafka", "Java", "Redis", "Elasticsearch", "Docker"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            title="Phishing URL Detection (GAN)"
            description="GAN-based phishing classifier trained on 1M+ URLs achieving 97.5% accuracy. Production microservice with sub-200ms inference latency using TensorFlow Serving."
            tech={["Python", "TensorFlow", "Flask", "Docker", "scikit-learn"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            title="Service Reliability Monitoring Tool"
            description="Log & metric ingestion platform detecting latency spikes and error bursts. Real-time alerting system with configurable thresholds and Slack integration."
            tech={["Node.js", "InfluxDB", "Grafana", "Prometheus", "AWS"]}
            github="https://github.com/sirimungi"
          />

          <ProjectCard
            title="Banking Transaction Middleware"
            description="High-throughput Spring Boot middleware for financial institutions. Handles transaction validation, routing, and settlement with 99.9% uptime SLA."
            tech={["Spring Boot", "Kafka", "PostgreSQL", "Redis", "OAuth 2.0"]}
          />

          <ProjectCard
            title="Event-Driven Notification System"
            description="Kafka-based notification delivery platform with retry logic, dead-letter queues, and multi-channel support (email, SMS, push). Reduced failures by 90%."
            tech={["Kafka", "Spring Boot", "RabbitMQ", "MongoDB", "Docker"]}
          />

        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills" className="bg-gray-900/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <SkillCategory
            title="Backend & APIs"
            icon="⚙️"
            skills={["Java", "Spring Boot", "Node.js", "Express", "REST APIs", "GraphQL", "Microservices"]}
          />

          <SkillCategory
            title="Databases"
            icon="💾"
            skills={["PostgreSQL", "MongoDB", "MySQL", "Redis", "Hibernate", "SQL Optimization"]}
          />

          <SkillCategory
            title="Cloud & DevOps"
            icon="☁️"
            skills={["AWS (EC2, S3, ECS)", "Docker", "Kubernetes", "CI/CD", "Terraform", "CloudWatch"]}
          />

          <SkillCategory
            title="Message Queues"
            icon="📨"
            skills={["Apache Kafka", "RabbitMQ", "Event-Driven Architecture", "Pub/Sub Patterns"]}
          />

          <SkillCategory
            title="Security & Auth"
            icon="🔒"
            skills={["OAuth 2.0", "JWT", "HTTPS/TLS", "API Security", "Data Encryption"]}
          />

          <SkillCategory
            title="Testing & Tools"
            icon="🧪"
            skills={["Jest", "Playwright", "JUnit", "Git", "Postman", "Jira", "E2E Testing"]}
          />

        </div>
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
            <a href="mailto:sirimungi9@gmail.com"
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
            <p>sirimungi9@gmail.com</p>
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
