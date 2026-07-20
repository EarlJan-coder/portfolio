"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/lib/data";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Grid + fade */}
      <div className="bg-grid absolute inset-0 z-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-text-secondary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to internships &amp; opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-text-primary sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-sm tracking-tight text-accent-bright sm:text-base"
        >
          Full-Stack Developer • Backend Security • AI Engineering
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-text-secondary"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <MagneticButton href="#projects" variant="primary">
            View Projects <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton href="/resume.pdf" variant="secondary" download external>
            Download Resume <Download size={16} />
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Contact Me <Mail size={16} />
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
