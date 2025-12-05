"use client";
import LightPillar from "@/components/LightPillar";
import HeroSection from "../components/sections/HeroSection";
import QuickLinksSection from "../components/sections/QuickLinksSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 overflow-x-hidden relative">
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <LightPillar
          topColor="#22d3ee"
          bottomColor="#3b82f6"
          intensity={0.8}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={4.0}
          pillarHeight={0.6}
          noiseIntensity={0.5}
          pillarRotation={90}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>

      <div className="fixed inset-0 w-full h-full pointer-events-none z-[1] bg-black/20"></div>

      <div className="relative z-10">
        <HeroSection />

        <QuickLinksSection />
      </div>
    </div>
  );
}
