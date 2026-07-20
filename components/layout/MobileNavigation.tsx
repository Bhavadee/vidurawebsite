"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Logo } from "@/components/layout/Logo";
import { NavLink, type NavigationItem } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  open: boolean;
  items: readonly NavigationItem[];
  activePath?: string;
  enrollHref?: string;
  whatsappHref?: string;
  onClose: () => void;
}

export function MobileNavigation({
  open,
  items,
  activePath,
  enrollHref = "/contact",
  whatsappHref,
  onClose,
}: MobileNavigationProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 bg-foreground/35 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            id="mobile-navigation"
            className="fixed bottom-0 right-0 top-0 z-50 flex w-4/5 max-w-sm flex-col bg-card px-6 py-6 text-card-foreground shadow-lg lg:hidden"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-4">
              <Logo textClassName="text-lg" />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-12 items-center justify-center rounded-full text-foreground transition duration-normal hover:bg-muted hover:text-primary focus-visible:outline-ring"
                aria-label="Close navigation menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile primary">
              {items.map((item) => (
                <NavLink
                  key={item.href}
                  {...item}
                  active={activePath === item.href}
                  onNavigate={onClose}
                  className="justify-start px-0 text-lg"
                />
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
              <Link
                href={enrollHref}
                onClick={onClose}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring"
              >
                Book Trial Class
              </Link>
              {whatsappHref ? (
                <Link
                  href={whatsappHref}
                  onClick={onClose}
                  className={cn(
                    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary px-6 py-4 text-base font-semibold leading-none text-primary transition duration-normal hover:bg-primary hover:text-primary-foreground focus-visible:outline-ring",
                  )}
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp Now
                </Link>
              ) : null}
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
