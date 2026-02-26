"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    let animationId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      const blocks =
        containerRef.current?.querySelectorAll<HTMLElement>("[data-float]");
      blocks?.forEach((block, i) => {
        const speed = 0.3 + i * 0.1;
        const offset = Math.sin(elapsed * speed + i * 1.2) * 6;
        const rotation = Math.sin(elapsed * speed * 0.5 + i) * 1.5;
        block.style.transform = `translateY(${offset}px) rotate(${rotation}deg)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] lg:h-[500px] hidden lg:flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Main architectural composition */}
      <div className="relative w-full h-full">
        {/* Large frame block */}
        <div
          data-float
          className="absolute top-[10%] right-[5%] w-[220px] h-[280px] border border-border-light/30 opacity-60"
        />

        {/* Accent block */}
        <div
          data-float
          className="absolute top-[25%] right-[25%] w-[160px] h-[160px] border border-accent/20 bg-accent/3"
        />

        {/* Small solid block */}
        <div
          data-float
          className="absolute bottom-[20%] right-[15%] w-[100px] h-[100px] bg-dark-secondary border border-border-dark"
        />

        {/* Horizontal line */}
        <div
          data-float
          className="absolute top-[45%] right-[0%] w-[280px] h-px bg-linear-to-l from-accent/40 to-transparent"
        />

        {/* Vertical accent line */}
        <div
          data-float
          className="absolute top-[15%] right-[40%] w-px h-[200px] bg-linear-to-b from-transparent via-accent/30 to-transparent"
        />

        {/* Dot grid */}
        <div className="absolute bottom-[30%] right-[35%] grid grid-cols-4 gap-3 opacity-30">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-neutral-400" />
          ))}
        </div>

        {/* Corner bracket top-right */}
        <div className="absolute top-[8%] right-[3%] w-6 h-6 border-t border-r border-accent/40" />

        {/* Corner bracket bottom-left */}
        <div className="absolute bottom-[15%] right-[45%] w-6 h-6 border-b border-l border-accent/40" />

        {/* Small label */}
        <div className="absolute bottom-[10%] right-[5%] text-[10px] font-body text-neutral-600 tracking-[0.2em] uppercase">
          sys.architecture
        </div>
      </div>
    </div>
  );
}
