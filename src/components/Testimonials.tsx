import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Lotus } from "./ui/Ornament";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-maroon to-ink py-24 text-ivory md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,165,58,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
        <SectionHeading eyebrow="What Families Say" title="Voices from our parents and students" accent={["Voices"]} />
        <div className="relative mt-14 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Lotus size={40} className="mx-auto text-gold" />
              <blockquote className="font-display mt-6 text-2xl italic leading-snug text-ivory/90 md:text-4xl">“{t.quote}”</blockquote>
              <figcaption className="mt-8">
                <p className="font-deco text-xs uppercase tracking-[0.3em] text-gold">{t.name}</p>
                <p className="mt-1 text-sm text-ivory/55">{t.detail}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Show testimonial ${k + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${k === i ? "w-10 bg-gold" : "w-4 bg-ivory/30 hover:bg-ivory/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
