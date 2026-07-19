"use client";

import Link from "next/link";

import { ExternalLink, Database, Server, Code2, Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    id: "lanhs-drms",
    title: "LANHS DRMS",
    subtitle: "Blockchain-Backed Student Records & Document Request Management System",
    description:
      "A comprehensive registrar portal with blockchain audit trail for document verification. Features bulk XLSX grade import with validation, QR-verified Certificate of Grades PDFs, and automated email notifications.",
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
    ],
    highlights: [
      "Registrar portal with role-based access control via Clerk",
      "Bulk XLSX grade import with server-side validation",
      "QR-verified Certificate of Grades PDF generation",
      "Solidity/Ethers.js blockchain audit trail with SHA-256 hashing",
      "Resend email automation for document requests",
    ],
    category: "Full-Stack + Blockchain",
    links: {
      demo: "https://lanhs-drms.vercel.app",
      github: "https://github.com/EarlJan-coder/lanhs-drms",
    },
    icon: Database,
    color: "accent",
  },
  {
    id: "blue-collar-ims",
    title: "Blue Collar IMS",
    subtitle: "Inventory Management System",
    description:
      "Full-featured inventory management with 200+ item records and 15+ REST endpoints. JWT/bcrypt/RBAC security implementation with responsive dashboard reducing manual tracking effort by ~60%.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Drizzle ORM",
      "JWT",
      "bcrypt",
      "RBAC",
    ],
    highlights: [
      "200+ item records with real-time stock tracking",
      "15+ RESTful API endpoints with proper validation",
      "JWT/bcrypt/RBAC authentication & authorization",
      "Responsive dashboard cutting manual effort ~60%",
      "Protected routes with Helmet.js, CORS, rate limiting",
    ],
    category: "Full-Stack",
    links: {
      demo: "https://blue-collar-ims.vercel.app",
      github: "https://github.com/EarlJan-coder/blue-collar-ims",
    },
    icon: Server,
    color: "success",
  },
  {
    id: "reviewlyai",
    title: "ReviewlyAI",
    subtitle: "AI-Powered Study Reviewer Platform",
    description:
      "Generates personalized study reviewers from uploaded PDF/Word documents using Google Gemini API. Features mammoth/pdf-parse document parsing, NextAuth + Drizzle backend, and Framer Motion animations.",
    tech: [
      "Next.js 16",
      "React 19",
      "NextAuth",
      "Neon PostgreSQL",
      "Drizzle ORM",
      "Google Gemini API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    highlights: [
      "AI reviewer generation from PDF/Word via Gemini API",
      "Document parsing with mammoth & pdf-parse",
      "NextAuth authentication with Drizzle ORM backend",
      "Smooth Framer Motion page transitions",
      "Responsive design with Tailwind CSS",
    ],
    category: "AI + Full-Stack",
    links: {
      demo: "https://reviewlyai.vercel.app",
      github: "https://github.com/EarlJan-coder/reviewlyai",
    },
    icon: Zap,
    color: "warning",
  },
  {
    id: "local-llm-assistant",
    title: "Local LLM Coding Assistant",
    subtitle: "Self-Hosted Development Environment",
    description:
      "Fully self-hosted coding assistant using Ollama with qwen2.5-coder:3b model and nomic-embed-text embeddings. Configured for future RAG implementation with Open WebUI interface.",
    tech: [
      "Ollama",
      "qwen2.5-coder:3b",
      "nomic-embed-text",
      "Open WebUI",
      "Docker",
      "RAG Pipeline",
    ],
    highlights: [
      "Self-hosted LLM with qwen2.5-coder:3b model",
      "nomic-embed-text embeddings ready for RAG",
      "Open WebUI for chat interface",
      "Docker-based deployment",
      "Privacy-first local development assistant",
    ],
    category: "AI/ML Engineering",
    links: {
      github: "https://github.com/EarlJan-coder/local-llm-assistant",
    },
    icon: Code2,
    color: "default",
  },
];

const colorStyles = {
  accent: { badge: "accent", iconBg: "bg-accent-light text-accent" },
  success: { badge: "success", iconBg: "bg-success-light text-success" },
  warning: { badge: "warning", iconBg: "bg-warning-light text-warning" },
  default: { badge: "neutral", iconBg: "bg-surface-hover text-text-secondary" },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <Badge variant="accent" size="sm" className="mb-3">
                4 Production Projects
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
                Featured Projects
              </h1>
              <p className="text-text-secondary mt-3 max-w-2xl">
                End-to-end applications spanning full-stack development, blockchain integration,
                AI-powered tools, and self-hosted LLM environments.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const colors = colorStyles[project.color as keyof typeof colorStyles];
            const Icon = project.icon;

            return (
              <StaggerItem key={project.id}>
                <ScrollReveal delay={index * 0.1}>
                  <Link href={`/projects/${project.id}`} className="block">
                    <Card variant="default" className="group h-full flex flex-col relative overflow-hidden">
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />

                      <div className="p-6 sm:p-8 flex flex-col h-full">
                        {/* Header with icon and category */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-[12px] ${colors.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                            <Icon size={24} aria-hidden="true" />
                          </div>
                          <Badge variant={colors.badge as "accent" | "success" | "warning" | "neutral"} size="sm" className="flex-shrink-0">
                            {project.category}
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-text-secondary mb-3 font-medium">{project.subtitle}</p>
                          <p className="text-text-secondary text-sm mb-5 line-clamp-3 flex-1">{project.description}</p>

                          {/* Highlights */}
                          <div className="space-y-2 mb-5">
                            {project.highlights.slice(0, 3).map((highlight, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-border-strong mt-1.5" />
                                <span className="line-clamp-1">{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 5).map((tech) => (
                              <span key={tech} className="tag text-xs">
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 5 && (
                              <span className="tag text-xs text-text-muted border-border">
                                +{project.tech.length - 5}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Footer with links */}
                        <div className="pt-4 border-t border-border flex items-center justify-between">
<span className="text-xs text-text-muted flex items-center gap-1">
  <GithubIcon />
  View Code
</span>
                          <div className="flex items-center gap-2">
                            {project.links.demo && (
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost text-sm px-3 py-1.5"
                              >
                                Live Demo
                                <ExternalLink size={14} aria-hidden="true" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="text-center p-8 rounded-[24px] bg-accent-light border border-accent/20">
            <h3 className="text-2xl font-bold text-accent-dark mb-2">Want to See More?</h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Check out my GitHub for additional experiments, open-source contributions,
              and work-in-progress projects.
            </p>
            <a
              href="https://github.com/EarlJan-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <GithubIcon />
              View GitHub Profile
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}