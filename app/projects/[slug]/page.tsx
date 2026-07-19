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
        <div className="mb-8">
          <Link href="/projects" className="btn-ghost inline-flex items-center gap-2 text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-accent">{project.category}</span>
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
            {"demo" in project.links && project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
            )}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">{project.subtitle}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {project.metrics.map((metric, i) => (
            <div key={i} className="card p-5 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">{metric.value}</div>
              <div className="text-sm text-text-secondary">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Description & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-[10px] bg-accent-light flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </span>
                Overview
              </h2>
              <div className="prose prose-slate max-w-none text-text-secondary leading-relaxed">
                <p className="mb-4">{project.details.overview}</p>
                <p>{project.details.architecture}</p>
              </div>
            </section>

            {/* Technical Deep Dives */}
            <section className="space-y-6">
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-[10px] bg-success-light flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-success">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </span>
                  Architecture
                </h3>
                <p className="text-text-secondary leading-relaxed">{project.details.architecture}</p>
              </div>

              {"blockchain" in project.details && project.details.blockchain && (
                <div className="card p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-[10px] bg-warning-light flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warning">
                        <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                        <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                        <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                      </svg>
                    </span>
                    Blockchain Integration
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{project.details.blockchain}</p>
                </div>
              )}

              {"ai" in project.details && project.details.ai && (
                <div className="card p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-[10px] bg-accent-light flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <path d="M12 2a4 4 0 0 1 4 4c0 1.26-.58 2.41-1.5 3.17"></path>
                        <path d="M8 22a4 4 0 0 0 4-4c0-1.26.58-2.41 1.5-3.17"></path>
                        <path d="M2 12a4 4 0 0 1 4-4c0 1.26-.58 2.41-1.5 3.17"></path>
                        <path d="M22 12a4 4 0 0 1-4 4c0-1.26.58-2.41 1.5-3.17"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </span>
                    AI Implementation
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{project.details.ai}</p>
                </div>
              )}

              <div className="card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-[10px] bg-surface-hover flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </span>
                  Security & Performance
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">{project.details.security}</p>
                {"performance" in project.details && project.details.performance && (
                  <p className="text-text-secondary leading-relaxed">{project.details.performance}</p>
                )}
              </div>
            </section>

            {/* Tech Stack */}
            <section className="card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-[10px] bg-surface-hover flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Links Card */}
            <div className="card p-6 sticky top-24">
              <h3 className="font-semibold text-text-primary mb-4">Links</h3>
              <div className="space-y-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-start"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Source Code
                  </a>
                )}
              {"demo" in project.links && project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-start"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  ) : null}
              </div>
            </div>

            {/* Highlights Card */}
            <div className="card p-6 sticky top-24" style={{ top: "calc(24px + 200px)" }}>
              <h3 className="font-semibold text-text-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                    <span className="leading-relaxed">{h}</span>
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