import Link from "next/link";

import { Container, Heading, PageWrapper, Paragraph, Section } from "@/components/common";

export default function NotFound() {
  return (
    <PageWrapper>
      <Section className="flex min-h-screen items-center pt-32" aria-labelledby="not-found-heading">
        <Container width="reading" className="text-center">
          <div className="mx-auto mb-10 flex aspect-square w-40 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="font-serif text-display-lg font-bold">404</span>
          </div>
          <Heading id="not-found-heading" as="h1" size="h1">
            Page Not Found
          </Heading>
          <Paragraph size="lg" className="mt-6">
            The page you&apos;re looking for doesn&apos;t exist.
          </Paragraph>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-primary-foreground shadow-sm transition duration-normal hover:-translate-y-1 hover:scale-102 hover:shadow-md focus-visible:outline-ring"
            >
              Back Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-primary px-7 py-4 text-base font-semibold leading-none text-primary transition duration-normal hover:-translate-y-1 hover:scale-102 hover:bg-primary hover:text-primary-foreground hover:shadow-sm focus-visible:outline-ring"
            >
              Contact Us
            </Link>
            <Link
              href="/courses"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-primary px-7 py-4 text-base font-semibold leading-none text-primary transition duration-normal hover:-translate-y-1 hover:scale-102 hover:bg-primary hover:text-primary-foreground hover:shadow-sm focus-visible:outline-ring"
            >
              Browse Courses
            </Link>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
