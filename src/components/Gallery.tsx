import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ys = [yA, yB, yC, yB];

  const cols = [0, 1, 2, 3].map((c) => gallery.filter((_, i) => i % 4 === c));

  return (
    <section ref={ref} id="gallery" className="relative overflow-hidden bg-ink-2 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from Classrooms and Stages"
          description="Preview classroom moments, performances, competitions, workshops, and annual day memories."
          accent={["Stages"]}
        />
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {cols.map((col, c) => (
            <motion.div key={c} style={{ y: ys[c] }} className={`flex flex-col gap-4 md:gap-6 ${c % 2 ? "md:mt-16" : ""}`}>
              {col.map((g) => {
                const idx = gallery.indexOf(g);
                return (
                  <Reveal key={g.src} delay={c * 0.08}>
                    <button
                      onClick={() => setActive(idx)}
                      className="group relative block w-full overflow-hidden rounded-2xl border border-gold/10 text-left"
                      data-cursor="hover"
                      aria-label={`Open ${g.caption}`}
                    >
                      <img src={g.src} alt={g.alt} loading="lazy" className={`w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110 ${idx % 3 === 0 ? "aspect-[3/4]" : idx % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                      <span className="absolute bottom-4 left-4 translate-y-3 font-deco text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                        {g.caption}
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-md"
            onClick={() => setActive(null)}
            data-lenis-prevent
          >
            <button className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold" aria-label="Close">
              <X size={18} />
            </button>
            <motion.figure
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={gallery[active].src} alt={gallery[active].alt} className="max-h-[80vh] w-auto rounded-2xl border border-gold/30 object-contain" />
              <figcaption className="mt-4 text-center font-deco text-[10px] uppercase tracking-[0.4em] text-gold">{gallery[active].caption}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
