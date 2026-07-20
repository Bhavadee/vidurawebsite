import type { ElementType } from "react";

import { Badge } from "@/components/common/Badge";
import { Heading } from "@/components/common/Heading";
import { Paragraph } from "@/components/common/Paragraph";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  headingAs?: ElementType;
  headingSize?: "display" | "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
}

const alignClasses = {
  center: "mx-auto items-center text-center",
  left: "items-start text-left",
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  headingAs = "h2",
  headingSize = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-reading flex-col gap-4",
        description ? "mb-12" : "mb-10",
        alignClasses[align],
        className,
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <Heading id={id} as={headingAs} size={headingSize}>
        {title}
      </Heading>
      {description ? (
        <Paragraph size="lg" className="max-w-reading">
          {description}
        </Paragraph>
      ) : null}
    </div>
  );
}
