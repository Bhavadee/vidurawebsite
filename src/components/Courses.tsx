import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { courses, type Course } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";

function Card({ course, index, total, progress }: { course: Course; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(progress, [start, end, 1], [1, 0.92 - (total - index) * 0.01, 0.88]);
  const opacity = useTransform(progress, [end, Math.min(1, end + 0.2)], [1, 0.55]);

  return (
    <motion.div
      style={{ scale, opacity, top: `calc(var(--nav-h) + ${index * 22}px)` }}
      className="sticky mb-10 origin-top"
    >
      <TiltCard intensity={3} glare={false} className="group">
        <article className="grid overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-2 via-[#20121a] to-maroon shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] lg:grid-cols-[1.1fr_1fr]">
          <div className="relative h-72 overflow-hidden lg:h-[520px]">
            <img
              src={course.image}
              alt={course.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent lg:bg-gradient-to-r" />
            <span className="font-telugu absolute left-6 top-6 rounded-full border border-gold/50 bg-ink/50 px-4 py-1.5 text-sm text-gold backdrop-blur">
              {course.sanskrit}
            </span>
            <span className="font-display absolute bottom-5 left-6 text-7xl text-ivory/20">0{index + 1}</span>
          </div>
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <span className="font-deco text-[10px] uppercase tracking-[0.4em] text-gold/80">Course · {course.levels.length} levels</span>
              <h3 className="font-display mt-4 text-4xl text-ivory md:text-6xl">{course.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-ivory/70">{course.short}</p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/50">{course.overview}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  ["Age groups", course.ageGroups],
                  ["Levels", course.levels],
                  ["Outcomes", course.outcomes],
                ].map(([label, items]) => (
                  <div key={label as string}>
                    <p className="font-deco text-[9px] uppercase tracking-[0.3em] text-gold/70">{label as string}</p>
                    <ul className="mt-2 space-y-1 text-sm text-ivory/80">
                      {(items as string[]).map((it) => (
                        <li key={it}>· {it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex w-fit items-center gap-3 border-b border-gold/60 pb-1 font-body text-[12px] uppercase tracking-[0.24em] text-gold transition-all hover:gap-5"
            >
              Book a trial for {course.title} <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}

export function Courses() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="courses" className="bg-paisley relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Explore Our Courses"
          title="Choose the Right Learning Path"
          description="Classical music and performing arts programmes designed for young learners, teenagers, adults, and hobby students."
          accent={["Right"]}
        />
        <div ref={ref} className="relative mt-16">
          {courses.map((c, i) => (
            <Card key={c.slug} course={c} index={i} total={courses.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
