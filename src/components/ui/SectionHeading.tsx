import { Reveal, WordReveal } from "./Reveal";

export function Eyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  const line = tone === "dark" ? "bg-gold/60" : "bg-gold-deep/60";
  const text = tone === "dark" ? "text-gold" : "text-gold-deep";
  return (
    <span className={`inline-flex items-center gap-3 font-deco text-[11px] md:text-xs uppercase tracking-[0.32em] ${text}`}>
      <span className={`h-px w-8 ${line}`} />
      {children}
      <span className={`h-px w-8 ${line}`} />
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "center",
  accent,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
  accent?: string[];
}) {
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "dark" ? "text-ivory" : "text-ink";
  const descColor = tone === "dark" ? "text-ivory/65" : "text-ink/65";
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignCls}`}>
      <Reveal y={16}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <WordReveal
        as="h2"
        text={title}
        accent={accent}
        className={`font-display text-4xl leading-[1.05] md:text-6xl ${titleColor}`}
      />
      {description ? (
        <Reveal delay={0.25} y={20}>
          <p className={`max-w-2xl text-base leading-relaxed md:text-lg ${descColor}`}>{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
