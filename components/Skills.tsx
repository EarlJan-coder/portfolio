"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs, SiPostgresql, SiStripe, SiExpress, SiJavascript } from 'react-icons/si';

const skills = [
  { name: "React", tech: "frontend" as const, icon: SiReact },
  { name: "Next.js", variant: "white", tech: "frontend" as const, icon: SiNextdotjs },
  { name: "TypeScript", variant: "blue", tech: "frontend" as const, icon: SiTypescript },
  { name: "Tailwind CSS", variant: "mint", tech: "frontend" as const, icon: SiTailwindcss },
  { name: "Framer Motion", variant: "purple", tech: "frontend" as const, icon: SiFramer },
  { name: "JavaScript", variant: "yellow", tech: "frontend" as const, icon: SiJavascript },
  { name: "Node.js", variant: "green", tech: "backend" as const, icon: SiNodedotjs },
  { name: "PostgreSQL", variant: "blue", tech: "backend" as const, icon: SiPostgresql },
  { name: "Stripe", variant: "purple", tech: "backend" as const, icon: SiStripe },
  { name: "Express", variant: "green", tech: "backend" as const, icon: SiExpress },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-soft-gray border-t-4 border-border-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="03" label="SKILLS" variant="purple" />
        
        <div className="relative mt-12">
          {/* Marquee effect using Framer Motion */}
          <div className="flex overflow-hidden group">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 whitespace-nowrap pr-8"
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="relative group/item px-8 py-4 border-4 shadow-[6px_6px_0px_#000000] bg-white hover:shadow-[8px_8px_0px_#000000] transition-shadow"
                >
                  <skill.icon size={40} className="text-black" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black text-white text-lg font-bold opacity-0 group-hover/item:opacity-100 transition-opacity">
                    {skill.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_#FF2E63] flex flex-col gap-4"
          >
            <h4 className="text-3xl font-black uppercase">Frontend</h4>
            <div className="grid grid-cols-3 gap-4">
              {skills.filter((s) => s.tech === "frontend").map((skill) => (
                <div key={skill.name} className="relative group/item flex items-center justify-center p-4 border-2 border-gray-300 hover:border-black transition-colors">
                  <skill.icon size={32} className="text-black" />
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_#FFD60A] flex flex-col gap-4"
          >
            <h4 className="text-3xl font-black uppercase">Backend</h4>
            <div className="grid grid-cols-3 gap-4">
              {skills.filter((s) => s.tech === "backend").map((skill) => (
                <div key={skill.name} className="relative group/item flex items-center justify-center p-4 border-2 border-gray-300 hover:border-black transition-colors">
                  <skill.icon size={32} className="text-black" />
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
