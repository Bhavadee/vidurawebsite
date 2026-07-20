import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}

export function Logo({ className, markClassName, textClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-h-12 items-center gap-3 rounded-sm focus-visible:outline-ring",
        className,
      )}
      aria-label="Vidura Sanskriti Sangeetalayam home"
    >
      <span
        className={cn(
          "grid size-11 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm transition duration-normal group-hover:-translate-y-0.5",
          markClassName,
        )}
        aria-hidden="true"
      >
        <span className="font-serif text-heading-5 font-bold leading-none">V</span>
      </span>
      <span
        className={cn(
          "hidden max-w-56 font-serif text-xl font-bold leading-tight text-foreground sm:block",
          textClassName,
        )}
      >
        Vidura Sanskriti Sangeetalayam
      </span>
    </Link>
  );
}
