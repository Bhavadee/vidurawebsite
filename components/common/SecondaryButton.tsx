import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends ComponentPropsWithoutRef<"button"> {
  size?: "md" | "lg";
}

const sizeClasses = {
  md: "min-h-12 px-7 py-4 text-base",
  lg: "min-h-14 px-8 py-4 text-base",
};

export function SecondaryButton({
  className,
  size = "md",
  type = "button",
  children,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-primary bg-transparent font-semibold leading-none text-primary transition duration-normal ease-out hover:-translate-y-1 hover:scale-102 hover:bg-primary hover:text-primary-foreground hover:shadow-sm focus-visible:outline-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
