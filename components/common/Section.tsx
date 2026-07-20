import type { ElementType } from "react";

import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types/component";

interface SectionProps extends BaseComponentProps {
  as?: ElementType;
  spacing?: "default" | "compact" | "none";
  tone?: "ivory" | "white" | "muted" | "transparent";
  "aria-labelledby"?: string;
  role?: string;
}

const spacingClasses = {
  default: "py-16 md:py-24 lg:py-30",
  compact: "py-12 md:py-16 lg:py-20",
  none: "py-0",
};

const toneClasses = {
  ivory: "bg-background",
  white: "bg-card",
  muted: "bg-muted",
  transparent: "bg-transparent",
};

export function Section({
  as,
  id,
  className,
  spacing = "default",
  tone = "ivory",
  children,
  ...props
}: SectionProps) {
  const Component = as ?? "section";

  return (
    <Component
      id={id}
      className={cn(spacingClasses[spacing], toneClasses[tone], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
