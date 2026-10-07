import { motion } from "framer-motion";
import { site } from "../content/site";
import { LogoMark } from "./ui/Ornament";

export function Preloader({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink text-gold"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 1.5, duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onDone}
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, ease: "linear", repeat: Infinity }}>
          <LogoMark size={92} />
        </motion.div>
      </motion.div>
      <motion.p
        className="font-telugu mt-8 text-xl text-ivory/90 md:text-2xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        {site.nameTelugu}
      </motion.p>
      <motion.p
        className="font-deco mt-3 text-[10px] uppercase tracking-[0.5em] text-gold/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        {site.name}
      </motion.p>
      <motion.div
        className="absolute bottom-16 h-px w-40 origin-left bg-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 1.7, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
