import type { ElementType } from "react";

import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types/component";

type ContainerWidth = "content" | "page" | "reading" | "full";

interface ContainerProps extends BaseComponentProps {
  as?: ElementType;
  width?: ContainerWidth;
}

const widthClasses: Record<ContainerWidth, string> = {
  content: "max-w-content",
  page: "max-w-page",
  reading: "max-w-reading",
  full: "max-w-none",
};

export function Container({
  as,
  width = "content",
  className,
  children,
  ...props
}: ContainerProps) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 sm:px-12 lg:px-20",
        widthClasses[width],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
