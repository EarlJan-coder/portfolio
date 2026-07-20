"use client";

import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      <Reveal>
        <p className="section-label mb-8">Education</p>
      </Reveal>
      <Reveal delay={1}>
        <div className="flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent-bright">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-text-primary">
                Bachelor of Science in Information Technology
              </h3>
              <p className="mt-1 text-text-secondary">
                Cavite State University — Trece Martires City Campus
              </p>
            </div>
          </div>
          <span className="font-mono text-sm text-text-muted sm:text-right">
            Sept 2023 — Present
          </span>
        </div>
      </Reveal>
    </section>
  );
}
