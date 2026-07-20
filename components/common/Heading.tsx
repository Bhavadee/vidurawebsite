import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "h5";

interface HeadingProps extends ComponentPropsWithoutRef<"h2"> {
  as?: ElementType;
  size?: HeadingSize;
}

const sizeClasses: Record<HeadingSize, string> = {
  display: "text-heading-1 md:text-display-lg lg:text-display-xl",
  h1: "text-heading-2 md:text-heading-1",
  h2: "text-heading-3 md:text-heading-2",
  h3: "text-heading-4 md:text-heading-3",
  h4: "text-heading-5 md:text-heading-4",
  h5: "text-heading-5",
};

export function Heading({
  as,
  size = "h2",
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as ?? "h2";

  return (
    <Component
      className={cn(
        "font-serif font-bold tracking-normal text-balance text-foreground",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
