import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { about } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { MagneticButton } from "./ui/Button";
import { Lotus } from "./ui/Ornament";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const rot = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section ref={ref} id="about" className="bg-kolam relative overflow-hidden py-24 text-ink md:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 md:px-10 lg:grid-cols-2">
        {/* image stack */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" style={{ perspective: 1400 }}>
          <motion.div style={{ y: y1, rotate: rot }} className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-3xl border-[6px] border-gold-deep/30 shadow-[0_40px_80px_-30px_rgba(74,17,24,0.5)]">
            <img src="/images/tanpura-painting.jpg" alt="A lady playing the tanpura, Indian miniature painting c. 1735" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/40" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute -bottom-10 -right-4 w-[46%] overflow-hidden rounded-2xl border-4 border-ivory shadow-2xl md:-right-10">
            <img src="/images/veena-photo.jpg" alt="Saraswati veena" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -left-8 -top-8 flex h-28 w-28 items-center justify-center rounded-full border border-gold-deep/40 bg-ivory/90 text-gold-deep shadow-lg md:-left-12 md:h-36 md:w-36"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              <defs>
                <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
              </defs>
              <text className="font-deco" fontSize="8.5" letterSpacing="2" fill="currentColor">
                <textPath href="#circ">GURU · SHISHYA · PARAMPARA · </textPath>
              </text>
            </svg>
            <Lotus size={34} />
          </motion.div>
        </div>

        {/* copy */}
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} tone="light" align="left" accent={["Classical"]} />
          <Reveal delay={0.2}>
            <p className="font-display mt-8 text-2xl italic leading-snug text-crimson md:text-3xl">{about.lead}</p>
          </Reveal>
          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.3 + i * 0.1}>
              <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.5}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {about.values.map((v) => (
                <li key={v.title} className="rounded-xl border border-gold-deep/25 bg-ivory/70 p-5 backdrop-blur">
                  <h3 className="font-deco text-[10px] uppercase tracking-[0.3em] text-gold-deep">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{v.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.6} className="mt-10">
            <MagneticButton href="#contact" variant="ink">Book Trial Class</MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
