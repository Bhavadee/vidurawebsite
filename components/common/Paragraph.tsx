import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface ParagraphProps extends ComponentPropsWithoutRef<"p"> {
  size?: "sm" | "md" | "lg";
  tone?: "primary" | "secondary";
}

const sizeClasses = {
  sm: "text-body-sm",
  md: "text-body",
  lg: "text-body-lg",
};

const toneClasses = {
  primary: "text-foreground",
  secondary: "text-muted-foreground",
};

export function Paragraph({
  className,
  size = "md",
  tone = "secondary",
  children,
  ...props
}: ParagraphProps) {
  return (
    <p className={cn(sizeClasses[size], toneClasses[tone], className)} {...props}>
      {children}
    </p>
  );
}
