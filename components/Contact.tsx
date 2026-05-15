"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Mail, Send, ExternalLink, Globe, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-12">
            <SectionLabel number="04" label="CONTACT" variant="orange" className="mb-0" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none max-w-4xl mx-auto">
            LET&apos;S WORK <span className="bg-sun-yellow px-4 border-4 border-black inline-block transform -rotate-2">TOGETHER.</span>
          </h2>

          <div className="w-full max-w-4xl">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=earljhonmalatag2@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="group relative block w-full p-4 md:p-8 bg-white border-4 border-black text-lg sm:text-2xl md:text-5xl font-black tracking-tight shadow-[12px_12px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0px_#3B82F6] transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-4 break-all">
                    <Mail size={48} className="hidden md:block" />
                    earljhonmalatag2@gmail.com
                </span>
              </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Button variant="outline" size="lg" className="p-6 group">
                <Send size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>

            <a href="www.linkedin.com/in/earl-malatag-4230903a8" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="p-6 hover:bg-electric-blue hover:text-white transition-colors group">
                    <LinkedinIcon />
                </Button>
            </a>

            <Button variant="outline" size="lg" className="p-6 hover:bg-hot-pink hover:text-white transition-colors group">
                <TwitterIcon />
            </Button>

            <a href="https://github.com/EarlJan-coder" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="p-6 hover:bg-vivid-orange hover:text-white transition-colors group">
                    <GithubIcon />
                </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Stamp */}
      <motion.div
        initial={{ rotate: 90, opacity: 0 }}
        whileInView={{ rotate: -15, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 bg-mint-green border-4 border-black px-6 py-3 font-black uppercase text-2xl shadow-[6px_6px_0px_#000000] hidden xl:block"
      >
        Available for hire
      </motion.div>
    </section>
  );
};

const LinkedinIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const GithubIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
