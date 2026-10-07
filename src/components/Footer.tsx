import { ArrowUp, Instagram, Facebook, Youtube } from "lucide-react";
import { nav, site } from "../content/site";
import { LogoMark } from "./ui/Ornament";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="gold-line" />
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3 text-gold">
              <LogoMark size={44} />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold text-ivory">{site.name}</span>
                <span className="font-deco text-[9px] uppercase tracking-[0.4em] text-gold">{site.tagline}</span>
              </span>
            </a>
            <p className="font-telugu mt-6 text-2xl text-ivory/80">{site.nameTelugu}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/55">{site.description}</p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-ink">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-deco text-[10px] uppercase tracking-[0.4em] text-gold">Explore</h4>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="font-display text-xl text-ivory/75 transition-colors hover:text-gold">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-deco text-[10px] uppercase tracking-[0.4em] text-gold">Visit</h4>
            <ul className="mt-6 space-y-3 text-sm text-ivory/70">
              <li>{site.address}</li>
              <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a></li>
            </ul>
            <h4 className="mt-8 font-deco text-[10px] uppercase tracking-[0.4em] text-gold">Timings</h4>
            <ul className="mt-4 space-y-2 text-sm text-ivory/60">
              {site.hours.map((h) => (
                <li key={h.day}><span className="text-ivory/85">{h.day}</span> · {h.time}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-gold/15 pt-8 text-xs text-ivory/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved. · <a href="#" className="hover:text-gold">Privacy Policy</a> · <a href="#" className="hover:text-gold">Terms</a></p>
          <p>
            Photography via{" "}
            <a href="https://commons.wikimedia.org" target="_blank" rel="noreferrer noopener" className="underline decoration-gold/40 hover:text-gold">
              Wikimedia Commons
            </a>{" "}
            (CC BY / CC BY-SA / public domain).
          </p>
          <a href="#top" className="inline-flex items-center gap-2 font-deco text-[10px] uppercase tracking-[0.3em] text-gold">
            Top <ArrowUp size={14} />
          </a>
        </div>
      </div>
      <div className="font-telugu pointer-events-none select-none whitespace-nowrap pb-2 text-center text-[16vw] leading-none text-ivory/[0.03]">
        సంగీతాలయం
      </div>
    </footer>
  );
}
