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
    github: "https://github.com/OmPatel-9",
    githubDisplay: "github.com/OmPatel-9",
    education: "B.S. Computer Science · California State University, Long Beach · Jan 2024 - Dec 2027",
  },

  // ── HERO ──────────────────────────────────────────────────
  HERO: {
    kicker: "> NEW GAME STARTED",
    headline: "Hi, I'm Om Patel.\nI build with AI.",
    tagline: "CS student at CSULB ('27) building AI systems, LLM-powered products, and backends that hold up under load.",
    roles: [
      "Currently working as <b>Software Engineer Intern @ Beach Building Services</b>",
      "And as <b>Undergraduate Research Assistant @ California State University, Long Beach</b>, focused on AI agents and parallel systems",
    ],
  },

  // ── ABOUT ─────────────────────────────────────────────────
  ABOUT: {
    paragraphs: [
      "I'm a Computer Science student at <b>California State University, Long Beach</b>, splitting my time between undergraduate research and shipping production software.",
      "My research focuses on <b>AI agents and parallel systems</b>: building an AI agent on a C#/.NET + ServiceNow backend that classifies and auto-resolves tickets, and studying multithreaded execution patterns in Java/C++.",
      "Outside the lab, I've integrated LLMs into production web apps, built agentic RAG systems, and shipped DevSecOps pipelines. I like problems where <b>performance, reliability, and intelligence</b> all matter at once.",
    ],
    stats: [
      { num: "4",    label: "engineering roles" },
      { num: "100+", label: "req/min sustained in prod LLM integration" },
      { num: "38%",  label: "retrieval precision improvement via semantic chunking" },
    ],
  },

  // ── EXPERIENCE ────────────────────────────────────────────
  EXPERIENCE: [
    {
      role: "Undergraduate Research Assistant",
      date: "May 2026 - Present",
      org: "California State University, Long Beach · Long Beach, CA",
      bullets: [
        "Built multithreaded <b>Java/C++</b> programs studying parallel execution, optimizing CPU-bound workloads across thread pools by tuning task-scheduling and workload-partitioning strategies.",
        "Developing an <b>AI agent on a C#/.NET backend</b> integrated with ServiceNow that classifies, triages, and auto-resolves incident and service-request tickets, on track to reduce organization-wide ticket volume by 30%.",
        "Built live dashboards over the <b>ServiceNow REST API</b> surfacing ticket trends, recurring failure modes, and high-volume categories, now used to prioritize which resolution workflows to automate first.",
        "Designed <b>confidence-based routing</b> that resolves tickets only on strong knowledge-base retrieval and escalates ambiguous cases to human agents, scaling automation without sacrificing resolution accuracy.",
      ],
    },
    {
      role: "Software Engineer Intern",
      date: "Jul 2025 - Present",
      org: "Beach Building Services (CSULB) · Long Beach, CA",
      bullets: [
        "Engineered and integrated a <b>Gemini LLM</b> feature into a production web application using structured prompt pipelines, input validation, and rate-aware fallbacks, sustaining 100+ concurrent requests/min with zero downtime.",
        "Designed and implemented a normalized <b>PostgreSQL</b> relational schema with analytics views, indexed lookups, and aggregation queries, powering stakeholder reporting across professor and course rating data.",
        "Optimized performance-critical <b>C/C++</b> data parsing and validation utilities on Linux, reducing processing time by 30% via memory-efficient algorithms and low-overhead I/O.",
      ],
    },
    {
      role: "AI Engineer Intern",
      date: "Sep 2025 - Dec 2025",
      org: "Impacter AI · Remote",
      bullets: [
        "Built and deployed <b>Python REST API microservices</b> with ETL data-transformation pipelines that integrated LLM inference into production, reducing end-to-end latency by 180ms through async processing and response caching.",
        "Resolved concurrent-request <b>race conditions</b> and improved LLM output accuracy by 12% using structured output schemas, post-processing validation, and systematic prompt engineering.",
        "Fine-tuned <b>GPT-3 and Llama 2</b> with few-shot prompting and quantization, cutting compute costs by 35% and average token usage by 28% across production workloads.",
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
      desc: "Engineered an agentic RAG system over GitHub repositories using LangChain tool-calling, enabling multi-step code understanding, architecture explanation, and bug detection across 50k+ line codebases in under 5 seconds.",
      chips: ["Python", "FastAPI", "LangChain", "pgvector", "OpenAI API", "Redis", "BullMQ", "Docker"],
      // link: "https://github.com/OmPatel-9/reposage",
    },
    {
      name: "SimmSilos",
      date: "May 2026",
      desc: "Architected a multi-service developer platform behind an Apache gateway with ephemeral Docker environments, a TypeScript VS Code extension with a custom virtual filesystem, and a FastAPI backend for auth, branch/task assignment, and silo file access.",
      chips: ["Python", "FastAPI", "TypeScript", "PostgreSQL", "Redis", "Docker", "Apache"],
      // link: "https://github.com/OmPatel-9/simmsilos",
    },
    {
      name: "DevSecOps Pipeline",
      date: "Feb 2025",
      desc: "Designed a Jenkins CI/CD pipeline with Docker build/scan stages (SonarQube, Trivy) blocking 15+ vulnerabilities before deployment, automated with Helm + ArgoCD on Kubernetes and full observability via Prometheus and Grafana.",
      chips: ["Jenkins", "Docker", "Kubernetes", "Helm", "ArgoCD", "SonarQube", "Trivy", "Prometheus", "Grafana", "AWS"],
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

  // ── RESUME PROJECTS ───────────────────────────────────────
  RESUME_PROJECTS: [
    {
      name: "RepoSage AI",
      date: "May 2026",
      tech: "Python, FastAPI, LangChain, PostgreSQL, pgvector, OpenAI API, GitHub API, Redis, BullMQ, Docker",
      bullets: [
        "Engineered an agentic RAG system over GitHub repositories using LangChain tool-calling, enabling multi-step code understanding, architecture explanation, and bug detection across 50k+ line codebases.",
        "Orchestrated an async distributed embedding pipeline with BullMQ and pgvector, applying semantic chunking strategies to improve retrieval precision by 38% over naive fixed-size approaches.",
        "Generated structured onboarding docs, refactor suggestions, and architectural summaries via chained LLM prompts grounded in retrieved context, surfacing actionable insights in under 5 seconds.",
      ],
    },
    {
      name: "SimmSilos",
      date: "May 2026",
      tech: "Python, FastAPI, TypeScript, PostgreSQL, Redis, Docker, Apache",
      bullets: [
        "Architected a multi-service platform behind an Apache gateway: a FastAPI service for auth, branch/task assignment, and silo file access, sharing state across services through PostgreSQL + Redis.",
        "Built a TypeScript VS Code extension implementing a custom virtual filesystem with full save support, so developers browse, edit, and write files inside isolated silos alongside live task and branch sidebars.",
        "Engineered ephemeral developer environments: a port registry assigns each developer a dedicated Docker container on a unique port; on branch submission the container is destroyed, logs persisted for audit, and the port freed for the next developer.",
      ],
    },
    {
      name: "DevSecOps Project",
      date: "Feb 2025",
      tech: "Jenkins, Docker, Kubernetes, Helm, ArgoCD, SonarQube, Trivy, Prometheus, Grafana, AWS",
      bullets: [
        "Designed a Jenkins pipeline with Docker build/scan (SonarQube, Trivy), blocking 15+ vulnerabilities before deployment.",
        "Automated deployments with Helm + ArgoCD on Kubernetes, streamlining GitOps workflows and improving delivery speed.",
        "Integrated Prometheus and Grafana, enhancing system monitoring and reliability for production use.",
      ],
    },
  ],

  // ── SKILLS ────────────────────────────────────────────────
  SKILLS: [
    {
      heading: "LANGUAGES",
      chips: ["Python", "SQL", "C / C++", "Go", "Java", "TypeScript", "JavaScript"],
    },
    {
      heading: "AI / ML & DATA",
      chips: ["PyTorch", "LangChain", "RAG", "Embeddings", "Agents", "Fine-tuning", "Prompt Eng.", "Airflow", "dbt", "Kafka", "Spark", "ETL/ELT", "pandas", "NumPy", "OpenCV", "MLflow"],
    },
    {
      heading: "BACKEND & STORAGE",
      chips: ["FastAPI", "Node.js", "Flask", "PostgreSQL", "pgvector", "BigQuery", "MySQL", "MongoDB", "Redis", "AWS", "Google Cloud", "Firebase"],
    },
    {
      heading: "SYSTEMS & TOOLS",
      chips: ["Linux", "Git", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "REST APIs", "WebSockets", "Prometheus", "Grafana", "LangSmith", "Agile"],
    },
  ],

  // ── RESUME SKILLS ─────────────────────────────────────────
  RESUME_SKILLS: [
    { label: "Languages",       value: "Python, SQL, C, C++, Go, Java, JavaScript, TypeScript" },
    { label: "AI/ML & Data",    value: "PyTorch, LangChain, RAG, Embeddings, Agents, Fine-tuning, Prompt Engineering, Airflow, dbt, Kafka, Spark, ETL/ELT, pandas, NumPy, OpenCV, MLflow" },
    { label: "Backend & Storage", value: "FastAPI, Node.js, Flask, PostgreSQL, pgvector, BigQuery, MySQL, MongoDB, Redis, AWS, Google Cloud, Firebase" },
    { label: "Systems & Tools", value: "Linux, Git, Docker, Kubernetes, CI/CD, GitHub Actions, REST APIs, WebSockets, Prometheus, Grafana, LangSmith, Agile" },
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
