"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

export interface GalleryPreviewItem {
  title: string;
  category?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
}

interface GalleryPreviewProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: readonly GalleryPreviewItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const defaultItems: readonly GalleryPreviewItem[] = [
  { title: "Classroom", category: "Classroom", featured: true },
  { title: "Performances", category: "Performances" },
  { title: "Competitions", category: "Competitions" },
  { title: "Annual Day", category: "Annual Day" },
  { title: "Workshops", category: "Workshops" },
];

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export function GalleryPreview({
  id = "gallery-preview",
  eyebrow = "Gallery",
  title = "A Glimpse Into Academy Life",
  description,
  items = defaultItems,
  ctaLabel = "View Gallery",
  ctaHref = "/gallery",
  className,
}: GalleryPreviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id={id} tone="ivory" className={className} aria-labelledby={`${id}-heading`}>
      <Container>
        <SectionHeader
          id={`${id}-heading`}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <motion.div
          className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] lg:grid-cols-4"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
        >
          {items.map((item, index) => (
            <GalleryTile
              key={`${item.title}-${index}`}
              item={item}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href={ctaHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring"
          >
            {ctaLabel}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function GalleryTile({
  item,
  reduceMotion,
}: {
  item: GalleryPreviewItem;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-lg bg-muted shadow-sm ring-1 ring-border ${
        item.featured ? "col-span-2 row-span-2" : ""
      }`}
      variants={reduceMotion ? undefined : tileVariants}
    >
      {item.imageSrc ? (
        <Image
          src={item.imageSrc}
          alt={item.imageAlt ?? item.title}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition duration-slow group-hover:scale-105"
        />
      ) : (
        <div
          className="flex size-full items-center justify-center bg-gradient-to-br from-primary/12 via-card to-accent/20"
          role="img"
          aria-label={`${item.title} gallery image placeholder`}
        >
          <Images className="size-10 text-primary" aria-hidden="true" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-background">
        {item.category ? (
          <p className="text-caption font-semibold uppercase text-background/75">
            {item.category}
          </p>
        ) : null}
        <h3 className="font-serif text-heading-5 font-bold">{item.title}</h3>
      </div>
    </motion.article>
  );
}
