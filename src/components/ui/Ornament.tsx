/** Decorative classical ornaments as inline SVG. */

export function Lotus({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 54c-6-8-6-20 0-30 6 10 6 22 0 30z" />
        <path d="M32 54c-10-4-18-14-18-26 10 2 16 10 18 26z" />
        <path d="M32 54c10-4 18-14 18-26-10 2-16 10-18 26z" />
        <path d="M32 54C20 54 8 48 4 40c10-2 20 2 28 14z" />
        <path d="M32 54c12 0 24-6 28-14-10-2-20 2-28 14z" />
        <path d="M22 56c6 2 14 2 20 0" />
      </g>
    </svg>
  );
}

export function Divider({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const color = tone === "dark" ? "text-gold" : "text-gold-deep";
  return (
    <div className={`flex items-center justify-center gap-4 ${color} ${className}`} aria-hidden>
      <span className="h-px w-16 bg-current opacity-50 md:w-28" />
      <Lotus size={30} />
      <span className="h-px w-16 bg-current opacity-50 md:w-28" />
    </div>
  );
}

export function Mandala({ className = "", size = 400 }: { className?: string; size?: number }) {
  const rings = [38, 30, 22, 14];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="0.35">
        {rings.map((r) => (
          <circle key={r} cx="50" cy="50" r={r} />
        ))}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const x1 = 50 + Math.cos(a) * 14;
          const y1 = 50 + Math.sin(a) * 14;
          const x2 = 50 + Math.cos(a) * 46;
          const y2 = 50 + Math.sin(a) * 46;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const cx = 50 + Math.cos(a) * 30;
          const cy = 50 + Math.sin(a) * 30;
          return <ellipse key={i} cx={cx} cy={cy} rx="3.2" ry="6.5" transform={`rotate(${(a * 180) / Math.PI + 90} ${cx} ${cy})`} />;
        })}
        <circle cx="50" cy="50" r="46" strokeDasharray="1.5 2.2" />
      </g>
    </svg>
  );
}

export function LogoMark({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
      <path d="M32 11v42M11 32h42M17.2 17.2l29.6 29.6M46.8 17.2L17.2 46.8" stroke="currentColor" strokeWidth="0.7" />
      <path d="M32 20c6 6 6 18 0 24-6-6-6-18 0-24z" fill="currentColor" opacity="0.9" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
    </svg>
  );
}
