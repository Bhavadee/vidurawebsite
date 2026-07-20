import type { Metadata } from "next";

import { Container, PageWrapper, Section, SectionHeader } from "@/components/common";
import { ContactPreview } from "@/components/home";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Vidura Sanskriti Sangeetalayam",
  description:
    "Contact Vidura Sanskriti Sangeetalayam to book a trial class, ask about courses, or plan a visit.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="contact-heading">
        <Container width="reading">
          <SectionHeader
            id="contact-heading"
            eyebrow="Contact"
            title="Book a Trial Class"
            description="Approved phone, email, WhatsApp, address, map embed, and academy timings will be added here before launch."
            headingAs="h1"
            headingSize="h1"
          />
        </Container>
      </Section>
      <ContactPreview />
      <Section tone="ivory" aria-labelledby="timings-heading">
        <Container width="reading">
          <SectionHeader
            id="timings-heading"
            eyebrow="Timings"
            title="Academy Timings"
            description="Placeholder academy timings. Replace with approved weekday, weekend, and holiday information before launch."
          />
        </Container>
      </Section>
    </PageWrapper>
  );
}
