"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 sm:py-36">
      <SectionHeading
        label="Experience"
        title="Where I've been building."
        description="Internships and freelance work sharpening my full-stack and backend engineering craft."
      />

      <div ref={ref} className="relative mt-8 pl-8 sm:pl-0">
        {/* Timeline rail */}
        <div className="absolute left-0 top-2 h-full w-px bg-border sm:left-[9.5rem]">
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="h-full w-full bg-accent"
          />
        </div>

        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={0}>
              <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-10">
                {/* Period (left) */}
                <div className="shrink-0 sm:w-32 sm:pt-1 sm:text-right">
                  <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
                    {job.period}
                  </span>
                </div>

                {/* Dot */}
                <span className="absolute -left-8 top-1.5 flex h-3 w-3 items-center justify-center sm:left-[9.05rem]">
                  <span className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
                </span>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-medium text-text-primary">{job.role}</h3>
                    <span className="accent-text text-sm">{job.company}</span>
                  </div>
                  <p className="mt-3 text-pretty leading-relaxed text-text-secondary">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
