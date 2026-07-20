"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Paragraph } from "@/components/common/Paragraph";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

interface AboutPreviewProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  body?: readonly string[];
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

export function AboutPreview({
  id = "about-preview",
  eyebrow = "About Vidura",
  title = "A Place for Disciplined Classical Learning",
  description,
  body = [],
  imageSrc,
  imageAlt = "Teacher guiding students during a music class",
  ctaLabel = "Read More",
  ctaHref = "/about",
  className,
}: AboutPreviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id={id} tone="ivory" className={className} aria-labelledby={`${id}-heading`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-md"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={revealVariants}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                className="flex size-full items-center justify-center bg-gradient-to-br from-primary/12 via-card to-accent/18 p-8 text-center"
                role="img"
                aria-label={`${imageAlt}. Placeholder until real academy photography is added.`}
              >
                <span className="max-w-sm font-serif text-heading-4 font-bold text-primary">
                  Academy classroom image placeholder
                </span>
              </div>
            )}
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
              description={description}
              align="left"
              className="mb-8"
            />

            <div className="space-y-5">
              {body.length > 0 ? (
                body.map((paragraph) => (
                  <Paragraph key={paragraph}>{paragraph}</Paragraph>
                ))
              ) : (
                <Paragraph>
                  Placeholder academy story. Replace this with approved content from
                  the client before launch.
                </Paragraph>
              )}
            </div>

            <Link
              href={ctaHref}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring"
            >
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
