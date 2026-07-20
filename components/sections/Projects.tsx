"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 sm:py-36">
      <SectionHeading
        label="Featured Projects"
        title="Selected work."
        description="Full-stack applications spanning secure record systems, inventory platforms, and AI-powered tooling."
      />

      <div className="space-y-24 sm:space-y-32">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={project.title}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                {/* Image */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border bg-surface",
                    reversed && "lg:order-2"
                  )}
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} interface screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={cn(reversed && "lg:order-1")}>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                    {String(i + 1).padStart(2, "0")} — {project.tagline}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {project.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-sm text-text-secondary">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent-bright" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <FaGithub size={16} /> Source
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent-bright transition-colors hover:text-accent"
                      >
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
