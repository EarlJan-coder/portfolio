"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500",
            scrolled ? "glass shadow-soft" : "border border-transparent bg-transparent"
          )}
        >
          <a
            href="#top"
            className="mr-2 hidden select-none pl-3 font-mono text-sm font-medium tracking-tight text-text-primary sm:block"
            aria-label="Back to top"
          >
            EJM
            <span className="text-accent-bright">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                    active === item.href.slice(1)
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  )}
                >
                  {active === item.href.slice(1) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent-dim"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="ml-1 hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-bright md:inline-block"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-background/95 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i }}
                className="py-3 text-2xl font-medium tracking-tight text-text-primary"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
