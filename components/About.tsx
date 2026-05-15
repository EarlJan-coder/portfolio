"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-soft-gray border-y-4 border-border-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="01" label="ABOUT" variant="mint" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-white border-4 border-border-black shadow-[12px_12px_0px_#000000] relative overflow-hidden group">
              <Image 
                src="/PFP.png" 
                alt="Profile picture" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-sun-yellow border-2 border-black px-4 py-2 font-mono font-bold shadow-[4px_4px_0px_#000000]">
                engineer.jpeg
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              I am a <span className="bg-mint-green px-1 border-2 border-black shadow-[4px_4px_0px_#000000]">full-stack developer</span> based in the digital ether. I specialize in breaking the mold and building interfaces that demand attention.
            </p>
            <p className="text-xl text-muted-gray leading-relaxed font-mono">
              My approach is simple: structure should be raw, colors should be loud, and the user should never be bored. I believe that whitespace is a canvas for boldness, not just a gap between elements.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#FB5607]">
                <h4 className="font-black uppercase text-lg">Engineering</h4>
                <p className="font-mono text-sm">Clean Code & Performance Focus</p>
              </div>
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#3B82F6]">
                <h4 className="font-black uppercase text-lg">Development</h4>
                <p className="font-mono text-sm">Full-Stack Web Applications</p>
              </div>
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#3B82F6]">
                <h4 className="font-black uppercase text-lg">Innovation</h4>
                <p className="font-mono text-sm">AI-Assisted Development & Automation</p>
              </div>
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#FB5607]">
                <h4 className="font-black uppercase text-lg">Workflow</h4>
                <p className="font-mono text-sm">Git, Collaboration & Deployment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
