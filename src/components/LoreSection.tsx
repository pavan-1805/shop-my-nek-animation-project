import { motion } from "framer-motion";

export function LoreSection() {
  return (
    <section id="lore" className="relative overflow-hidden bg-gradient-to-b from-ink via-ash to-ink py-32 grain">
      <div className="pointer-events-none absolute inset-0 vignette opacity-80" />
      <div className="pointer-events-none absolute -left-20 top-1/4 font-jp text-[20rem] font-black leading-none text-blood/[0.04] select-none">
        覚醒
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-blood"
        >
          ━ The Manifesto ━
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display mt-6 text-5xl leading-[1.05] text-bone md:text-7xl"
        >
          We don't make merch.<br />
          We forge <span className="glitch text-blood">artifacts</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg"
        >
          Each piece is a chapter. Each chapter, a war. Inspired by the legends
          of three realms — the warriors who endure, the demons who awaken, and
          the ancestors who remember. Wear the story. Become the myth.
        </motion.p>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-px overflow-hidden border border-bone/10 bg-bone/10 md:grid-cols-3">
          {[
            { n: "240", l: "GSM Heavyweight" },
            { n: "100%", l: "Combed Cotton" },
            { n: "三", l: "Worlds. One Story." },
          ].map((s) => (
            <div key={s.l} className="bg-ink p-8 text-center">
              <div className="display text-5xl text-blood md:text-6xl">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-bone/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
