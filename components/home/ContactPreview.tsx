"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { siteConfig } from "@/constants/site";

interface ContactPreviewProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  whatsappHref?: string;
  mapEmbedSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ContactPreview({
  id = "contact-preview",
  eyebrow = "Contact",
  title = "Start With a Trial Class",
  description,
  address = `${siteConfig.location.city}, ${siteConfig.location.region}`,
  phone,
  email,
  whatsappHref,
  mapEmbedSrc,
  ctaLabel = "Book Trial Class",
  ctaHref = "/contact",
  className,
}: ContactPreviewProps) {
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

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            className="rounded-lg bg-background p-8 shadow-sm ring-1 ring-border"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={revealVariants}
          >
            <div className="space-y-5">
              <ContactRow icon={MapPin} label="Address" value={address} />
              {phone ? <ContactRow icon={Phone} label="Phone" value={phone} /> : null}
              {email ? <ContactRow icon={Mail} label="Email" value={email} /> : null}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={ctaHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring"
              >
                {ctaLabel}
              </Link>
              {whatsappHref ? (
                <Link
                  href={whatsappHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary px-7 py-4 text-base font-semibold leading-none text-primary transition duration-normal hover:-translate-y-1 hover:scale-102 hover:bg-primary hover:text-primary-foreground hover:shadow-sm focus-visible:outline-ring"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp
                </Link>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            className="min-h-[350px] overflow-hidden rounded-lg bg-muted shadow-sm ring-1 ring-border md:min-h-[450px] lg:min-h-[520px]"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={revealVariants}
          >
            {mapEmbedSrc ? (
              <iframe
                src={mapEmbedSrc}
                title="Vidura Sanskriti Sangeetalayam location map"
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div
                className="flex size-full items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/20 p-8 text-center"
                role="img"
                aria-label="Google Map placeholder until academy map embed is added"
              >
                <span className="font-serif text-heading-4 font-bold text-primary">
                  Google Map placeholder
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-caption font-semibold uppercase text-accent">{label}</p>
        <p className="mt-1 text-body-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}
