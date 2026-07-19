"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zm-.792 23.042H2.563V9.608h18.87v13.434z" />
  </svg>
);

const navItems = [
  { href: "/", label: "Home", icon: "Home" },
  { href: "/experience", label: "Experience", icon: "Briefcase" },
  { href: "/projects", label: "Projects", icon: "FolderOpen" },
  { href: "/skills", label: "Skills", icon: "Code" },
  { href: "/contact", label: "Contact", icon: "Mail" },
];

const iconComponents: Record<string, React.ReactNode> = {
  Home: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
  Briefcase: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect x="2" y="6" width="20" height="14" rx="2"></rect></svg>,
  FolderOpen: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path><path d="M2 10h20"></path></svg>,
  Code: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Mail: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>,
};

const socialLinks: { href: string; label: string }[] = [
  { href: "https://github.com/EarlJan-coder", label: "GitHub" },
  { href: "https://linkedin.com/in/earl-malatag-4230903a8", label: "LinkedIn" },
  { href: "mailto:earljhonmalatag2@gmail.com", label: "Email" },
];

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-[10px] bg-surface border border-border shadow-card hover:shadow-card-hover transition-shadow"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open navigation"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/30"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-0 top-0 h-full w-72 max-w-[85vw] bg-surface border-r border-border z-50 lg:hidden flex flex-col"
          >
            <SidebarContent pathname={pathname} />
          </motion.aside>
        )}
      </AnimatePresence>

      <aside className="hidden lg:block fixed left-0 top-0 h-full w-72 bg-surface border-r border-border sidebar-width z-40 flex flex-col">
        <SidebarContent pathname={pathname} />
      </aside>
    </>
  );
}

function SidebarContent({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex flex-col items-center text-center mb-10 pt-4 border-b border-border pb-6">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-accent-light flex items-center justify-center overflow-hidden ring-4 ring-accent-light">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
              <circle cx="12" cy="8" r="5"></circle>
              <path d="M20 21a8 8 0 0 0-16 0"></path>
            </svg>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
            className="absolute -bottom-2 -right-2 w-5 h-5 bg-success rounded-full border-4 border-surface flex items-center justify-center"
          >
            <span className="w-1.5 h-1.5 bg-success rounded-full" />
          </motion.div>
        </div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Earl Jhon Malatag</h1>
        <p className="text-sm text-text-secondary mt-1 font-medium">Full-Stack Developer</p>
      </div>

      <nav className="flex-1" aria-label="Main navigation">
        <ul className="space-y-1" role="list">
          {navItems.map((item, index) => (
            <NavLink
              key={item.href}
              item={item}
              pathname={pathname}
              index={index}
            />
          ))}
        </ul>
      </nav>

      <div className="border-t border-border pt-6 mt-auto">
        <div className="flex items-center justify-center gap-4">
{socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-[10px] text-text-secondary hover:text-accent hover:bg-accent-light transition-all duration-200"
              >
                {social.label === "GitHub" ? <GithubIcon /> : social.label === "LinkedIn" ? <LinkedinIcon /> : <Mail size={20} />}
              </a>
            ))}
        </div>
        <p className="text-xs text-text-muted text-center mt-6 font-medium">
          © 2026 Earl Jhon Malatag
        </p>
      </div>
    </div>
  );
}

function NavLink({ item, pathname, index }: { item: typeof navItems[0]; pathname: string; index: number }) {
  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
  const Icon = iconComponents[item.icon as keyof typeof iconComponents];

  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-[12px] text-text-secondary font-medium transition-all duration-200 relative overflow-hidden group",
          isActive
            ? "bg-accent-light text-accent"
            : "hover:bg-surface-hover hover:text-text-primary"
        )}
        style={{ transitionDelay: `${index * 30}ms` }}
      >
        <span className="flex-shrink-0" aria-hidden="true">{Icon}</span>
        <span className="flex-1">{item.label}</span>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <ChevronRight size={16} className="text-accent" />
          </motion.div>
        )}
        <motion.div
          layoutId="active-indicator"
          className={cn(
            "absolute left-0 top-0 h-full w-1 bg-accent rounded-r-[12px]",
            isActive ? "opacity-100" : "opacity-0"
          )}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </Link>
    </li>
  );
}