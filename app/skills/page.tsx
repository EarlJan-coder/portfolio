"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="4 7 4 4 20 4 20 7"></polyline>
        <line x1="9" y1="20" x2="15" y2="20"></line>
        <line x1="12" y1="4" x2="12" y2="20"></line>
      </svg>
    ),
    color: "accent",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    color: "success",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    color: "warning",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "Protected Routes",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    color: "default",
    skills: [
      "PostgreSQL",
      "NeonDB",
      "Drizzle ORM",
      "Schema Design",
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    color: "accent",
    skills: [
      "JWT",
      "bcrypt",
      "Helmet.js",
      "CORS",
      "Rate Limiting",
      "RBAC",
      "Input Validation",
    ],
  },
  {
    id: "ai-ml",
    label: "AI/ML",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.26-.58 2.41-1.5 3.17"></path>
        <path d="M8 22a4 4 0 0 0 4-4c0-1.26.58-2.41 1.5-3.17"></path>
        <path d="M2 12a4 4 0 0 1 4-4c0 1.26-.58 2.41-1.5 3.17"></path>
        <path d="M22 12a4 4 0 0 1-4 4c0-1.26.58-2.41 1.5-3.17"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    color: "warning",
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "RAG",
      "scikit-learn",
      "pandas",
      "Ollama",
      "Google Gemini API",
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    color: "default",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "VS Code",
      "Agile Development",
    ],
  },
];

const colorStyles = {
  accent: { bg: "bg-accent-light", text: "text-accent", border: "border-accent/20" },
  success: { bg: "bg-success-light", text: "text-success", border: "border-success/20" },
  warning: { bg: "bg-warning-light", text: "text-warning", border: "border-warning/20" },
  default: { bg: "bg-surface-hover", text: "text-text-secondary", border: "border-border" },
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <Badge variant="accent" size="sm" className="mb-3">
                25+ Technologies
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
                Skills & Expertise
              </h1>
              <p className="text-text-secondary mt-3 max-w-2xl">
                Technologies and tools I work with daily — from frontend frameworks to
                backend infrastructure, databases, security, and AI integration.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Skill Categories */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const colors = colorStyles[category.color as keyof typeof colorStyles];

            return (
              <StaggerItem key={category.id}>
                <ScrollReveal delay={catIndex * 0.05}>
                  <Card variant="default" className="h-full">
                    <div className="p-6 sm:p-8">
                      {/* Category Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-12 h-12 rounded-[12px] ${colors.bg} ${colors.text} ${colors.border} flex items-center justify-center flex-shrink-0`}
                        >
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-primary">{category.label}</h3>
                          <span className="text-sm text-text-secondary">{category.skills.length} technologies</span>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: catIndex * 0.1 + skillIndex * 0.03, type: "spring", stiffness: 200, damping: 20 }}
                          >
                            <Tag variant="outline" size="sm">
                              {skill}
                            </Tag>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Proficiency Legend */}
        <ScrollReveal delay={0.3} className="mt-16">
          <Card variant="default" padding="none" className="shadow-none p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-text-primary mb-5">Proficiency Levels</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { level: "Expert", description: "Production experience, deep knowledge, can architect solutions", color: "accent" },
                { level: "Advanced", description: "Comfortable building complex features, debugging, optimization", color: "success" },
                { level: "Proficient", description: "Solid understanding, can implement features independently", color: "warning" },
                { level: "Learning", description: "Actively exploring, building side projects, reading docs", color: "default" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 ${colorStyles[item.color as keyof typeof colorStyles].bg} ${colorStyles[item.color as keyof typeof colorStyles].text} ${colorStyles[item.color as keyof typeof colorStyles].border}`}
                  >
                    <span className="font-semibold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{item.level}</h4>
                    <p className="text-sm text-text-secondary mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="text-center p-8 rounded-[24px] bg-accent-light border border-accent/20">
            <h3 className="text-2xl font-bold text-accent-dark mb-2">Always Learning</h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Currently diving deeper into distributed systems, advanced RAG architectures,
              and TypeScript type-level programming.
            </p>
            <a
              href="https://github.com/EarlJan-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}