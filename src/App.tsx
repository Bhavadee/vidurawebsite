import { useEffect, useState } from "react";
import { useLenis } from "./hooks/useLenis";
import { Cursor } from "./components/Cursor";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { SwaraStrings } from "./components/SwaraStrings";
import { Stats } from "./components/Stats";
import { WhyChoose } from "./components/WhyChoose";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Founder } from "./components/Founder";
import { Journey } from "./components/Journey";
import { Achievements } from "./components/Achievements";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Events } from "./components/Events";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [sceneReady, setSceneReady] = useState(false);
  useLenis(!loading);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    // mount the WebGL scene slightly after first paint so the preloader stays smooth
    const t = setTimeout(() => setSceneReady(true), 350);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <div className="relative">
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Cursor />
      <Navbar />
      <main>
        <Hero ready={sceneReady} />
        <Marquee />
        <SwaraStrings />
        <Stats />
        <WhyChoose />
        <About />
        <Courses />
        <Founder />
        <Journey />
        <Achievements />
        <Gallery />
        <Testimonials />
        <Events />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
