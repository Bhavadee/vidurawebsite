# Vidura Sanskriti Sangeetalayam — 3D website

A single-page, scroll-driven site for an Indian classical music academy in Hyderabad, built with
Vite + React 19 + TypeScript, Tailwind CSS 4, React Three Fiber (three.js), Framer Motion and Lenis.

Content (headings, courses, journey steps, FAQ topics, CTAs) was adapted from
https://vidurawebsite.vercel.app/. The design is original.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve dist/ locally
```

Deploy `dist/` to Vercel, Netlify or any static host.

## What is in the experience

- Preloader with rotating mandala mark and the academy name in Telugu.
- Hero: procedurally modelled tanpura in three.js (no external model), glowing halo rings, gold
  particle field, bloom post-processing, pointer parallax and scroll parallax.
- "Saptaswara" interactive strings: hover to make the seven swaras vibrate, tap to hear them (Web Audio).
- Marquee of course names in English and Telugu.
- Animated statistics, 3D tilt cards, sticky stacking course cards, parallax image stacks.
- Student journey with a scroll-drawn gold line over a 3D instanced-petal mandala.
- Gallery with per-column parallax and a lightbox, auto-rotating testimonials, accordion FAQ.
- Contact form that opens a pre-filled WhatsApp message (no backend needed).
- Custom gold cursor, film grain, smooth scrolling, reduced-motion fallbacks, mobile layout.

## Before launch — replace placeholders

All copy lives in `src/content/site.ts`. Items marked `PLACEHOLDER` need approved values:

- `site.phone`, `site.whatsapp` (digits only, with country code), `site.email`, `site.address`, `site.hours`
- `stats` (students, performances, awards, years)
- `testimonials`, `founder.name`, `events`
- Social links in `src/components/Footer.tsx`
- Photos in `public/images/` (see `CREDITS.md` for the current Wikimedia Commons attributions)

## Structure

```
src/
  content/site.ts          all text content
  components/three/        HeroScene, Tanpura, MandalaScene (R3F)
  components/ui/           Reveal, SectionHeading, Button, TiltCard, Ornament
  components/*.tsx         page sections
  hooks/                   useLenis (smooth scroll), useMedia
  index.css                theme tokens, patterns, grain, utilities
```
