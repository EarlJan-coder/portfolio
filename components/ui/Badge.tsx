"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "success" | "warning" | "neutral";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", size = "md", dot = false, children, ...props }, ref) => {
    const variants = {
      accent: "pill-accent",
      success: "pill-success",
      warning: "pill-warning",
      neutral: "pill-muted",
    };

    const sizes = {
      sm: "px-2.5 py-1 text-xs gap-1",
      md: "px-3 py-1.5 text-sm gap-1.5",
      lg: "px-4 py-2 text-base gap-2",
    };

    return (
      <span
        ref={ref}
        className={cn("pill", variants[variant], sizes[size], className)}
        {...props}
      >
        {dot && <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", {
          "bg-accent": variant === "accent",
          "bg-success": variant === "success",
          "bg-warning": variant === "warning",
          "bg-text-muted": variant === "neutral",
        })} />}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };