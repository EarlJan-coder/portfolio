"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col mb-8">
            <span className="text-xl md:text-3xl font-mono font-bold mb-2 text-muted-gray">
              HELLO, I AM
            </span>
            <h1 className="text-7xl md:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase break-words">
              EARL JHON <br />
              <span className="text-hot-pink">MALATAG</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl font-mono text-muted-gray mb-12 max-w-2xl">
            Building digital experiences that are bold, clean, and functional.
          </p>

          <div className="flex flex-wrap gap-6">
            <Button variant="primary" size="lg" href="#work">
              VIEW WORK
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              CONTACT ME
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 12 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="absolute top-1/4 right-[-5%] w-64 h-64 bg-sun-yellow border-4 border-black shadow-[8px_8px_0px_#000000] hidden lg:block"
      />
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: -12 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        className="absolute bottom-1/4 left-[-2%] w-48 h-48 bg-mint-green border-4 border-black shadow-[8px_8px_0px_#000000] hidden lg:block"
      />
    </section>
  );
};
