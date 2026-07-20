import { PageWrapper } from "@/components/common";
import {
  AboutPreview,
  AchievementsSection,
  ContactPreview,
  CoursesPreview,
  FAQSection,
  FounderSection,
  GalleryPreview,
  Hero,
  StudentJourney,
  TestimonialsSection,
  TrustStatistics,
  WhyChooseUs,
} from "@/components/home";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero
        headline="Where Timeless Indian Traditions Are Passed Forward"
        subheading="Vidura Sanskriti Sangeetalayam brings disciplined classical learning, artistic excellence, and meaningful performance experiences to students in Hyderabad."
        media={{
          videoSrc: "/videos/hero/istockphoto-2217299166-640_adpp_is.mp4",
          posterSrc: "/images/hero/classroom.png",
          alt: "Students learning Indian classical music at Vidura Sanskriti Sangeetalayam",
        }}
        scrollHref="#trust-statistics"
      />
      <TrustStatistics />
      <WhyChooseUs description="A calm, focused learning environment shaped around tradition, practice, stage exposure, and personal guidance." />
      <AboutPreview
        imageSrc="/images/about/about-classroom.png"
        imageAlt="Teacher guiding students during a classroom session"
        description="Learn about the academy's values, teaching approach, and commitment to preserving Indian classical arts."
      />
      <CoursesPreview description="Explore classical music and performing arts programs designed for young learners, teenagers, adults, and hobby students." />
      <FounderSection />
      <StudentJourney description="A clear path helps students move from fundamentals to practice, performance, competition, and confident artistic growth." />
      <AchievementsSection description="Student recognition, stage experiences, certificates, and workshops help build confidence beyond the classroom." />
      <GalleryPreview description="Preview classroom moments, performances, competitions, workshops, and annual day memories." />
      <TestimonialsSection description="Approved parent and student testimonials will be added here before launch." />
      <FAQSection description="Quick answers for parents and students exploring classes at the academy." />
      <ContactPreview description="Share your interest, plan a visit, or book a trial class through the contact page." />
    </PageWrapper>
  );
}
