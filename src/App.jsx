import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const experiences = [
  {
    role: "Software Developer",
    org: "University of Central Florida — VERA Lab",
    dates: "Jun 2025 – Present",
    focus: "NSF research infrastructure · Full-stack · AWS",
    points: [
      "Building software for VERA (Virtual Experience Research Accelerator) — an NSF-funded CISE community research infrastructure for large-scale XR human-subjects studies.",
      "Architected a full-stack AWS platform (React, Node.js, TypeScript) to orchestrate experiment workflows, participant sessions, telemetry, and analytics.",
      "Shipped Stripe payment, subscription, and usage-bundle flows so researchers can purchase credits and run studies on the platform.",
      "Refactored a legacy Node.js backend into middleware-driven architecture for auth, validation, logging, and errors — cutting production issues by ~30%.",
      "Built AWS data pipelines with S3, EC2, CloudWatch, and Athena; automated QA with Playwright and Jest (40%+ fewer UI/integration issues).",
    ],
  },
  {
    role: "Graduate Teaching & Research Assistant",
    org: "University of Central Florida — VERA Lab",
    dates: "Jan 2024 – May 2025",
    focus: "Mentoring · Full-stack · Research support",
    points: [
      "Supported the NSF VERA research effort while guiding 100+ students through end-to-end web apps with React, Node.js, REST APIs, auth, and deployment.",
      "Mentored backend architecture and API design — reviewing Express and Spring Boot projects for layered separation and secure auth.",
      "Designed labs on database modeling, indexing, and query optimization for scalable applications.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Temenos — Quantum Fabric",
    dates: "Jul 2021 – Feb 2023",
    focus: "Banking middleware · Java · Spring Boot",
    points: [
      "Built and maintained middleware APIs and microservices connecting mobile and web banking apps to core systems — thousands of transactions per hour under enterprise reliability constraints.",
      "Designed a high-volume notification service for 100k+ users with queuing, retries, and monitoring — cutting notification failures by 90%+ at peak.",
      "Hardened security with OAuth 2.0 and JWT; remediating high-severity issues including emergency Log4j response.",
      "Improved high-traffic API performance ~30% through SQL optimization and database access tuning.",
      "Built adapters integrating Java services with Python, Go, Salesforce, and partner platforms under consistent API contracts.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Thomson Reuters",
    dates: "Nov 2020 – Jun 2021",
    focus: "Tax compliance · .NET · Angular",
    points: [
      "Built Angular workflows backed by REST and .NET APIs for an indirect tax compliance platform.",
      "Added Selenium/Katalon end-to-end automation and REST/SOAP contract validation to catch integration issues earlier.",
    ],
  },
];

const projects = [
  {
    title: "Phishing URL Detection with GANs",
    blurb:
      "GAN-based classifier trained on 1M+ URLs (~97.5% accuracy). Self-attention discriminator cut false positives ~30%. Deployed as a production inference service under 200ms latency.",
    tech: ["Python", "GANs", "TensorFlow", "Flask"],
  },
  {
    title: "Distributed Web Crawling & Indexing",
    blurb:
      "Horizontally scalable crawlers with Kafka-backed queues, rate limiting, deduplication, fault tolerance, orchestration, and monitoring for downstream analytics and ML.",
    tech: ["Kafka", "Java", "Docker", "Distributed Systems"],
  },
  {
    title: "LLM Retrieval System (RAG)",
    blurb:
      "Retrieval pipeline with document chunking, embeddings, and semantic search before LLM synthesis — constrained prompts to reduce hallucinations, with logging and latency tracking.",
    tech: ["Python", "RAG", "LLMs", "Embeddings"],
  },
  {
    title: "Service Reliability Monitoring",
    blurb:
      "Lightweight monitoring that ingests logs and metrics to surface latency spikes and error bursts, with trend analysis and alert inspection in a simple web UI.",
    tech: ["Python", "Monitoring", "Analytics"],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "C#", "Go"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "REST", "Microservices", ".NET", "FastAPI"],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "HTML/CSS", "Component UI"],
  },
  {
    label: "Cloud & Data",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "PostgreSQL", "Redis", "MongoDB", "DynamoDB"],
  },
  {
    label: "Quality",
    items: ["Playwright", "Jest", "Selenium", "JUnit", "CI/CD", "GitHub Actions"],
  },
  {
    label: "Architecture",
    items: ["Distributed Systems", "Event-Driven", "OAuth 2.0", "JWT", "System Design"],
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#featured", label: "Featured" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-mist-wash/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="section-pad mx-auto flex max-w-content items-center justify-between py-4">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-ink link-underline"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Siri Mungi
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-mute transition-colors hover:text-ink link-underline"
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:sirimungi9@gmail.com" className="btn-primary !py-2.5 !px-4 text-xs">
            Email
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-ink"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-mist-wash section-pad py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:sirimungi9@gmail.com"
            className="mt-2 inline-block text-teal font-medium"
            onClick={() => setOpen(false)}
          >
            sirimungi9@gmail.com
          </a>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-12 max-w-2xl">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="accent-line mb-5"
      />
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-teal">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-headline text-ink">{title}</h2>
      {children && (
        <p className="mt-4 font-serif text-lg leading-relaxed text-ink-mute">{children}</p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero — one composition: brand, line, CTAs */}
      <section
        id="home"
        className="section-pad relative flex min-h-[100svh] flex-col justify-end pb-20 pt-28 sm:pb-28 sm:pt-32"
      >
        <div className="mx-auto w-full max-w-content">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-teal"
          >
            Software Engineer · Orlando, FL
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-display text-ink"
          >
            Siri Mungi
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-ink-soft sm:text-2xl"
          >
            I ship backends and full-stack systems — from banking middleware
            to NSF-funded research infrastructure for XR studies.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#featured" className="btn-primary">
              Featured work
            </a>
            <a
              href="https://www.linkedin.com/in/siri-mungi/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sirimungi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-pad py-20 sm:py-28">
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="About" title="Who I am" />
            </div>
            <div className="space-y-5 font-serif text-lg leading-relaxed text-ink-soft lg:col-span-8 lg:pt-14">
              <p>
                Full-stack engineer with 4+ years shipping production services
                across enterprise banking and academic research. I care about
                systems that stay reliable under real load — clear interfaces,
                tests that catch the ugly cases, and releases you can trust.
              </p>
              <p>
                Right now I build software for{" "}
                <a
                  href="https://vera.research.ucf.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal link-underline"
                >
                  VERA
                </a>
                , an NSF-funded research infrastructure project at UCF that helps
                XR researchers run large-scale human-subjects studies. Before
                that, I worked on banking middleware at Temenos and tax
                compliance software at Thomson Reuters.
              </p>
              <p className="text-base text-ink-mute">
                M.S. Computer Science, UCF (GPA 3.9) — Machine Learning &
                Software Engineering. Day-to-day stack: Java / Spring Boot,
                Node.js / TypeScript, React, AWS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-pad mx-auto max-w-content">
        <div className="section-rule" />
      </div>

      {/* Featured case study — VERA */}
      <section id="featured" className="section-pad py-20 sm:py-28">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="Featured" title="VERA">
            Building the software layer for an NSF-funded research accelerator.
          </SectionHeading>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-12 lg:grid-cols-12 lg:gap-16"
          >
            <div className="space-y-6 lg:col-span-7">
              <p className="font-serif text-lg leading-relaxed text-ink-soft">
                The{" "}
                <span className="text-ink font-medium">
                  Virtual Experience Research Accelerator (VERA)
                </span>{" "}
                is a UCF-led project supported by collaborative grants from the
                U.S. National Science Foundation. It is building large-scale
                infrastructure so researchers nationwide can run XR (VR/AR)
                human-subjects studies with more speed, scale, and control than
                traditional lab setups allow.
              </p>
              <p className="font-serif text-lg leading-relaxed text-ink-soft">
                My work sits in the full-stack platform that makes that possible:
                experiment orchestration, participant sessions, Stripe-backed
                usage and billing for researchers, telemetry pipelines on AWS,
                and the auth/validation layers that keep production stable.
              </p>

              <div className="grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-mute">
                    Context
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    NSF CISE infrastructure
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-mute">
                    Domain
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    XR human-subjects research
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-mute">
                    My focus
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    Platform, payments, data
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-teal">
                What I shipped
              </p>
              <ul className="space-y-4">
                {[
                  "AWS-backed orchestration for concurrent experiment workflows and participant sessions",
                  "Stripe subscriptions and credit bundles for researcher billing and usage",
                  "Middleware refactor that centralized auth, validation, and error handling (~30% fewer production issues)",
                  "S3 / CloudWatch / Athena pipelines for telemetry and behavioral analytics",
                  "Playwright + Jest coverage across payments, auth, and experiment setup",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-ink/10 pb-4 text-[15px] leading-relaxed text-ink-soft last:border-0"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-teal" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://vera.research.ucf.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal link-underline"
              >
                vera.research.ucf.edu
                <span aria-hidden>↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-pad mx-auto max-w-content">
        <div className="section-rule" />
      </div>

      {/* Experience */}
      <section id="work" className="section-pad py-20 sm:py-28">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built"
          >
            NSF research infrastructure, banking middleware, and compliance
            systems — ownership from the API contract to production.
          </SectionHeading>

          <div className="space-y-0">
            {experiences.map((job) => (
              <motion.article
                key={job.org + job.dates}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 border-t border-ink/10 py-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <p className="font-display text-xl font-semibold text-ink">
                    {job.role}
                  </p>
                  <p className="mt-1 text-teal">{job.org}</p>
                  <p className="mt-3 text-sm text-ink-mute">
                    {job.dates}
                    <span className="mx-2 text-ink/20">·</span>
                    {job.focus}
                  </p>
                </div>
                <ul className="space-y-3 lg:col-span-8">
                  {job.points.map((point) => (
                    <li
                      key={point.slice(0, 40)}
                      className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 bg-teal" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-pad mx-auto max-w-content">
        <div className="section-rule" />
      </div>

      {/* Projects */}
      <section id="projects" className="section-pad py-20 sm:py-28">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
          >
            Systems and ML projects outside day-to-day product delivery.
          </SectionHeading>

          <div>
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid gap-4 border-t border-ink/10 py-8 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-1">
                  <span className="font-display text-sm text-ink-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-teal">
                    {project.title}
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {project.blurb}
                  </p>
                  <p className="mt-3 text-xs tracking-wide text-ink-mute">
                    {project.tech.join("  ·  ")}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="section-rule" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-pad bg-ink py-20 text-chalk sm:py-28">
        <div className="mx-auto max-w-content">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 h-0.5 w-12 origin-left bg-teal-bright"
          />
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-teal-bright">
            Toolkit
          </p>
          <h2 className="font-display text-headline text-chalk">Technical skills</h2>
          <p className="mt-4 max-w-xl font-serif text-lg text-chalk/60">
            What I use to ship and keep systems healthy.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-teal-bright">
                  {group.label}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[15px] text-chalk/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-pad py-16 sm:py-20">
        <div className="mx-auto flex max-w-content flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Education
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              M.S. Computer Science
            </h2>
            <p className="mt-1 text-ink-soft">
              University of Central Florida · Machine Learning & Software Engineering
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-ink-mute">Aug 2023 – May 2025</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">GPA 3.9 / 4.0</p>
          </div>
        </div>
      </section>

      <div className="section-pad mx-auto max-w-content">
        <div className="section-rule" />
      </div>

      {/* Contact */}
      <section id="contact" className="section-pad py-20 sm:py-28">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="Contact" title="Let’s talk">
            Open to roles where ownership, reliability, and clear systems matter.
          </SectionHeading>

          <div className="flex flex-wrap gap-3">
            <a href="mailto:sirimungi9@gmail.com" className="btn-primary">
              sirimungi9@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/siri-mungi/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sirimungi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="section-pad border-t border-ink/10 py-8">
        <div className="mx-auto flex max-w-content flex-col gap-2 text-sm text-ink-mute sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Siri Mungi</p>
          <p>Orlando, FL</p>
        </div>
      </footer>
    </div>
  );
}
