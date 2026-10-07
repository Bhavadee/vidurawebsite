import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { site } from "../content/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-6 right-5 z-[85] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {show && (
          <motion.a
            key="top"
            href="#top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-ink/80 text-gold backdrop-blur transition-colors hover:bg-gold hover:text-ink"
          >
            <ArrowUp size={16} />
          </motion.a>
        )}
      </AnimatePresence>
      <motion.a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer noopener"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.2 }}
        whileHover={{ scale: 1.06 }}
        aria-label={site.cta.whatsapp}
        className="group relative flex items-center gap-3 rounded-full bg-gold py-3 pl-4 pr-5 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink shadow-[0_20px_40px_-15px_rgba(212,165,58,0.6)]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold/40" style={{ animationDuration: "2.6s" }} />
        <MessageCircle size={18} />
        <span className="hidden sm:inline">{site.cta.whatsapp}</span>
      </motion.a>
    </div>
  );
}
