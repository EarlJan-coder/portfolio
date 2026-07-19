"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "warning" | "outline";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  onRemove?: () => void;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = "default", size = "md", removable, onRemove, children, ...props }, ref) => {
    const variants = {
      default: "bg-surface-hover text-text-secondary border-border hover:bg-accent-light hover:text-accent hover:border-accent",
      accent: "bg-accent-light text-accent border-transparent",
      success: "bg-success-light text-success border-transparent",
      warning: "bg-warning-light text-warning border-transparent",
      outline: "bg-transparent text-text-secondary border-border hover:bg-surface-hover hover:border-border-strong",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs gap-1",
      md: "px-3 py-1 text-sm gap-1.5",
      lg: "px-4 py-1.5 text-base gap-2",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-[8px] border transition-all duration-200",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className={cn(
              "ml-1 p-0.5 rounded transition-colors",
              "hover:bg-black/10 hover:text-text-primary"
            )}
            aria-label="Remove tag"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export { Tag };