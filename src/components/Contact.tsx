import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { courses, site } from "../content/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Mandala } from "./ui/Ornament";

const field =
  "w-full rounded-xl border border-gold/20 bg-ink-2/80 px-5 py-4 font-body text-sm text-ivory placeholder:text-ivory/30 outline-none transition-all focus:border-gold focus:shadow-[0_0_0_4px_rgba(212,165,58,0.12)]";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `Namaste! I'd like to book a trial class.%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0ACourse: ${fd.get("course")}%0AStudent age: ${fd.get("age")}%0AMessage: ${fd.get("message")}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${msg}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <Mandala size={1100} className="pointer-events-none absolute -bottom-[500px] left-1/2 -translate-x-1/2 text-gold/[0.06]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Start With a Trial Class"
          title="Book a Trial Class"
          description="Share your interest, plan a visit, or book a trial class. We reply on WhatsApp within a day."
          accent={["Trial"]}
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="relative rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-2 to-ink p-7 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <input name="name" required placeholder="Parent / student name" className={field} />
                <input name="phone" required type="tel" placeholder="Phone or WhatsApp number" className={field} />
                <select name="course" className={`${field} appearance-none`} defaultValue={courses[0].title}>
                  {courses.map((c) => (
                    <option key={c.slug} value={c.title}>{c.title}</option>
                  ))}
                </select>
                <input name="age" placeholder="Student age" className={field} />
                <textarea name="message" rows={4} placeholder="Tell us about your goals or any questions" className={`${field} md:col-span-2`} />
              </div>
              <button
                type="submit"
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-[12px] font-medium uppercase tracking-[0.24em] text-ink transition-all hover:bg-gold-light"
              >
                {sent ? "Opened WhatsApp — thank you" : site.cta.enroll}
                <Send size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-4 text-xs text-ivory/40">Submitting opens a pre-filled WhatsApp message to the academy. No data is stored on this site.</p>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-5">
            <div className="rounded-3xl border border-gold/20 bg-ink-2/60 p-7 md:p-9">
              <ul className="space-y-5 text-sm">
                {[
                  { Icon: MapPin, label: "Address", value: site.address },
                  { Icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
                  { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                ].map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"><Icon size={16} /></span>
                    <span>
                      <span className="block font-deco text-[9px] uppercase tracking-[0.3em] text-gold/70">{label}</span>
                      {href ? <a href={href} className="text-ivory/85 hover:text-gold">{value}</a> : <span className="text-ivory/85">{value}</span>}
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"><Clock size={16} /></span>
                  <span>
                    <span className="block font-deco text-[9px] uppercase tracking-[0.3em] text-gold/70">Academy Timings</span>
                    {site.hours.map((h) => (
                      <span key={h.day} className="block text-ivory/85"><span className="text-ivory/55">{h.day}:</span> {h.time}</span>
                    ))}
                  </span>
                </li>
              </ul>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/50 px-6 py-3 font-body text-[11px] uppercase tracking-[0.24em] text-gold transition-all hover:bg-gold hover:text-ink"
              >
                <MessageCircle size={16} /> {site.cta.whatsapp}
              </a>
            </div>
            <div className="bg-kolam-dark relative flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-3xl border border-gold/20">
              <div className="text-center">
                <MapPin className="mx-auto text-gold" size={28} />
                <p className="font-display mt-3 text-2xl text-ivory">{site.location.city}, {site.location.region}</p>
                <p className="mt-1 font-deco text-[9px] uppercase tracking-[0.3em] text-gold/70">Map embed coming soon</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
