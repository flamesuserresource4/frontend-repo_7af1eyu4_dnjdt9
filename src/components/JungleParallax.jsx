import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function JungleParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const skyY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const farY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section id="top" ref={ref} className="relative h-[120vh] overflow-hidden bg-[#020b07]">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[60vh] w-[60vh] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-[40vh] w-[40vh] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Sky gradient */}
      <motion.div style={{ y: skyY }} className="absolute inset-0 z-10">
        <div className="h-full w-full bg-gradient-to-b from-[#031a12] via-[#03140f] to-transparent" />
        {/* Stars */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 80 }).map((_, i) => (
            <circle key={i} cx={Math.random() * 1600} cy={Math.random() * 900} r={Math.random() * 1.5 + 0.2} fill="#a7f3d0" opacity={Math.random() * 0.7 + 0.2} />
          ))}
        </svg>
      </motion.div>

      {/* Distant canopy silhouette */}
      <motion.div style={{ y: farY }} className="absolute bottom-0 left-0 right-0 z-20">
        <JungleLayer color="#0f3a2e" opacity={0.7} height={220} density={10} />
      </motion.div>

      {/* Mid canopy */}
      <motion.div style={{ y: midY }} className="absolute bottom-0 left-0 right-0 z-30">
        <JungleLayer color="#125b45" opacity={0.9} height={280} density={8} />
      </motion.div>

      {/* Foreground leaves */}
      <motion.div style={{ y: nearY }} className="absolute bottom-0 left-0 right-0 z-40">
        <JungleLayer color="#1aa36d" opacity={1} height={340} density={6} detail />
      </motion.div>

      {/* Title */}
      <div className="relative z-50 mx-auto flex h-full max-w-7xl items-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-200 to-emerald-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.45)]">
              Jungle Glow
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Dive into a glowing rainforest with layered parallax depth and soothing neon accents. Scroll to explore the canopy.
          </p>
          <a href="#features" className="mt-8 inline-block rounded-xl bg-emerald-500/20 px-5 py-3 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-400/25 hover:text-white transition-colors shadow-[0_0_40px_rgba(16,185,129,0.25)]">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}

function JungleLayer({ color = '#14532d', opacity = 1, height = 200, density = 8, detail = false }) {
  const width = 1600;
  const layerPaths = generateJunglePaths(width, height, density, detail);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {layerPaths.map((d, i) => (
        <path key={i} d={d} fill={color} opacity={opacity} filter={detail && i % 2 === 0 ? 'url(#glow)' : undefined} />
      ))}
    </svg>
  );
}

function generateJunglePaths(width, height, density, detail) {
  const paths = [];
  const segments = density;
  const baseY = height - 20;
  for (let i = 0; i < 3; i++) {
    let d = `M 0 ${baseY - i * 10}`;
    for (let s = 0; s <= segments; s++) {
      const x = (s / segments) * width;
      const variance = Math.sin((s + i) * 1.4) * 16 + Math.cos((s + i) * 0.9) * 12;
      const y = baseY - i * 12 - variance - Math.random() * 6;
      d += ` L ${x} ${y}`;
      if (detail && s % 2 === 0) {
        // add leaf shapes
        const leafW = 26 + Math.random() * 18;
        const leafH = 38 + Math.random() * 22;
        const lx = x + (Math.random() * 40 - 20);
        const ly = y - (Math.random() * 24 + 14);
        const leaf = ` M ${lx} ${ly} q ${leafW / 2} ${-leafH / 2} ${leafW} 0 q ${-leafW / 2} ${leafH / 2} ${-leafW} 0 z`;
        d += leaf;
      }
    }
    d += ` L ${width} ${height} L 0 ${height} Z`;
    paths.push(d);
  }
  return paths;
}
