"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, MapPin, Code2, Zap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";

const experiences = [
  {
    id: "flyrank-ai",
    title: "Backend AI Engineer Intern",
    company: "FlyRank AI",
    location: "Remote",
    period: "July 2026 – Present",
    description:
      "Building Node.js + Express.js backend services and APIs, AI-assisted development workflows.",
    highlights: [
      "Developing scalable backend services with Node.js and Express.js",
      "Implementing AI-assisted development workflows and tooling",
      "Designing RESTful APIs with proper validation and error handling",
      "Working with PostgreSQL and Drizzle ORM for data persistence",
      "Integrating LLM capabilities into production systems",
    ],
    tech: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "AI/ML", "Docker"],
    color: "accent",
    logo: "FAI",
  },
  {
    id: "prostk-hub",
    title: "Full-Stack Engineer Intern",
    company: "ProStackHub",
    location: "Remote",
    period: "July 2026 – Present",
    description:
      "Next.js, Node.js, Express.js full-stack apps, mentorship-driven program.",
    highlights: [
      "Building full-stack applications with Next.js and Node.js/Express.js",
      "Implementing authentication, authorization, and protected routes",
      "Working with PostgreSQL databases using Drizzle ORM",
      "Mentorship-driven development with code reviews and best practices",
      "Deploying to Vercel and managing CI/CD pipelines",
    ],
    tech: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "TypeScript"],
    color: "success",
    logo: "PSH",
  },
  {
    id: "codeorbit-tech",
    title: "Full-Stack Engineer Intern",
    company: "CodeOrbit Tech",
    location: "Remote",
    period: "July 2026 – Present",
    description:
      "Next.js, Node.js, Express.js full-stack apps, distinct project workload.",
    highlights: [
      "Developing full-stack applications with Next.js and Express.js",
      "Building REST APIs with proper security practices (JWT, RBAC)",
      "Database design and optimization with PostgreSQL and Drizzle ORM",
      "Distinct project workload from ProStackHub internship",
      "Collaborating in agile development environment",
    ],
    tech: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "JWT", "RBAC", "TypeScript"],
    color: "warning",
    logo: "COT",
  },
  {
    id: "freelance",
    title: "Web Developer",
    company: "Freelance / Independent Projects",
    location: "Remote",
    period: "January 2026 – Present",
    description:
      "React.js, Next.js, Node.js, Express.js, PostgreSQL; JWT/bcrypt/RBAC security work; ~35% average API response time improvement.",
    highlights: [
      "Built full-stack applications with React.js, Next.js, Node.js, Express.js",
      "Implemented JWT authentication, bcrypt password hashing, RBAC systems",
      "Achieved ~35% average API response time improvement through optimization",
      "Designed PostgreSQL schemas and used Drizzle ORM for type-safe queries",
      "Applied security best practices: Helmet.js, CORS, rate limiting, input validation",
      "Delivered projects for multiple clients across different domains",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "JWT", "bcrypt", "RBAC", "Helmet.js", "TypeScript", "Tailwind CSS"],
    color: "default",
    logo: "FRE",
  },
];

const colorStyles = {
  accent: { bg: "bg-accent-light", text: "text-accent", border: "border-accent/20", badge: "accent" },
  success: { bg: "bg-success-light", text: "text-success", border: "border-success/20", badge: "success" },
  warning: { bg: "bg-warning-light", text: "text-warning", border: "border-warning/20", badge: "warning" },
  default: { bg: "bg-surface-hover", text: "text-text-secondary", border: "border-border", badge: "neutral" },
};

const companyLogos = [
  { name: "FlyRank AI", color: "from-indigo-500 to-purple-600" },
  { name: "ProStackHub", color: "from-emerald-500 to-teal-600" },
  { name: "CodeOrbit Tech", color: "from-orange-500 to-red-500" },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <Badge variant="accent" size="sm" className="mb-3">
                1+ Years Experience
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
                Experience
              </h1>
              <p className="text-text-secondary mt-3 max-w-2xl">
                My professional journey across AI engineering, full-stack development,
                and freelance work — building secure, scalable applications.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <span className="px-3 py-1.5 rounded-[8px] bg-surface border border-border text-text-secondary font-semibold text-xs transition-all duration-200 hover:bg-accent-light hover:border-accent hover:text-accent">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Experience Timeline */}
        <StaggerContainer staggerDelay={0.15}>
          {experiences.map((exp, index) => (
            <StaggerItem key={exp.id}>
              <ScrollReveal delay={index * 0.05}>
                <Card variant="hover" className="relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
                  <CardContent className="relative p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-[12px] ${colorStyles[exp.color as keyof typeof colorStyles].bg} ${colorStyles[exp.color as keyof typeof colorStyles].text} ${colorStyles[exp.color as keyof typeof colorStyles].border} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                          <span className="font-bold text-lg">{exp.logo}</span>
                        </div>
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <div className="flex items-center gap-3 mt-1 text-sm text-text-secondary flex-wrap">
                            <span className="flex items-center gap-1">
                              <Building2 size={14} aria-hidden="true" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} aria-hidden="true" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={14} aria-hidden="true" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={colorStyles[exp.color as keyof typeof colorStyles].badge as "accent" | "success" | "warning" | "neutral"} size="md" className="flex-shrink-0">
                        {exp.color === "accent" && "AI Engineering"}
                        {exp.color === "success" && "Full-Stack"}
                        {exp.color === "warning" && "Full-Stack"}
                        {exp.color === "default" && "Freelance"}
                      </Badge>
                    </div>

                    {/* Description */}
                    <CardDescription className="text-text-secondary mb-5 leading-relaxed">
                      {exp.description}
                    </CardDescription>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-5" role="list">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 300 }}
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                            style={{ backgroundColor: exp.color === "accent" ? "#4F46E5" : exp.color === "success" ? "#059669" : exp.color === "warning" ? "#D97706" : "#64748B" }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {exp.tech.map((tech) => (
                        <Tag key={tech} variant="outline" size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Summary Stats */}
        <ScrollReveal delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="3" label="Internships" icon={<Building2 size={20} />} color="accent" />
            <StatCard value="1+" label="Years Experience" icon={<Calendar size={20} />} color="success" />
            <StatCard value="15+" label="Technologies" icon={<Code2 size={20} />} color="warning" />
            <StatCard value="35%" label="API Optimization" icon={<Zap size={20} />} color="default" />
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.5} className="mt-12">
          <div className="text-center p-8 rounded-[24px] bg-surface border border-border">
            <h3 className="text-2xl font-bold text-text-primary mb-2">Want to Work Together?</h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              I&apos;m open to internships, full-time roles, and freelance projects. Let&apos;s discuss how I can contribute to your team.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get In Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function StatCard({ value, label, icon, color }: { value: string; label: string; icon: React.ReactNode; color: keyof typeof colorStyles }) {
  const colors = colorStyles[color];
  return (
    <Card variant="default" className="text-center p-6">
      <div className={`w-12 h-12 rounded-[12px] ${colors.bg} ${colors.text} ${colors.border} flex items-center justify-center mx-auto mb-3`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-text-primary">{value}</div>
      <div className="text-sm text-text-secondary">{label}</div>
    </Card>
  );
}