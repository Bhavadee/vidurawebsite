import { lazy, Suspense, useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { journey } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { useIsMobile, useReducedMotion } from "../hooks/useMedia";

const MandalaScene = lazy(() => import("./three/MandalaScene").then((m) => ({ default: m.MandalaScene })));

export function Journey() {
  const ref = useRef<HTMLElement>(null);
  const mobile = useIsMobile();
  const reduce = useReducedMotion();
  const inView = useInView(ref, { margin: "15% 0px 15% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.5 });
  const { scrollYProgress: lineProgress } = useScroll({ target: ref, offset: ["start 70%", "end 80%"] });
  const lineScale = useSpring(lineProgress, { stiffness: 80, damping: 24 });

  return (
    <section ref={ref} id="journey" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-45 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]">
        {!reduce && (
          <Suspense fallback={null}>
            <MandalaScene progress={smooth} active={inView} />
          </Suspense>
        )}
      </div>
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Student Journey"
          title="From First Lesson to Confident Performance"
          description="A clear path helps students move from fundamentals to practice, performance, competition, and confident artistic growth."
          accent={["Confident"]}
        />

        <div className="relative mt-20">
          {/* drawing line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gold/15 md:left-1/2" />
          <motion.div style={{ scaleY: lineScale }} className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-gold-light via-gold to-crimson md:left-1/2" />

          <ol className="space-y-14 md:space-y-24">
            {journey.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <li key={j.step} className={`relative grid items-center gap-6 md:grid-cols-2 ${left ? "" : ""}`}>
                  <Reveal className={`pl-14 md:pl-0 ${left ? "md:pr-20 md:text-right" : "md:col-start-2 md:pl-20"}`} y={30}>
                    <div className={`inline-block rounded-2xl border border-gold/15 bg-ink/85 p-7 transition-colors duration-700 hover:border-gold/50 ${mobile ? "w-full" : "max-w-md"}`}>
                      <span className="font-deco text-[10px] tracking-[0.4em] text-gold/70">Step {j.step}</span>
                      <h3 className="font-display mt-3 text-3xl text-ivory md:text-4xl">{j.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ivory/60 md:text-base">{j.text}</p>
                    </div>
                  </Reveal>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
                    className="absolute left-5 top-8 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-ink font-display text-sm text-gold shadow-[0_0_30px_rgba(212,165,58,0.5)] md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                  >
                    {j.step}
                  </motion.span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
