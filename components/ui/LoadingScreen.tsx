"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 450);
      }
      setCount(current);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="section-label mb-3">Portfolio</p>
              <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
                Earl Jhon Malatag
              </h1>
            </motion.div>

            <div className="relative h-px w-56 overflow-hidden bg-border">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent"
                style={{ width: `${count}%` }}
              />
            </div>

            <span className="font-mono text-sm text-text-muted tabular-nums">
              {String(count).padStart(3, "0")}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
