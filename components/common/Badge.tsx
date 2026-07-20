import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant?: "maroon" | "gold" | "neutral";
}

const variantClasses = {
  maroon: "bg-primary/10 text-primary ring-primary/15",
  gold: "bg-accent/15 text-foreground ring-accent/25",
  neutral: "bg-muted text-muted-foreground ring-border",
};

export function Badge({
  className,
  variant = "maroon",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full px-4 text-caption font-semibold uppercase tracking-normal ring-1",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
