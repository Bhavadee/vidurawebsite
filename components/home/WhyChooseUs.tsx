"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { GraduationCap, HandHeart, MicVocal, Sparkles } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

export interface WhyChooseItem {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

interface WhyChooseUsProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: readonly WhyChooseItem[];
  className?: string;
}

const defaultItems: readonly WhyChooseItem[] = [
  {
    title: "Traditional Learning",
    icon: Sparkles,
  },
  {
    title: "Expert Faculty",
    icon: GraduationCap,
  },
  {
    title: "Performance Opportunities",
    icon: MicVocal,
  },
  {
    title: "Individual Attention",
    icon: HandHeart,
  },
];

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhyChooseUs({
  id = "why-choose-us",
  eyebrow = "Why Choose Us",
  title = "Why Choose Vidura",
  description,
  items = defaultItems,
  className,
}: WhyChooseUsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id={id} tone="white" className={className} aria-labelledby={`${id}-heading`}>
      <Container>
        <SectionHeader
          id={`${id}-heading`}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
        >
          {items.map((item) => (
            <WhyChooseCard
              key={item.title}
              item={item}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function WhyChooseCard({
  item,
  reduceMotion,
}: {
  item: WhyChooseItem;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      className="group flex min-h-64 flex-col rounded-lg bg-background p-8 shadow-sm ring-1 ring-border transition duration-normal hover:-translate-y-2 hover:shadow-md"
      variants={reduceMotion ? undefined : cardVariants}
    >
      {Icon ? (
        <span
          className="mb-8 inline-flex size-14 items-center justify-center rounded-md bg-primary/10 text-primary transition duration-normal group-hover:bg-primary group-hover:text-primary-foreground"
          aria-hidden="true"
        >
          <Icon className="size-7" strokeWidth={2} />
        </span>
      ) : null}

      <h3 className="font-serif text-heading-5 font-bold text-foreground">
        {item.title}
      </h3>

      {item.description ? (
        <p className={cn("mt-4 text-body-sm text-muted-foreground")}>
          {item.description}
        </p>
      ) : null}
    </motion.article>
  );
}
