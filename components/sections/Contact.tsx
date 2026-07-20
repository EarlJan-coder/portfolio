"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    { icon: Github, label: "GitHub", value: "EarlJan-coder", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "earl-malatag", href: profile.linkedin },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 sm:py-36">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left: heading + links */}
        <div>
          <Reveal>
            <p className="section-label mb-4">Contact</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
              Let&apos;s build something exceptional.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-text-secondary">
              I&apos;m open to internships and junior opportunities. Have a project or
              role in mind? Reach out — I&apos;d love to hear about it.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <button
              type="button"
              onClick={copyEmail}
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 text-sm text-text-primary transition-colors hover:border-accent"
            >
              <Mail size={16} className="text-accent-bright" />
              {profile.email}
              <span className="ml-1 text-text-muted transition-colors group-hover:text-accent-bright">
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </span>
            </button>
          </Reveal>

          <Reveal delay={4}>
            <ul className="mt-10 space-y-1">
              {links.map((link) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-surface">
                    <link.icon size={18} className="text-text-muted" />
                    <div className="flex flex-1 items-baseline justify-between gap-4">
                      <span className="text-sm text-text-muted">{link.label}</span>
                      <span className="text-sm text-text-primary">{link.value}</span>
                    </div>
                  </div>
                );
                return (
                  <li key={link.label}>
                    {link.href ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={2}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="space-y-5">
              <Field
                id="name"
                label="Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                placeholder="Your name"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder="you@example.com"
              />
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-faint focus:border-accent"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
              >
                Send Message <Send size={15} />
              </motion.button>
              <AnimatePresence>
                {sent && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-accent-bright"
                  >
                    Opening your mail client…
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-faint focus:border-accent"
      />
    </div>
  );
}
