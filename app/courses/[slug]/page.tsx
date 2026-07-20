import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container, Heading, PageWrapper, Paragraph, Section, SectionHeader } from "@/components/common";
import { ContactPreview, FAQSection, GalleryPreview, TestimonialsSection } from "@/components/home";
import { createMetadata } from "@/lib/metadata";

import { courseCatalog, getCourseBySlug } from "../course-data";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return courseCatalog.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {};
  }

  return createMetadata({
    title: `${course.title} Classes in Hyderabad`,
    description: course.shortDescription,
    path: `/courses/${course.slug}`,
  });
}

export default async function IndividualCoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <PageWrapper>
      <Section className="pt-32 md:pt-40" aria-labelledby="course-heading">
        <Container>
          <SectionHeader
            id="course-heading"
            eyebrow="Course"
            title={course.title}
            description={course.shortDescription}
            headingAs="h1"
            headingSize="h1"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-lg bg-card p-8 shadow-sm ring-1 ring-border lg:col-span-2">
              <Heading as="h2" size="h3">
                Course Overview
              </Heading>
              <Paragraph className="mt-4">{course.overview}</Paragraph>
            </article>
            <article className="rounded-lg bg-card p-8 shadow-sm ring-1 ring-border">
              <Heading as="h2" size="h4">
                Who Can Join
              </Heading>
              <ul className="mt-5 space-y-3 text-body-sm text-muted-foreground">
                {course.ageGroups.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>
      <Section tone="white" aria-labelledby="curriculum-heading">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg bg-background p-8 shadow-sm ring-1 ring-border">
              <Heading id="curriculum-heading" as="h2" size="h3">
                Curriculum
              </Heading>
              <ul className="mt-5 space-y-3 text-body-sm text-muted-foreground">
                {course.levels.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg bg-background p-8 shadow-sm ring-1 ring-border">
              <Heading as="h2" size="h3">
                Learning Outcomes
              </Heading>
              <ul className="mt-5 space-y-3 text-body-sm text-muted-foreground">
                {course.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>
      <GalleryPreview title={`${course.title} Gallery`} />
      <TestimonialsSection />
      <FAQSection />
      <ContactPreview />
    </PageWrapper>
  );
}
