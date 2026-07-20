"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

interface FloatingWhatsAppButtonProps {
  href: string;
  className?: string;
}

export function FloatingWhatsAppButton({
  href,
  className,
}: FloatingWhatsAppButtonProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("fixed bottom-5 right-5 z-30 md:bottom-8 md:right-8", className)}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -4, 0],
              scale: [1, 1.03, 1],
            }
      }
      transition={{
        duration: 2.4,
        repeat: Infinity,
        repeatDelay: 7.6,
        ease: "easeInOut",
      }}
    >
      <Link
        href={href}
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-success px-5 py-3 text-base font-semibold leading-none text-success-foreground shadow-md transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-lg focus-visible:outline-ring"
        aria-label={siteConfig.cta.whatsapp}
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">{siteConfig.cta.whatsapp}</span>
      </Link>
    </motion.div>
  );
}
