"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="max-w-md text-balance font-mono text-sm leading-relaxed text-text-muted">
            &ldquo;Building secure systems, intelligent software, and scalable
            experiences.&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <FooterLink href={profile.github} label="GitHub">
              <Github size={18} />
            </FooterLink>
            <FooterLink href={profile.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </FooterLink>
            <FooterLink href={`mailto:${profile.email}`} label="Email">
              <Mail size={18} />
            </FooterLink>
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-2 border-t border-border pt-8 text-sm text-text-faint sm:flex-row">
            <span>© {year} Earl Jhon Malatag</span>
            <span className="font-mono">Full-Stack · Security · AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent-bright"
    >
      {children}
    </a>
  );
}
