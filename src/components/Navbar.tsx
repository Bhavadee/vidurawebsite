import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "../content/site";
import { LogoMark } from "./ui/Ornament";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-700 ${
          scrolled ? "bg-ink/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className={`gold-line absolute inset-x-0 bottom-0 transition-opacity duration-700 ${scrolled ? "opacity-60" : "opacity-0"}`} />
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <a href="#top" className="flex items-center gap-3 text-gold" aria-label={site.name}>
            <motion.span whileHover={{ rotate: 90 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <LogoMark size={40} />
            </motion.span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-lg font-semibold tracking-wide text-ivory">Vidura Sanskriti</span>
              <span className="font-deco text-[9px] uppercase tracking-[0.4em] text-gold">Sangeetalayam</span>
            </span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="group relative font-body text-[12px] font-medium uppercase tracking-[0.24em] text-ivory/80 transition-colors hover:text-gold"
                >
                  {n.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-gold/60 px-6 py-2.5 font-body text-[11px] font-medium uppercase tracking-[0.22em] text-gold transition-all hover:bg-gold hover:text-ink md:inline-flex"
            >
              {site.cta.enroll}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold lg:hidden"
            >
              <span className={`absolute h-px w-5 bg-current transition-all duration-500 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute h-px w-5 bg-current transition-all duration-500 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute h-px w-5 bg-current transition-all duration-500 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col justify-center bg-ink/95 bg-paisley px-8 backdrop-blur-xl lg:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-col gap-2">
              {[{ label: "Home", href: "#top" }, ...nav].map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-2 text-5xl text-ivory transition-colors hover:text-gold"
                  >
                    <span className="mr-4 font-deco text-xs text-gold/60">0{i + 1}</span>
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col gap-3"
            >
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-fit rounded-full bg-gold px-8 py-4 font-body text-xs font-medium uppercase tracking-[0.24em] text-ink">
                {site.cta.enroll}
              </a>
              <p className="font-telugu mt-6 text-ivory/50">{site.nameTelugu}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
