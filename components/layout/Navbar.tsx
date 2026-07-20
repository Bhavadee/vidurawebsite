"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/common/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { NavLink, type NavigationItem } from "@/components/layout/NavLink";
import { primaryNavigation } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

interface NavbarProps {
  items?: readonly NavigationItem[];
  enrollHref?: string;
  whatsappHref?: string;
  className?: string;
}

export function Navbar({
  items = primaryNavigation,
  enrollHref = "/contact",
  whatsappHref,
  className,
}: NavbarProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition duration-normal",
          scrolled
            ? "bg-background/95 shadow-sm backdrop-blur"
            : "bg-transparent",
          className,
        )}
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Logo textClassName={scrolled ? undefined : "text-background drop-shadow-sm"} />

          <nav
            className="hidden items-center justify-center gap-4 lg:flex"
            aria-label="Primary navigation"
          >
            {items.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                active={pathname === item.href}
                className={scrolled ? undefined : "text-background/90 hover:text-background"}
                indicatorClassName={scrolled ? undefined : "bg-background"}
              />
            ))}
          </nav>

          <div className="hidden items-center justify-end lg:flex">
            <Link
              href={enrollHref}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring"
            >
              {siteConfig.cta.enroll}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "inline-flex size-12 items-center justify-center rounded-full transition duration-normal focus-visible:outline-ring lg:hidden",
              scrolled
                ? "text-foreground hover:bg-muted hover:text-primary"
                : "text-background hover:bg-background/10 hover:text-background",
            )}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </Container>
      </motion.header>

      <MobileNavigation
        open={menuOpen}
        items={items}
        activePath={pathname}
        enrollHref={enrollHref}
        whatsappHref={whatsappHref}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
