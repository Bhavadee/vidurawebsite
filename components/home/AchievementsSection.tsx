"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Medal } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

export interface AchievementItem {
  title: string;
  year?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface AchievementsSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  achievements?: readonly AchievementItem[];
  className?: string;
}

const defaultAchievements: readonly AchievementItem[] = [
  { title: "Competition Winners" },
  { title: "Stage Performances" },
  { title: "Certificates" },
  { title: "Workshops" },
];

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function AchievementsSection({
  id = "achievements",
  eyebrow = "Achievements",
  title = "Celebrating Student Growth and Recognition",
  description,
  achievements = defaultAchievements,
  className,
}: AchievementsSectionProps) {
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
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
        >
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function AchievementCard({
  achievement,
  reduceMotion,
}: {
  achievement: AchievementItem;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      className="group h-full overflow-hidden rounded-lg bg-background shadow-sm ring-1 ring-border transition duration-normal hover:-translate-y-2 hover:shadow-md"
      variants={reduceMotion ? undefined : cardVariants}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {achievement.imageSrc ? (
          <Image
            src={achievement.imageSrc}
            alt={achievement.imageAlt ?? achievement.title}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-slow group-hover:scale-105"
          />
        ) : (
          <div
            className="flex size-full items-center justify-center bg-gradient-to-br from-accent/25 via-background to-primary/10"
            role="img"
            aria-label={`${achievement.title} image placeholder`}
          >
            <Medal className="size-12 text-primary" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="p-6">
        {achievement.year ? (
          <p className="mb-2 text-caption font-semibold text-accent">
            {achievement.year}
          </p>
        ) : null}
        <h3 className="font-serif text-heading-5 font-bold text-foreground">
          {achievement.title}
        </h3>
        <p className="mt-3 text-body-sm text-muted-foreground">
          {achievement.description ??
            "Placeholder achievement details. Replace with approved award or event information before launch."}
        </p>
      </div>
    </motion.article>
  );
}
