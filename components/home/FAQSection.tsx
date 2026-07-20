"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: readonly FAQItem[];
  className?: string;
}

const defaultItems: readonly FAQItem[] = [
  {
    question: "What courses are available?",
    answer: "Placeholder answer. Replace with approved admissions FAQ content before launch.",
  },
  {
    question: "Can beginners join?",
    answer: "Placeholder answer. Replace with approved admissions FAQ content before launch.",
  },
  {
    question: "How do I book a trial class?",
    answer: "Placeholder answer. Replace with approved admissions FAQ content before launch.",
  },
];

export function FAQSection({
  id = "faq",
  eyebrow = "FAQ",
  title = "Common Questions",
  description,
  items = defaultItems,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id={id} tone="ivory" className={className} aria-labelledby={`${id}-heading`}>
      <Container width="reading">
        <SectionHeader
          id={`${id}-heading`}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="space-y-4">
          {items.map((item, index) => (
            <FAQAccordionItem
              key={item.question}
              item={item}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQAccordionItem({
  item,
  open,
  onToggle,
}: {
  item: FAQItem;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <article className="rounded-lg bg-card shadow-sm ring-1 ring-border">
      <h3>
        <button
          type="button"
          className="flex min-h-16 w-full items-center justify-between gap-6 rounded-lg px-6 py-5 text-left font-serif text-heading-5 font-bold text-foreground transition duration-normal hover:text-primary focus-visible:outline-ring"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {item.question}
          <ChevronDown
            className={cn(
              "size-5 shrink-0 text-primary transition duration-normal",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-body-sm text-muted-foreground">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
