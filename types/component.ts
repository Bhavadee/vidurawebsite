import type { ReactNode } from "react";

export interface BaseComponentProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

export type ComponentSize = "sm" | "md" | "lg";
export type ComponentVariant = "primary" | "secondary" | "ghost";
