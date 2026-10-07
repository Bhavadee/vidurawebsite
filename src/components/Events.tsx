import { CalendarDays, MapPin } from "lucide-react";
import { events } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Events() {
  const groups = ["Upcoming", "Past"] as const;
  return (
    <section id="events" className="bg-kolam relative py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Events"
          title="Upcoming and Past Academy Events"
          description="Performances, workshops, open houses, and celebrations across the academy year."
          tone="light"
          accent={["Events"]}
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {groups.map((g) => (
            <div key={g}>
              <h3 className="font-deco mb-6 text-[11px] uppercase tracking-[0.4em] text-gold-deep">{g} Events</h3>
              <ul className="space-y-4">
                {events
                  .filter((e) => e.kind === g)
                  .map((e, i) => (
                    <Reveal key={e.title} delay={i * 0.1}>
                      <li className="group relative overflow-hidden rounded-2xl border border-gold-deep/25 bg-ivory/80 p-7 backdrop-blur transition-all duration-700 hover:-translate-y-1 hover:border-gold-deep/60 hover:shadow-[0_30px_50px_-30px_rgba(74,17,24,0.5)]">
                        <span className="absolute -right-4 -top-6 font-display text-8xl text-gold-deep/10">{g === "Upcoming" ? "✦" : "❖"}</span>
                        <h4 className="font-display text-3xl text-ink">{e.title}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-ink/70">{e.text}</p>
                        <div className="mt-5 flex flex-wrap gap-5 text-xs uppercase tracking-[0.2em] text-crimson">
                          <span className="inline-flex items-center gap-2"><CalendarDays size={14} /> {e.when}</span>
                          <span className="inline-flex items-center gap-2"><MapPin size={14} /> {e.where}</span>
                        </div>
                      </li>
                    </Reveal>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
