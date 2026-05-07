import { motion } from "framer-motion";
import artifactsBg from "@/assets/home/artifactsBackground.png";
import madaraTee from "@/assets/home/madaraTee.png";
import madaraTeeBg from "@/assets/home/madaraTeeBackground.png";
import warriorTee from "@/assets/home/warriorTee.png";
import warriorTeeBg from "@/assets/home/warriorTeeBackground.png";
import chaosTee from "@/assets/home/chaosTee.png";
import chaosTeeBg from "@/assets/home/chaosTeeBackground.png";

/* ─────────────── MADARA / ANIME EFFECT ─────────────── */
const EMBERS = [
  { x: 60, y: 380, delay: "0s", dur: "2.4s" },
  { x: 120, y: 420, delay: "0.5s", dur: "2.8s" },
  { x: 200, y: 450, delay: "1.1s", dur: "2.2s" },
  { x: 320, y: 400, delay: "0.3s", dur: "3.0s" },
  { x: 400, y: 460, delay: "1.6s", dur: "2.6s" },
  { x: 480, y: 440, delay: "0.8s", dur: "2.1s" },
  { x: 140, y: 460, delay: "2.0s", dur: "2.9s" },
  { x: 260, y: 430, delay: "1.4s", dur: "2.3s" },
];
const TOMOE = [0, 120, 240];

function MadaraEffect() {
  const cx = 225; const cy = 240;
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 450 480" preserveAspectRatio="xMidYMid slice">
      {/* Sharingan rings */}
      {[60, 100, 145, 195].map((r, i) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none"
          stroke="rgba(192,32,26,0.18)" strokeWidth={i === 0 ? 2 : 1}
          style={{ animation: `ringPulse ${2 + i * 0.4}s ease-in-out infinite alternate`, transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
      {/* Spinning tomoe group */}
      <g style={{ animation: "sharinganSpin 6s linear infinite", transformOrigin: `${cx}px ${cy}px` }}>
        {TOMOE.map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const tx = cx + 70 * Math.cos(rad); const ty = cy + 70 * Math.sin(rad);
          return (
            <g key={deg} transform={`translate(${tx},${ty})`}>
              <circle cx={0} cy={0} r={10} fill="rgba(192,32,26,0.55)" />
              <circle cx={8} cy={0} r={5} fill="rgba(192,32,26,0.4)" />
            </g>
          );
        })}
      </g>
      {/* Red embers */}
      {EMBERS.map((e, i) => (
        <circle key={i} cx={e.x} cy={e.y} r={2.5} fill="rgba(220,40,20,0.85)"
          style={{ animation: `emberFloat ${e.dur} ${e.delay} ease-out infinite` }}
        />
      ))}
      {/* Radial red glow */}
      <radialGradient id="madaraGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(192,32,26,0.35)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
      <circle cx={cx} cy={cy} r={200} fill="url(#madaraGlow)"
        style={{ animation: "auraPulse 2.8s ease-in-out infinite alternate" }}
      />
    </svg>
  );
}

function MadaraTextEffect() {
  const cx = 275; const cy = 260;
  return (
    <>
      {/* Full sharingan SVG — same style as HeroSlider */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 480" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.13 }}>
        <defs>
          <radialGradient id="sgRedText" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cc1a1a" stopOpacity="1" />
            <stop offset="60%" stopColor="#8b0000" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1a0000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r={220} fill="url(#sgRedText)" />
        <circle cx={cx} cy={cy} r={210} fill="none" stroke="#cc1a1a" strokeWidth="1.5" strokeOpacity="0.7" />
        <circle cx={cx} cy={cy} r={150} fill="none" stroke="#cc1a1a" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx={cx} cy={cy} r={80} fill="none" stroke="#cc1a1a" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx={cx} cy={cy} r={30} fill="#0a0000" />
        <circle cx={cx} cy={cy} r={20} fill="#1a0000" />
        {/* Inner tomoe — spinning */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "sharinganSpin 8s linear infinite" }}>
          {[0, 120, 240].map(deg => {
            const rad = (deg * Math.PI) / 180;
            const tx = cx + 110 * Math.sin(rad); const ty = cy - 110 * Math.cos(rad);
            const tail2x = cx + 142 * Math.sin(rad + 0.45); const tail2y = cy - 142 * Math.cos(rad + 0.45);
            return (
              <g key={deg}>
                <circle cx={tx} cy={ty} r={18} fill="#0a0000" />
                <circle cx={tx} cy={ty} r={12} fill="#cc1a1a" fillOpacity="0.9" />
                <ellipse cx={(tx + tail2x) / 2} cy={(ty + tail2y) / 2} rx={9} ry={5}
                  fill="#cc1a1a" fillOpacity="0.7"
                  transform={`rotate(${deg + 30},${(tx + tail2x) / 2},${(ty + tail2y) / 2})`}
                />
              </g>
            );
          })}
        </g>
        {/* Outer dots — counter-spin */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "sharinganSpin 20s linear infinite reverse" }}>
          {[0, 60, 120, 180, 240, 300].map(deg => {
            const rad = (deg * Math.PI) / 180;
            return <circle key={deg} cx={cx + 183 * Math.sin(rad)} cy={cy - 183 * Math.cos(rad)} r={5} fill="#cc1a1a" fillOpacity="0.5" />;
          })}
        </g>
        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map(deg => {
          const rad = (deg * Math.PI) / 180;
          return <line key={deg} x1={cx + 80 * Math.sin(rad)} y1={cy - 80 * Math.cos(rad)} x2={cx + 150 * Math.sin(rad)} y2={cy - 150 * Math.cos(rad)} stroke="#cc1a1a" strokeWidth="0.8" strokeOpacity="0.3" />;
        })}
      </svg>
      {/* Red smoke puffs */}
      {[
        { w: 280, h: 180, l: "10%", t: "65%", delay: "0s", dur: "12s", color: "rgba(192,32,26,0.4)" },
        { w: 220, h: 150, l: "40%", t: "72%", delay: "3s", dur: "15s", color: "rgba(160,20,15,0.35)" },
        { w: 300, h: 200, l: "-5%", t: "75%", delay: "6s", dur: "14s", color: "rgba(192,32,26,0.32)" },
      ].map((s, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: s.w, height: s.h, left: s.l, top: s.t,
            background: `radial-gradient(ellipse, ${s.color} 0%, transparent 70%)`,
            willChange: "transform, opacity",
            animation: `smokeRise ${s.dur} ${s.delay} ease-in-out infinite`
          }}
        />
      ))}
      {/* Floating embers */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 480" preserveAspectRatio="none">
        {[{ x: 60, y: 400, d: "0s" }, { x: 160, y: 440, d: "1.2s" }, { x: 300, y: 460, d: "0.6s" }, { x: 440, y: 420, d: "1.8s" }, { x: 110, y: 460, d: "2.4s" }].map((e, i) => (
          <circle key={i} cx={e.x} cy={e.y} r={2.5} fill="rgba(220,40,20,0.8)"
            style={{ animation: `emberFloat 2.8s ${e.d} ease-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

/* ─────────────── WARRIOR / SAMURAI EFFECT ─────────────── */
const SPEED_LINES_ART = [
  { angle: 0, l1: 60, l2: 160 }, { angle: 20, l1: 80, l2: 180 }, { angle: 40, l1: 50, l2: 140 },
  { angle: 60, l1: 90, l2: 200 }, { angle: 80, l1: 65, l2: 155 }, { angle: 100, l1: 75, l2: 170 },
  { angle: 120, l1: 85, l2: 185 }, { angle: 140, l1: 55, l2: 145 }, { angle: 160, l1: 95, l2: 195 },
  { angle: 180, l1: 70, l2: 160 }, { angle: 200, l1: 80, l2: 175 }, { angle: 220, l1: 60, l2: 150 },
  { angle: 240, l1: 88, l2: 188 }, { angle: 260, l1: 72, l2: 162 }, { angle: 280, l1: 92, l2: 192 },
  { angle: 300, l1: 58, l2: 148 }, { angle: 320, l1: 82, l2: 178 }, { angle: 340, l1: 66, l2: 156 },
];
const KANJI_ART = [
  { ch: "武", x: 60, y: 80, s: 28, delay: "0s", dur: "4s" },
  { ch: "侍", x: 380, y: 120, s: 22, delay: "1.5s", dur: "5s" },
  { ch: "魂", x: 200, y: 380, s: 26, delay: "0.8s", dur: "4.5s" },
  { ch: "刀", x: 320, y: 60, s: 20, delay: "2.2s", dur: "5.5s" },
  { ch: "道", x: 80, y: 300, s: 24, delay: "1.1s", dur: "4.2s" },
];

function WarriorEffect() {
  const cx = 225; const cy = 240;
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 450 480" preserveAspectRatio="xMidYMid slice">
      {/* Speed lines */}
      {SPEED_LINES_ART.map((l) => {
        const rad = (l.angle * Math.PI) / 180;
        return (
          <line key={l.angle}
            x1={cx + Math.cos(rad) * l.l1} y1={cy + Math.sin(rad) * l.l1}
            x2={cx + Math.cos(rad) * l.l2} y2={cy + Math.sin(rad) * l.l2}
            stroke="rgba(201,168,76,0.25)" strokeWidth={1}
            style={{ animation: `speedPulse 1.8s ${(l.angle / 40) * 0.15}s ease-in-out infinite alternate` }}
          />
        );
      })}
      {/* Sword slash */}
      <line x1={cx - 30} y1={cy - 100} x2={cx + 80} y2={cy + 80} stroke="rgba(201,168,76,0.9)" strokeWidth={2}
        style={{ animation: "slashFlash 3.5s 0.5s infinite" }}
      />
      {/* Gold aura */}
      <radialGradient id="warriorGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(201,168,76,0.3)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
      <circle cx={cx} cy={cy} r={190} fill="url(#warriorGlow)"
        style={{ animation: "auraPulse 3s ease-in-out infinite alternate" }}
      />
      {/* Kanji */}
      {KANJI_ART.map((k) => (
        <text key={k.ch} x={k.x} y={k.y} fontSize={k.s} fill="rgba(201,168,76,0.15)"
          fontFamily="Noto Serif JP, serif" textAnchor="middle"
          style={{ animation: `kanjiFloat ${k.dur} ${k.delay} ease-in-out infinite alternate` }}
        >
          {k.ch}
        </text>
      ))}
    </svg>
  );
}

const WARRIOR_TEXT_LINES = [
  { a: 0, l1: 40, l2: 130 }, { a: 18, l1: 55, l2: 145 }, { a: 36, l1: 35, l2: 120 }, { a: 54, l1: 65, l2: 155 },
  { a: 72, l1: 45, l2: 135 }, { a: 90, l1: 60, l2: 150 }, { a: 108, l1: 50, l2: 140 }, { a: 126, l1: 70, l2: 160 },
  { a: 144, l1: 38, l2: 125 }, { a: 162, l1: 58, l2: 148 }, { a: 180, l1: 48, l2: 138 }, { a: 198, l1: 62, l2: 152 },
  { a: 216, l1: 42, l2: 132 }, { a: 234, l1: 55, l2: 145 }, { a: 252, l1: 36, l2: 122 }, { a: 270, l1: 68, l2: 158 },
  { a: 288, l1: 44, l2: 134 }, { a: 306, l1: 57, l2: 147 }, { a: 324, l1: 40, l2: 128 }, { a: 342, l1: 63, l2: 153 },
];
const WARRIOR_TEXT_KANJI = [
  { ch: "武", x: 80, y: 90, s: 52, d: "0s", dur: "4s" },
  { ch: "侍", x: 460, y: 110, s: 40, d: "1.5s", dur: "5s" },
  { ch: "魂", x: 240, y: 420, s: 48, d: "0.8s", dur: "4.5s" },
  { ch: "刀", x: 490, y: 380, s: 36, d: "2.2s", dur: "5.5s" },
  { ch: "道", x: 50, y: 360, s: 44, d: "1.1s", dur: "4.2s" },
  { ch: "剣", x: 300, y: 60, s: 32, d: "1.7s", dur: "4.8s" },
];

function WarriorTextEffect() {
  const cx = 275; const cy = 260;
  return (
    <>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 480" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.18 }}>
        <defs>
          <radialGradient id="warriorTextGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.5)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        {/* Golden aura */}
        <circle cx={cx} cy={cy} r={220} fill="url(#warriorTextGlow)"
          style={{ animation: "auraPulse 3s ease-in-out infinite alternate" }}
        />
        {/* Speed lines radiating */}
        {WARRIOR_TEXT_LINES.map(l => {
          const rad = (l.a * Math.PI) / 180;
          return (
            <line key={l.a}
              x1={cx + Math.cos(rad) * l.l1} y1={cy + Math.sin(rad) * l.l1}
              x2={cx + Math.cos(rad) * l.l2} y2={cy + Math.sin(rad) * l.l2}
              stroke="rgba(201,168,76,0.6)" strokeWidth="0.8"
              style={{ animation: `speedPulse 2s ${(l.a / 36) * 0.12}s ease-in-out infinite alternate` }}
            />
          );
        })}
        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={185} fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="1"
          style={{ animation: "ringPulse 2.5s ease-in-out infinite alternate", transformOrigin: `${cx}px ${cy}px` }}
        />
        <circle cx={cx} cy={cy} r={110} fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="0.8" />
        {/* Sword slash */}
        <line x1={cx - 60} y1={cy - 140} x2={cx + 100} y2={cy + 120} stroke="rgba(201,168,76,0.95)" strokeWidth="2.5"
          style={{ animation: "slashFlash 3.5s 0.3s infinite" }}
        />
        <line x1={cx - 40} y1={cy - 140} x2={cx + 120} y2={cy + 120} stroke="rgba(255,220,100,0.4)" strokeWidth="1"
          style={{ animation: "slashFlash 3.5s 0.45s infinite" }}
        />
        {/* Floating kanji */}
        {WARRIOR_TEXT_KANJI.map(k => (
          <text key={k.ch} x={k.x} y={k.y} fontSize={k.s} fill="rgba(201,168,76,0.22)"
            fontFamily="Noto Serif JP, serif" textAnchor="middle"
            style={{ animation: `kanjiFloat ${k.dur} ${k.d} ease-in-out infinite alternate` }}
          >{k.ch}</text>
        ))}
      </svg>
      {/* Gold particle embers */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 480" preserveAspectRatio="none">
        {[{ x: 80, y: 410, d: "0s" }, { x: 200, y: 450, d: "1.0s" }, { x: 350, y: 430, d: "0.5s" }, { x: 470, y: 460, d: "1.7s" }, { x: 130, y: 460, d: "2.2s" }].map((e, i) => (
          <circle key={i} cx={e.x} cy={e.y} r={2.5} fill="rgba(201,168,76,0.8)"
            style={{ animation: `emberFloat 3s ${e.d} ease-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

/* ─────────────── CHAOS EFFECT ─────────────── */
const BOLTS = [
  [{ x: 60, y: 40 }, { x: 80, y: 120 }, { x: 55, y: 160 }, { x: 90, y: 260 }],
  [{ x: 350, y: 60 }, { x: 320, y: 150 }, { x: 360, y: 200 }, { x: 330, y: 310 }],
  [{ x: 200, y: 10 }, { x: 180, y: 100 }, { x: 210, y: 150 }, { x: 190, y: 260 }],
];
const GLITCH_SLICES = [
  { y: 100, h: 4, delay: "0s" },
  { y: 220, h: 3, delay: "0.3s" },
  { y: 340, h: 5, delay: "0.7s" },
];

function ChaosEffect() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 450 480" preserveAspectRatio="xMidYMid slice">
      {/* Scan lines */}
      <rect x={0} y={0} width={450} height={480}
        fill="none"
        stroke="rgba(255,255,255,0)"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 5px)",
          animation: "scanMove 3s linear infinite"
        }}
      />
      {/* Grid */}
      {[90, 180, 270].map(x => (
        <line key={x} x1={x} y1={0} x2={x} y2={480} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
      ))}
      {[96, 192, 288, 384].map(y => (
        <line key={y} x1={0} y1={y} x2={450} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
      ))}
      {/* Lightning bolts */}
      {BOLTS.map((pts, i) => (
        <polyline key={i} points={pts.map(p => `${p.x},${p.y}`).join(" ")}
          fill="none" stroke="rgba(180,220,255,0.9)" strokeWidth={1.5}
          style={{ animation: `boltFlash 2.5s ${i * 0.7}s infinite` }}
        />
      ))}
      {/* Glitch slices */}
      {GLITCH_SLICES.map((s, i) => (
        <rect key={i} x={0} y={s.y} width={450} height={s.h}
          fill="rgba(100,200,255,0.12)"
          style={{ animation: `glitchSlice 4s ${s.delay} infinite` }}
        />
      ))}
      {/* White center glow */}
      <radialGradient id="chaosGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
      <circle cx={225} cy={240} r={180} fill="url(#chaosGlow)"
        style={{ animation: "auraPulse 2.2s ease-in-out infinite alternate" }}
      />
    </svg>
  );
}

const CHAOS_TEXT_BOLTS = [
  [{ x: 60, y: 0 }, { x: 75, y: 80 }, { x: 50, y: 130 }, { x: 80, y: 220 }, { x: 55, y: 310 }, { x: 85, y: 400 }, { x: 60, y: 480 }],
  [{ x: 200, y: 0 }, { x: 185, y: 90 }, { x: 215, y: 150 }, { x: 195, y: 240 }, { x: 220, y: 330 }, { x: 200, y: 480 }],
  [{ x: 350, y: 0 }, { x: 365, y: 85 }, { x: 335, y: 145 }, { x: 360, y: 230 }, { x: 340, y: 320 }, { x: 370, y: 420 }, { x: 350, y: 480 }],
  [{ x: 480, y: 60 }, { x: 460, y: 160 }, { x: 490, y: 240 }, { x: 465, y: 340 }, { x: 500, y: 440 }],
  [{ x: 130, y: 0 }, { x: 145, y: 100 }, { x: 115, y: 180 }, { x: 140, y: 280 }, { x: 120, y: 380 }],
];
const CHAOS_TEXT_GLITCHES = [
  { y: 80, h: 3, d: "0s" }, { y: 180, h: 4, d: "0.4s" }, { y: 260, h: 2, d: "0.9s" }, { y: 360, h: 5, d: "1.4s" }, { y: 420, h: 3, d: "0.2s" },
];

function ChaosTextEffect() {
  return (
    <>
      {/* Full thunder SVG background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 480" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.22 }}>
        <defs>
          <radialGradient id="chaosTextGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(140,200,255,0.35)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        {/* Center electric glow */}
        <circle cx={275} cy={240} r={200} fill="url(#chaosTextGlow)"
          style={{ animation: "auraPulse 2.2s ease-in-out infinite alternate" }}
        />
        {/* Tech grid */}
        {[110, 220, 330, 440].map(x => (
          <line key={x} x1={x} y1={0} x2={x} y2={480} stroke="rgba(100,200,255,0.15)" strokeWidth="0.8" />
        ))}
        {[80, 160, 240, 320, 400].map(y => (
          <line key={y} x1={0} y1={y} x2={550} y2={y} stroke="rgba(100,200,255,0.15)" strokeWidth="0.8" />
        ))}
        {/* Lightning bolts — full height */}
        {CHAOS_TEXT_BOLTS.map((pts, i) => (
          <polyline key={i} points={pts.map(p => `${p.x},${p.y}`).join(" ")}
            fill="none" stroke="rgba(160,220,255,0.95)" strokeWidth={i === 1 ? 2 : 1.2}
            style={{ animation: `boltFlash ${2 + i * 0.4}s ${i * 0.6}s infinite` }}
          />
        ))}
        {/* Branch bolts */}
        <polyline points="200,150 230,200 210,240" fill="none" stroke="rgba(160,220,255,0.7)" strokeWidth="0.8"
          style={{ animation: "boltFlash 2.8s 0.3s infinite" }}
        />
        <polyline points="350,230 380,270 355,310" fill="none" stroke="rgba(160,220,255,0.7)" strokeWidth="0.8"
          style={{ animation: "boltFlash 3.2s 1.1s infinite" }}
        />
        {/* Glitch slices */}
        {CHAOS_TEXT_GLITCHES.map((s, i) => (
          <rect key={i} x={0} y={s.y} width={550} height={s.h}
            fill="rgba(100,200,255,0.18)"
            style={{ animation: `glitchSlice 4s ${s.d} infinite` }}
          />
        ))}
        {/* Corner markers */}
        {[[10, 10], [540, 10], [10, 470], [540, 470]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={x + (i % 2 ? -14 : 14)} y2={y} stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" />
            <line x1={x} y1={y} x2={x} y2={y + (i < 2 ? 14 : -14)} stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" />
          </g>
        ))}
      </svg>
      {/* Moving scan lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          background: "repeating-linear-gradient(0deg,rgba(100,200,255,0.4) 0px,rgba(100,200,255,0.4) 1px,transparent 1px,transparent 4px)",
          animation: "scanMove 3s linear infinite",
        }}
      />
    </>
  );
}

/* ─────────────── SEAM DIVIDER ─────────────── */
function SeamDivider({ color, pointRight }: { color: string; pointRight: boolean }) {
  // seam is at 55% from left when image is right, 45% when image is left
  const seamPct = pointRight ? 55 : 45;
  return (
    <svg
      className="absolute top-0 z-30 pointer-events-none"
      style={{
        height: "100%",
        width: 40,
        left: `calc(${seamPct}% - 20px)`,
        transform: pointRight ? "none" : "scaleX(-1)",
      }}
      viewBox="0 0 40 480"
      preserveAspectRatio="none"
    >
      <line x1="20" y1="0" x2="20" y2="480" stroke={color} strokeWidth="3" strokeOpacity="1" />
      <rect x="21" y="120" width="6" height="240" fill={color} fillOpacity="1" />
      <polygon points="20,218 36,240 20,262 24,240" fill={color} fillOpacity="1" />
    </svg>
  );
}

/* ─────────────── DATA ─────────────── */
const artifacts = [
  {
    id: "madara",
    world: "ANIME WORLD",
    title: "WAKE UP TO REALITY",
    subtitle: "For Those Who Move With Purpose In A World That Never Goes As Planned",
    price: "29.99",
    tee: madaraTee,
    bg: madaraTeeBg,
    teeAlign: "right" as const,
    textColor: "#c0201a",
    teeShadow: "0 0 40px rgba(192,32,26,0.6)",
    titleAnim: "textGlitchRed 3.5s infinite",
    btnGlow: "btnGlowRed 1.8s ease-in-out infinite alternate",
    ImageEffect: MadaraEffect,
    TextEffect: MadaraTextEffect,
  },
  {
    id: "warrior",
    world: "SAMURAI WORLD",
    title: "RESPECT THE ROOTS",
    subtitle: "Legacy Flows Through Blood. Carry The Weight. Honor The Path",
    price: "29.99",
    tee: warriorTee,
    bg: warriorTeeBg,
    teeAlign: "left" as const,
    textColor: "#c9a84c",
    teeShadow: "0 0 40px rgba(201,168,76,0.55)",
    titleAnim: "textGlitchGold 5s 1.5s steps(1) infinite",
    btnGlow: "btnGlowGold 1.8s ease-in-out infinite alternate",
    ImageEffect: WarriorEffect,
    TextEffect: WarriorTextEffect,
  },
  {
    id: "chaos",
    world: "TECH / CHAOS WORLD",
    title: "ORGANIZED CHAOS",
    subtitle: "We Are The Noise In The System. Controlled. Precise. Unstoppable",
    price: "29.99",
    tee: chaosTee,
    bg: chaosTeeBg,
    teeAlign: "right" as const,
    textColor: "#ffffff",
    teeShadow: "0 0 40px rgba(180,220,255,0.5)",
    titleAnim: "textGlitchWhite 4s infinite",
    btnGlow: "btnGlowWhite 1.8s ease-in-out infinite alternate",
    ImageEffect: ChaosEffect,
    TextEffect: ChaosTextEffect,
  },
];

/* ─────────────── COMPONENT ─────────────── */
export function ArtifactDrops() {
  return (
    <section className="relative bg-ink py-16 px-6 overflow-hidden">
      <img src={artifactsBg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />

      {/* ── Section-level anime overlay ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating embers across entire section */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid slice">
          {[
            { x: 80, y: 820, c: "rgba(192,32,26,0.7)", r: 2.5, d: "0s", dur: "3.2s" },
            { x: 240, y: 860, c: "rgba(201,168,76,0.7)", r: 2, d: "0.8s", dur: "2.8s" },
            { x: 430, y: 840, c: "rgba(180,220,255,0.7)", r: 2, d: "1.5s", dur: "3.5s" },
            { x: 620, y: 870, c: "rgba(192,32,26,0.6)", r: 3, d: "0.4s", dur: "2.6s" },
            { x: 800, y: 830, c: "rgba(201,168,76,0.6)", r: 2.5, d: "2.0s", dur: "3.0s" },
            { x: 940, y: 855, c: "rgba(180,220,255,0.6)", r: 2, d: "1.1s", dur: "3.8s" },
            { x: 140, y: 880, c: "rgba(201,168,76,0.5)", r: 1.8, d: "2.5s", dur: "2.9s" },
            { x: 530, y: 850, c: "rgba(192,32,26,0.5)", r: 1.5, d: "1.8s", dur: "3.3s" },
            { x: 720, y: 875, c: "rgba(180,220,255,0.5)", r: 2.2, d: "0.6s", dur: "2.7s" },
          ].map((e, i) => (
            <circle key={i} cx={e.x} cy={e.y} r={e.r} fill={e.c}
              style={{ animation: `emberFloat ${e.dur} ${e.d} ease-out infinite` }}
            />
          ))}
        </svg>

        {/* Red smoke — bottom left */}
        {[
          { w: 400, h: 250, l: "-4%", t: "72%", delay: "0s", dur: "16s", color: "rgba(192,32,26,0.22)" },
          { w: 320, h: 200, l: "60%", t: "78%", delay: "4s", dur: "20s", color: "rgba(160,20,15,0.18)" },
          { w: 350, h: 220, l: "30%", t: "80%", delay: "8s", dur: "18s", color: "rgba(192,32,26,0.16)" },
        ].map((s, i) => (
          <div key={i} className="absolute rounded-full"
            style={{
              width: s.w, height: s.h, left: s.l, top: s.t,
              background: `radial-gradient(ellipse, ${s.color} 0%, transparent 70%)`,
              willChange: "transform, opacity",
              animation: `smokeRise ${s.dur} ${s.delay} ease-in-out infinite`
            }}
          />
        ))}

        {/* Subtle horizontal speed lines — full width */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1000 900" preserveAspectRatio="none">
          {[120, 200, 310, 450, 560, 680, 780, 850].map((y, i) => (
            <line key={y} x1={0} y1={y} x2={1000} y2={y}
              stroke={i % 3 === 0 ? "rgba(192,32,26,1)" : i % 3 === 1 ? "rgba(201,168,76,1)" : "rgba(180,220,255,1)"}
              strokeWidth="1"
              style={{ animation: `speedPulse 2.2s ${i * 0.25}s ease-in-out infinite alternate` }}
            />
          ))}
        </svg>

        {/* Scattered lightning flash — top corners */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.12 }}>
          <polyline points="30,0 45,60 25,100 55,180 30,260" fill="none" stroke="rgba(180,220,255,0.9)" strokeWidth="1.2"
            style={{ animation: "boltFlash 4s 0.5s infinite" }}
          />
          <polyline points="970,0 955,70 975,120 950,200 970,290" fill="none" stroke="rgba(180,220,255,0.9)" strokeWidth="1.2"
            style={{ animation: "boltFlash 4s 2s infinite" }}
          />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-white/40 text-xs tracking-[0.25em] uppercase mb-2">
          Drop 01 · Three Worlds · No Restocks
        </p>
        <h2
          className="font-black uppercase text-bone leading-none"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
        >
          Three Artifacts. One Drop
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 items-center">
        {artifacts.map((a, i) => {
          const teeOnRight = a.teeAlign === "right";
          const { ImageEffect, TextEffect } = a;
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="relative flex overflow-hidden"
              style={{
                height: 480,
                width: 1000,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* ── Text panel ── */}
              <div
                className="relative flex flex-col justify-between p-8 flex-1 overflow-hidden"
                style={{ background: "#111111", order: teeOnRight ? 0 : 1 }}
              >
                <TextEffect />

                {/* Top labels */}
                <div className="relative z-10 flex justify-between text-[10px] tracking-[0.25em] uppercase text-white/30 font-medium">
                  <span>Coming Soon</span>
                  <span>Limited</span>
                </div>

                {/* World + Title + Subtitle */}
                <div className="relative z-10 flex flex-col gap-3">
                  <p className="text-[10px] tracking-[0.22em] uppercase font-semibold" style={{ color: a.textColor }}>
                    {a.world}
                  </p>
                  <h3
                    className="font-black uppercase leading-[0.95] tracking-tight"
                    style={{
                      fontSize: "4rem",
                      color: a.textColor,
                      animation: a.titleAnim,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-[12px] text-white/45 leading-relaxed max-w-[260px]">
                    {a.subtitle}
                  </p>
                </div>

                {/* Price + CTA */}
                <div className="relative z-10 flex items-center gap-5">
                  <span className="font-black leading-none" style={{ fontSize: "2rem", color: a.textColor }}>
                    {a.price}
                    <span className="text-[11px] font-normal text-white/40 ml-1 align-middle">GBP</span>
                  </span>
                  <button
                    className="text-bone text-[10px] tracking-[0.22em] uppercase px-6 py-3 border border-white/35 hover:bg-white/10 transition-colors"
                    style={{ animation: a.btnGlow }}
                  >
                    View Artifact
                  </button>
                </div>
              </div>

              {/* ── Image panel ── */}
              <div
                className="relative flex-shrink-0 flex items-center justify-center overflow-hidden"
                style={{ width: "45%", order: teeOnRight ? 1 : 0 }}
              >
                {/* Background photo */}
                <img src={a.bg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
                {/* Dark base tint */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Gradient seam fade */}
                <div className="absolute inset-0" style={{
                  background: teeOnRight
                    ? "linear-gradient(to right, rgba(17,17,17,0.7) 0%, transparent 35%)"
                    : "linear-gradient(to left, rgba(17,17,17,0.7) 0%, transparent 35%)",
                }} />
                {/* Anime SVG effect */}
                <ImageEffect />
                {/* T-shirt */}
                <img
                  src={a.tee}
                  alt={a.title}
                  className="relative z-10 h-[90%] w-auto object-contain"
                  style={{
                    filter: `drop-shadow(${a.teeShadow})`,
                    animation: "float-slow 6s ease-in-out infinite",
                  }}
                />
              </div>
              <SeamDivider color={a.textColor} pointRight={teeOnRight} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
