"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
  external,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300",
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-bright"
      : "border border-border-strong bg-transparent text-text-primary hover:border-accent hover:text-accent-bright",
    className
  );

  const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.3 }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          className={base}
          aria-label={ariaLabel}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={base} aria-label={ariaLabel}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
