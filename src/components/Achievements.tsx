import { achievements } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { TiltCard } from "./ui/TiltCard";

export function Achievements() {
  return (
    <section id="achievements" className="bg-kolam relative py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Achievements"
          title="Celebrating Student Growth and Recognition"
          description="Student recognition, stage experiences, certificates, and workshops help build confidence beyond the classroom."
          tone="light"
          accent={["Recognition"]}
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <TiltCard className="group" intensity={6}>
                <article className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_-30px_rgba(74,17,24,0.6)]">
                  <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-deco text-[9px] tracking-[0.4em] text-gold">0{i + 1}</span>
                    <h3 className="font-display mt-2 text-2xl text-ivory md:text-3xl">{a.title}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-ivory/70 opacity-0 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:max-h-32 group-hover:opacity-100">
                      {a.text}
                    </p>
                  </div>
                  <span className="absolute inset-3 rounded-2xl border border-gold/0 transition-all duration-700 group-hover:border-gold/50" />
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
