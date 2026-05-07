import { motion } from "framer-motion";
import warriors from "@/assets/world-warriors.jpg";
import chaos from "@/assets/world-chaos.jpg";
import heritage from "@/assets/world-heritage.jpg";

const items = [
  { img: warriors, title: "ANIME", jp: "戦士", desc: "Steel & spirit. Warriors who refuse to break.", price: "€49" },
  { img: chaos, title: "CHAOS", jp: "混沌", desc: "Demon kings, broken seals, eternal night.", price: "€52" },
  { img: heritage, title: "HERITAGE", jp: "遺産", desc: "Dragons, temples, the old gods watching.", price: "€55" },
];

export function WorldsGrid() {
  return (
    <section id="shop" className="relative bg-ink py-24 grain">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blood">
              ━ The Trinity
            </span>
            <h2 className="display mt-3 text-5xl text-bone md:text-7xl">
              Three worlds.<br />
              <span className="text-blood">One awakening.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bone/60">
            Every drop is a portal. Limited runs of 240 GSM heavyweight tees,
            screen-printed by hand in Osaka.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-bone/10 bg-ash transition-all hover:border-blood"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute right-4 top-4 font-jp text-5xl font-bold text-blood/60 transition group-hover:text-blood">
                  {it.jp}
                </span>
              </div>
              <div className="relative p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="display text-3xl text-bone">{it.title}</h3>
                  <span className="text-sm font-bold text-blood">{it.price}</span>
                </div>
                <p className="mt-2 text-sm text-bone/60">{it.desc}</p>
                <button className="mt-5 w-full border border-blood/40 bg-transparent py-3 text-xs font-bold uppercase tracking-[0.25em] text-bone transition hover:bg-blood">
                  Add to Cart
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
