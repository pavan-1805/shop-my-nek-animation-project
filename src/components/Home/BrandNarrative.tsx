import { motion } from "framer-motion";

const divisions = [
  {
    id: 1,
    label: "ANIME DIVISION",
    title: "WAKE UP TO REALITY",
    color: "#ef4444",
    description:
      "Madara's declaration wasn't a threat - it was a lens. This tee carries the weight of disillusionment, rendered in ink and cotton. For those who've stopped pretending.",
    Effect: AnimeDivisionEffect,
  },
  {
    id: 2,
    label: "SAMURAI DIVISION",
    title: "RESPECT THE ROOTS",
    color: "#c9a84c",
    description:
      "A warrior is not defined by the blade, but by the burden they carry without breaking. Rooted in bushido. Built for the modern carry.",
    Effect: SamuraiDivisionEffect,
  },
  {
    id: 3,
    label: "TECH / CHAOS DIVISION",
    title: "ORGANIZED CHAOS",
    color: "#ffffff",
    description:
      "Systems fracture. Data corrupts. The operator adapts. This tee speaks to those who find structure in the chaos no one else can read.",
    Effect: ChaosDivisionEffect,
  },
];

const features = [
  { title: "240GSM",       subtitle: "HEAVYWEIGHT COTTON",      accent: "rgba(192,32,26,0.15)"  },
  { title: "OVERSIZED",    subtitle: "STREETWEAR SILHOUETTE",   accent: "rgba(201,168,76,0.12)" },
  { title: "LIMITED",      subtitle: "NO RESTOCKS. EVER.",      accent: "rgba(201,168,76,0.12)" },
  { title: "MADE TO LAST", subtitle: "NOT MADE TO TREND",       accent: "rgba(192,32,26,0.15)"  },
];

/* ── Anime / Sharingan effect ── */
function AnimeDivisionEffect() {
  const cx = 160; const cy = 130;
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 260" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.14 }}>
      <defs>
        <radialGradient id="bnRedGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#cc1a1a" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a0000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={130} fill="url(#bnRedGlow)" />
      <circle cx={cx} cy={cy} r={120} fill="none" stroke="#cc1a1a" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx={cx} cy={cy} r={75}  fill="none" stroke="#cc1a1a" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx={cx} cy={cy} r={18}  fill="#0a0000" />
      <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "sharinganSpin 7s linear infinite" }}>
        {[0, 120, 240].map(deg => {
          const rad = (deg * Math.PI) / 180;
          return (
            <circle key={deg}
              cx={cx + 75 * Math.sin(rad)}
              cy={cy - 75 * Math.cos(rad)}
              r={13} fill="#0a0000"
            />
          );
        })}
      </g>
      {/* floating embers */}
      {[{x:40,y:220,d:"0s"},{x:120,y:240,d:"1.2s"},{x:260,y:230,d:"0.6s"}].map((e,i)=>(
        <circle key={i} cx={e.x} cy={e.y} r={2} fill="rgba(220,40,20,0.8)"
          style={{ animation: `emberFloat 2.8s ${e.d} ease-out infinite` }}
        />
      ))}
    </svg>
  );
}

/* ── Samurai / speed-lines + kanji effect ── */
function SamuraiDivisionEffect() {
  const cx = 160; const cy = 130;
  const lines = [0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340];
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 260" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.16 }}>
      <defs>
        <radialGradient id="bnGoldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.5)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={130} fill="url(#bnGoldGlow)"
        style={{ animation: "auraPulse 3s ease-in-out infinite alternate" }}
      />
      {lines.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        return (
          <line key={a}
            x1={cx + Math.cos(rad) * 40} y1={cy + Math.sin(rad) * 40}
            x2={cx + Math.cos(rad) * 110} y2={cy + Math.sin(rad) * 110}
            stroke="rgba(201,168,76,0.55)" strokeWidth="0.7"
            style={{ animation: `speedPulse 1.8s ${i * 0.06}s ease-in-out infinite alternate` }}
          />
        );
      })}
      {/* sword slash */}
      <line x1={cx - 20} y1={cy - 80} x2={cx + 60} y2={cy + 70}
        stroke="rgba(201,168,76,0.9)" strokeWidth="1.5"
        style={{ animation: "slashFlash 3.5s 0.4s infinite" }}
      />
      {/* kanji */}
      {[{ch:"武",x:30,y:50},{ch:"刀",x:270,y:60},{ch:"道",x:40,y:210}].map((k,i)=>(
        <text key={k.ch} x={k.x} y={k.y} fontSize={22} fill="rgba(201,168,76,0.2)"
          fontFamily="Noto Serif JP, serif" textAnchor="middle"
          style={{ animation: `kanjiFloat ${3.5 + i * 0.5}s ${i * 0.8}s ease-in-out infinite alternate` }}
        >{k.ch}</text>
      ))}
    </svg>
  );
}

/* ── Chaos / lightning effect ── */
function ChaosDivisionEffect() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 260" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.18 }}>
      <defs>
        <radialGradient id="bnChaosGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(140,200,255,0.3)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <circle cx={160} cy={130} r={130} fill="url(#bnChaosGlow)"
        style={{ animation: "auraPulse 2.2s ease-in-out infinite alternate" }}
      />
      {/* tech grid */}
      {[80,160,240].map(x=>(
        <line key={x} x1={x} y1={0} x2={x} y2={260} stroke="rgba(100,200,255,0.1)" strokeWidth="0.7"/>
      ))}
      {[65,130,195].map(y=>(
        <line key={y} x1={0} y1={y} x2={320} y2={y} stroke="rgba(100,200,255,0.1)" strokeWidth="0.7"/>
      ))}
      {/* lightning */}
      <polyline points="40,0 55,60 35,100 60,180 40,260" fill="none" stroke="rgba(160,220,255,0.9)" strokeWidth="1.2"
        style={{ animation: "boltFlash 2.5s 0s infinite" }}
      />
      <polyline points="200,0 185,70 210,120 195,220" fill="none" stroke="rgba(160,220,255,0.9)" strokeWidth="1"
        style={{ animation: "boltFlash 3s 0.9s infinite" }}
      />
      <polyline points="290,20 275,90 300,150 280,240" fill="none" stroke="rgba(160,220,255,0.9)" strokeWidth="1"
        style={{ animation: "boltFlash 2.8s 1.6s infinite" }}
      />
      {/* glitch slices */}
      {[{y:60,h:2,d:"0s"},{y:150,h:3,d:"0.5s"},{y:210,h:2,d:"1.1s"}].map((s,i)=>(
        <rect key={i} x={0} y={s.y} width={320} height={s.h}
          fill="rgba(100,200,255,0.15)"
          style={{ animation: `glitchSlice 4s ${s.d} infinite` }}
        />
      ))}
    </svg>
  );
}


const BrandNarrative = () => {
  return (
    <div className="relative w-full px-4 md:px-10 lg:px-20 py-12 text-white overflow-hidden">

      {/* Subtle section-wide red smoke — no blur for perf */}
      {[
        { w:500, h:300, l:"-5%",  t:"60%", delay:"0s",  dur:"18s", color:"rgba(192,32,26,0.12)" },
        { w:400, h:260, l:"65%",  t:"55%", delay:"7s",  dur:"22s", color:"rgba(192,32,26,0.10)" },
      ].map((s,i)=>(
        <div key={i} className="pointer-events-none absolute rounded-full"
          style={{ width:s.w, height:s.h, left:s.l, top:s.t,
            background:`radial-gradient(ellipse, ${s.color} 0%, transparent 70%)`,
            willChange:"transform, opacity",
            animation:`smokeRise ${s.dur} ${s.delay} ease-in-out infinite` }}
        />
      ))}

      {/* ===== SECTION 1: DIVISIONS ===== */}
      <motion.h2
        className="relative z-10 text-center font-black uppercase text-2xl md:text-4xl lg:text-6xl tracking-wide mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        EACH TEE IS A CHAPTER
      </motion.h2>

      <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16 mb-20">
        {divisions.map((item, i) => {
          const { Effect } = item;
          return (
            <motion.div
              key={item.id}
              className="relative flex-1 overflow-hidden rounded-sm"
              style={{ minHeight: 260, border: "1px solid rgba(255,255,255,0.06)", background: "#0d0d0d" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
            >
              {/* per-division SVG effect */}
              <Effect />

              <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase mb-3"
                    style={{ color: item.color, opacity: 0.7 }}>
                    {item.label}
                  </p>
                  <h3
                    className="font-black uppercase text-lg md:text-xl lg:text-2xl mb-4 leading-tight"
                    style={{ color: item.color, animation: item.id === 1 ? "textGlitchRed 4s infinite" : item.id === 2 ? "textShimmer 2.8s ease-in-out infinite" : "textGlitchWhite 5s infinite" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/45 leading-relaxed max-w-[300px]">
                    {item.description}
                  </p>
                </div>

                {/* accent line */}
                <div className="mt-6 h-px w-12" style={{ background: item.color, opacity: 0.4 }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ===== SECTION 2: 240 GSM ===== */}
      <div className="relative z-10 border-t border-white/10 pt-12">

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="font-black text-3xl md:text-5xl" style={{ animation: "textShimmer 3s ease-in-out infinite" }}>
            240 GSM
          </h2>
          <p className="text-white/40 uppercase text-sm mt-2 tracking-[0.2em]">
            THE WEIGHT OF INTENT
          </p>
          <p className="text-xs md:text-sm text-white/40 max-w-xl mx-auto mt-3">
            Every MYNEK piece is built on 240GSM heavyweight cotton. Not because it's trending—
            because it holds the graphic, the wash, and the silhouette. Built to outlast the season.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="relative h-[120px] md:h-[150px] flex flex-col justify-center items-center text-center overflow-hidden"
              style={{ background: item.accent, border: "1px solid rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* corner brackets */}
              <span className="absolute top-2 left-2 text-white/15 text-xs select-none">┌</span>
              <span className="absolute top-2 right-2 text-white/15 text-xs select-none">┐</span>
              <span className="absolute bottom-2 left-2 text-white/15 text-xs select-none">└</span>
              <span className="absolute bottom-2 right-2 text-white/15 text-xs select-none">┘</span>

              <h3 className="relative z-10 font-black text-lg md:text-2xl tracking-tight">{item.title}</h3>
              <p className="relative z-10 text-[10px] text-white/40 mt-1 tracking-[0.22em] uppercase">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BrandNarrative;
