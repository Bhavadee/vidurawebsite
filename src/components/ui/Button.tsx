import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "ink";
  className?: string;
  target?: string;
};

export function MagneticButton({ href, children, variant = "gold", className = "", target }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 font-body text-[13px] font-medium uppercase tracking-[0.22em] transition-colors duration-500";
  const styles = {
    gold: "bg-gold text-ink hover:text-ink",
    outline: "border border-gold/50 text-ivory hover:border-gold",
    ink: "bg-ink text-ivory hover:text-ink",
  }[variant];

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer noopener" : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
      data-cursor="hover"
    >
      <span
        className={`absolute inset-0 -z-0 translate-y-full rounded-full transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 ${
          variant === "gold" ? "bg-gold-light" : variant === "outline" ? "bg-gold/15" : "bg-gold"
        }`}
      />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </motion.a>
  );
}
