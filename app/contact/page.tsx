"use client";

import { Mail, Zap } from "lucide-react";
import { ScrollReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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

const ExternalLinkIcon = ({ size = 18, "aria-hidden": ariaHidden = "true", ...props }: React.SVGProps<SVGSVGElement> & { size?: number; "aria-hidden"?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={ariaHidden} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const FolderOpenIcon = ({ size = 18, "aria-hidden": ariaHidden = "true", ...props }: React.SVGProps<SVGSVGElement> & { size?: number; "aria-hidden"?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={ariaHidden} {...props}>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
    <path d="M2 10h20"></path>
  </svg>
);

const socialLinks = [
  {
    name: "Email",
    href: "mailto:earljhonmalatag2@gmail.com",
    icon: Mail,
    description: "earljhonmalatag2@gmail.com",
    color: "accent",
    primary: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/EarlJan-coder",
    icon: GithubIcon,
    description: "github.com/EarlJan-coder",
    color: "default",
    primary: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/earl-malatag-4230903a8",
    icon: LinkedinIcon,
    description: "linkedin.com/in/earl-malatag-4230903a8",
    color: "success",
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <Badge variant="accent" size="sm" className="mb-3">
                Open to Opportunities
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
                Get In Touch
              </h1>
              <p className="text-text-secondary mt-3 max-w-2xl">
                Whether you have a project in mind, a question about my work, or just want to say hello — I&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Primary Contact - Email */}
        <ScrollReveal className="mb-10">
          <Card variant="hover" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5" />
            <CardContent className="relative p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-10 h-10 rounded-[12px] bg-accent-light flex items-center justify-center">
                      <Mail size={24} className="text-accent" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-2xl">Let&apos;s Build Something Together</CardTitle>
                  </div>
                  <p className="text-text-secondary mb-4 max-w-md mx-auto sm:mx-0">
                    I&apos;m currently open to internships, full-time opportunities, and freelance projects.
                    Feel free to reach out — I typically respond within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Button variant="primary" href="mailto:earljhonmalatag2@gmail.com" size="lg">
                      <Mail size={18} aria-hidden="true" />
                      Email Me
                    </Button>
                    <Button variant="secondary" href="https://github.com/EarlJan-coder" size="lg">
                      <GithubIcon size={18} aria-hidden="true" />
                      View GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Social Links Grid */}
        <ScrollReveal className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <StaggerItem key={social.name}>
                <Card variant="hover" className="h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-[14px] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 ${
                          social.color === "accent"
                            ? "bg-accent-light text-accent"
                            : social.color === "success"
                            ? "bg-success-light text-success"
                            : "bg-surface-hover text-text-secondary"
                        }`}
                      >
                        <social.icon size={28} aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-text-primary">{social.name}</h3>
                          {social.primary && (
                            <Badge variant="accent" size="sm">Primary</Badge>
                          )}
                        </div>
                        <p className="text-sm text-text-secondary truncate">{social.description}</p>
                      </div>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label={`Open ${social.name} profile`}
                      >
                        <ExternalLinkIcon size={18} aria-hidden="true" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </ScrollReveal>

        {/* Quick Actions */}
        <ScrollReveal className="mb-12">
          <Card variant="default" className="border-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Zap size={20} className="text-accent" aria-hidden="true" />
                Quick Actions
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" href="mailto:earljhonmalatag2@gmail.com?subject=Collaboration%20Inquiry&body=Hi%20Earl%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20...">
                  <Mail size={18} aria-hidden="true" />
                  Send Email
                </Button>
                <Button variant="secondary" href="https://github.com/EarlJan-coder">
                  <GithubIcon size={18} aria-hidden="true" />
                  View GitHub
                </Button>
                <Button variant="secondary" href="https://linkedin.com/in/earl-malatag-4230903a8">
                  <LinkedinIcon size={18} aria-hidden="true" />
                  Connect on LinkedIn
                </Button>
                <Button variant="ghost" href="/projects">
                  <FolderOpenIcon size={18} aria-hidden="true" />
                  View Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Availability Status */}
        <ScrollReveal delay={0.3}>
          <Card variant="default" className="bg-success-light border-success/20">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-success animate-pulse" aria-hidden="true" />
                <span className="font-semibold text-success">Currently Available</span>
              </div>
              <p className="text-text-secondary">
                Open to internships, full-time positions, and freelance projects.
                <br />
                <span className="font-medium">Preferred: Remote · Hybrid (Philippines) · On-site (NCR)</span>
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Footer CTA */}
        <ScrollReveal delay={0.4} className="mt-16">
          <div className="text-center p-8 rounded-[24px] bg-accent-light border border-accent/20">
            <h3 className="text-2xl font-bold text-accent-dark mb-2">Let&apos;s Build Something Great</h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Have a project in mind? A question about my work? Or just want to connect?
              Don&apos;t hesitate to reach out.
            </p>
            <a
              href="mailto:earljhonmalatag2@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={20} aria-hidden="true" />
              Start a Conversation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}