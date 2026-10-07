import { useEffect, useRef } from "react";
import { Reveal } from "./ui/Reveal";

const SWARAS = [
  { name: "Sa", te: "స", f: 261.63 },
  { name: "Ri", te: "రి", f: 293.66 },
  { name: "Ga", te: "గ", f: 329.63 },
  { name: "Ma", te: "మ", f: 349.23 },
  { name: "Pa", te: "ప", f: 392.0 },
  { name: "Da", te: "ద", f: 440.0 },
  { name: "Ni", te: "ని", f: 493.88 },
];

type Str = { x: number; amp: number; phase: number; glow: number };

/** Interactive "pluck the strings" canvas – hover vibrates, click plays a note. */
export function SwaraStrings() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audio = useRef<AudioContext | null>(null);
  const strings = useRef<Str[]>([]);
  const lastX = useRef<number | null>(null);

  const play = (f: number) => {
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audio.current) audio.current = new Ctx();
      const ctx = audio.current;
      if (ctx.state === "suspended") void ctx.resume();
      const now = ctx.currentTime;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
      gain.connect(ctx.destination);
      [1, 2, 3].forEach((h, i) => {
        const o = ctx.createOscillator();
        o.type = i === 0 ? "triangle" : "sine";
        o.frequency.value = f * h;
        const g = ctx.createGain();
        g.gain.value = [1, 0.35, 0.12][i];
        o.connect(g).connect(gain);
        o.start(now);
        o.stop(now + 2.3);
      });
    } catch {
      /* audio unavailable */
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      strings.current = SWARAS.map((_, i) => ({ x: (w / (SWARAS.length + 1)) * (i + 1), amp: 0, phase: 0, glow: 0 }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      strings.current.forEach((s, i) => {
        s.amp *= 0.965;
        s.glow *= 0.94;
        s.phase += 0.35 + i * 0.02;
        const segs = 40;
        ctx.beginPath();
        for (let k = 0; k <= segs; k++) {
          const p = k / segs;
          const y = p * h;
          const env = Math.sin(p * Math.PI);
          const x = s.x + Math.sin(s.phase + p * 9) * s.amp * env + Math.sin(t * 0.0012 + i) * 0.6;
          if (k === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(212,165,58,${0.35 + s.glow * 0.65})`;
        ctx.lineWidth = 1 + s.glow * 1.5;
        ctx.shadowColor = "rgba(241,210,126,0.9)";
        ctx.shadowBlur = 6 + s.glow * 26;
        ctx.stroke();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const hit = (x: number, prevX: number | null) => {
      strings.current.forEach((s, i) => {
        const crossed = prevX !== null && ((prevX < s.x && x >= s.x) || (prevX > s.x && x <= s.x));
        const near = Math.abs(x - s.x) < 10;
        if (crossed || near) {
          if (s.glow < 0.4) {
            s.amp = Math.min(14, s.amp + 9);
            s.glow = 1;
            return i;
          }
        }
      });
      return -1;
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      hit(x, lastX.current);
      lastX.current = x;
    };
    const onLeave = () => (lastX.current = null);
    const onDown = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      let best = 0;
      let bd = Infinity;
      strings.current.forEach((s, i) => {
        const d = Math.abs(s.x - x);
        if (d < bd) {
          bd = d;
          best = i;
        }
      });
      const s = strings.current[best];
      s.amp = 16;
      s.glow = 1.2;
      play(SWARAS[best].f);
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <section id="saptaswara" className="relative overflow-hidden bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-6 flex flex-col items-center gap-3 text-center">
          <span className="font-deco text-[10px] uppercase tracking-[0.4em] text-gold/80">Saptaswara</span>
          <p className="font-display text-2xl text-ivory/80 md:text-3xl">
            Pluck the seven notes — <span className="italic text-gold">hover</span> to feel them, <span className="italic text-gold">tap</span> to hear them.
          </p>
        </Reveal>
        <div className="relative mx-auto h-56 max-w-5xl md:h-72" data-cursor="hover">
          <canvas ref={canvasRef} className="h-full w-full touch-none" aria-label="Interactive strings: Sa Ri Ga Ma Pa Da Ni" />
          <div className="pointer-events-none absolute inset-x-0 -bottom-2 flex justify-around">
            {SWARAS.map((s) => (
              <span key={s.name} className="flex flex-col items-center font-display text-ivory/60">
                <span className="font-telugu text-lg text-gold">{s.te}</span>
                <span className="text-xs uppercase tracking-[0.3em]">{s.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
