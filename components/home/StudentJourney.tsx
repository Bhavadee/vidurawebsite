"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Award, BookOpen, GraduationCap, MicVocal, PencilLine, UserPlus } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

export interface JourneyStep {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

interface StudentJourneyProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: readonly JourneyStep[];
  className?: string;
}

const defaultSteps: readonly JourneyStep[] = [
  { title: "Join Academy", icon: UserPlus },
  { title: "Learn Basics", icon: BookOpen },
  { title: "Practice", icon: PencilLine },
  { title: "Perform", icon: MicVocal },
  { title: "Compete", icon: Award },
  { title: "Graduate", icon: GraduationCap },
];

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function StudentJourney({
  id = "student-journey",
  eyebrow = "Student Journey",
  title = "From First Lesson to Confident Performance",
  description,
  steps = defaultSteps,
  className,
}: StudentJourneyProps) {
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

        <motion.ol
          className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-6"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={listVariants}
        >
          <motion.span
            className="absolute left-6 top-0 hidden h-full w-px bg-border md:block lg:left-0 lg:right-0 lg:top-12 lg:mx-auto lg:h-px lg:w-full"
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0, scaleY: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {steps.map((step, index) => (
            <JourneyStepCard
              key={step.title}
              step={step}
              index={index}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </motion.ol>
      </Container>
    </Section>
  );
}

function JourneyStepCard({
  step,
  index,
  reduceMotion,
}: {
  step: JourneyStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.li className="relative" variants={reduceMotion ? undefined : stepVariants}>
      <article className="group flex h-full gap-5 rounded-lg bg-card p-6 shadow-sm ring-1 ring-border transition duration-normal hover:-translate-y-1 hover:shadow-md lg:flex-col lg:items-center lg:text-center">
        <span
          className="z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition duration-normal group-hover:scale-102 group-hover:bg-accent group-hover:text-accent-foreground"
          aria-hidden="true"
        >
          {Icon ? <Icon className="size-6" strokeWidth={2} /> : index + 1}
        </span>
        <div>
          <p className="text-caption font-semibold text-accent">
            Step {index + 1}
          </p>
          <h3 className="mt-2 font-serif text-heading-5 font-bold text-foreground">
            {step.title}
          </h3>
          {step.description ? (
            <p className="mt-3 text-body-sm text-muted-foreground">
              {step.description}
            </p>
          ) : null}
        </div>
      </article>
    </motion.li>
  );
}
