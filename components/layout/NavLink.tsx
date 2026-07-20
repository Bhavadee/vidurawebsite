import Link from "next/link";

import { cn } from "@/lib/utils";

export interface NavigationItem {
  label: string;
  href: string;
}

interface NavLinkProps extends NavigationItem {
  active?: boolean;
  onNavigate?: () => void;
  className?: string;
  indicatorClassName?: string;
}

export function NavLink({
  label,
  href,
  active = false,
  onNavigate,
  className,
  indicatorClassName,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative inline-flex min-h-12 items-center rounded-sm px-2 text-sm font-semibold text-foreground transition duration-normal hover:text-primary focus-visible:outline-ring",
        active && "text-primary",
        className,
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-2 bottom-2 h-px origin-left scale-x-0 bg-primary transition duration-normal group-hover:scale-x-100",
          active && "scale-x-100",
          indicatorClassName,
        )}
        aria-hidden="true"
      />
    </Link>
  );
}
