"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, FolderOpen, Code, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
        {/* Profile Header */}
        <ScrollReveal className="mb-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-accent-light flex items-center justify-center overflow-hidden ring-8 ring-accent-light shadow-soft">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-accent lg:w-20 lg:h-20">
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 0 0-16 0"></path>
                </svg>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                className="absolute bottom-2 right-2 w-8 h-8 bg-success rounded-full border-4 border-white flex items-center justify-center shadow-sm"
              >
                <span className="w-2.5 h-2.5 bg-success rounded-full animate-pulse" />
              </motion.div>
            </div>

            <div className="flex-1 text-center lg:text-left pt-2">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-tight">
                Earl Jhon Malatag
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary mt-4 font-medium max-w-2xl">
                Full-Stack Developer | Backend Security | AI Engineering
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-8">
                <Badge variant="neutral" className="bg-surface border border-border px-4 py-1.5 rounded-full text-sm font-medium">
                  📍 Trece Martires City, Philippines
                </Badge>
                <Badge variant="success" className="bg-success-light text-success border border-success/10 px-4 py-1.5 rounded-full text-sm font-medium">
                  🟢 Open to Internships/Opportunities
                </Badge>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-accent-light rounded-full border border-accent/10 shadow-sm">
                  <span className="text-accent font-bold text-lg">1+</span>
                  <span className="text-accent/80 text-sm font-semibold uppercase tracking-wide">years building full-stack apps</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs text-text-muted font-bold uppercase tracking-widest">Experience includes:</span>
                  <div className="flex items-center gap-2">
                    {companyLogos.map((company, index) => (
                      <motion.div
                        key={company.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="px-3 py-1 rounded-md bg-surface border border-border text-[10px] font-bold text-text-secondary shadow-sm uppercase tracking-tighter"
                      >
                        {company.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ScrollReveal className="mb-12">
              <div className="bg-white rounded-[24px] border border-border shadow-soft p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-accent rounded-full"></span>
                  About
                </h2>
                <div className="prose prose-slate max-w-none text-text-secondary leading-relaxed space-y-4">
                  <p className="text-lg">
                    I&apos;m a Full-Stack Developer passionate about building secure, scalable web applications and integrating AI capabilities into production systems. My journey spans backend development with Node.js and Express.js, frontend work with React and Next.js, and database design with PostgreSQL and Drizzle ORM.
                  </p>
                  <p>
                    I specialize in backend security — implementing JWT authentication, RBAC systems, rate limiting, and input validation. Currently exploring AI engineering with LLM integration, RAG systems, and prompt engineering using tools like Google Gemini API and Ollama for local development.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Links Grid */}
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <Link href={link.href} key={link.href} className="group">
                    <div className="h-full bg-white p-6 rounded-[20px] border border-border shadow-sm group-hover:shadow-card-hover group-hover:border-accent/20 transition-all duration-300 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        <link.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-text-primary group-hover:text-accent transition-colors">{link.label}</h3>
                        <p className="text-xs text-text-muted mt-0.5">{link.description}</p>
                      </div>
                      <ArrowRight size={18} className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
             {/* Sidebar styled CTA or additional info */}
             <ScrollReveal delay={0.2}>
               <div className="bg-accent rounded-[24px] p-8 text-white shadow-soft h-full flex flex-col justify-between overflow-hidden relative group">
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-4">Let&apos;s build something exceptional.</h3>
                   <p className="text-white/80 text-sm leading-relaxed mb-8">
                     I&apos;m currently open to internships and junior opportunities where I can contribute to meaningful projects.
                   </p>
                   <Link href="/contact">
                    <button className="bg-white text-accent font-bold px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                      Start a Conversation
                    </button>
                   </Link>
                 </div>
                 
                 {/* Decorative element */}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                 <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
               </div>
             </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}