import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types/component";

export function PageWrapper({ id, className, children }: BaseComponentProps) {
  return (
    <main
      id={id}
      className={cn("min-h-screen overflow-hidden bg-background text-foreground", className)}
    >
      {children}
    </main>
  );
}
