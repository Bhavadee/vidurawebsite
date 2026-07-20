export interface CourseDetail {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  ageGroups: readonly string[];
  levels: readonly string[];
  outcomes: readonly string[];
}

export const courseCatalog: readonly CourseDetail[] = [
  {
    slug: "carnatic-vocal",
    title: "Carnatic Vocal",
    shortDescription:
      "Structured classical vocal learning for students building voice, rhythm, and performance confidence.",
    overview:
      "Placeholder course overview. Replace with approved Carnatic Vocal curriculum and class details before launch.",
    ageGroups: ["Children", "Teenagers", "Adults"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    outcomes: ["Voice training", "Rhythm awareness", "Stage confidence"],
  },
  {
    slug: "violin",
    title: "Violin",
    shortDescription:
      "Classical violin training focused on posture, bowing, notation, listening, and disciplined practice.",
    overview:
      "Placeholder course overview. Replace with approved Violin curriculum and class details before launch.",
    ageGroups: ["Children", "Teenagers", "Adults"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    outcomes: ["Instrument technique", "Listening skills", "Performance readiness"],
  },
  {
    slug: "keyboard",
    title: "Keyboard",
    shortDescription:
      "Keyboard lessons that introduce melody, rhythm, coordination, and musical confidence.",
    overview:
      "Placeholder course overview. Replace with approved Keyboard curriculum and class details before launch.",
    ageGroups: ["Children", "Teenagers", "Adults"],
    levels: ["Beginner", "Intermediate"],
    outcomes: ["Finger coordination", "Melody practice", "Music fundamentals"],
  },
  {
    slug: "bharatanatyam",
    title: "Bharatanatyam",
    shortDescription:
      "Classical dance training rooted in posture, expression, rhythm, discipline, and stage presentation.",
    overview:
      "Placeholder course overview. Replace with approved Bharatanatyam curriculum and class details before launch.",
    ageGroups: ["Children", "Teenagers"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    outcomes: ["Posture", "Expression", "Stage discipline"],
  },
];

export function getCourseBySlug(slug: string) {
  return courseCatalog.find((course) => course.slug === slug);
}
