import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const projectData = {
  "lanhs-drms": {
    id: "lanhs-drms",
    title: "LANHS DRMS",
    subtitle: "Blockchain-Backed Student Records & Document Request Management System",
    description:
      "A comprehensive document request management system for Laguna National High School featuring blockchain-backed audit trails, registrar portal with bulk grade imports, and QR-verified certificate generation.",
    category: "Full-Stack + Blockchain",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk Auth",
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "Resend",
      "Tailwind CSS",
    ],
    highlights: [
      "Registrar portal with role-based access control",
      "Bulk XLSX grade import with server-side validation",
      "QR-verified Certificate of Grades PDF generation",
      "Solidity/Ethers.js blockchain audit trail with SHA-256 hashing",
      "Clerk authentication with RBAC for admin/registrar/student roles",
      "Resend email automation for document status notifications",
    ],
    links: {
      demo: "https://lanhs-drms.vercel.app",
      github: "https://github.com/EarlJan-coder/lanhs-drms",
    },
    metrics: [
      { label: "Smart Contracts", value: "3" },
      { label: "REST Endpoints", value: "25+" },
      { label: "User Roles", value: "4" },
      { label: "Blockchain Networks", value: "2 (Sepolia + Local)" },
    ],
    details: {
      overview:
        "LANHS DRMS is a production-grade document request management system built for Laguna National High School. The system digitizes the entire workflow from student document requests to registrar approval and certificate generation, with an immutable blockchain audit trail for transparency and fraud prevention.",
      architecture:
        "The application follows a modern Next.js 16 App Router architecture with Server Components for data fetching, Client Components for interactivity, and API routes for blockchain interactions. PostgreSQL with Drizzle ORM provides type-safe database access, while Clerk handles authentication with custom role-based access control.",
      blockchain:
        "Three Solidity smart contracts deployed on Sepolia testnet and local Hardhat network: DocumentRegistry (stores document hashes), AuditLog (immutable event logging), and Verification (QR code verification). Each document request creates a SHA-256 hash stored on-chain, enabling tamper-proof verification via QR codes on generated PDFs.",
      security:
        "JWT-based sessions via Clerk, bcrypt password hashing, Helmet.js headers, CORS configuration, rate limiting on API routes, and comprehensive input validation with Zod schemas. Role-based access control ensures students only access their documents, registrars manage approvals, and admins oversee the system.",
    },
    screenshots: [
      "/projects/lanhs-drms/1-dashboard.png",
      "/projects/lanhs-drms/2-registrar.png",
      "/projects/lanhs-drms/3-certificate.png",
      "/projects/lanhs-drms/4-blockchain.png",
    ],
  },
  "blue-collar-ims": {
    id: "blue-collar-ims",
    title: "Blue Collar IMS",
    subtitle: "Inventory Management System for Small Businesses",
    description:
      "A responsive inventory management system handling 200+ item records with 15+ REST endpoints, JWT/bcrypt/RBAC security, and a dashboard that reduced manual tracking effort by ~60%.",
    category: "Full-Stack",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "JWT",
      "bcrypt",
      "Helmet.js",
    ],
    highlights: [
      "200+ item records with category, supplier, and stock tracking",
      "15+ RESTful API endpoints with full CRUD operations",
      "JWT authentication with bcrypt password hashing",
      "Role-based access control (Admin, Manager, Staff)",
      "Responsive dashboard reducing manual tracking by ~60%",
      "Real-time stock alerts and low-inventory notifications",
    ],
    links: {
      demo: "https://blue-collar-ims.vercel.app",
      github: "https://github.com/EarlJan-coder/blue-collar-ims",
    },
    metrics: [
      { label: "Items Managed", value: "200+" },
      { label: "API Endpoints", value: "15+" },
      { label: "Efficiency Gain", value: "~60%" },
      { label: "User Roles", value: "3" },
    ],
    details: {
      overview:
        "Blue Collar IMS was built for small businesses needing a modern, affordable inventory solution. The system replaces spreadsheet-based tracking with a purpose-built application featuring real-time stock levels, supplier management, and automated reorder alerts.",
      architecture:
        "Monorepo structure with React frontend and Express.js backend. PostgreSQL database with Drizzle ORM for type-safe queries. REST API design with consistent error handling, request validation, and pagination. Tailwind CSS for responsive, mobile-first UI.",
      security:
        "JWT access/refresh token rotation, bcrypt password hashing (12 rounds), Helmet.js for security headers, CORS whitelist, rate limiting (100 req/min), RBAC middleware protecting sensitive routes, and Zod schema validation on all inputs.",
      performance:
        "Database indexing on frequently queried fields, React Query for client-side caching, optimistic updates for mutations, code-splitting by route, and static asset caching via Vercel Edge Network.",
    },
    screenshots: [
      "/projects/blue-collar-ims/1-dashboard.png",
      "/projects/blue-collar-ims/2-inventory.png",
      "/projects/blue-collar-ims/3-reports.png",
    ],
  },
  reviewlyai: {
    id: "reviewlyai",
    title: "ReviewlyAI",
    subtitle: "AI-Powered Study Reviewer Platform",
    description:
      "Generates personalized study reviewers from uploaded PDF/Word documents using Google Gemini API. Features document parsing with mammoth/pdf-parse, NextAuth + Drizzle backend, and Framer Motion animations.",
    category: "AI + Full-Stack",
    tech: [
      "Next.js 16",
      "React 19",
      "NextAuth.js",
      "Neon PostgreSQL",
      "Drizzle ORM",
      "Google Gemini API",
      "Tailwind CSS",
      "Framer Motion",
      "mammoth",
      "pdf-parse",
    ],
    highlights: [
      "AI reviewer generation from PDF/Word via Gemini API",
      "Document text extraction with mammoth & pdf-parse",
      "NextAuth authentication with Drizzle ORM backend",
      "Framer Motion page transitions and micro-interactions",
      "Responsive design with Tailwind CSS",
      "Server-side PDF processing with stream handling",
    ],
    links: {
      demo: "https://reviewlyai.vercel.app",
      github: "https://github.com/EarlJan-coder/reviewlyai",
    },
    metrics: [
      { label: "AI Models", value: "Gemini 1.5 Pro" },
      { label: "File Formats", value: "PDF, DOCX" },
      { label: "Auth Provider", value: "NextAuth (Credentials + OAuth)" },
      { label: "Database", value: "Neon PostgreSQL" },
    ],
    details: {
      overview:
        "ReviewlyAI transforms study materials into intelligent reviewers. Students upload PDFs or Word documents, and the system uses Google's Gemini API to generate structured study guides, flashcards, and practice questions tailored to the content.",
      architecture:
        "Next.js 16 with App Router, server actions for file uploads, streaming responses for AI generation. Neon serverless PostgreSQL with Drizzle ORM. NextAuth.js for authentication (email/password + Google OAuth). Framer Motion for polished UX.",
      ai:
        "Gemini 1.5 Pro processes document text with carefully crafted prompts to generate: summary notes, key concept flashcards, multiple-choice questions, and fill-in-the-blank exercises. Token usage optimized with chunking for large documents.",
      security:
        "NextAuth.js with secure session handling, file type validation, size limits (10MB), server-side virus scanning, rate limiting on AI endpoints, and encrypted API key storage.",
    },
    screenshots: [
      "/projects/reviewlyai/1-upload.png",
      "/projects/reviewlyai/2-reviewer.png",
      "/projects/reviewlyai/3-flashcards.png",
    ],
  },
  "local-llm-assistant": {
    id: "local-llm-assistant",
    title: "Local LLM Coding Assistant",
    subtitle: "Self-Hosted Development Environment with Ollama",
    description:
      "Fully self-hosted coding assistant using Ollama with qwen2.5-coder:3b model and nomic-embed-text embeddings. Configured for future RAG implementation with Open WebUI interface.",
    category: "AI/ML Engineering",
    tech: [
      "Ollama",
      "qwen2.5-coder:3b",
      "nomic-embed-text",
      "Open WebUI",
      "Docker",
      "RAG Pipeline",
      "Vector Embeddings",
    ],
    highlights: [
      "Self-hosted LLM with qwen2.5-coder:3b model (3B params)",
      "nomic-embed-text embeddings ready for RAG implementation",
      "Open WebUI for intuitive chat interface",
      "Docker-based deployment for reproducibility",
      "Privacy-first local development assistant",
      "Configurable context window and temperature settings",
    ],
    links: {
      github: "https://github.com/EarlJan-coder/local-llm-assistant",
    },
    metrics: [
      { label: "Model Size", value: "3B parameters" },
      { label: "Embedding Model", value: "nomic-embed-text" },
      { label: "Interface", value: "Open WebUI" },
      { label: "Deployment", value: "Docker Compose" },
    ],
    details: {
      overview:
        "A personal coding assistant running entirely locally — no API keys, no data leaving the machine. Built to experiment with local LLM capabilities for code generation, explanation, and debugging assistance.",
      architecture:
        "Ollama serves the qwen2.5-coder:3b model via local HTTP API. Open WebUI provides a ChatGPT-like interface with conversation history, model switching, and parameter tuning. nomic-embed-text embeddings are pre-configured for future RAG (Retrieval-Augmented Generation) integration with local codebase indexing.",
      ai:
        "qwen2.5-coder:3b is a code-specialized model trained on 5.5T tokens of code. It handles 92+ programming languages with strong performance on code completion, bug fixing, and explanation tasks. nomic-embed-text provides high-quality embeddings for semantic search.",
      security:
        "Zero external network calls. All inference runs locally. Docker containerization ensures environment isolation. No telemetry or usage data collection.",
    },
    screenshots: [
      "/projects/local-llm-assistant/1-chat.png",
      "/projects/local-llm-assistant/2-settings.png",
      "/projects/local-llm-assistant/3-rag.png",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Earl Jhon Malatag`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
        {/* Back Link */}
        <div className="mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-text-muted hover:text-accent transition-colors group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            BACK TO PROJECTS
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-bold uppercase tracking-widest border border-accent/10">
              {project.category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-strong"></span>
            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Case Study</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-text-primary tracking-tighter leading-[0.9] mb-8">
            {project.title}
          </h1>
          <p className="text-2xl text-text-secondary max-w-3xl font-medium leading-tight">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 bg-text-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                VIEW SOURCE
              </a>
            )}
            {"demo" in project.links && project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 bg-white border border-border px-6 py-3 rounded-full font-bold shadow-sm hover:shadow-md hover:border-accent hover:text-accent transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                LIVE PREVIEW
              </a>
            )}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {project.metrics.map((metric, i) => (
            <div key={i} className="bg-white p-6 rounded-[24px] border border-border shadow-sm text-center">
              <div className="text-3xl font-extrabold text-accent mb-1 leading-none">{metric.value}</div>
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-extrabold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-accent rounded-full"></span>
                The Challenge
              </h2>
              <div className="prose prose-slate max-w-none text-text-secondary leading-relaxed space-y-4 text-lg">
                <p>{project.details.overview}</p>
              </div>
            </section>

            {/* Architecture / Implementation */}
            <section className="bg-white rounded-[32px] border border-border shadow-soft p-10">
              <h2 className="text-2xl font-extrabold text-text-primary mb-8 flex items-center gap-3">
                Architecture & Security
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-success-light text-success flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2 text-lg">System Design</h4>
                    <p className="text-text-secondary leading-relaxed">{project.details.architecture}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-warning-light text-warning flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2 text-lg">Security Measures</h4>
                    <p className="text-text-secondary leading-relaxed">{project.details.security}</p>
                  </div>
                </div>
                
                {"blockchain" in project.details && (
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-2 text-lg">Blockchain Implementation</h4>
                      <p className="text-text-secondary leading-relaxed">{project.details.blockchain}</p>
                    </div>
                  </div>
                )}

                {"ai" in project.details && (
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-2 text-lg">AI Integration</h4>
                      <p className="text-text-secondary leading-relaxed">{project.details.ai}</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-surface-hover border border-border text-xs font-bold text-text-secondary uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-text-primary p-8 rounded-[24px] text-white">
              <h3 className="text-xl font-bold mb-4">Project Highlights</h3>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}