import type { Metadata } from "next";

import { Container, Heading, PageWrapper, Paragraph, Section, SectionHeader } from "@/components/common";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the Vidura Sanskriti Sangeetalayam website.",
  path: "/terms-and-conditions",
});

const sections = [
  "Acceptance",
  "Use of Website",
  "Intellectual Property",
  "Admissions Disclaimer",
  "Liability",
  "Contact",
];

export default function TermsAndConditionsPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="terms-heading">
        <Container width="reading">
          <SectionHeader
            id="terms-heading"
            eyebrow="Terms"
            title="Terms & Conditions"
            description="This placeholder document must be reviewed and replaced with approved legal content before launch."
            headingAs="h1"
            headingSize="h1"
          />
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section}>
                <Heading as="h2" size="h4">
                  {section}
                </Heading>
                <Paragraph className="mt-4">
                  Placeholder terms content for {section.toLowerCase()}.
                  Replace this section with approved legal copy before launch.
                </Paragraph>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
