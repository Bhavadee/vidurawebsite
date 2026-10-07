import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { stats } from "../content/site";
import { Reveal } from "./ui/Reveal";
import { Divider } from "./ui/Ornament";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <span>
      <span ref={ref}>0</span>
      <span className="text-gold-deep">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="bg-kolam relative overflow-hidden py-20 text-ink md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Divider tone="light" className="mb-14" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12} className="relative text-center">
              <div className="font-display text-6xl font-medium leading-none text-ink md:text-7xl lg:text-8xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 font-deco text-[10px] uppercase tracking-[0.35em] text-gold-deep md:text-xs">{s.label}</p>
              {i < stats.length - 1 ? (
                <span className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gold-deep/30 md:block" />
              ) : null}
            </Reveal>
          ))}
        </div>
        <Divider tone="light" className="mt-14" />
      </div>
    </section>
  );
}
