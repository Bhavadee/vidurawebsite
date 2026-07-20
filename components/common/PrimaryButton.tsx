import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ComponentPropsWithoutRef<"button"> {
  size?: "md" | "lg";
}

const sizeClasses = {
  md: "min-h-12 px-7 py-4 text-base",
  lg: "min-h-14 px-8 py-4 text-base",
};

export function PrimaryButton({
  className,
  size = "md",
  type = "button",
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-primary font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal ease-out hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
