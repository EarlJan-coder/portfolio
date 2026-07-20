"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aiCapabilities } from "@/lib/data";

function NeuralVisual() {
  // Layered nodes forming a simple feed-forward network
  const layers = [3, 4, 4, 2];
  const width = 320;
  const height = 240;
  const nodes: { x: number; y: number; layer: number }[] = [];

  layers.forEach((count, li) => {
    const x = (width / (layers.length - 1)) * li;
    for (let n = 0; n < count; n++) {
      const y = (height / (count + 1)) * (n + 1);
      nodes.push({ x, y, layer: li });
    }
  });

  const edges: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let li = 0; li < layers.length - 1; li++) {
    const a = nodes.filter((n) => n.layer === li);
    const b = nodes.filter((n) => n.layer === li + 1);
    a.forEach((na) =>
      b.forEach((nb) => edges.push({ x1: na.x, y1: na.y, x2: nb.x, y2: nb.y }))
    );
  }

  return (
    <svg
      viewBox={`-10 -10 ${width + 20} ${height + 20}`}
      className="h-full w-full"
      aria-hidden="true"
    >
      {edges.map((e, i) => (
        <motion.line
          key={i}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="#4d7cff"
          strokeWidth={0.6}
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.35, 0.05] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: (i % 8) * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={4}
          fill="#0e0e10"
          stroke="#6b93ff"
          strokeWidth={1.2}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: (i % 5) * 0.3,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}
    </svg>
  );
}

export function AIEngineering() {
  return (
    <section id="ai" className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="AI Engineering"
          title="Building intelligent systems."
          description="Extending full-stack engineering into AI — from LLM integration and prompt design to retrieval-augmented generation and self-hosted local models."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Feature card with neural visual */}
          <Reveal className="lg:col-span-1">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6">
              <div className="aspect-[4/3] w-full">
                <NeuralVisual />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-text-primary">
                  From models to production
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Turning language models into reliable, secure features inside
                  real applications.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Capability grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {aiCapabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i % 2}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-raised font-mono text-xs text-accent-bright transition-colors group-hover:border-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-medium text-text-primary">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {cap.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
