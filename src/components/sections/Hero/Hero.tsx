"use client";

import Container from "@/components/primitives/Container";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.015] z-[3]"
        style={{
          backgroundImage: `linear-gradient(rgba(17,191,156,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(17,191,156,0.3) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <HeroContent />
      </Container>
    </section>
  );
}
