"use client";

import type { LucideIcon } from "lucide-react";
import { Award, Medal, Music, Users } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { cn } from "@/lib/utils";

export interface TrustStatistic {
  value: number;
  label: string;
  suffix?: string;
  description?: string;
  icon?: LucideIcon;
}

interface TrustStatisticsProps {
  id?: string;
  stats?: readonly TrustStatistic[];
  className?: string;
}

const defaultStats: readonly TrustStatistic[] = [
  {
    value: 500,
    suffix: "+",
    label: "Students",
    icon: Users,
  },
  {
    value: 100,
    suffix: "+",
    label: "Performances",
    icon: Music,
  },
  {
    value: 25,
    suffix: "+",
    label: "Awards",
    icon: Medal,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: Award,
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function TrustStatistics({
  id = "trust-statistics",
  stats = defaultStats,
  className,
}: TrustStatisticsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id={id} spacing="compact" tone="ivory" className={className}>
      <Container>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Academy trust statistics"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
        >
          {stats.map((stat) => (
            <StatisticCard key={stat.label} stat={stat} reduceMotion={Boolean(reduceMotion)} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function StatisticCard({
  stat,
  reduceMotion,
}: {
  stat: TrustStatistic;
  reduceMotion: boolean;
}) {
  const Icon = stat.icon;

  return (
    <motion.article
      className="flex min-h-48 flex-col items-center justify-center rounded-lg bg-card p-8 text-center shadow-sm ring-1 ring-border transition duration-normal hover:-translate-y-1 hover:shadow-md"
      variants={reduceMotion ? undefined : cardVariants}
    >
      {Icon ? (
        <span
          className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary"
          aria-hidden="true"
        >
          <Icon className="size-6" strokeWidth={2} />
        </span>
      ) : null}

      <AnimatedCounter
        value={stat.value}
        suffix={stat.suffix}
        className="text-heading-1 text-primary"
      />

      <h2 className="mt-3 font-serif text-heading-5 font-bold text-foreground">
        {stat.label}
      </h2>

      {stat.description ? (
        <p className={cn("mt-2 text-body-sm text-muted-foreground")}>
          {stat.description}
        </p>
      ) : null}
    </motion.article>
  );
}
