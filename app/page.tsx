"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, FolderOpen, Code, Mail } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const companyLogos = [
  { name: "FlyRank AI", color: "from-indigo-500 to-purple-600" },
  { name: "ProStackHub", color: "from-emerald-500 to-teal-600" },
  { name: "CodeOrbit Tech", color: "from-orange-500 to-red-500" },
];

const quickLinks = [
  { href: "/experience", label: "Experience", description: "My professional journey", icon: Briefcase },
  { href: "/projects", label: "Projects", description: "Featured work & case studies", icon: FolderOpen },
  { href: "/skills", label: "Skills", description: "Technologies & expertise", icon: Code },
  { href: "/contact", label: "Contact", description: "Get in touch", icon: Mail },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-16">
        {/* Profile Header */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 p-8 lg:p-10 bg-surface rounded-[20px] border border-border shadow-card">
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden ring-4 ring-indigo-500/20">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" className="text-white">
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 0 0-16 0"></path>
                </svg>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                className="absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full border-4 border-surface flex items-center justify-center"
              >
                <span className="w-2 h-2 bg-success rounded-full" />
              </motion.div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Earl Jhon Malatag
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary mt-2 font-medium">
                Full-Stack Developer · Backend Security · AI Engineering
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-5">
                <Badge variant="neutral" dot>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Trece Martires City, Philippines
                </Badge>
                <Badge variant="success" dot>
                  Open to Internships & Opportunities
                </Badge>
              </div>

              <div className="mt-6 flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                <span className="text-sm text-text-muted">Experience includes:</span>
                <div className="flex items-center gap-2">
                  {companyLogos.map((company, index) => (
                    <motion.div
                      key={company.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="group"
                    >
                      <div className="logo-chip px-3 py-1.5 rounded-[8px] bg-surface border border-border text-text-secondary font-semibold text-xs transition-all duration-200 group-hover:bg-accent-light group-hover:border-accent group-hover:text-accent">
                        {company.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-6 flex items-center gap-2"
              >
                <div className="stat-callout">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  1+ years building full-stack apps
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* About Section */}
        <ScrollReveal className="mb-12">
          <div className="bg-surface rounded-[20px] border border-border shadow-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[10px] bg-accent-light flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0 3-3h4"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1-3 3h-4"></path>
                  <line x1="12" y1="3" x2="12" y2="21"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-text-primary">About Me</h2>
            </div>
            <div className="prose prose-slate max-w-none text-text-secondary leading-relaxed">
              <p className="mb-4 text-lg">
                I&apos;m a Full-Stack Developer passionate about building secure, scalable web applications and integrating AI capabilities into production systems. My journey spans backend development with Node.js and Express.js, frontend work with React and Next.js, and database design with PostgreSQL and Drizzle ORM.
              </p>
              <p className="mb-4">
                I specialize in backend security — implementing JWT authentication, RBAC systems, rate limiting, and input validation. Currently exploring AI engineering with LLM integration, RAG systems, and prompt engineering using tools like Google Gemini API and Ollama for local development.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m contributing to open-source projects, experimenting with new frameworks, or building developer tools that improve engineering workflows.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Links */}
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-accent-light flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Quick Links</h2>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <StaggerItem key={link.href}>
                <Link href={link.href} className="block">
                  <Card variant="hover" padding="md" className="h-full flex flex-col">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-[12px] bg-accent-light flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <link.icon size={22} className="text-accent group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-text-primary">{link.label}</h3>
                        <p className="text-sm text-text-secondary mt-0.5">{link.description}</p>
                      </div>
                      <ArrowRight size={20} className="text-text-muted group-hover:text-accent transition-colors duration-200 flex-shrink-0" aria-hidden="true" />
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Footer CTA */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="text-center py-12">
            <p className="text-text-secondary mb-4">Ready to build something great together?</p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get In Touch
                <ArrowRight size={20} aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}