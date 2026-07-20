import type { Metadata } from "next";

import { Container, Heading, PageWrapper, Paragraph, Section, SectionHeader } from "@/components/common";
import { AchievementsSection, TestimonialsSection } from "@/components/home";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Meet Our Faculty",
  description:
    "Meet the faculty of Vidura Sanskriti Sangeetalayam and learn about the academy's teaching philosophy.",
  path: "/faculty",
});

const facultyPlaceholders = ["Faculty Name", "Faculty Name", "Faculty Name"];

export default function FacultyPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="faculty-heading">
        <Container>
          <SectionHeader
            id="faculty-heading"
            eyebrow="Faculty"
            title="Teachers Who Guide With Discipline"
            description="Approved faculty profiles, qualifications, experience, and portraits will be added here before launch."
            headingAs="h1"
            headingSize="h1"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facultyPlaceholders.map((name, index) => (
              <article key={`${name}-${index}`} className="flex h-full flex-col rounded-lg bg-card p-8 shadow-sm ring-1 ring-border">
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 via-background to-accent/20" />
                <Heading as="h2" size="h4" className="mt-6">
                  {name}
                </Heading>
                <p className="mt-2 text-body-sm font-semibold text-primary">
                  Specialization Placeholder
                </p>
                <Paragraph className="mt-4">
                  Placeholder faculty biography. Replace with approved teacher details before launch.
                </Paragraph>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="white" aria-labelledby="teaching-philosophy-heading">
        <Container width="reading">
          <SectionHeader
            id="teaching-philosophy-heading"
            eyebrow="Teaching Philosophy"
            title="Focused, Patient, and Tradition-Led"
            description="Placeholder teaching philosophy. Replace with approved content before launch."
          />
        </Container>
      </Section>
      <AchievementsSection />
      <TestimonialsSection />
    </PageWrapper>
  );
}
