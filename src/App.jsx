import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 + i * 0.09,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const experiences = [
  {
    role: "Software Developer",
    org: "UCF VERA Lab",
    dates: "Jun 2025 to Present",
    focus: "NSF research platform, AWS, payments",
    points: [
      "Building the software behind VERA, an NSF funded research infrastructure for large scale XR human subjects studies.",
      "Full stack AWS platform in React, Node.js, and TypeScript for experiment workflows, participant sessions, telemetry, and analytics.",
      "Stripe payments, subscriptions, and credit bundles so researchers can buy usage and run studies on the platform.",
      "Refactored a messy Node.js backend into shared middleware for auth, validation, logging, and errors. About 30% fewer production issues.",
      "AWS pipelines with S3, EC2, CloudWatch, and Athena, plus Playwright and Jest coverage that cut UI and integration bugs by 40%+.",
    ],
  },
  {
    role: "Graduate Teaching & Research Assistant",
    org: "UCF VERA Lab",
    dates: "Jan 2024 to May 2025",
    focus: "Teaching, mentoring, full stack",
    points: [
      "Helped 100+ students ship real web apps with React, Node.js, REST APIs, auth, databases, and deployment.",
      "Reviewed Express and Spring Boot projects for clean layering and secure auth, not just code that compiles.",
      "Ran labs on database modeling, indexing, and query performance.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Temenos Quantum Fabric",
    dates: "Jul 2021 to Feb 2023",
    focus: "Banking middleware, Java, Spring Boot",
    points: [
      "Owned middleware APIs connecting mobile and web banking apps to core systems, under real enterprise reliability pressure.",
      "Built a notification service for 100k+ users with queues, retries, and monitoring. Peak failures dropped by more than 90%.",
      "Hardened OAuth 2.0 and JWT auth, including emergency response during Log4j.",
      "Tuned SQL and Hibernate access patterns and cut high traffic API response times by about 30%.",
      "Wrote adapters bridging Java services with Python, Go, Salesforce, and partner platforms.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Thomson Reuters",
    dates: "Nov 2020 to Jun 2021",
    focus: "Tax compliance, .NET, Angular",
    points: [
      "Built Angular workflows on REST and .NET APIs for an indirect tax compliance product.",
      "Added Selenium and Katalon end to end tests plus REST/SOAP contract checks so regressions showed up earlier.",
    ],
  },
];

const projects = [
  {
    title: "Phishing URL Detection with GANs",
    blurb:
      "Trained a GAN classifier on over a million URLs and hit about 97.5% accuracy. A self attention discriminator cut false positives by roughly 30%, then shipped as an inference service under 200ms.",
    tech: "Python, GANs, TensorFlow, Flask",
  },
  {
    title: "Distributed Web Crawling & Indexing",
    blurb:
      "Horizontally scalable crawlers on Kafka queues with rate limiting, dedup, fault tolerance, orchestration, and monitoring for analytics and ML downstream.",
    tech: "Kafka, Java, Docker, distributed systems",
  },
  {
    title: "LLM Retrieval System (RAG)",
    blurb:
      "Chunking, embeddings, and semantic search feeding an LLM, with prompts constrained to retrieved context so answers stay grounded. Logging and latency tracking included.",
    tech: "Python, RAG, LLMs, embeddings",
  },
  {
    title: "Service Reliability Monitoring",
    blurb:
      "Ingests logs and metrics to flag latency spikes and error bursts, with a small web UI for trends and alert inspection.",
    tech: "Python, monitoring, analytics",
  },
];

const skillGroups = [
  { label: "Languages", items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "C#", "Go"] },
  { label: "Backend", items: ["Node.js", "Express", "Spring Boot", "REST", "Microservices", ".NET", "FastAPI"] },
  { label: "Frontend", items: ["React", "Angular", "HTML/CSS", "Component UI"] },
  { label: "Cloud & Data", items: ["AWS", "Docker", "Kubernetes", "Terraform", "PostgreSQL", "Redis", "MongoDB", "DynamoDB"] },
  { label: "Quality", items: ["Playwright", "Jest", "Selenium", "JUnit", "CI/CD", "GitHub Actions"] },
  { label: "Architecture", items: ["Distributed systems", "Event driven", "OAuth 2.0", "JWT", "System design"] },
];

const tickerItems = [
  "NSF research infrastructure",
  "Banking middleware",
  "Stripe payments",
  "AWS pipelines",
  "Java / Spring Boot",
  "Node.js / TypeScript",
  "React",
  "Distributed systems",
  "Playwright QA",
  "XR platforms",
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#featured", label: "VERA" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="section-pad mx-auto flex max-w-content items-center justify-between py-4">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          SM
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-mute transition-colors hover:text-ink link-underline"
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:sirimungi9@gmail.com" className="btn-primary !px-4 !py-2 text-xs">
            Say hi
          </a>
        </div>

        <button
          type="button"
          className="text-ink md:hidden"
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
        <div className="section-pad border-t border-ink/10 bg-paper py-4 md:hidden">
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
        </div>
      )}
    </header>
  );
}

function ExperienceRow({ job, index, open, onToggle }) {
  return (
    <div className="border-t border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-6 text-left transition-colors hover:bg-signal-wash/30 sm:gap-8 sm:py-7"
        aria-expanded={open}
      >
        <span className="font-display text-sm text-signal">{String(index + 1).padStart(2, "0")}</span>
        <div className="min-w-0">
          <p className="font-display text-xl font-bold text-ink sm:text-2xl">{job.role}</p>
          <p className="mt-1 text-sm text-ink-mute sm:text-base">
            {job.org}
            <span className="mx-2 opacity-30">/</span>
            {job.dates}
          </p>
        </div>
        <span
          className={`font-display text-2xl text-signal transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-10 sm:pl-14">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-signal">
                {job.focus}
              </p>
              <ul className="max-w-3xl space-y-3">
                {job.points.map((point) => (
                  <li key={point.slice(0, 48)} className="text-[15px] leading-relaxed text-ink-soft">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [openJob, setOpenJob] = useState(0);

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section
        id="home"
        className="section-pad relative flex min-h-[100svh] flex-col justify-center pb-16 pt-28"
      >
        <div className="mx-auto w-full max-w-content">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-8 inline-flex items-center gap-3 border border-signal/25 bg-signal-wash/60 px-4 py-1.5 text-xs font-medium text-signal"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Open to full time roles · Orlando, FL
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-display text-ink"
          >
            Siri
            <br />
            <span className="text-signal">Mungi</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-2xl font-serif text-xl leading-snug text-ink-soft sm:text-2xl"
          >
            I build the boring reliable stuff that makes ambitious products work.
            Banking middleware yesterday. NSF funded XR research infrastructure today.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#featured" className="btn-primary">
              See VERA
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

      {/* Moving ticker for energy */}
      <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-chalk">
        <div className="ticker" aria-hidden>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 font-display text-sm tracking-wide">
              {item}
              <span className="text-signal-bright">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="section-pad py-20 sm:py-28">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">About</p>
            <h2 className="mt-3 font-display text-headline text-ink">
              Engineer who likes systems that hold up.
            </h2>
          </div>
          <div className="space-y-5 font-serif text-lg leading-relaxed text-ink-soft lg:col-span-8 lg:pt-8">
            <p>
              Four plus years shipping production services across enterprise banking
              and academic research. I get weirdly happy about clear interfaces,
              tests that catch the ugly cases, and releases that do not surprise anyone at 2am.
            </p>
            <p>
              These days I write software for{" "}
              <a
                href="https://vera.research.ucf.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-signal link-underline"
              >
                VERA at UCF
              </a>
              , an NSF funded project helping XR researchers run large human subjects
              studies. Before that: banking middleware at Temenos, tax compliance at Thomson Reuters.
            </p>
            <p className="font-sans text-base text-ink-mute">
              M.S. Computer Science from UCF, GPA 3.9. Focus on machine learning and software engineering.
              Usual toolkit: Java, Spring Boot, Node.js, TypeScript, React, AWS.
            </p>
          </div>
        </div>
      </section>

      {/* Featured VERA: full bleed color */}
      <section id="featured" className="bg-night text-chalk">
        <div className="section-pad mx-auto max-w-content py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal-bright">
                  Featured case
                </p>
                <h2 className="mt-3 font-display text-headline">
                  VERA
                </h2>
                <p className="mt-3 max-w-xl font-serif text-lg text-chalk/65">
                  The software layer for an NSF funded research accelerator that lets
                  labs run XR studies at a scale the traditional lab setup cannot touch.
                </p>
              </div>
              <a
                href="https://vera.research.ucf.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-chalk/20 px-5 py-3 text-sm transition-colors hover:border-signal-bright hover:text-signal-bright"
              >
                vera.research.ucf.edu ↗
              </a>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                { k: "NSF", v: "CISE community research infrastructure" },
                { k: "XR", v: "VR and AR human subjects studies nationwide" },
                { k: "My lane", v: "Platform, Stripe billing, AWS data, reliability" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="border border-chalk/10 bg-chalk/[0.03] p-6"
                >
                  <p className="font-display text-3xl font-bold text-signal-bright">{item.k}</p>
                  <p className="mt-3 text-sm leading-relaxed text-chalk/70">{item.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              <p className="font-serif text-lg leading-relaxed text-chalk/75">
                VERA (Virtual Experience Research Accelerator) is a UCF led project
                backed by collaborative National Science Foundation grants. The goal
                is simple and hard: give XR researchers a shared platform for speed,
                scale, and control that local lab hardware alone cannot provide.
              </p>
              <ul className="space-y-4">
                {[
                  "AWS orchestration for concurrent experiments and participant sessions",
                  "Stripe subscriptions and credit bundles for researcher usage",
                  "Middleware rewrite that cut production issues by about 30%",
                  "S3, CloudWatch, Athena pipelines for telemetry and behavior data",
                  "Playwright and Jest across payments, auth, and experiment setup",
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-b border-chalk/10 pb-4 text-[15px] text-chalk/80 last:border-0">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-signal-bright" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work accordion */}
      <section id="work" className="section-pad py-20 sm:py-28">
        <div className="mx-auto max-w-content">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">Work</p>
            <h2 className="mt-3 font-display text-headline text-ink">Places I have shipped from</h2>
            <p className="mt-4 font-serif text-lg text-ink-mute">
              Click a role for the details. Research platforms, banking middleware, compliance software.
            </p>
          </div>

          <div className="border-b border-ink/10">
            {experiences.map((job, i) => (
              <ExperienceRow
                key={job.org + job.dates}
                job={job}
                index={i}
                open={openJob === i}
                onToggle={() => setOpenJob(openJob === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-pad border-t border-ink/10 bg-paper-deep/40 py-20 sm:py-28">
        <div className="mx-auto max-w-content">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">Projects</p>
            <h2 className="mt-3 font-display text-headline text-ink">Side builds and experiments</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden border border-ink/10 bg-chalk p-7 transition-colors hover:border-signal/40 sm:p-8"
              >
                <span className="font-display text-5xl font-bold text-signal/15 transition-colors group-hover:text-signal/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{project.blurb}</p>
                <p className="mt-5 text-xs tracking-wide text-ink-mute">{project.tech}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-pad py-20 sm:py-24">
        <div className="mx-auto max-w-content">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">Toolkit</p>
          <h2 className="mt-3 font-display text-headline text-ink">What I actually use</h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-3 border-b border-ink/10 pb-2 text-xs font-medium uppercase tracking-[0.16em] text-signal">
                  {group.label}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education strip */}
      <section className="section-pad">
        <div className="mx-auto max-w-content overflow-hidden bg-signal px-8 py-10 text-chalk sm:px-12 sm:py-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-chalk/70">Education</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                M.S. Computer Science, UCF
              </h2>
              <p className="mt-2 text-chalk/80">
                Machine Learning & Software Engineering · Aug 2023 to May 2025
              </p>
            </div>
            <p className="font-display text-4xl font-bold">3.9 GPA</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-pad py-20 sm:py-28">
        <div className="mx-auto max-w-content">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">Contact</p>
          <h2 className="mt-4 font-display text-display text-ink" style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}>
            Got a role
            <br />
            <span className="text-signal">worth building?</span>
          </h2>
          <p className="mt-6 max-w-lg font-serif text-lg text-ink-mute">
            I like teams that care about ownership and systems that do not fall over.
            Email is the fastest way to reach me.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
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
          <p>Built in Orlando</p>
        </div>
      </footer>
    </div>
  );
}
