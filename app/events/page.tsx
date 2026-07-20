import type { Metadata } from "next";

import { Container, Heading, PageWrapper, Paragraph, Section, SectionHeader } from "@/components/common";
import { ContactPreview, GalleryPreview } from "@/components/home";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Events",
  description:
    "Explore upcoming and past events, performances, workshops, and celebrations at Vidura Sanskriti Sangeetalayam.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="events-heading">
        <Container>
          <SectionHeader
            id="events-heading"
            eyebrow="Events"
            title="Upcoming and Past Academy Events"
            description="Approved event dates, venues, registration links, photos, and videos will be added here before launch."
            headingAs="h1"
            headingSize="h1"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {["Upcoming Events", "Past Events"].map((title) => (
              <article key={title} className="rounded-lg bg-card p-8 shadow-sm ring-1 ring-border">
                <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-primary/10 via-background to-accent/20" />
                <Heading as="h2" size="h3" className="mt-6">
                  {title}
                </Heading>
                <Paragraph className="mt-4">
                  Placeholder event details. Replace with approved event information before launch.
                </Paragraph>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <GalleryPreview title="Event Gallery" />
      <ContactPreview title="Register Interest" />
    </PageWrapper>
  );
}
