import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const luxe = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 1.1, delay, ease: luxe }}
    >
      {children}
    </motion.div>
  );
}

const wordContainer: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({ transition: { staggerChildren: 0.06, delayChildren: delay } }),
};
const word: Variants = {
  hidden: { opacity: 0, y: "110%", rotateX: -40 },
  visible: { opacity: 1, y: "0%", rotateX: 0, transition: { duration: 1.0, ease: luxe } },
};

export function WordReveal({
  text,
  className,
  delay = 0,
  as: Tag = "span",
  accent,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  accent?: string[];
}) {
  const words = text.split(" ");
  const M = motion[Tag] as typeof motion.span;
  return (
    <M
      className={className}
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={delay}
      style={{ perspective: 800 }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            variants={word}
            className={`inline-block will-change-transform ${accent?.includes(w.replace(/[^\w]/g, "")) ? "text-gold-gradient italic" : ""}`}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </M>
  );
}
