import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import warriors from "@/assets/world-warriors.jpg";
import chaos from "@/assets/world-chaos.jpg";
import heritage from "@/assets/world-heritage.jpg";

type World = {
  id: string;
  kicker: string;
  jp: string;
  title: string;
  subtitle: string;
  desc: string;
  cta: string;
  image: string;
  accent: string;
};

const worlds: World[] = [
  {
    id: "warriors",
    kicker: "DROP 01 // ANIME",
    jp: "戦士の魂",
    title: "WARRIOR'S\nSOUL",
    subtitle: "Forged Through Steel",
    desc: "Heavyweight 240 GSM tees inked with the fury of a thousand battles. For those who walk the path alone.",
    cta: "Enter the Battlefield",
    image: warriors,
    accent: "oklch(0.55 0.24 25)",
  },
  {
    id: "chaos",
    kicker: "DROP 02 // CHAOS",
    jp: "混沌の覚醒",
    title: "MADARA\nRISING",
    subtitle: "When Reality Bends",
    desc: "Awaken the demon within. Crimson lightning, eternal night, and the scream of a broken world — wear it loud.",
    cta: "Embrace the Chaos",
    image: chaos,
    accent: "oklch(0.6 0.26 22)",
  },
  {
    id: "heritage",
    kicker: "DROP 03 // HERITAGE",
    jp: "古の遺産",
    title: "DRAGON\nGATE",
    subtitle: "Ancient Bloodline",
    desc: "Ukiyo-e meets street. Gold-thread embroidery and temple-grade ink — heritage you can wear into the storm.",
    cta: "Claim Your Lineage",
    image: heritage,
    accent: "oklch(0.78 0.18 55)",
  },
];

export function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIdx((i) => (i + 1) % worlds.length), []);
  const prev = () => setIdx((i) => (i - 1 + worlds.length) % worlds.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [paused, next]);

  const w = worlds[idx];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-ink scanlines grain"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Background image with parallax fade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${w.id}`}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 0.55, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={w.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={1280}
            height={896}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <div className="absolute inset-0 vignette opacity-90" />
        </motion.div>
      </AnimatePresence>

      {/* Floating kanji backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          key={`jp-${w.id}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.08, x: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-jp text-[22rem] font-black leading-none text-blood select-none"
        >
          {w.jp}
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 pb-20 pt-24 md:grid-cols-2 md:px-12">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-blood" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blood">
                  {w.kicker}
                </span>
              </div>
              <h1 className="display glitch whitespace-pre-line text-6xl font-bold leading-[0.95] text-bone md:text-8xl">
                {w.title}
              </h1>
              <p className="mt-4 font-jp text-2xl text-blood/90">{w.jp}</p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/70 md:text-base">
                {w.desc}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="group relative overflow-hidden border-2 border-blood bg-blood px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-bone transition-all hover:bg-transparent hover:shadow-blood">
                  <span className="relative z-10">{w.cta}</span>
                </button>
                <button className="border border-bone/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-bone/80 transition hover:border-bone hover:text-bone">
                  View Lookbook
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: floating product card */}
        <div className="relative hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${w.id}`}
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-square w-full max-w-lg float-slow"
            >
              <div
                className="absolute inset-0 rounded-sm opacity-60 blur-3xl"
                style={{ background: w.accent }}
              />
              <img
                src={w.image}
                alt={w.title}
                className="relative h-full w-full object-cover shadow-blood"
                width={1024}
                height={1024}
                loading="eager"
              />
              <div className="absolute -bottom-4 -right-4 border border-blood bg-ink/90 px-4 py-2 text-xs uppercase tracking-[0.2em] text-bone backdrop-blur">
                240 GSM · €49
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="border border-bone/30 p-3 text-bone transition hover:border-blood hover:text-blood"
        >
          ←
        </button>
        <div className="flex items-center gap-3">
          {worlds.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-1 w-12 overflow-hidden bg-bone/20"
            >
              <span
                className={`absolute inset-y-0 left-0 bg-blood transition-all ${
                  i === idx ? "w-full" : "w-0 group-hover:w-1/3"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="border border-bone/30 p-3 text-bone transition hover:border-blood hover:text-blood"
        >
          →
        </button>
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y border-blood/30 bg-ink/80 py-2 backdrop-blur">
        <div className="marquee flex whitespace-nowrap text-xs uppercase tracking-[0.4em] text-blood">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-8 px-4">
              <span>限定版 Limited Edition</span><span>◆</span>
              <span>Free Shipping Over €100</span><span>◆</span>
              <span>240 GSM Heavyweight</span><span>◆</span>
              <span>三 Worlds · One Awakening</span><span>◆</span>
              <span>Drop 01 Live Now</span><span>◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
