"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

interface HeroMedia {
  videoSrc?: string;
  posterSrc?: string;
  fallbackImageSrc?: string;
  alt?: string;
}

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  id?: string;
  eyebrow?: string;
  headline: string;
  subheading: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  media?: HeroMedia;
  scrollHref?: string;
  className?: string;
}

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export function Hero({
  id = "hero",
  eyebrow,
  headline,
  subheading,
  primaryCta = { label: "Book Trial Class", href: "/contact" },
  secondaryCta = { label: "Explore Courses", href: "/courses" },
  media,
  scrollHref = "#next-section",
  className,
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen items-center overflow-hidden bg-foreground text-background",
        className,
      )}
      aria-labelledby={`${id}-heading`}
    >
      <HeroBackground media={media} reduceMotion={Boolean(reduceMotion)} />

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/55 to-foreground/85" />

      <Container className="relative z-10 flex min-h-screen items-center justify-center pb-24 pt-32 text-center lg:pb-28 lg:pt-36">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          {eyebrow ? (
            <motion.p
              className="mb-4 rounded-full border border-background/25 bg-background/10 px-4 py-2 text-caption font-semibold uppercase text-background/85 backdrop-blur"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={contentVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {eyebrow}
            </motion.p>
          ) : null}

          <motion.h1
            id={`${id}-heading`}
            className="max-w-5xl text-balance font-serif text-heading-1 font-bold tracking-normal text-background md:text-display-lg lg:text-display-xl"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={contentVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: eyebrow ? 0.1 : 0 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-reading text-balance text-body-lg text-background/82"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          >
            {subheading}
          </motion.p>

          <motion.div
            className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.32 }}
          >
            <HeroPrimaryLink href={primaryCta.href}>
              {primaryCta.label}
            </HeroPrimaryLink>
            <HeroSecondaryLink href={secondaryCta.href}>
              {secondaryCta.label}
            </HeroSecondaryLink>
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator href={scrollHref} reduceMotion={Boolean(reduceMotion)} />
    </section>
  );
}

function HeroBackground({
  media,
  reduceMotion,
}: {
  media?: HeroMedia;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      aria-hidden="true"
      initial={false}
      animate={reduceMotion ? undefined : { scale: 1.06 }}
      transition={{ duration: 12, ease: "easeOut" }}
    >
      {media?.videoSrc ? (
        <video
          className="size-full object-cover"
          autoPlay={!reduceMotion}
          muted
          loop={!reduceMotion}
          playsInline
          preload="metadata"
          poster={media.posterSrc}
        >
          <source src={media.videoSrc} type="video/mp4" />
        </video>
      ) : media?.fallbackImageSrc ? (
        <Image
          src={media.fallbackImageSrc}
          alt={media.alt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div
          className="relative size-full overflow-hidden bg-foreground"
          role="img"
          aria-label={media?.alt ?? "Hero video placeholder awaiting academy footage"}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-foreground to-accent/40" />
          <div className="absolute inset-x-0 top-1/3 h-px bg-background/20" />
          <div className="absolute inset-y-0 left-1/3 w-px bg-background/10" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground to-transparent" />
        </div>
      )}
    </motion.div>
  );
}

function HeroPrimaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-primary-foreground shadow-md transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-lg focus-visible:outline-ring sm:w-auto"
    >
      {children}
    </Link>
  );
}

function HeroSecondaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-background/75 bg-background/10 px-7 py-4 text-base font-semibold leading-none text-background backdrop-blur transition duration-normal hover:-translate-y-1 hover:scale-102 hover:bg-background hover:text-primary hover:shadow-lg focus-visible:outline-ring sm:w-auto"
    >
      {children}
    </Link>
  );
}

function ScrollIndicator({
  href,
  reduceMotion,
}: {
  href: string;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Link
        href={href}
        className="inline-flex size-12 items-center justify-center rounded-full border border-background/40 bg-background/10 text-background backdrop-blur transition duration-normal hover:bg-background hover:text-primary focus-visible:outline-ring"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="size-5" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
