"use client";

import Container from "@/components/primitives/Container";
import HeroContent from "./HeroContent";
import LightPillar from "@/components/ui/LightPillar";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 65% 40%, rgba(17,191,156,0.18) 0%, rgba(17,191,156,0.06) 40%, transparent 70%)",
        }}
      />

      {/* LightPillar aurora effect with mask fade */}
      <div className="absolute inset-0 z-0 mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]">
        <LightPillar
          topColor="#11BF9C"
          bottomColor="#000000"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <HeroContent />
      </Container>

      {/* Fade bottom — smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #000000 100%)",
        }}
      />
    </section>
  );
}
