import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import madara from "@/assets/home/madara.png";

const slides = [
  {
    id: "warriors",
    bgWord: "MADARA",
    image: madara,
    quote: "Wake up to reality. Nothing ever goes\nas planned in this accursed world.",
    accent: "oklch(0.55 0.24 25)",
  },
  {
    id: "chaos",
    bgWord: "CHAOS",
    image: madara,
    quote: "The strongest people are not always\nthe ones who win, but those who don't give up.",
    accent: "oklch(0.45 0.22 20)",
  },
  {
    id: "heritage",
    bgWord: "HERITAGE",
    image: madara,
    quote: "Legacy flows through blood.\nThe ancestors watch over us.",
    accent: "oklch(0.50 0.20 40)",
  },
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[idx];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink">
      {/* Background watermark word */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        >
          {/* <span
            className="font-jp text-[22vw] font-black leading-none text-bone whitespace-nowrap"
            style={{ fontFamily: '"Bebas Neue", serif' }}
          >
            {slide.bgWord}
          </span> */}
        </motion.div>
      </AnimatePresence>

      {/* Deep black base — nearly solid */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "#03000a" }} />

      {/* Classic Sharingan — red iris, orbit ring, 3 rotating tomoe */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 400 400"
          className="absolute"
          style={{ width: "min(100vh, 100vw)", height: "min(100vh, 100vw)", opacity: 0.1 }}
        >
          {/* Solid red iris */}
          <circle cx="200" cy="200" r="182" fill="#cc1a1a" />

          {/* Orbit ring — tomoe heads sit on this */}
          <circle cx="200" cy="200" r="115" fill="none" stroke="#080000" strokeWidth="3" />

          {/* Black center pupil */}
          <circle cx="200" cy="200" r="24" fill="#080000" />

          {/* 3 black circles on orbit ring, rotating */}
          <g style={{ transformOrigin: "200px 200px", animation: "sharinganSpin 6s linear infinite" }}>
            {[0, 120, 240].map((deg) => (
              <circle
                key={deg}
                cx={200 + 115 * Math.sin((deg * Math.PI) / 180)}
                cy={200 - 115 * Math.cos((deg * Math.PI) / 180)}
                r="22"
                fill="#080000"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* 3 red smoke puffs — bottom only */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { w: 480, h: 280, l: "-6%",  t: "72%", delay: "0s",  dur: "18s", color: "rgba(160,20,10,0.35)" },
          { w: 380, h: 220, l: "38%",  t: "76%", delay: "6s",  dur: "22s", color: "rgba(140,15,8,0.28)"  },
          { w: 420, h: 250, l: "68%",  t: "70%", delay: "12s", dur: "20s", color: "rgba(160,20,10,0.30)" },
        ].map((s, i) => (
          <div key={i} className="absolute rounded-full"
            style={{
              width: s.w, height: s.h, left: s.l, top: s.t,
              background: `radial-gradient(ellipse, ${s.color} 0%, transparent 70%)`,
              willChange: "transform, opacity",
              animation: `smokeRise ${s.dur} ${s.delay} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center gap-8 px-6 pt-20 pb-16 md:px-12 md:grid md:grid-cols-2">
        {/* Left */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-text"}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
              exit: { transition: { staggerChildren: 0.06 } },
            }}
          >
            <motion.h3
              className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] uppercase text-bone"
              style={{ fontFamily: '"Bebas Neue", serif', letterSpacing: "0.02em" }}
              variants={{
                hidden: { opacity: 0, y: 60, skewY: 4 },
                visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
              }}
            >
              Three Worlds.<br />One Awakening
            </motion.h3>

            <motion.p
              className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70"
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
                exit: { opacity: 0, x: -16, transition: { duration: 0.3 } },
              }}
            >
              A universe split into ANIME, CHAOS and HERITAGE.
              <br />
              Heavyweight 240 GSM story-driven tees.
            </motion.p>

            <motion.button
              className="mt-8 px-6 py-3 text-sm font-semibold text-bone tracking-wide transition-all hover:brightness-110"
              style={{ background: "oklch(0.35 0.18 25)" }}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Preview Drop 01
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Right — product image with ring */}
        <div className="relative flex items-center justify-center">
          {/* Outer ring with orbiting shine */}
          {/* <div
            className="absolute rounded-full border border-bone/10"
            style={{ width: "min(480px, 80vw)", height: "min(480px, 80vw)" }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ animation: "orbitLight 6s linear infinite" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: 14,
                  height: 14,
                  top: -7,
                  left: "calc(50% - 7px)",
                  background: "radial-gradient(circle, oklch(1 0 0) 0%, oklch(0.85 0.03 80 / 0.6) 50%, transparent 100%)",
                  boxShadow: "0 0 12px 4px oklch(1 0 0 / 0.9), 0 0 30px 8px oklch(0.92 0.03 80 / 0.5)",
                  filter: "blur(1px)",
                }}
              />
            </div>
          </div> */}

          {/* Middle ring with counter-orbiting shine */}
          {/* <div
            className="absolute rounded-full border border-bone/5"
            style={{ width: "min(380px, 65vw)", height: "min(380px, 65vw)" }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ animation: "orbitLight 9s linear infinite reverse" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  top: -4,
                  left: "calc(50% - 4px)",
                  background: "radial-gradient(circle, oklch(0.75 0.22 25) 0%, transparent 100%)",
                  boxShadow: "0 0 10px 3px oklch(0.65 0.24 25 / 0.8), 0 0 24px 6px oklch(0.55 0.24 25 / 0.4)",
                  filter: "blur(0.5px)",
                }}
              />
            </div>
          </div> */}

          {/* Red glow behind image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-glow"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="absolute rounded-full blur-3xl"
              style={{
                background: slide.accent,
                width: "min(300px, 55vw)",
                height: "min(300px, 55vw)",
                opacity: 0.5,
              }}
            />
          </AnimatePresence>

          {/* Product image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-img"}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
              style={{ width: "min(420px, 85vw)", height: "min(500px, 90vw)" }}
            >
              <img
                src={slide.image}
                alt={slide.bgWord}
                className="h-full w-full object-cover object-center"
                style={{ filter: "contrast(1.1) saturate(1.1)" }}
              />

              {/* Quote overlay at bottom */}
              {/* <p
                className="absolute bottom-3 left-0 right-0 text-center text-[10px] uppercase tracking-widest text-bone/50 whitespace-pre-line px-4"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                {slide.quote}
              </p> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-3 w-3 rounded-full border border-bone/50 transition-all"
            style={{
              background: i === idx ? "oklch(0.92 0.03 80)" : "transparent",
            }}
          />
        ))}
      </div>
    </section>
  );
}
