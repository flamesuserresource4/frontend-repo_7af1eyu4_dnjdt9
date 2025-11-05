import React from 'react';

export default function FooterCTA() {
  return (
    <footer id="explore" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Ready to wander deeper into the canopy?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-white/75">
          This jungle-themed parallax glow site is a great foundation for portfolios, product pages, or ambient landing pages.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#top"
            className="rounded-xl border border-emerald-400/30 bg-emerald-500/20 px-6 py-3 text-emerald-200 shadow-[0_0_40px_rgba(16,185,129,0.25)] transition hover:bg-emerald-400/25 hover:text-white"
          >
            Back to Top
          </a>
          <a
            href="#features"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white/90 transition hover:bg-white/10"
          >
            See Features
          </a>
        </div>
        <p className="mt-10 text-xs text-white/60">Crafted with love under the neon canopy.</p>
      </div>
    </footer>
  );
}
