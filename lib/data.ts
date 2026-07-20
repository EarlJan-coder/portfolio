export const profile = {
  name: "Earl Jhon Malatag",
  title: "Full-Stack Developer • Backend Security • AI Engineering",
  location: "Trece Martires City, Philippines",
  email: "earljhonmalatag2@gmail.com",
  phone: "+63 938 817 9139",
  github: "https://github.com/EarlJan-coder",
  linkedin: "https://linkedin.com/in/earl-malatag",
  site: "https://earljan-portfolio.vercel.app",
  intro:
    "BSIT student and full-stack developer specializing in REST API development, backend security, and AI-assisted application engineering — building secure, production-oriented software with Next.js, Node.js, and PostgreSQL.",
};

export const stats = [
  { label: "Projects Built", value: 6, suffix: "+" },
  { label: "Internships", value: 3, suffix: "" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Years Coding", value: 3, suffix: "+" },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3", "Solidity"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API Design", "Protected Routes", "API Architecture"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "NeonDB", "Drizzle ORM", "Schema Design"],
  },
  {
    title: "AI & ML",
    skills: ["LLM Integration", "Prompt Engineering", "RAG", "Ollama", "scikit-learn", "pandas"],
  },
  {
    title: "Security",
    skills: ["JWT Auth", "bcrypt", "Helmet.js", "CORS", "Rate Limiting", "RBAC", "Input Validation"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "WebStorm", "Copilot", "Claude"],
  },
];

export const experience = [
  {
    role: "Backend AI Engineer Intern",
    company: "FlyRank AI",
    period: "Jul 2026 — Present",
    description:
      "Building backend services and REST APIs with Node.js and Express.js, focused on AI-assisted development workflows and production-oriented application design.",
    tags: ["Node.js", "Express.js", "AI Workflows"],
  },
  {
    role: "Full-Stack Engineer Intern",
    company: "ProStackHub",
    period: "Jul 2026 — Present",
    description:
      "Selected for the Industrial Internship Program, building full-stack applications with Next.js, Node.js, and Express.js under a structured, mentorship-driven framework, collaborating remotely with the engineering team.",
    tags: ["Next.js", "Node.js", "Mentorship"],
  },
  {
    role: "Full-Stack Engineer Intern",
    company: "CodeOrbit Tech",
    period: "Jul 2026 — Present",
    description:
      "Selected for Batch 27 of the Full-Stack Development Internship, applying front-end and back-end concepts to real project requirements following technical guidelines and industry best practices.",
    tags: ["Next.js", "Express.js", "Best Practices"],
  },
  {
    role: "Web Developer",
    company: "Freelance / Independent Projects",
    period: "Jan 2026 — Present",
    description:
      "Designed, developed, and deployed full-stack applications with React, Next.js, Node.js, and PostgreSQL — reducing average API response time by ~35% and implementing full backend security controls (JWT, bcrypt, rate limiting, CORS, RBAC).",
    tags: ["React", "PostgreSQL", "Security", "REST APIs"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  achievements: string[];
  stack: string[];
  image: string;
  github: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LANHS DRMS",
    tagline: "Blockchain-Backed Student Records & Document Request System",
    description:
      "A full-stack registrar portal with role-based dashboards for Admin, Registrar, and Student/Alumni users, backed by an on-chain audit trail for tamper-proof record verification.",
    achievements: [
      "Bulk XLSX grade import with validation, matching & duplicate detection",
      "QR-verified Certificate of Grades PDFs for document authenticity",
      "Solidity + Ethers.js audit trail hashing records with SHA-256 on-chain",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Clerk", "Solidity", "Ethers.js"],
    image: "/projects/lanhs-drms.png",
    github: "https://github.com/EarlJan-coder",
    demo: "#",
    featured: true,
  },
  {
    title: "Blue Collar IMS",
    tagline: "Inventory Management System",
    description:
      "A full-stack inventory management system tracking 200+ item records through CRUD operations with role-based access control for multiple users.",
    achievements: [
      "15+ secured REST API endpoints on PostgreSQL",
      "JWT auth, bcrypt hashing, rate limiting & CORS",
      "Responsive dashboard cutting manual tracking effort ~60%",
    ],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Drizzle ORM"],
    image: "/projects/blue-collar-ims.png",
    github: "https://github.com/EarlJan-coder",
    demo: "#",
    featured: true,
  },
  {
    title: "ReviewlyAI",
    tagline: "AI-Powered Study Reviewer Platform",
    description:
      "A full-stack SaaS platform that generates AI-powered reviewers from user-uploaded PDF and Word documents via the Google Gemini API.",
    achievements: [
      "Document parsing pipelines with mammoth & pdf-parse",
      "NextAuth + PostgreSQL/Drizzle backend for accounts & saved materials",
      "Gemini-driven reviewer generation with content extraction",
    ],
    stack: ["Next.js 16", "React 19", "NextAuth", "Neon PostgreSQL", "Drizzle ORM", "Gemini API", "Framer Motion"],
    image: "/projects/reviewly-ai.png",
    github: "https://github.com/EarlJan-coder",
    demo: "#",
    featured: true,
  },
  {
    title: "Local LLM Coding Assistant",
    tagline: "Self-Hosted AI Development Environment",
    description:
      "A self-hosted coding assistant using Ollama and qwen2.5-coder:3b to accelerate development without dependence on cloud-based APIs.",
    achievements: [
      "Runs entirely local — no cloud API dependency",
      "nomic-embed-text embedding tooling for future RAG",
      "Open WebUI interface for a smooth developer workflow",
    ],
    stack: ["Ollama", "qwen2.5-coder:3b", "nomic-embed-text", "Open WebUI"],
    image: "/projects/local-llm.png",
    github: "https://github.com/EarlJan-coder",
    featured: true,
  },
];

export const aiCapabilities = [
  {
    title: "LLM Integration",
    description: "Wiring large language models into production application flows and backends.",
  },
  {
    title: "Prompt Engineering",
    description: "Designing reliable prompts and structured outputs for consistent model behavior.",
  },
  {
    title: "Retrieval-Augmented Generation",
    description: "Grounding model responses in real data with embeddings and vector retrieval.",
  },
  {
    title: "Local AI with Ollama",
    description: "Running self-hosted models like qwen2.5-coder for private, offline development.",
  },
  {
    title: "Embeddings & Vectors",
    description: "Building embedding pipelines with nomic-embed-text for semantic search.",
  },
  {
    title: "Backend AI Development",
    description: "Shipping AI-assisted REST services with Node.js and Express.js.",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI", href: "#ai" },
  { label: "Contact", href: "#contact" },
];
