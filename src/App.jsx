import { motion } from "framer-motion";

function Section({ title, children }) {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-accent mb-8">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-primary text-gray-200 min-h-screen font-sans">

      {/* Hero */}
      <div className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4">
          Siri M
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Backend & Distributed Systems Engineer building reliable, cloud-native platforms.
        </p>
      </div>

      {/* About */}
      <Section title="About">
        <p className="text-gray-400 leading-relaxed">
          I'm a software engineer with 4+ years of experience building 
          backend services, event-driven architectures, and integration-heavy 
          enterprise platforms. I specialize in designing systems that are 
          reliable under real-world constraints — from financial middleware 
          handling thousands of transactions per hour to research platforms 
          coordinating distributed VR experiments.
        </p>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <div className="space-y-10">

          <div>
            <h3 className="text-xl font-semibold">University of Central Florida — VERA Lab</h3>
            <p className="text-gray-500">Software Developer | 2025–Present</p>
            <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
              <li>Led full-stack MERN development of collaborative VR research platform on AWS.</li>
              <li>Designed researcher collaboration & permission system reducing coordination overhead by 70%.</li>
              <li>Built data ingestion & analytics pipeline using S3, Athena, EC2, and CloudWatch.</li>
              <li>Introduced middleware architecture reducing production bugs by 30%.</li>
              <li>Established Playwright & Jest E2E testing strategy.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Temenos</h3>
            <p className="text-gray-500">Software Engineer | 2021–2023</p>
            <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
              <li>Developed Spring Boot middleware APIs handling high-volume banking transactions.</li>
              <li>Built event-driven workflows using Apache Kafka.</li>
              <li>Reduced notification failures by 90% via queue + retry architecture.</li>
              <li>Led OAuth 2.0 & JWT security hardening.</li>
              <li>Optimized SQL/Hibernate reducing response times by 30%.</li>
            </ul>
          </div>

        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-semibold">Distributed Web Crawler</h3>
            <p className="text-gray-400">
              Kafka-backed distributed crawling system with fault tolerance, 
              deduplication, and scalable indexing pipelines.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Phishing URL Detection (GAN)</h3>
            <p className="text-gray-400">
              GAN-based phishing classifier trained on 1M+ URLs achieving 97.5% accuracy.
              Production microservice with sub-200ms inference latency.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Service Reliability Monitoring Tool</h3>
            <p className="text-gray-400">
              Log & metric ingestion platform detecting latency spikes and error bursts.
            </p>
          </div>

        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-400">
          <div>Java / Spring Boot</div>
          <div>Node.js / Express</div>
          <div>Kafka</div>
          <div>AWS (EC2, S3, ECS)</div>
          <div>Docker / Kubernetes</div>
          <div>PostgreSQL / MongoDB</div>
          <div>OAuth 2.0 / JWT</div>
          <div>Playwright / Jest</div>
          <div>Distributed Systems</div>
        </div>
      </Section>

      {/* Contact */}
      <Section title="Contact">
        <p className="text-gray-400">
          Email: sirimungi9@gmail.com <br/>
          LinkedIn: linkedin.com/in/siri-mungi
        </p>
      </Section>

      <footer className="text-center py-10 text-gray-600">
        © 2026 Siri M
      </footer>

    </div>
  );
}
