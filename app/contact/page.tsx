"use client";

import { Mail, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";

const GithubIcon = ({ size = 18, "aria-hidden": ariaHidden = "true", ...props }: React.SVGProps<SVGSVGElement> & { size?: number; "aria-hidden"?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18, "aria-hidden": ariaHidden = "true", ...props }: React.SVGProps<SVGSVGElement> & { size?: number; "aria-hidden"?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zm-.792 23.042H2.563V9.608h18.87v13.434z" />
  </svg>
);


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <ScrollReveal className="mb-20 text-center">
          <Badge variant="success" className="bg-success-light text-success border border-success/10 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            🟢 Open to Internships/Opportunities
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-text-primary tracking-tight leading-tight">
            Let&apos;s build something.
          </h1>
          <p className="text-xl text-text-secondary mt-6 max-w-xl mx-auto leading-relaxed">
            I&apos;m currently looking for new opportunities to contribute and grow. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </ScrollReveal>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          <ScrollReveal>
            <a href="mailto:earljhonmalatag2@gmail.com" className="group">
              <div className="bg-white p-8 rounded-[32px] border border-border shadow-soft group-hover:shadow-card-hover group-hover:border-accent/20 transition-all duration-500 flex flex-col sm:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-3xl bg-accent-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <Mail size={40} strokeWidth={1.5} />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-text-primary mb-1">Send an Email</h3>
                  <p className="text-lg text-text-secondary mb-2">earljhonmalatag2@gmail.com</p>
                  <span className="text-sm font-bold text-accent uppercase tracking-widest group-hover:gap-3 flex items-center justify-center sm:justify-start gap-2 transition-all">
                    Write a message <Zap size={14} fill="currentColor" />
                  </span>
                </div>
              </div>
            </a>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <a href="https://linkedin.com/in/earl-malatag-4230903a8" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white p-6 rounded-[24px] border border-border shadow-sm group-hover:shadow-card-hover transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5]">
                    <LinkedinIcon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-primary">LinkedIn</h4>
                    <p className="text-xs text-text-muted">Connect with me</p>
                  </div>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a href="https://github.com/EarlJan-coder" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white p-6 rounded-[24px] border border-border shadow-sm group-hover:shadow-card-hover transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-text-primary/10 flex items-center justify-center text-text-primary">
                    <GithubIcon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-primary">GitHub</h4>
                    <p className="text-xs text-text-muted">Explore my code</p>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>

        {/* Location / Status Card */}
        <ScrollReveal delay={0.3}>
          <div className="bg-accent-light p-10 rounded-[32px] border border-accent/10 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-accent-dark mb-4">📍 Trece Martires City, Philippines</h3>
              <p className="text-accent/70 font-medium leading-relaxed max-w-md mx-auto">
                Available for remote work worldwide or on-site opportunities in the Greater Manila Area.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="px-6 py-2 bg-white rounded-full text-accent font-bold text-sm shadow-sm">
                  Timezone: GMT+8
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}