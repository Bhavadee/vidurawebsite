"use client";

import type { HTMLMotionProps, Variants } from "framer-motion";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionPreset = "fade-up" | "fade" | "scale";

interface MotionWrapperProps extends Omit<HTMLMotionProps<"div">, "children"> {
  preset?: MotionPreset;
  delay?: number;
  children?: ReactNode;
}

const variants: Record<MotionPreset, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function MotionWrapper({
  preset = "fade-up",
  delay = 0,
  className,
  children,
  ...props
}: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[preset]}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
