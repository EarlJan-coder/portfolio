import * as React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "yellow" | "pink" | "blue" | "green" | "orange" | "purple" | "white" | "mint";
  className?: string;
}

export const Tag = ({ children, variant = "white", className }: TagProps) => {
  const variants = {
    white: "bg-white",
    yellow: "bg-sun-yellow",
    pink: "bg-hot-pink text-white",
    blue: "bg-electric-blue text-white",
    green: "bg-mint-green",
    mint: "bg-mint-green",
    orange: "bg-vivid-orange text-white",
    purple: "bg-playful-purple text-white",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-sm font-mono font-bold border-2 border-border-black shadow-[2px_2px_0px_#000000]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
