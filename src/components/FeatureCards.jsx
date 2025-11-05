import React from 'react';

const features = [
  {
    title: 'Layered Parallax',
    desc: 'Multiple jungle layers move at different speeds to create cinematic depth as you scroll.',
    glow: 'from-emerald-400/40 to-emerald-600/20',
  },
  {
    title: 'Neon Glow',
    desc: 'Soft neon highlights and subtle blooms bring the rainforest to life without being harsh.',
    glow: 'from-cyan-400/40 to-emerald-400/10',
  },
  {
    title: 'Smooth & Responsive',
    desc: 'Built with modern animations that run smoothly on desktop and mobile.',
    glow: 'from-emerald-300/40 to-cyan-300/10',
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Designed for Immersion</h2>
          <p className="mt-3 text-white/70">A glowing jungle experience crafted with depth and motion.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article key={i} className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-white/[0.02] p-6 shadow-[0_0_60px_rgba(16,185,129,0.12)]">
              <div className={`pointer-events-none absolute -inset-20 bg-gradient-to-br ${f.glow} blur-3xl`} />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_6px_rgba(16,185,129,0.55)]" />
                  <h3 className="text-xl font-semibold text-emerald-200">{f.title}</h3>
                </div>
                <p className="text-white/80">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
