import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
  variant?: "primary" | "outline" | "ghost" | "yellow" | "pink" | "blue" | "green" | "orange" | "purple";
  size?: "sm" | "md" | "lg" | "xl";
  offset?: boolean;
} & (
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", offset = true, href, ...props },
    ref
  ) => {
    const variants = {
      primary: "bg-electric-blue text-white",
      outline: "bg-transparent border-border-black border-2",
      ghost: "bg-transparent border-none shadow-none translate-x-0 translate-y-0",
      yellow: "bg-sun-yellow text-primary-text",
      pink: "bg-hot-pink text-white",
      blue: "bg-electric-blue text-white",
      green: "bg-mint-green text-primary-text",
      orange: "bg-vivid-orange text-white",
      purple: "bg-playful-purple text-white",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base font-bold",
      lg: "px-8 py-4 text-xl font-bold",
      xl: "px-10 py-5 text-2xl font-black",
    };

    const sharedClassName = cn(
      "relative inline-flex items-center justify-center border-2 border-border-black transition-all active:translate-x-0 active:translate-y-0 active:shadow-none",
      variants[variant as keyof typeof variants],
      sizes[size as keyof typeof sizes],
      offset && "shadow-[4px_4px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000]",
      className
    );

    if (href) {
      return (
        <a ref={ref as React.ForwardedRef<HTMLAnchorElement>} href={href} className={sharedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={sharedClassName}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
