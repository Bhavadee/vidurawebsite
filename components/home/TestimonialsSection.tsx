"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

export interface TestimonialItem {
  name: string;
  role?: string;
  review: string;
  rating?: number;
  imageSrc?: string;
  imageAlt?: string;
}

interface TestimonialsSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  testimonials?: readonly TestimonialItem[];
  className?: string;
}

const defaultTestimonials: readonly TestimonialItem[] = [
  {
    name: "Parent Name",
    role: "Parent",
    review: "Placeholder testimonial. Replace with approved parent feedback before launch.",
    rating: 5,
  },
  {
    name: "Student Name",
    role: "Student",
    review: "Placeholder testimonial. Replace with approved student feedback before launch.",
    rating: 5,
  },
  {
    name: "Parent Name",
    role: "Parent",
    review: "Placeholder testimonial. Replace with approved parent feedback before launch.",
    rating: 5,
  },
];

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function TestimonialsSection({
  id = "testimonials",
  eyebrow = "Testimonials",
  title = "What Families Say",
  description,
  testimonials = defaultTestimonials,
  className,
}: TestimonialsSectionProps) {
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
          className="grid gap-6 lg:grid-cols-3"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function TestimonialCard({
  testimonial,
  reduceMotion,
}: {
  testimonial: TestimonialItem;
  reduceMotion: boolean;
}) {
  const rating = Math.min(Math.max(testimonial.rating ?? 5, 0), 5);

  return (
    <motion.article
      className="flex h-full flex-col rounded-lg bg-background p-8 shadow-sm ring-1 ring-border transition duration-normal hover:-translate-y-1 hover:shadow-md"
      variants={reduceMotion ? undefined : cardVariants}
    >
      <Quote className="size-8 text-accent" aria-hidden="true" />
      <div className="mt-5 flex gap-1" aria-label={`${rating} out of 5 rating`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`size-5 ${index < rating ? "fill-accent text-accent" : "text-border"}`}
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="mt-6 flex-1 text-body text-foreground">
        &quot;{testimonial.review}&quot;
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="relative size-14 overflow-hidden rounded-full bg-muted">
          {testimonial.imageSrc ? (
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.imageAlt ?? testimonial.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          ) : null}
        </div>
        <div>
          <h3 className="font-serif text-heading-5 font-bold text-foreground">
            {testimonial.name}
          </h3>
          {testimonial.role ? (
            <p className="text-body-sm text-muted-foreground">{testimonial.role}</p>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
