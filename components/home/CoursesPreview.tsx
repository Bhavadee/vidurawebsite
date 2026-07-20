"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Clock, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

export interface CoursePreviewItem {
  title: string;
  href: string;
  description?: string;
  ageGroup?: string;
  duration?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface CoursesPreviewProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  courses?: readonly CoursePreviewItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const defaultCourses: readonly CoursePreviewItem[] = [
  { title: "Carnatic Vocal", href: "/courses/carnatic-vocal" },
  { title: "Violin", href: "/courses/violin" },
  { title: "Keyboard", href: "/courses/keyboard" },
  { title: "Bharatanatyam", href: "/courses/bharatanatyam" },
  { title: "Bhajans", href: "/courses" },
];

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function CoursesPreview({
  id = "courses-preview",
  eyebrow = "Courses",
  title = "Explore Our Courses",
  description,
  courses = defaultCourses,
  ctaLabel = "View All Courses",
  ctaHref = "/courses",
  className,
}: CoursesPreviewProps) {
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
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
        >
          {courses.map((course) => (
            <CoursePreviewCard
              key={course.title}
              course={course}
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

function CoursePreviewCard({
  course,
  reduceMotion,
}: {
  course: CoursePreviewItem;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-sm ring-1 ring-border transition duration-normal hover:-translate-y-2 hover:shadow-md"
      variants={reduceMotion ? undefined : cardVariants}
    >
      <Link href={course.href} className="flex h-full flex-col focus-visible:outline-ring">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {course.imageSrc ? (
            <Image
              src={course.imageSrc}
              alt={course.imageAlt ?? course.title}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-slow group-hover:scale-105"
            />
          ) : (
            <div
              className="flex size-full items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/20 p-8 text-center"
              role="img"
              aria-label={`${course.title} course image placeholder`}
            >
              <span className="font-serif text-heading-4 font-bold text-primary">
                {course.title}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-8">
          <h3 className="font-serif text-heading-5 font-bold text-foreground">
            {course.title}
          </h3>
          <p className="mt-4 flex-1 text-body-sm text-muted-foreground">
            {course.description ??
              "Placeholder course description. Replace with approved course details before launch."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-caption text-muted-foreground">
            {course.ageGroup ? (
              <span className="inline-flex items-center gap-2">
                <UsersRound className="size-4 text-primary" aria-hidden="true" />
                {course.ageGroup}
              </span>
            ) : null}
            {course.duration ? (
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-primary" aria-hidden="true" />
                {course.duration}
              </span>
            ) : null}
          </div>

          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
            Learn More
            <ArrowRight className="size-5 transition duration-normal group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
