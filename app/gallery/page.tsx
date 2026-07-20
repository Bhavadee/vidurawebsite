import type { Metadata } from "next";

import { Container, PageWrapper, Section, SectionHeader } from "@/components/common";
import { ContactPreview, GalleryPreview } from "@/components/home";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "View classroom, performance, competition, annual day, dance, music, and workshop moments from Vidura Sanskriti Sangeetalayam.",
  path: "/gallery",
});

const categories = ["All", "Classroom", "Performances", "Competitions", "Annual Day", "Dance", "Music", "Workshops"];

export default function GalleryPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="gallery-heading">
        <Container>
          <SectionHeader
            id="gallery-heading"
            eyebrow="Gallery"
            title="Academy Life in Pictures"
            description="Real gallery images and videos will replace these placeholders before launch."
            headingAs="h1"
            headingSize="h1"
          />
          <div className="mb-10 flex flex-wrap justify-center gap-3" aria-label="Gallery categories">
            {categories.map((category) => (
              <span key={category} className="rounded-full bg-card px-4 py-2 text-caption font-semibold text-muted-foreground ring-1 ring-border">
                {category}
              </span>
            ))}
          </div>
        </Container>
      </Section>
      <GalleryPreview title="Image Gallery" />
      <Section tone="white" aria-labelledby="video-gallery-heading">
        <Container>
          <SectionHeader
            id="video-gallery-heading"
            eyebrow="Videos"
            title="Video Gallery"
            description="Performance clips, annual day videos, and practice session videos will be added here before launch."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-video rounded-lg bg-muted shadow-sm ring-1 ring-border" />
            ))}
          </div>
        </Container>
      </Section>
      <ContactPreview />
    </PageWrapper>
  );
}
