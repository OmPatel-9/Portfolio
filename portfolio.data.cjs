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
        "Developing an <b>AI agent on a C#/.NET backend</b> integrated with ServiceNow that classifies, triages, and auto-resolves incident and service-request tickets, on track to cut organization-wide ticket volume by 30%.",
        "Delivered real-time <b>ServiceNow REST API</b> dashboards surfacing ticket trends, recurring failure modes, and high-volume categories, equipping 5 support agents to prioritize automation targets and reclaim 10 hrs/week of manual triage.",
        "Designed <b>confidence-based routing</b> that resolves tickets only on strong knowledge-base retrieval and escalates ambiguous cases to human agents, scaling automation while preserving resolution accuracy.",
        "Implemented multithreaded <b>Java/C++</b> programs to study parallel execution, tuning task-scheduling and workload-partitioning to accelerate CPU-bound workloads across thread pools.",
        "Partnered with faculty and fellow researchers through weekly reviews, pair-debugging sessions, and shared benchmarking to keep experiments reproducible across the team.",
      ],
    },
    {
      role: "Software Engineer Intern",
      date: "Jul 2025 - Jun 2026",
      org: "Beach Building Services (CSULB) · Long Beach, CA",
      bullets: [
        "Integrated a <b>Gemini LLM</b> feature into a live web application, using prompt pipelines, input validation, and rate-aware fallbacks to sustain 100+ requests/min with zero downtime.",
        "Modeled a normalized <b>PostgreSQL</b> schema with analytics views, indexed lookups, and aggregation queries, powering stakeholder reporting across professor and course rating data.",
        "Optimized performance-critical <b>C/C++</b> parsing and validation utilities on Linux, reducing processing time 30% and unlocking higher data throughput for downstream reporting via memory-efficient algorithms and low-overhead I/O.",
        "Collaborated across a cross-functional <b>Scrum team</b> through sprint planning, code reviews, and daily stand-ups, shipping features on a biweekly release cadence.",
      ],
    },
    {
      role: "AI Engineer Intern",
      date: "Sep 2025 - Dec 2025",
      org: "Impacter AI · San Francisco, CA",
      bullets: [
        "Deployed <b>Python REST API microservices</b> with ETL data-transformation pipelines that embedded LLM inference into production, trimming end-to-end latency by 180ms through async processing and response caching.",
        "Resolved concurrent-request <b>race conditions</b> and lifted LLM output accuracy by 12% through output schemas, post-processing validation, and prompt engineering.",
        "Fine-tuned <b>GPT-3 and Llama 2</b> with few-shot prompting and quantization, cutting compute costs by 35% and average token usage by 28% across workloads.",
        "Coordinated with backend and ML engineers via <b>pull-request reviews</b> and design docs, mentoring a peer intern on prompt-engineering practices.",
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
      date: "Mar 2026",
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
        "Engineered an agentic RAG system over GitHub repositories with LangChain tool-calling, enabling multi-step code understanding, architecture explanation, and bug detection across 50k+ line codebases.",
        "Orchestrated an asynchronous distributed embedding pipeline with BullMQ and pgvector, applying semantic chunking to improve retrieval precision by 38% over naive fixed-size approaches.",
      ],
    },
    {
      name: "SimmSilos",
      date: "Mar 2026",
      tech: "Python, FastAPI, TypeScript, PostgreSQL, Redis, Docker, Apache",
      bullets: [
        "Created a TypeScript VS Code extension implementing a custom virtual filesystem with full save support, letting developers browse, edit, and write files inside isolated silos alongside live task and branch sidebars.",
        "Provisioned ephemeral developer environments: a port registry assigns each developer a dedicated Docker container on a unique port; on branch submission the container tears down, logs persist for audit, and the port frees for the next developer.",
      ],
    },
    {
      name: "DevSecOps Project",
      date: "Feb 2025",
      tech: "Jenkins, Docker, Kubernetes, Helm, ArgoCD, SonarQube, Trivy, Prometheus, Grafana, AWS",
      bullets: [
        "Built a Jenkins pipeline with Docker build/scan (SonarQube, Trivy), blocking 15+ vulnerabilities before deployment.",
        "Automated deployments with Helm + ArgoCD on Kubernetes, streamlining GitOps workflows and improving delivery speed.",
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
      chips: ["Linux", "Git", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "REST APIs", "WebSockets", "Prometheus", "Grafana", "LangSmith", "Agile/Scrum"],
    },
  ],

  // ── RESUME SKILLS ─────────────────────────────────────────
  RESUME_SKILLS: [
    { label: "Languages",       value: "Python, SQL, C, C++, Go, Java, JavaScript, TypeScript" },
    { label: "AI/ML & Data",    value: "PyTorch, LangChain, RAG, Embeddings, Agents, Fine-tuning, Prompt Engineering, Airflow, dbt, Kafka, Spark, ETL/ELT, pandas, NumPy, OpenCV, MLflow" },
    { label: "Backend & Storage", value: "FastAPI, Node.js, Flask, PostgreSQL, pgvector, BigQuery, MySQL, MongoDB, Redis, AWS, Google Cloud, Firebase" },
    { label: "Systems & Tools", value: "Linux, Git, Docker, Kubernetes, CI/CD, GitHub Actions, REST APIs, WebSockets, Prometheus, Grafana, LangSmith, Agile/Scrum" },
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
