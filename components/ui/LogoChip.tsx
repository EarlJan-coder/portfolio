"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: React.ReactNode;
  variant?: "default" | "accent" | "success" | "warning";
}

const LogoChip = React.forwardRef<HTMLDivElement, LogoChipProps>(
  ({ className, label, icon, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-surface border-border hover:border-accent",
      accent: "bg-accent-light border-accent/20",
      success: "bg-success-light border-success/20",
      warning: "bg-warning-light border-warning/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center w-8 h-8 rounded-[10px] font-semibold text-sm transition-all duration-200 border",
          variants[variant],
          className
        )}
        title={label}
        {...props}
      >
        {icon || label.charAt(0).toUpperCase()}
      </div>
    );
  }
);

LogoChip.displayName = "LogoChip";

export { LogoChip };