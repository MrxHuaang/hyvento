"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/i18n/context";

export default function HeroContent() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) {
      setVisible(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;
    const handleScroll = () => {
      section.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const headlineWords = [t.hero.line1, t.hero.line2, t.hero.line3];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center py-[160px]"
    >
      {/* Micro-label */}
      <div
        className={`mb-10 transition-all duration-700 ${
          visible && !prefersReducedMotion
            ? "opacity-100 translate-y-0"
            : prefersReducedMotion
              ? "opacity-100"
              : "opacity-0 translate-y-4"
        }`}
      >
        <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent">
          <span
            className="h-px bg-accent"
            style={{
              animation:
                visible && !prefersReducedMotion
                  ? "slideInLine 0.8s ease-out 0.5s forwards"
                  : "none",
              width: prefersReducedMotion ? "40px" : "0px",
            }}
            aria-hidden="true"
          />
          {t.hero.label}
        </span>
      </div>

      {/* MASSIVE Headline */}
      <div className="flex flex-col gap-0 mb-12">
        {headlineWords.map((word, i) => (
          <h1
            key={i}
            className="font-display font-black text-white leading-[0.9] tracking-[-0.04em] uppercase"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 10rem)",
              animation:
                visible && !prefersReducedMotion
                  ? `clipReveal 0.8s ease-out ${0.6 + i * 0.15}s forwards`
                  : "none",
              clipPath: prefersReducedMotion ? "none" : "inset(0 100% 0 0)",
            }}
          >
            {word}
          </h1>
        ))}
      </div>

      {/* Subtitle */}
      <p
        className={`text-lg text-grey-light font-body font-normal max-w-[55ch] leading-relaxed mb-12 transition-all duration-700 ${
          visible && !prefersReducedMotion
            ? "opacity-100 translate-y-0"
            : prefersReducedMotion
              ? "opacity-100"
              : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: prefersReducedMotion ? "0ms" : "1200ms" }}
      >
        {t.hero.subtitle1}
        <br />
        {t.hero.subtitle2}
      </p>

      {/* CTA */}
      <div
        className={`transition-all duration-700 ${
          visible && !prefersReducedMotion
            ? "opacity-100 translate-y-0"
            : prefersReducedMotion
              ? "opacity-100"
              : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: prefersReducedMotion ? "0ms" : "1400ms" }}
      >
        <Button variant="outline" size="lg" href="#contact">
          {t.hero.cta}
        </Button>
      </div>
    </div>
  );
}
