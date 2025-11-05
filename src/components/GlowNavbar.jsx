import React from 'react';

export default function GlowNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <nav className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-black/40 px-4 py-2 backdrop-blur-md shadow-[0_0_60px_rgba(16,185,129,0.15)]">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_6px_rgba(16,185,129,0.6)]" />
            <span className="font-bold tracking-wide text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]">
              Jungle Glow
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <a href="#about" className="text-white/80 hover:text-emerald-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="text-white/80 hover:text-emerald-300 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#explore" className="text-white/80 hover:text-emerald-300 transition-colors">
                Explore
              </a>
            </li>
          </ul>
          <a
            href="#explore"
            className="rounded-lg bg-emerald-500/20 px-3 py-1.5 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-400/25 hover:text-white transition-colors"
          >
            Enter Jungle
          </a>
        </nav>
      </div>
    </header>
  );
}
