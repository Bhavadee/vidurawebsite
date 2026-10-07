import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { founder } from "../content/site";
import { Eyebrow } from "./ui/SectionHeading";
import { Reveal, WordReveal } from "./ui/Reveal";

export function Founder() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section ref={ref} id="founder" className="relative overflow-hidden bg-gradient-to-b from-maroon via-crimson/80 to-maroon py-24 text-ivory md:py-36">
      <motion.div style={{ x }} className="font-telugu pointer-events-none absolute top-6 whitespace-nowrap text-[14vw] leading-none text-ivory/[0.05]" aria-hidden>
        గురు శిష్య పరంపర · గురు శిష్య పరంపర
      </motion.div>
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-2xl border border-gold/50 p-2">
            <div className="h-full w-full overflow-hidden rounded-t-[999px] rounded-b-xl">
              <motion.img style={{ y, scale: 1.25 }} src={founder.image} alt="Tuning a tanpura before a concert" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-gold/60 bg-ink px-6 py-3 text-center shadow-xl">
            <p className="font-display text-lg text-ivory">{founder.name}</p>
            <p className="font-deco text-[9px] uppercase tracking-[0.3em] text-gold">{founder.role}</p>
          </div>
        </Reveal>
        <div>
          <Reveal y={16}>
            <Eyebrow>{founder.eyebrow}</Eyebrow>
          </Reveal>
          <WordReveal as="h2" text={founder.title} className="font-display mt-5 text-4xl text-ivory md:text-6xl" accent={["Discipline"]} />
          <Reveal delay={0.3}>
            <blockquote className="relative mt-10 border-l border-gold/50 pl-8">
              <span className="font-display absolute -left-3 -top-8 text-8xl leading-none text-gold/40" aria-hidden>“</span>
              <p className="font-display text-2xl italic leading-snug text-ivory/90 md:text-[2rem]">{founder.quote}</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
