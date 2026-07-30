import { useEffect, useState } from "react";

const jobs = [
  {
    company: "UCF VERA",
    title: "Software Developer",
    range: "Jun 2025 to Present",
    url: "https://vera.research.ucf.edu/",
    bullets: [
      "Building the full stack platform for VERA, an NSF funded research infrastructure project for large scale XR human subjects studies.",
      "Shipped React, Node.js, and TypeScript services on AWS for experiment workflows, participant sessions, telemetry, and analytics.",
      "Added Stripe payments, subscriptions, and credit bundles so researchers can purchase and consume study usage.",
      "Refactored a legacy Node.js backend into shared middleware for auth, validation, logging, and errors. About 30% fewer production issues.",
      "Built AWS pipelines with S3, EC2, CloudWatch, and Athena, plus Playwright and Jest coverage that cut UI and integration bugs by 40%+.",
    ],
  },
  {
    company: "UCF (TA)",
    title: "Graduate Teaching & Research Assistant",
    range: "Jan 2024 to May 2025",
    url: "https://www.ucf.edu/",
    bullets: [
      "Guided 100+ students through full stack apps with React, Node.js, REST APIs, auth, databases, and deployment.",
      "Mentored backend architecture and API design. Reviewed Express and Spring Boot projects for layered design and secure auth.",
      "Helped students debug across frontend state, backend handling, and SQL.",
      "Designed labs on database modeling, indexing, and query optimization.",
      "Worked with faculty on project specs and rubrics focused on production ready patterns.",
    ],
  },
  {
    company: "Temenos",
    title: "Software Engineer",
    range: "Jul 2021 to Feb 2023",
    url: "https://www.temenos.com/",
    bullets: [
      "Owned middleware APIs connecting mobile and web banking apps to core systems. Thousands of transactions per hour under enterprise reliability constraints.",
      "Built a notification service for 100k+ users with queuing, retries, and monitoring. Peak failures dropped by more than 90%.",
      "Hardened OAuth 2.0 and JWT auth, including emergency response during Log4j.",
      "Cut high traffic API response times by about 30% through SQL and Hibernate tuning.",
      "Built adapters integrating Java services with Python, Go, Salesforce, and partner platforms.",
      "Primary engineer on production incidents: root cause analysis, customer coordination, fixes through release. Mentored juniors in reviews.",
    ],
  },
  {
    company: "Thomson Reuters",
    title: "Software Engineer Intern",
    range: "Nov 2020 to Jun 2021",
    url: "https://www.thomsonreuters.com/",
    bullets: [
      "Built .NET and C# endpoints that powered UI features for an indirect tax compliance platform.",
      "Implemented Angular screens for tax results, validation states, and service errors.",
      "Added Selenium and Katalon end to end tests for tax calculation and reporting paths.",
      "Verified REST and SOAP contracts so backend changes did not break the frontend.",
    ],
  },
];

const projects = [
  {
    title: "Phishing URL Detection with GANs",
    blurb:
      "GAN classifier trained on 1M+ URLs with about 97.5% accuracy. Self attention cut false positives by about 30%. Deployed as an inference service under 200ms.",
    tech: ["Python", "TensorFlow", "Flask", "GANs"],
    github: "https://github.com/sirimungi",
  },
  {
    title: "Distributed Web Crawling",
    blurb:
      "Horizontally scalable crawlers with Kafka queues, rate limiting, deduplication, fault tolerance, and monitoring for analytics and ML.",
    tech: ["Java", "Kafka", "Docker"],
    github: "https://github.com/sirimungi",
  },
  {
    title: "LLM Retrieval System",
    blurb:
      "RAG pipeline with chunking, embeddings, and semantic search. Prompts stay grounded in retrieved context, with logging and latency tracking.",
    tech: ["Python", "RAG", "LLMs"],
    github: "https://github.com/sirimungi",
  },
  {
    title: "Service Reliability Monitoring",
    blurb:
      "Ingests logs and metrics to flag latency spikes and error bursts, with trend analysis in a simple web UI.",
    tech: ["Python", "Monitoring"],
    github: "https://github.com/sirimungi",
  },
];

function Highlight({ href, children }) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="link-green">
        {children}
      </a>
    );
  }
  return <span className="text-green">{children}</span>;
}

function CuteCat({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <ellipse cx="60" cy="78" rx="32" ry="26" fill="#233554" />
      <circle cx="60" cy="48" r="28" fill="#233554" />
      <path d="M36 36 L32 12 L52 30 Z" fill="#233554" />
      <path d="M84 36 L88 12 L68 30 Z" fill="#233554" />
      <path d="M38 34 L34 16 L50 30 Z" fill="#64ffda" opacity="0.35" />
      <path d="M82 34 L86 16 L70 30 Z" fill="#64ffda" opacity="0.35" />
      <ellipse cx="48" cy="48" rx="4" ry="5" fill="#64ffda" />
      <ellipse cx="72" cy="48" rx="4" ry="5" fill="#64ffda" />
      <circle cx="49.5" cy="47" r="1.4" fill="#0a192f" />
      <circle cx="73.5" cy="47" r="1.4" fill="#0a192f" />
      <path d="M60 54 L56 60 L60 58 L64 60 Z" fill="#64ffda" />
      <path d="M60 58 Q48 62 42 58" stroke="#8892b0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M60 58 Q72 62 78 58" stroke="#8892b0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M28 58 H42" stroke="#8892b0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M28 64 H40" stroke="#8892b0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M78 58 H92" stroke="#8892b0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M80 64 H92" stroke="#8892b0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M88 70 Q108 50 102 88" stroke="#233554" strokeWidth="8" fill="none" strokeLinecap="round" className="origin-top animate-wag" />
      <circle cx="102" cy="90" r="5" fill="#64ffda" opacity="0.7" />
    </svg>
  );
}

function CuteDuck({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <ellipse cx="58" cy="78" rx="34" ry="24" fill="#ccd6f6" />
      <circle cx="72" cy="44" r="22" fill="#ccd6f6" />
      <ellipse cx="72" cy="36" rx="14" ry="10" fill="#64ffda" opacity="0.45" />
      <path d="M90 48 L112 44 L90 56 Z" fill="#64ffda" />
      <circle cx="78" cy="42" r="3.2" fill="#0a192f" />
      <circle cx="79" cy="41" r="1" fill="#ccd6f6" />
      <ellipse cx="48" cy="82" rx="10" ry="7" fill="#64ffda" opacity="0.55" />
      <path d="M40 96 L36 110 M46 96 L48 110" stroke="#64ffda" strokeWidth="3" strokeLinecap="round" />
      <circle cx="34" cy="70" r="3" fill="#64ffda" opacity="0.35" className="animate-pulse" />
      <circle cx="28" cy="58" r="2" fill="#64ffda" opacity="0.25" className="animate-pulse" />
    </svg>
  );
}

function PetCorner() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="group relative">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded border border-green transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
        <div className="relative overflow-hidden rounded bg-navy p-4">
          <div className="absolute inset-0 bg-green/10 transition-opacity duration-300 group-hover:opacity-0" />
          <div className="relative grid grid-cols-2 gap-1">
            <CuteCat className="w-full drop-shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105" />
            <CuteDuck className="w-full drop-shadow-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105" />
          </div>
          <p className="relative mt-1 text-center font-mono text-[11px] text-slate">
            site supervisors
          </p>
        </div>
      </div>
      <p className="mt-4 text-center font-mono text-xs text-slate">
        M.S. CS, UCF. GPA 3.9
      </p>
    </div>
  );
}

const highlights = [
  { label: "Years shipping", value: "4+" },
  { label: "API latency cut", value: "~30%" },
  { label: "Notify reliability", value: "90%+" },
  { label: "Students mentored", value: "100+" },
];

const techList = [
  "Java",
  "TypeScript",
  "Node.js",
  "Spring Boot",
  "React",
  "AWS",
  "PostgreSQL",
  "Docker",
  "Playwright",
  "OAuth 2.0",
];

function IconGitHub({ className = "h-5 w-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn({ className = "h-5 w-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76S5.53 3.21 6.5 3.21s1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z" />
    </svg>
  );
}

function IconExternal({ className = "h-5 w-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 4h6v6M10 14L20 4M20 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h5" />
    </svg>
  );
}

function Socials({ vertical = false }) {
  const cls = vertical
    ? "flex flex-col items-center gap-5"
    : "flex items-center gap-5";
  return (
    <div className={cls}>
      <a
        href="https://github.com/sirimungi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate transition-colors hover:text-green hover:-translate-y-0.5"
        aria-label="GitHub"
      >
        <IconGitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/siri-mungi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate transition-colors hover:text-green hover:-translate-y-0.5"
        aria-label="LinkedIn"
      >
        <IconLinkedIn />
      </a>
      <a
        href="mailto:sirimungi9@gmail.com"
        className="text-slate transition-colors hover:text-green hover:-translate-y-0.5"
        aria-label="Email"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
        </svg>
      </a>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About", n: "01" },
    { href: "#experience", label: "Experience", n: "02" },
    { href: "#work", label: "Work", n: "03" },
    { href: "#contact", label: "Contact", n: "04" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-6 transition-all duration-200 md:px-10 ${
          scrolled
            ? "h-16 bg-navy-dark/90 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] backdrop-blur"
            : "h-20 bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-[1600px] items-center justify-between">
          <a href="#top" className="font-mono text-green" aria-label="Home">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded border border-green/40 text-sm font-semibold transition-colors hover:bg-green/10">
              SM
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="group text-sm text-slate-light transition-colors hover:text-green">
                <span className="font-mono text-xs text-green">{l.n}. </span>
                {l.label}
              </a>
            ))}
            <a href="mailto:sirimungi9@gmail.com" className="btn-outline !px-4 !py-2 text-xs">
              Email
            </a>
          </div>

          <button
            type="button"
            className="relative z-50 text-green md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h10" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex justify-end bg-navy-darkest/70 md:hidden">
          <aside className="flex h-full w-[min(75vw,320px)] flex-col items-center justify-center gap-8 bg-navy px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-center text-slate-lightest"
              >
                <div className="font-mono text-sm text-green">{l.n}.</div>
                {l.label}
              </a>
            ))}
            <a href="mailto:sirimungi9@gmail.com" className="btn-outline" onClick={() => setOpen(false)}>
              Email
            </a>
          </aside>
        </div>
      )}
    </>
  );
}

function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <div className="flex flex-col sm:flex-row">
      <div
        role="tablist"
        aria-label="Job tabs"
        className="relative mb-6 flex overflow-x-auto sm:mb-0 sm:w-40 sm:flex-col md:w-44"
      >
        <div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-navy-light sm:top-0 sm:h-full sm:w-0.5"
          aria-hidden
        />
        {jobs.map((j, i) => (
          <button
            key={j.company}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`relative z-10 shrink-0 border-b-2 px-4 py-3 text-left font-mono text-xs transition-all sm:border-b-0 sm:border-l-2 sm:px-5 ${
              active === i
                ? "border-green bg-green/5 text-green"
                : "border-transparent text-slate hover:bg-navy/60 hover:text-green"
            }`}
          >
            {j.company}
          </button>
        ))}
      </div>

      <div className="min-h-[280px] flex-1 sm:pl-6 md:pl-8">
        <h3 className="text-lg font-semibold text-slate-lightest sm:text-xl">
          {job.title}{" "}
          <span className="text-green">
            @{" "}
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="inline link-green">
              {job.company === "UCF (TA)" ? "UCF" : job.company}
            </a>
          </span>
        </h3>
        <p className="mt-1.5 font-mono text-xs text-slate">{job.range}</p>
        <ul className="mt-5 space-y-3">
          {job.bullets.map((b) => (
            <li key={b.slice(0, 40)} className="grid grid-cols-[1rem_1fr] gap-3 text-[0.95rem] leading-relaxed text-slate">
              <span className="mt-1 text-green" aria-hidden>
                ▹
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div id="top" className="relative min-h-screen">
      <Navbar />

      {/* Side socials (desktop) */}
      <div className="fixed bottom-0 left-8 z-30 hidden w-10 flex-col items-center gap-5 lg:flex">
        <Socials vertical />
        <div className="mt-2 h-24 w-px bg-slate" />
      </div>
      <div className="fixed bottom-0 right-8 z-30 hidden w-10 flex-col items-center gap-5 lg:flex">
        <a
          href="mailto:sirimungi9@gmail.com"
          className="font-mono text-xs tracking-[0.18em] text-slate [writing-mode:vertical-rl] transition-colors hover:text-green hover:-translate-y-1"
        >
          sirimungi9@gmail.com
        </a>
        <div className="mt-2 h-24 w-px bg-slate" />
      </div>

      <main className="mx-auto w-full max-w-content px-6 pt-28 md:px-12 lg:px-24 lg:pt-0">
        {/* Hero */}
        <section className="flex min-h-[100svh] flex-col justify-center py-16">
          <p className="mb-5 font-mono text-sm text-green sm:text-base">Hi, my name is</p>
          <h1 className="text-[clamp(2.4rem,8vw,4.5rem)] font-extrabold leading-[1.05] text-slate-lightest">
            Siri Mungi.
          </h1>
          <h2 className="mt-2 text-[clamp(1.6rem,5vw,3.2rem)] font-extrabold leading-[1.15] text-slate">
            I build systems that hold up in production.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-slate">
            I am a software engineer specializing in backends, distributed services,
            and full stack platforms. Right now I am building software for{" "}
            <Highlight href="https://vera.research.ucf.edu/">VERA</Highlight>, an{" "}
            <Highlight>NSF funded</Highlight> XR research infrastructure project at{" "}
            <Highlight href="https://www.ucf.edu/">UCF</Highlight>. Before that I
            shipped banking middleware at{" "}
            <Highlight href="https://www.temenos.com/">Temenos</Highlight> and tax
            compliance software at{" "}
            <Highlight href="https://www.thomsonreuters.com/">Thomson Reuters</Highlight>.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#experience" className="btn-filled">
              Check out my work
            </a>
            <div className="flex -space-x-2" aria-hidden>
              <div className="h-10 w-10 overflow-hidden rounded-full border border-green/30 bg-navy p-1">
                <CuteCat className="h-full w-full" />
              </div>
              <div className="h-10 w-10 overflow-hidden rounded-full border border-green/30 bg-navy p-1">
                <CuteDuck className="h-full w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section aria-label="Highlights" className="pb-6">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((h) => (
              <li
                key={h.label}
                className="rounded border border-navy-light bg-navy/50 px-4 py-4 transition-colors hover:border-green/40"
              >
                <p className="font-mono text-2xl font-semibold text-green">{h.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate">{h.label}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="py-20 sm:py-24">
          <h2 className="section-title mb-8">
            <span className="num">01.</span> About Me
          </h2>
          <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:gap-12">
            <div className="space-y-4 text-[1.02rem] leading-relaxed text-slate">
              <p>
                Hello. I am Siri, a software engineer based in{" "}
                <Highlight>Orlando</Highlight>. I care about clear interfaces, tests
                that catch ugly cases, and releases that do not surprise anyone at 2am.
              </p>
              <p>
                My work spans enterprise banking middleware at{" "}
                <Highlight href="https://www.temenos.com/">Temenos</Highlight>,{" "}
                <Highlight>NSF funded</Highlight> research platforms like{" "}
                <Highlight href="https://vera.research.ucf.edu/">VERA</Highlight>, and
                teaching full stack engineering to{" "}
                <Highlight>100+ students</Highlight> at UCF. I like owning features end
                to end: design, implementation,{" "}
                <Highlight>CI/CD</Highlight>, and production support. Lately that has
                included <Highlight>Stripe</Highlight> payments, AWS telemetry pipelines,
                and making legacy Node services less scary.
              </p>
              <p>
                When I am offline, you will usually find me hanging out with my{" "}
                <Highlight>cat</Highlight> and <Highlight>duck</Highlight>, or poking at
                a side project that somehow turned into distributed systems again.
              </p>
              <p>Here are a few technologies I work with regularly:</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pt-1 font-mono text-sm">
                {techList.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-green">▹</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <PetCorner />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 sm:py-24">
          <h2 className="section-title mb-8 max-w-xl">
            <span className="num">02.</span> Where I&apos;ve Worked
          </h2>
          <Experience />
        </section>

        {/* Projects */}
        <section id="work" className="py-20 sm:py-24">
          <h2 className="section-title mb-3">
            <span className="num">03.</span> Some Things I&apos;ve Built
          </h2>
          <p className="mb-10 font-mono text-sm text-green">Featured projects</p>

          <ul className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <li key={p.title}>
                <article className="group flex h-full flex-col rounded border border-transparent bg-navy p-6 shadow-none transition-all hover:-translate-y-1 hover:border-green/30 hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] sm:p-7">
                  <div className="mb-6 flex items-start justify-between">
                    <svg className="h-8 w-8 text-green transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                    </svg>
                    <div className="flex gap-3 text-slate">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-green" aria-label="GitHub">
                        <IconGitHub className="h-[18px] w-[18px]" />
                      </a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-green" aria-label="External">
                        <IconExternal className="h-[18px] w-[18px]" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-lightest transition-colors group-hover:text-green">
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      {p.title}
                    </a>
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate">{p.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate-light">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-xl py-24 text-center sm:py-32">
          <p className="font-mono text-sm text-green">04. What&apos;s Next?</p>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-lightest sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-slate">
            I am open to backend and full stack roles where ownership and reliability
            matter. Whether you have a question or a role in mind, my inbox is open.
            The <Highlight>cat</Highlight> and <Highlight>duck</Highlight> approve most
            emails within one business day.
          </p>
          <a href="mailto:sirimungi9@gmail.com" className="btn-filled mt-10 inline-block">
            Say Hello
          </a>
        </section>

        <footer className="pb-10 pt-4 text-center">
          <div className="mb-6 flex justify-center lg:hidden">
            <Socials />
          </div>
          <p className="font-mono text-xs text-slate">
            Designed &amp; Built by Siri Mungi
          </p>
          <p className="mt-2 font-mono text-xs text-slate/70">
            M.S. Computer Science, UCF. GPA 3.9
          </p>
        </footer>
      </main>
    </div>
  );
}
