// ============================================================
//  MASTER PORTFOLIO DATA — edit THIS file to update everything:
//  the website AND the chatbot context update automatically.
// ============================================================

module.exports = {

  // ── RESUME ────────────────────────────────────────────────
  // Drop your PDF into /public, update the filename here.
  RESUME_FILE: "Om_Patel_Resume.pdf",

  // ── PERSONAL ──────────────────────────────────────────────
  PERSONAL: {
    name: "Om Patel",
    phone: "562-848-7824",
    email: "om.patel09@outlook.com",
    linkedin: "https://www.linkedin.com/in/om-patel96",
    linkedinDisplay: "linkedin.com/in/om-patel96",
    education: "B.S. Computer Science · California State University, Long Beach · Jan 2024 - Dec 2027",
  },

  // ── HERO ──────────────────────────────────────────────────
  HERO: {
    kicker: "> NEW GAME STARTED",
    headline: "Hi, I'm Om Patel.\nI build with AI.",
    tagline: "CS student at CSULB ('27) building AI systems, LLM-powered products, and backends that hold up under load.",
    roles: [
      "Currently working as <b>Software Engineer @ Beach Building Services</b>",
      "And as <b>Undergraduate Research Assistant @ California State University, Long Beach</b>, focused on AI and Robotics Simulation",
    ],
  },

  // ── ABOUT ─────────────────────────────────────────────────
  ABOUT: {
    paragraphs: [
      "I'm a Computer Science student at <b>California State University, Long Beach</b>, splitting my time between undergraduate research and shipping production software.",
      "My research focuses on <b>AI and Robotics Simulation</b>: building simulated environments, training and evaluating learning-based policies, and closing the gap between what works in sim and what works in the real world.",
      "Outside the lab, I've integrated LLMs into production web apps, deployed Python microservices, and built distributed systems in Go. I like problems where <b>performance, reliability, and intelligence</b> all matter at once.",
    ],
    stats: [
      { num: "4",    label: "engineering roles" },
      { num: "100+", label: "req/min sustained in prod LLM integration" },
      { num: "10k+", label: "req/sec served by Go backend project" },
    ],
  },

  // ── EXPERIENCE ────────────────────────────────────────────
  EXPERIENCE: [
    {
      role: "Undergraduate Research Assistant",
      date: "May 2026 - Present",
      org: "California State University, Long Beach · AI & Robotics Simulation",
      bullets: [
        "Developed <b>physics-based robotics simulation environments</b> by building configurable manipulation and navigation tasks in Python, enabling consistent training and evaluation of learning-based control policies.",
        "Built <b>reinforcement learning training pipelines</b> by applying domain randomization and curriculum learning strategies, improving policy robustness for sim-to-real transfer.",
        "Standardized a shared <b>Python evaluation framework</b> by unifying environment configs, experiment tracking, and metric logging, cutting experiment setup time by 40% and ensuring reproducible results.",
      ],
    },
    {
      role: "Software Engineer, Student Assistant",
      date: "Jul 2025 - Present",
      org: "Beach Building Services (CSULB) · Long Beach, CA",
      bullets: [
        "Integrated <b>Gemini LLM</b> into a production web application by implementing structured prompts, input validation, and rate-aware fallbacks, sustaining 100+ concurrent requests per minute with zero downtime incidents.",
        "Reduced data processing time by 30% by rewriting performance-critical parsing utilities in <b>C/C++</b> with memory-efficient algorithms and low-overhead I/O on Linux.",
        "Designed a normalized <b>PostgreSQL schema</b> by modeling professor and course rating data across 50+ records, enabling analytics views and aggregation queries for stakeholder reporting.",
        "Increased feature adoption by 18% by implementing onboarding guided-flow features with <b>component-driven frontend architecture</b>, measured via event tracking.",
      ],
    },
    {
      role: "AI Engineer Intern",
      date: "Sep 2025 - Dec 2025",
      org: "Impacter AI · Remote",
      bullets: [
        "Reduced end-to-end latency by 180ms by building <b>Python REST API microservices</b> with async request handling and response caching for LLM inference in a production web application.",
        "Improved LLM output accuracy by 12% by applying <b>systematic prompt engineering</b>, structured output schemas, and post-processing validation pipelines, resolving concurrent request race conditions.",
        "Cut compute costs by 35% and average token usage by 28% by fine-tuning <b>GPT-3 and Llama 2</b> with few-shot prompting and quantization strategies across production workloads.",
      ],
    },
    {
      role: "Software Engineering Fellow",
      date: "May 2025 - Jul 2025",
      org: "Headstarter AI · Remote",
      bullets: [
        "Shipped <b>12+ responsive React/TypeScript features</b> by applying clean component structure and predictable state management, delivering consistently across 10 weeks of rapid iteration.",
        "Reduced regressions by 15% by conducting <b>code reviews</b>, defining clearer interfaces, and strengthening edge-case handling during fast iteration cycles.",
        "Improved test coverage to 85% by implementing <b>unit and integration tests</b> wired into a continuous integration pipeline.",
        "Saved 10+ hours per week by automating data pulls and validation checks with <b>cron jobs and Python scripts</b>.",
      ],
    },
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  PROJECTS: [
    {
      name: "RepoSage AI",
      date: "May 2026",
      desc: "Shipped an AI-powered codebase intelligence tool by ingesting GitHub repos and embedding source into pgvector, enabling semantic search and RAG-grounded answers across 50k+ line codebases in under 5 seconds.",
      chips: ["Next.js", "TypeScript", "pgvector", "OpenAI API", "Redis", "BullMQ"],
      // link: "https://github.com/ompatel/reposage",  // uncomment to add a link
    },
    {
      name: "CollabSync",
      date: "Mar 2026",
      desc: "Architected a real-time collaborative Kanban by combining WebSockets with Redis Pub/Sub, achieving sub-50ms event delivery with optimistic UI updates and server-side conflict resolution across concurrent sessions.",
      chips: ["Next.js", "Socket.IO", "Redis", "PostgreSQL", "Docker"],
    },
    {
      name: "PulseLink",
      date: "Jan 2026",
      desc: "Constructed a horizontally scalable URL shortener in Go by adding a Redis caching layer and Kubernetes auto-scaling, handling 10k+ req/sec while cutting database read load by 85% at 99.9% uptime.",
      chips: ["Go", "Redis", "Kubernetes", "Prometheus", "Grafana"],
    },
  ],

  // ── RESUME PROJECTS (more detailed bullets for the resume page) ──
  RESUME_PROJECTS: [
    {
      name: "RepoSage AI",
      date: "May 2026",
      tech: "Next.js, TypeScript, PostgreSQL, pgvector, OpenAI API, Redis, BullMQ, Docker",
      bullets: [
        "Shipped an AI-powered codebase intelligence tool by ingesting GitHub repositories and embedding source files into pgvector, enabling semantic search across 50k+ line codebases.",
        "Reduced cold-start processing time by 60% by orchestrating an async distributed job pipeline with BullMQ and Redis for background embedding and indexing.",
        "Delivered actionable architecture docs, onboarding guides, and bug reports in under 5 seconds by grounding LLM prompts in retrieved repository context.",
      ],
    },
    {
      name: "CollabSync",
      date: "Mar 2026",
      tech: "Next.js, TypeScript, Socket.IO, Redis Pub/Sub, PostgreSQL, Docker",
      bullets: [
        "Architected a real-time collaborative Kanban system by combining WebSockets with Redis Pub/Sub, achieving sub-50ms event delivery across concurrent sessions.",
        "Preserved data consistency under simultaneous edits by introducing optimistic UI updates and server-side conflict resolution without distributed locking overhead.",
        "Enabled low-latency targeted event delivery across shared workspaces by provisioning a live presence system with room-based broadcasting.",
      ],
    },
    {
      name: "PulseLink",
      date: "Jan 2026",
      tech: "Go, Redis, PostgreSQL, Docker, Kubernetes, Prometheus, Grafana, Nginx",
      bullets: [
        "Constructed a horizontally scalable URL shortener in Go by adding a Redis caching layer, handling 10k+ requests per second while reducing PostgreSQL read load by 85% under peak traffic.",
        "Sustained 99.9% uptime during traffic spikes by deploying on Kubernetes with auto-scaling policies, health probes, adaptive rate limiting, and exponential backoff.",
        "Enabled real-time performance analysis by instrumenting end-to-end observability with Prometheus and Grafana, surfacing p50/p99 latency, cache hit rates, and error rates.",
      ],
    },
  ],

  // ── SKILLS ────────────────────────────────────────────────
  SKILLS: [
    {
      heading: "LANGUAGES",
      chips: ["Python", "C / C++", "Go", "Java", "TypeScript", "JavaScript", "SQL"],
    },
    {
      heading: "AI / ML",
      chips: ["PyTorch", "RL & Simulation", "RAG", "Embeddings", "Prompt Eng.", "Fine-tuning", "OpenCV", "pandas", "NumPy"],
    },
    {
      heading: "BACKEND & INFRA",
      chips: ["Node.js", "Flask", "PostgreSQL", "pgvector", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP"],
    },
    {
      heading: "SYSTEMS & TOOLS",
      chips: ["Linux", "Git", "CI/CD", "GitHub Actions", "REST APIs", "WebSockets", "Kafka", "Agile"],
    },
  ],

  // ── RESUME SKILLS ─────────────────────────────────────────
  RESUME_SKILLS: [
    { label: "Languages",       value: "Python, C, C++, Go, Java, JavaScript, TypeScript, SQL" },
    { label: "AI/ML",           value: "PyTorch, Reinforcement Learning, Robotics Simulation, RAG, Embeddings, Prompt Engineering, Fine-tuning, OpenCV, pandas, NumPy" },
    { label: "Backend & Cloud", value: "Node.js, Flask, FastAPI, PostgreSQL, pgvector, MongoDB, Redis, Docker, Kubernetes, AWS, Azure, Google Cloud, Firebase" },
    { label: "Systems & Tools", value: "Linux, Git, CI/CD, GitHub Actions, REST APIs, WebSockets, Kafka, Prometheus, Grafana, Agile, Scrum" },
  ],

  // ── CONTACT ───────────────────────────────────────────────
  CONTACT: {
    blurb: "I'm open to internships, research collaborations, and interesting engineering problems. The fastest way to reach me is email. I usually reply within a day.",
  },

  // ── BATTLE DIALOGUE ───────────────────────────────────────
  BATTLE_LINES: [
    "A wild OM PATEL appeared!",
    "OM PATEL used FULL STACK!",
    "It's super effective!",
    "RECRUITER is impressed...",
    "RECRUITER used JOB OFFER!",
    "OM PATEL wants to connect!",
  ],

  // ── FOOTER ────────────────────────────────────────────────
  FOOTER: "built with ♥ by om patel",
};
