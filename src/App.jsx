import React from 'react';
import GlowNavbar from './components/GlowNavbar';
import JungleParallax from './components/JungleParallax';
import FeatureCards from './components/FeatureCards';
import FooterCTA from './components/FooterCTA';

function AboutSection() {
  return (
    <section id="about" className="relative z-10 bg-gradient-to-b from-transparent to-[#030f0b] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Parallax Jungle, Neon Calm</h2>
            <p className="mt-4 text-white/80">
              A lush, glowing rainforest ambience with layered silhouettes and soft bloom effects. Scroll to see the depth shift as the canopy moves at different speeds — a tranquil, cinematic feel that puts your content in the spotlight.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-cyan-400/10 blur-2xl" />
            <div className="relative rounded-3xl border border-emerald-400/20 bg-white/[0.03] p-6 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
              <ul className="grid gap-3 text-white/80">
                <li>• Cinematic depth with layered SVG canopies</li>
                <li>• Neon glow accents that feel organic</li>
                <li>• Smooth performance across devices</li>
                <li>• Tailwind styling for easy customization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#020b07] text-white">
      <GlowNavbar />
      <main>
        <JungleParallax />
        <AboutSection />
        <FeatureCards />
        <FooterCTA />
      </main>
    </div>
  );
}
