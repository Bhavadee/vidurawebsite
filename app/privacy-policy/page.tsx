import type { Metadata } from "next";

import { Container, Heading, PageWrapper, Paragraph, Section, SectionHeader } from "@/components/common";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Vidura Sanskriti Sangeetalayam, including information collection, usage, cookies, third-party services, security, and contact details.",
  path: "/privacy-policy",
});

const sections = [
  "Introduction",
  "Information Collected",
  "How Data Is Used",
  "Cookies",
  "Third-party Services",
  "Security",
  "User Rights",
  "Contact Information",
];

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="privacy-heading">
        <Container width="reading">
          <SectionHeader
            id="privacy-heading"
            eyebrow="Privacy"
            title="Privacy Policy"
            description="This placeholder policy must be reviewed and replaced with approved legal content before launch."
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
                  Placeholder privacy policy content for {section.toLowerCase()}.
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
