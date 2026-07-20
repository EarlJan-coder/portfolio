"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 sm:py-36">
      <SectionHeading
        label="Tech Stack"
        title="Tools I build with."
        description="A full-stack toolkit spanning modern frontend frameworks, secure backend services, databases, and AI tooling."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i % 3}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-medium text-text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="cursor-default rounded-lg border border-border bg-surface-raised px-3 py-1.5 text-sm text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent-bright"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
