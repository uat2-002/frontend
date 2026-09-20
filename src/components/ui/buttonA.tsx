import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", icon, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-[#FAFAFA] text-[#09090B] hover:bg-[#e4e4e7] active:scale-[0.98]",
      secondary: "bg-[#18181B] text-[#FAFAFA] border border-[#27272A] hover:bg-[#27272A] active:scale-[0.98]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";