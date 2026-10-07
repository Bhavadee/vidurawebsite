import { whyChoose } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { TiltCard } from "./ui/TiltCard";
import { Mandala } from "./ui/Ornament";

export function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <Mandala size={900} className="pointer-events-none absolute -right-72 -top-72 text-gold/[0.07]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Why Choose Vidura"
          title="A calm, focused environment shaped around tradition"
          description="Tradition, practice, stage exposure, and personal guidance — the four pillars every student stands on."
          accent={["tradition"]}
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1} className="h-full">
              <TiltCard className="group h-full" intensity={7}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-b from-ink-2 to-ink p-8 transition-colors duration-700 group-hover:border-gold/50">
                  <div className="absolute -right-6 -top-10 font-telugu text-[9rem] leading-none text-gold/[0.06] transition-all duration-700 group-hover:text-gold/[0.14]" aria-hidden>
                    {w.glyph}
                  </div>
                  <span className="font-deco text-[10px] tracking-[0.4em] text-gold/60">0{i + 1}</span>
                  <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 font-telugu text-2xl text-gold transition-all duration-700 group-hover:bg-gold group-hover:text-ink">
                    {w.glyph}
                  </div>
                  <h3 className="font-display mt-8 text-3xl text-ivory">{w.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/60">{w.text}</p>
                  <span className="mt-auto block h-px w-0 bg-gold transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" style={{ marginTop: "2rem" }} />
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
