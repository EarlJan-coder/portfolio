"use client";

import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <p className="section-label mb-4">{label}</p>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-text-secondary">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
