"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 sm:py-36">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="section-label mb-4">About</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Engineering software that is secure, scalable, and intelligent.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-6 text-pretty text-lg leading-relaxed text-text-secondary">
            <Reveal delay={1}>
              <p>
                I&apos;m a BSIT student and full-stack developer focused on building
                production-oriented web applications. My work spans backend
                development with <span className="text-text-primary">Node.js</span> and{" "}
                <span className="text-text-primary">Express.js</span>, frontend
                engineering with <span className="text-text-primary">React</span> and{" "}
                <span className="text-text-primary">Next.js</span>, and database design
                with <span className="text-text-primary">PostgreSQL</span> and Drizzle ORM.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                I care deeply about <span className="accent-text">backend security</span> —
                designing REST APIs with JWT authentication, RBAC, rate limiting, and
                input validation. I&apos;m now expanding into{" "}
                <span className="accent-text">AI engineering</span>, integrating LLMs,
                prompt engineering, and retrieval-augmented generation to build a new class
                of intelligent, production-ready software.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i} className="bg-surface p-6">
                <div className="text-4xl font-semibold tracking-tight text-text-primary">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-text-muted">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
