import { courses } from "../content/site";

export function Marquee() {
  const items = courses.flatMap((c) => [c.title, c.sanskrit]);
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold/25 bg-maroon py-4 text-ivory">
      <div className="mask-fade-x flex whitespace-nowrap">
        <div className="flex animate-[marquee_40s_linear_infinite] gap-10 pr-10">
          {row.map((t, i) => (
            <span key={i} className={`flex items-center gap-10 text-xl md:text-2xl ${i % 2 ? "font-telugu text-gold-light" : "font-display uppercase tracking-[0.2em]"}`}>
              {t}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
        <div className="flex animate-[marquee_40s_linear_infinite] gap-10 pr-10" aria-hidden>
          {row.map((t, i) => (
            <span key={i} className={`flex items-center gap-10 text-xl md:text-2xl ${i % 2 ? "font-telugu text-gold-light" : "font-display uppercase tracking-[0.2em]"}`}>
              {t}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-100%); } }`}</style>
    </div>
  );
}
