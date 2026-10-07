import { lazy, Suspense, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "../content/site";
import { MagneticButton } from "./ui/Button";
import { useIsMobile, useReducedMotion } from "../hooks/useMedia";

const HeroScene = lazy(() => import("./three/HeroScene").then((m) => ({ default: m.HeroScene })));

const luxe = [0.16, 1, 0.3, 1] as const;
const BASE = 2.4; // after preloader

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const mobile = useIsMobile();
  const reduce = useReducedMotion();
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const words = site.headline.split(" ");

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <motion.div style={{ y: sceneY }} className="absolute inset-0">
        {ready && !reduce && (
          <Suspense fallback={null}>
            <HeroScene mobile={mobile} active={inView} />
          </Suspense>
        )}
      </motion.div>

      {/* keep text legible over the scene */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(18,10,11,0.85)_0%,rgba(18,10,11,0.55)_45%,rgba(18,10,11,0)_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink md:from-ink/40" />

      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-32 pt-36 md:px-10 md:pt-40">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: BASE, duration: 1, ease: luxe }}
            className="mb-6 flex items-center gap-4 font-deco text-[10px] uppercase tracking-[0.4em] text-gold md:text-xs"
          >
            <span className="h-px w-10 bg-gold/70" />
            {site.tagline}
          </motion.p>

          <h1 className="font-display text-[2.75rem] leading-[1.04] text-ivory sm:text-6xl md:text-7xl" aria-label={site.headline}>
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ delay: BASE + 0.1 + i * 0.06, duration: 1, ease: luxe }}
                  className={`inline-block ${["Timeless", "Traditions"].includes(w) ? "text-gold-gradient italic font-medium" : ""}`}
                >
                  {w}
                </motion.span>
                {i < words.length - 1 ? <span>&nbsp;</span> : null}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: BASE + 0.7, duration: 1, ease: luxe }}
            className="mt-7 max-w-lg text-base leading-relaxed text-ivory/70 md:text-lg"
          >
            {site.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: BASE + 0.9, duration: 1, ease: luxe }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">{site.cta.enroll}</MagneticButton>
            <MagneticButton href="#courses" variant="outline">
              {site.cta.courses}
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#saptaswara"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE + 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 font-deco text-[9px] uppercase tracking-[0.4em] text-gold/70"
        aria-label="Scroll down"
      >
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
