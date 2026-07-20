import type { Metadata } from "next";

import { Container, Heading, PageWrapper, Paragraph, Section, SectionHeader } from "@/components/common";
import {
  AboutPreview,
  AchievementsSection,
  FounderSection,
  GalleryPreview,
} from "@/components/home";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Vidura Sanskriti Sangeetalayam",
  description:
    "Learn about Vidura Sanskriti Sangeetalayam, its teaching philosophy, founder, faculty, achievements, and classical arts learning environment.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="about-heading">
        <Container width="reading" className="text-center">
          <SectionHeader
            id="about-heading"
            eyebrow="About"
            title="A Premium Space for Classical Arts Learning"
            description="Placeholder academy story. Replace with approved academy history, mission, vision, and teaching philosophy before launch."
            headingAs="h1"
            headingSize="h1"
          />
        </Container>
      </Section>
      <AboutPreview
        title="Academy Story"
        imageSrc="/images/about/about-classroom.png"
        imageAlt="Teacher guiding students during a classroom session"
        description="The full academy story will be added here after client approval."
        body={[
          "Placeholder academy story paragraph. Replace with approved narrative before launch.",
          "Placeholder mission and vision paragraph. Replace with approved content before launch.",
        ]}
      />
      <Section tone="white" aria-labelledby="philosophy-heading">
        <Container>
          <SectionHeader
            id="philosophy-heading"
            eyebrow="Values"
            title="Mission, Vision, and Philosophy"
            description="Placeholder value statements. Replace with approved academy copy before launch."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {["Mission", "Vision", "Teaching Philosophy"].map((item) => (
              <article key={item} className="rounded-lg bg-background p-8 shadow-sm ring-1 ring-border">
                <Heading as="h2" size="h4">
                  {item}
                </Heading>
                <Paragraph className="mt-4">
                  Placeholder {item.toLowerCase()} content. Replace with approved academy copy before launch.
                </Paragraph>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <FounderSection />
      <AchievementsSection />
      <GalleryPreview />
    </PageWrapper>
  );
}
