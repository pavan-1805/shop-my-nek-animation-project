import { motion } from "framer-motion";
import respectBg from "@/assets/home/RespectTheRootsBackground.png";
import madaraBg from "@/assets/home/MadaraBackground.png";
import chaosBg from "@/assets/home/OrganizedChaosBackground.png";
import warriorsTshirt from "@/assets/home/warriorsTshirt.png";
import madaraTshirt from "@/assets/home/madaraTshirt.png";
import chaosTshirt from "@/assets/home/ChaosTshirt.png";

/* ── Samurai: speed lines + sword slash + kanji + golden aura ── */
const SPEED_LINES = [
  { angle: 0, len1: 90, len2: 210 }, { angle: 15, len1: 110, len2: 240 },
  { angle: 30, len1: 80, len2: 190 }, { angle: 45, len1: 130, len2: 260 },
  { angle: 60, len1: 95, len2: 220 }, { angle: 75, len1: 70, len2: 180 },
  { angle: 90, len1: 120, len2: 250 }, { angle: 105, len1: 85, len2: 200 },
  { angle: 120, len1: 100, len2: 230 }, { angle: 135, len1: 75, len2: 195 },
  { angle: 150, len1: 115, len2: 245 }, { angle: 165, len1: 90, len2: 210 },
  { angle: 180, len1: 105, len2: 235 }, { angle: 195, len1: 80, len2: 200 },
  { angle: 210, len1: 125, len2: 255 }, { angle: 225, len1: 70, len2: 185 },
  { angle: 240, len1: 95, len2: 215 }, { angle: 255, len1: 110, len2: 240 },
  { angle: 270, len1: 85, len2: 205 }, { angle: 285, len1: 120, len2: 250 },
  { angle: 300, len1: 100, len2: 225 }, { angle: 315, len1: 75, len2: 190 },
  { angle: 330, len1: 115, len2: 245 }, { angle: 345, len1: 90, len2: 215 },
];

const KANJI = ["武", "侍", "魂", "刀", "剣", "道"];
const KANJI_POS = [
  { x: 580, y: 80, size: 48, delay: "0s", dur: "4s" },
  { x: 720, y: 160, size: 32, delay: "1.2s", dur: "5s" },
  { x: 640, y: 420, size: 40, delay: "0.6s", dur: "4.5s" },
  { x: 740, y: 350, size: 28, delay: "2s", dur: "6s" },
  { x: 560, y: 500, size: 36, delay: "1.8s", dur: "5.5s" },
  { x: 700, y: 260, size: 24, delay: "0.3s", dur: "4.2s" },
];

function SamuraiEffect() {
  return (
    <>
      {/* Golden aura */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[18%]">
        <div style={{
          width: 420, height: 460,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.28) 0%, rgba(201,168,76,0.08) 50%, transparent 75%)",
          animation: "auraPulse 2.6s ease-in-out infinite alternate",
          filter: "blur(8px)",
        }} />
      </div>

      {/* Outer golden ring pulse */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[15%]">
        <div style={{
          width: 520, height: 520,
          borderRadius: "50%",
          border: "1.5px solid rgba(201,168,76,0.25)",
          animation: "ringPulse 2.6s ease-in-out infinite alternate",
          boxShadow: "0 0 30px rgba(201,168,76,0.15), inset 0 0 30px rgba(201,168,76,0.05)",
        }} />
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* {SPEED_LINES.map((l, i) => {
          const cx = 660; const cy = 300;
          const rad = (l.angle * Math.PI) / 180;
          return (
            <line key={i}
              x1={cx + Math.cos(rad) * l.len1} y1={cy + Math.sin(rad) * l.len1}
              x2={cx + Math.cos(rad) * l.len2} y2={cy + Math.sin(rad) * l.len2}
              stroke="#c9a84c"
              strokeOpacity={i % 3 === 0 ? 0.35 : 0.15}
              strokeWidth={i % 5 === 0 ? 3 : i % 3 === 0 ? 1.8 : 0.9}
              filter={i % 5 === 0 ? "url(#goldGlow)" : undefined}
              style={{ animation: `speedPulse ${1.4 + (i % 4) * 0.25}s ${(i * 0.06).toFixed(2)}s ease-in-out infinite alternate` }}
            />
          );
        })} */}

        <path d="M 530 100 Q 670 290 790 470"
          fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"
          filter="url(#goldGlow)"
          style={{ animation: "slashFlash 3.5s 0.8s steps(1) infinite" }}
        />
        <path d="M 545 95 Q 685 285 800 465"
          fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"
          style={{ animation: "slashFlash 3.5s 0.8s steps(1) infinite" }}
        />

        {KANJI_POS.map((k, i) => (
          <text key={i} x={k.x} y={k.y}
            fontSize={k.size} fontWeight="900"
            fill="#c9a84c" fillOpacity="0.22"
            fontFamily="serif" textAnchor="middle"
            style={{ animation: `kanjiFloat ${k.dur} ${k.delay} ease-in-out infinite alternate` }}
          >
            {KANJI[i]}
          </text>
        ))}

        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const ex = 560 + (i * 37) % 220;
          const ey = 480 - (i * 53) % 300;
          return (
            <circle key={i} cx={ex} cy={ey}
              r={i % 2 === 0 ? 4 : 2}
              fill="#c9a84c"
              filter="url(#goldGlow)"
              style={{
                animation: `emberFloat ${2.5 + (i % 3) * 0.8}s ${(i * 0.45).toFixed(1)}s ease-in-out infinite`,
                transformOrigin: `${ex}px ${ey}px`,
              }}
            />
          );
        })}
      </svg>
    </>
  );
}

/* ── Madara: rotating sharingan tomoe + red energy rings ── */
function SharinganEffect() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="mgRed" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#cc1a1a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#cc1a1a" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Glow core */}
      <circle cx="500" cy="300" r="220" fill="url(#mgRed)" style={{ animation: "sharinganPulse 3s ease-in-out infinite alternate" }} />
      {/* Rings */}
      {[180, 130, 80].map((r, i) => (
        <circle key={r} cx="500" cy="300" r={r} fill="none" stroke="#cc1a1a"
          strokeWidth={i === 0 ? 0.8 : 0.5} strokeOpacity={0.18 + i * 0.06}
          style={{ animation: `sharinganSpin ${8 + i * 4}s linear infinite ${i % 2 ? "reverse" : ""}` }}
        />
      ))}
      {/* 3 tomoe */}
      <g style={{ transformOrigin: "500px 300px", animation: "sharinganSpin 7s linear infinite" }}>
        {[0, 120, 240].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 500 + 100 * Math.sin(rad);
          const cy = 300 - 100 * Math.cos(rad);
          return (
            <g key={deg}>
              <circle cx={cx} cy={cy} r="14" fill="#cc1a1a" fillOpacity="0.15" />
              <circle cx={cx} cy={cy} r="7" fill="#cc1a1a" fillOpacity="0.35" />
            </g>
          );
        })}
      </g>
      {/* Energy sparks */}
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle key={deg}
            cx={500 + 175 * Math.sin(rad)} cy={300 - 175 * Math.cos(rad)}
            r="3" fill="#cc1a1a" fillOpacity="0.5"
            style={{ animation: `sharinganSpin 12s linear infinite reverse`, transformOrigin: "500px 300px" }}
          />
        );
      })}
    </svg>
  );
}

/* ── Chaos: electric lightning bolts + glitch scan lines ── */
function LightningEffect() {
  return (
    <>
      {/* Scan lines */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)", animation: "scanMove 8s linear infinite" }}
      />
      {/* SVG lightning */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Bolt 1 */}
        <polyline points="500,60 600,180 630,180 590,340 500,340 560,500"
          fill="none" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.6" filter="url(#glow)"
          style={{ animation: "boltFlash 3s 0s steps(1) infinite" }}
        />
        {/* Bolt 2 */}
        <polyline points="700,100 680,220 710,220 670,380"
          fill="none" stroke="#aaa" strokeWidth="1" strokeOpacity="0.4" filter="url(#glow)"
          style={{ animation: "boltFlash 3s 1.1s steps(1) infinite" }}
        />
        {/* Bolt 3 */}
        <polyline points="550,0 530,140 560,140 510,300 540,300 490,460"
          fill="none" stroke="#fff" strokeWidth="1" strokeOpacity="0.3" filter="url(#glow)"
          style={{ animation: "boltFlash 3s 2s steps(1) infinite" }}
        />
        {/* Glitch horizontal slices */}
        <rect x="0" y="200" width="800" height="3" fill="rgba(255,255,255,0.04)"
          style={{ animation: "glitchSlice 4s 0.5s steps(1) infinite" }} />
        <rect x="0" y="380" width="800" height="2" fill="rgba(255,255,255,0.03)"
          style={{ animation: "glitchSlice 4s 1.8s steps(1) infinite" }} />
      </svg>
    </>
  );
}

const drops = [
  {
    id: "samurai",
    tag: "DROP 01 — SAMURAI WORLD",
    title: "RESPECT THE ROOTS",
    subtitle: "Legacy Flows Through Blood. Carry The Weight. Honor The Path",
    image: respectBg,
    tshirt: warriorsTshirt,
    align: "left" as const,
    gradientFrom: "rgba(0,0,0,0.95)",
    gradientTo: "rgba(0,0,0,0.1)",
    headingColor: "#c9a84c",
    effect: <SamuraiEffect />,
  },
  {
    id: "anime",
    tag: "DROP 01 — ANIME WORLD",
    title: "WAKE UP TO REALITY",
    subtitle: "For Those Who Move With Purpose In A World That Never Goes As Planned",
    image: madaraBg,
    tshirt: madaraTshirt,
    align: "right" as const,
    gradientFrom: "rgba(10,0,0,0.97)",
    gradientTo: "rgba(80,0,0,0.15)",
    headingColor: "#c0201a",
    effect: <SharinganEffect />,
  },
  {
    id: "chaos",
    tag: "DROP 01 — TECH / CHAOS WORLD",
    title: "ORGANIZED CHAOS",
    subtitle: "We Are The Noise In The System. Controlled. Precise. Unstoppable",
    image: chaosBg,
    tshirt: chaosTshirt,
    align: "left" as const,
    gradientFrom: "rgba(5,0,0,0.97)",
    gradientTo: "rgba(30,5,5,0.2)",
    headingColor: "#ffffff",
    effect: <LightningEffect />,
  },
];

export function ProductDrops() {
  return (
    <section className="w-full">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="relative w-full overflow-hidden"
          style={{ minHeight: 500 }}
        >
          {/* Full-bleed background image */}
          <img
            src={drop.image}
            alt={drop.id}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Dark gradient overlay on text side */}
          <div
            className="absolute inset-0"
            style={{
              background:
                drop.align === "left"
                  ? `linear-gradient(to right, ${drop.gradientFrom} 0%, ${drop.gradientFrom} 35%, ${drop.gradientTo} 75%, transparent 100%)`
                  : `linear-gradient(to left, ${drop.gradientFrom} 0%, ${drop.gradientFrom} 35%, ${drop.gradientTo} 75%, transparent 100%)`,
            }}
          />

          {/* Anime effect layer */}
          {drop.effect}

          {/* Foreground layout */}
          <div className="relative z-10 flex min-h-[500px] w-full items-center">
            <div
              className="mx-auto flex w-full max-w-7xl items-center px-8 md:px-16"
              style={{ flexDirection: drop.align === "right" ? "row-reverse" : "row" }}
            >
              {/* Text side */}
              <motion.div
                className="flex flex-1 flex-col py-16"
                style={{
                  textAlign: drop.align === "right" ? "right" : "left",
                  alignItems: drop.align === "right" ? "flex-end" : "flex-start",
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
              >
                {/* Tag */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: drop.align === "right" ? 30 : -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.55)",
                    marginBottom: 12, fontFamily: '"JetBrains Mono", monospace',
                  }}
                >
                  {drop.tag}
                </motion.p>

                {/* Heading */}
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 40, skewX: -4 },
                    visible: { opacity: 1, y: 0, skewX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  style={{
                    fontFamily: '"Bebas Neue", serif',
                    fontSize: "clamp(2.8rem, 6vw, 4.4rem)",
                    fontWeight: 900, lineHeight: 0.92,
                    letterSpacing: "0.03em", textTransform: "uppercase",
                    color: drop.headingColor, marginBottom: 16,
                    textShadow: drop.id === "samurai"
                      ? "0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(201,168,76,0.2)"
                      : drop.id === "anime"
                        ? "0 0 40px rgba(192,32,26,0.6), 0 0 80px rgba(192,32,26,0.3)"
                        : "0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.15)",
                    animation: drop.id === "anime"
                      ? "textGlitchRed 5s 2s steps(1) infinite"
                      : drop.id === "chaos"
                        ? "textGlitchWhite 6s 1s steps(1) infinite"
                        : "textGlitchGold 5s 1.5s steps(1) infinite",
                  }}
                >
                  {drop.title}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: drop.align === "right" ? 20 : -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  style={{
                    fontSize: 12, lineHeight: 1.7,
                    color: "rgba(255,255,255,0.65)", maxWidth: 320, marginBottom: 28,
                  }}
                >
                  {drop.subtitle}
                </motion.p>

                {/* Button */}
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    border: `1.5px solid ${drop.id === "samurai" ? "rgba(201,168,76,0.8)"
                      : drop.id === "anime" ? "rgba(192,32,26,0.8)"
                        : "rgba(255,255,255,0.7)"
                      }`,
                    background: "transparent", color: "#fff",
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
                    textTransform: "uppercase", padding: "10px 28px",
                    cursor: "pointer", transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
                    fontFamily: '"JetBrains Mono", monospace',
                    animation: drop.id === "samurai"
                      ? "btnGlowGold 2.5s ease-in-out infinite alternate"
                      : drop.id === "anime"
                        ? "btnGlowRed 2.5s ease-in-out infinite alternate"
                        : "btnGlowWhite 2.5s ease-in-out infinite alternate",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = drop.headingColor;
                    (e.currentTarget as HTMLButtonElement).style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  }}
                >
                  BUY NOW
                </motion.button>
              </motion.div>

              {/* T-shirt image */}
              <div className="flex flex-1 items-center justify-center">
                <img
                  src={drop.tshirt}
                  alt={drop.title}
                  style={{
                    width: "100%", height: "100%", maxHeight: 560,
                    objectFit: "contain",
                    filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.7))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
