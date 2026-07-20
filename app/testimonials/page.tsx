import type { Metadata } from "next";

import { Container, PageWrapper, Section, SectionHeader } from "@/components/common";
import { ContactPreview, TestimonialsSection } from "@/components/home";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Student & Parent Testimonials",
  description:
    "Read parent and student testimonials about learning at Vidura Sanskriti Sangeetalayam.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="testimonials-heading">
        <Container>
          <SectionHeader
            id="testimonials-heading"
            eyebrow="Testimonials"
            title="Student and Parent Experiences"
            description="Only approved real testimonials should be published before launch."
            headingAs="h1"
            headingSize="h1"
          />
        </Container>
      </Section>
      <TestimonialsSection title="Featured Testimonials" />
      <Section tone="ivory" aria-labelledby="video-testimonials-heading">
        <Container>
          <SectionHeader
            id="video-testimonials-heading"
            eyebrow="Videos"
            title="Video Testimonials"
            description="Approved video testimonials will be added here before launch."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((item) => (
              <div key={item} className="aspect-video rounded-lg bg-muted shadow-sm ring-1 ring-border" />
            ))}
          </div>
        </Container>
      </Section>
      <ContactPreview />
    </PageWrapper>
  );
}
