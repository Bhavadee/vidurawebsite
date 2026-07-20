import type { Metadata } from "next";
import Link from "next/link";

import { Container, PageWrapper, Section, SectionHeader } from "@/components/common";
import { ContactPreview, FAQSection, StudentJourney } from "@/components/home";
import { createMetadata } from "@/lib/metadata";

import { courseCatalog } from "./course-data";

export const metadata: Metadata = createMetadata({
  title: "Courses",
  description:
    "Explore Carnatic Vocal, Violin, Keyboard, Bharatanatyam and other classical arts courses at Vidura Sanskriti Sangeetalayam.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="courses-heading">
        <Container>
          <SectionHeader
            id="courses-heading"
            eyebrow="Courses"
            title="Choose the Right Learning Path"
            description="Compare available courses and open a detailed course page to review levels, outcomes, and enrollment next steps."
            headingAs="h1"
            headingSize="h1"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {courseCatalog.map((course) => (
              <article key={course.slug} className="flex h-full flex-col rounded-lg bg-card p-8 shadow-sm ring-1 ring-border">
                <h2 className="font-serif text-heading-5 font-bold text-foreground">
                  {course.title}
                </h2>
                <p className="mt-4 flex-1 text-body-sm text-muted-foreground">
                  {course.shortDescription}
                </p>
                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <StudentJourney title="Learning Process" />
      <FAQSection />
      <ContactPreview />
    </PageWrapper>
  );
}
