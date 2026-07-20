"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Paragraph } from "@/components/common/Paragraph";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

interface FounderSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  founderName?: string;
  designation?: string;
  experience?: string;
  biography?: readonly string[];
  philosophy?: string;
  quote?: string;
  signature?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function FounderSection({
  id = "founder",
  eyebrow = "Founder Message",
  title = "Guided by Experience and Teaching Discipline",
  founderName = "Founder Name",
  designation = "Founder",
  experience,
  biography = [],
  philosophy,
  quote,
  signature,
  imageSrc,
  imageAlt = "Founder portrait",
  ctaLabel = "Meet Faculty",
  ctaHref = "/faculty",
  className,
}: FounderSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id={id} tone="white" className={className} aria-labelledby={`${id}-heading`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={revealVariants}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted shadow-md">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="flex size-full items-center justify-center bg-gradient-to-br from-primary/12 via-background to-accent/20 p-8 text-center"
                  role="img"
                  aria-label={`${imageAlt}. Placeholder until real founder portrait is added.`}
                >
                  <span className="font-serif text-heading-4 font-bold text-primary">
                    Founder portrait placeholder
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={revealVariants}
          >
            <SectionHeader
              id={`${id}-heading`}
              eyebrow={eyebrow}
              title={title}
              align="left"
              className="mb-8"
            />

            <div className="rounded-lg bg-background p-8 shadow-sm ring-1 ring-border">
              <Heading as="h3" size="h4">
                {founderName}
              </Heading>
              <p className="mt-2 text-body-sm font-semibold text-primary">
                {designation}
                {experience ? ` • ${experience}` : ""}
              </p>

              <div className="mt-6 space-y-5">
                {biography.length > 0 ? (
                  biography.map((paragraph) => (
                    <Paragraph key={paragraph}>{paragraph}</Paragraph>
                  ))
                ) : (
                  <Paragraph>
                    Placeholder founder biography. Replace this with approved
                    founder content before launch.
                  </Paragraph>
                )}
                {philosophy ? <Paragraph>{philosophy}</Paragraph> : null}
              </div>

              {quote ? (
                <blockquote className="mt-8 border-l-2 border-accent pl-5">
                  <Quote className="mb-3 size-6 text-accent" aria-hidden="true" />
                  <p className="font-serif text-heading-5 font-bold text-foreground">
                    {quote}
                  </p>
                </blockquote>
              ) : null}

              {signature ? (
                <p className="mt-6 font-serif text-heading-5 font-bold text-primary">
                  {signature}
                </p>
              ) : null}

              <Link
                href={ctaHref}
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring"
              >
                {ctaLabel}
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
