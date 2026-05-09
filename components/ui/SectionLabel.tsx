import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  variant?: "mint" | "pink" | "yellow" | "blue" | "orange" | "purple";
  className?: string;
}

export const SectionLabel = ({
  number,
  label,
  variant = "mint",
  className,
}: SectionLabelProps) => {
  const variants = {
    mint: "text-mint-green",
    pink: "text-hot-pink",
    yellow: "text-sun-yellow",
    blue: "text-electric-blue",
    orange: "text-vivid-orange",
    purple: "text-playful-purple",
  };

  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <span className={cn("text-2xl font-mono font-black", variants[variant])}>
        {number} —
      </span>
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
        {label}
      </h2>
    </div>
  );
};
