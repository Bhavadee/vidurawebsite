// Content adapted from https://vidurawebsite.vercel.app/ (structure, headings, courses, journey, FAQ topics).
// Values marked PLACEHOLDER should be replaced with client-approved figures before launch.

export const site = {
  name: "Vidura Sanskriti Sangeetalayam",
  nameTelugu: "విదుర సంస్కృతి సంగీతాలయం",
  short: "Vidura",
  tagline: "Indian Classical Music Academy · Hyderabad",
  headline: "Where Timeless Indian Traditions Are Passed Forward",
  subheading:
    "Vidura Sanskriti Sangeetalayam brings disciplined classical learning, artistic excellence, and meaningful performance experiences to students in Hyderabad.",
  description:
    "A premium Indian classical music and performing arts academy in Hyderabad.",
  location: { city: "Hyderabad", region: "Telangana", country: "India" },
  url: "https://vidurasanskritisangeetalayam.com",
  // PLACEHOLDER contact details – replace with approved academy contacts
  phone: "+91 00000 00000",
  whatsapp: "910000000000",
  email: "hello@vidurasanskritisangeetalayam.com",
  address: "Hyderabad, Telangana, India",
  hours: [
    { day: "Monday – Friday", time: "4:00 PM – 8:30 PM" },
    { day: "Saturday – Sunday", time: "9:00 AM – 1:00 PM · 4:00 PM – 7:00 PM" },
    { day: "Public Holidays", time: "Workshops & rehearsals only" },
  ],
  cta: { enroll: "Book Trial Class", whatsapp: "WhatsApp Now", courses: "Explore Courses" },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Journey", href: "#journey" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

// PLACEHOLDER statistics – update with approved numbers
export const stats = [
  { value: 500, suffix: "+", label: "Students" },
  { value: 120, suffix: "+", label: "Performances" },
  { value: 60, suffix: "+", label: "Awards" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

export const whyChoose = [
  {
    title: "Traditional Learning",
    text: "Rooted in the guru–shishya parampara, every lesson honours the grammar of raga, tala, and bhava passed down through generations.",
    glyph: "ॐ",
  },
  {
    title: "Expert Faculty",
    text: "Performing artists and trained teachers who guide with patience, discipline, and a deep love for the classical arts.",
    glyph: "स",
  },
  {
    title: "Performance Opportunities",
    text: "Stage exposure through recitals, temple concerts, annual day, and competitions so learning becomes living art.",
    glyph: "रे",
  },
  {
    title: "Individual Attention",
    text: "Small batches and personalised practice plans so each student grows at the right pace, with the right guidance.",
    glyph: "ग",
  },
];

export const about = {
  eyebrow: "About the Academy",
  title: "A Place for Disciplined Classical Learning",
  lead: "Vidura Sanskriti Sangeetalayam is a space where tradition is practised daily, not merely remembered.",
  body: [
    "Founded in Hyderabad to preserve and pass forward the Indian classical arts, the academy brings together Carnatic music, classical dance, and devotional singing under one roof. Learning here follows the time-honoured path: listen, imitate, practise, internalise, and finally perform.",
    "Students of every age — children, teenagers, adults, and hobby learners — are welcomed into a calm, focused environment shaped around tradition, practice, stage exposure, and personal guidance.",
  ],
  values: [
    { title: "Mission", text: "To nurture confident classical artists through structured, patient, tradition-led teaching." },
    { title: "Vision", text: "To be Hyderabad's most trusted home for Indian classical music and performing arts." },
    { title: "Philosophy", text: "Discipline first, expression always. Fundamentals before flourish; practice before performance." },
  ],
};

export type Course = {
  slug: string;
  title: string;
  sanskrit: string;
  short: string;
  overview: string;
  ageGroups: string[];
  levels: string[];
  outcomes: string[];
  image: string;
  alt: string;
};

export const courses: Course[] = [
  {
    slug: "carnatic-vocal",
    title: "Carnatic Vocal",
    sanskrit: "కర్ణాటక సంగీతం",
    short: "Structured classical vocal learning for students building voice, rhythm, and performance confidence.",
    overview:
      "From sarali varisai to varnams, kritis, and manodharma, the vocal programme builds a strong voice, sure shruti, and a confident stage presence step by step.",
    ageGroups: ["Children", "Teenagers", "Adults"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    outcomes: ["Voice training", "Rhythm awareness", "Stage confidence"],
    image: "/images/vocalist.jpg",
    alt: "Carnatic vocalist performing on stage",
  },
  {
    slug: "violin",
    title: "Violin",
    sanskrit: "వయోలిన్",
    short: "Classical violin training focused on posture, bowing, notation, listening, and disciplined practice.",
    overview:
      "Students learn the Carnatic seated style, bowing control, gamaka ornamentation, and ensemble listening, progressing from basic exercises to full concert pieces.",
    ageGroups: ["Children", "Teenagers", "Adults"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    outcomes: ["Instrument technique", "Listening skills", "Performance readiness"],
    image: "/images/violin-concert.jpg",
    alt: "Violinist accompanying a Carnatic concert",
  },
  {
    slug: "keyboard",
    title: "Keyboard",
    sanskrit: "కీబోర్డ్",
    short: "Keyboard lessons that introduce melody, rhythm, coordination, and musical confidence.",
    overview:
      "A friendly entry into melody and harmony: finger independence, scales, Indian ragas on keys, and simple accompaniment for bhajans and light classical pieces.",
    ageGroups: ["Children", "Teenagers", "Adults"],
    levels: ["Beginner", "Intermediate"],
    outcomes: ["Finger coordination", "Melody practice", "Music fundamentals"],
    image: "/images/keyboard.jpg",
    alt: "Hands on an electronic keyboard",
  },
  {
    slug: "bharatanatyam",
    title: "Bharatanatyam",
    sanskrit: "భరతనాట్యం",
    short: "Classical dance training rooted in posture, expression, rhythm, discipline, and stage presentation.",
    overview:
      "Adavus, hastas, abhinaya, and the margam are taught with attention to araimandi, rhythm, and expression, preparing students for arangetram and beyond.",
    ageGroups: ["Children", "Teenagers"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    outcomes: ["Posture", "Expression", "Stage discipline"],
    image: "/images/bharatanatyam.jpg",
    alt: "Bharatanatyam dancer in a classical pose",
  },
  {
    slug: "bhajans",
    title: "Bhajans",
    sanskrit: "భజనలు",
    short: "Devotional singing for all ages — simple melodies, shared rhythm, and the joy of singing together.",
    overview:
      "A warm, community-led class in devotional music: traditional bhajans, keertanas, and group singing with tala, ideal for families and hobby learners.",
    ageGroups: ["Children", "Adults", "Families"],
    levels: ["Open level"],
    outcomes: ["Devotional repertoire", "Group singing", "Tala sense"],
    image: "/images/concert-1.jpg",
    alt: "Temple concert gathering",
  },
];

export const founder = {
  eyebrow: "Founder Message",
  title: "Guided by Experience and Teaching Discipline",
  quote:
    "Classical music is not learned in a hurry. It is received — note by note, day by day — from a teacher who was once a student. Our academy exists so that this chain is never broken.",
  name: "Founder & Principal Guru",
  role: "Vidura Sanskriti Sangeetalayam",
  image: "/images/tanpura-tuning.jpg",
};

export const journey = [
  { step: "01", title: "Join Academy", text: "Begin with a trial class and a conversation about goals, age, and the right course." },
  { step: "02", title: "Learn Basics", text: "Swara, shruti, tala, posture — the fundamentals are laid carefully and patiently." },
  { step: "03", title: "Practice", text: "Daily riyaz with structured practice plans and regular feedback from faculty." },
  { step: "04", title: "Perform", text: "Recitals, temple concerts, and annual day appearances build stage confidence." },
  { step: "05", title: "Compete", text: "Students are guided to competitions and certifications to test their growth." },
  { step: "06", title: "Graduate", text: "Confident artists ready to carry the tradition forward — and perhaps teach it." },
];

export const achievements = [
  { title: "Competition Winners", text: "Prizes at inter-school, district, and state-level classical music and dance competitions.", image: "/images/bharatanatyam-group.jpg" },
  { title: "Stage Performances", text: "Regular student concerts at temples, sabhas, and cultural festivals across Hyderabad.", image: "/images/concert-2.jpg" },
  { title: "Certificates", text: "Graded certification pathways that mark every milestone from beginner to advanced.", image: "/images/veena-photo.jpg" },
  { title: "Workshops", text: "Masterclasses and lecture-demonstrations with visiting artists and senior gurus.", image: "/images/lecture-demo.jpg" },
];

export const gallery = [
  { src: "/images/bharatanatyam-2.jpg", alt: "Bharatanatyam dancer", caption: "Annual Day" },
  { src: "/images/violins.jpg", alt: "Carnatic violins", caption: "Instrument Room" },
  { src: "/images/mridangam-temple.jpg", alt: "Mridangam at temple", caption: "Temple Concert" },
  { src: "/images/ghungroo.jpg", alt: "Gilt ghungroo anklet", caption: "Ghungroo" },
  { src: "/images/bansuri.jpg", alt: "Set of bansuris", caption: "Workshop" },
  { src: "/images/nadaswaram.jpg", alt: "Nadaswaram", caption: "Festival" },
  { src: "/images/tanpura-painting.jpg", alt: "Lady playing the tanpura, c. 1735", caption: "Heritage" },
  { src: "/images/ankle-bells.jpg", alt: "Ankle bells footwork", caption: "Footwork Class" },
];

// PLACEHOLDER testimonials – replace with approved parent/student feedback
export const testimonials = [
  {
    quote: "My daughter walked in shy and now sings on stage with her eyes closed and her heart open. The discipline here is gentle but real.",
    name: "Parent",
    detail: "Carnatic Vocal · Beginner batch",
  },
  {
    quote: "As an adult learner I was nervous. The faculty never rushed me — every bowing exercise was explained until it made sense in my hands.",
    name: "Adult Learner",
    detail: "Violin · Intermediate",
  },
  {
    quote: "The annual day performance was the proudest moment of our family year. The teachers treat every child as a future artist.",
    name: "Parent",
    detail: "Bharatanatyam · Junior batch",
  },
];

export const faqs = [
  {
    q: "Can beginners join?",
    a: "Yes. Every course has a beginner level that starts from the very first swara or adavu. No prior training is needed — only curiosity and a willingness to practise.",
  },
  {
    q: "What courses are available?",
    a: "Carnatic Vocal, Violin, Keyboard, Bharatanatyam, and Bhajans, each offered across age groups and levels. Visit the Courses section for details.",
  },
  {
    q: "How do I book a trial class?",
    a: "Use the Book Trial Class button or message us on WhatsApp. We will suggest a suitable batch and invite you for a free introductory session.",
  },
  {
    q: "What age can my child start?",
    a: "Children can begin vocal, keyboard, or dance from around five years. Teenagers and adults are welcome in every course, with batches planned by level.",
  },
  {
    q: "Are there performance opportunities?",
    a: "Yes — recitals, temple concerts, workshops, competitions, and the academy's annual day are part of every student's journey.",
  },
];

export const events = [
  { kind: "Upcoming", title: "Annual Day Recital", when: "Dates to be announced", where: "Hyderabad", text: "Student performances across vocal, violin, keyboard, and Bharatanatyam." },
  { kind: "Upcoming", title: "Beginner Open House", when: "Every first Saturday", where: "Academy", text: "Meet the faculty, watch a demo class, and book a free trial." },
  { kind: "Past", title: "Temple Concert Series", when: "Recent", where: "Hyderabad", text: "Senior students presented kritis and varnams at local temple festivals." },
  { kind: "Past", title: "Percussion Lecture-Demo", when: "Recent", where: "Academy", text: "A visiting artist introduced mridangam and tala structures to all batches." },
];
