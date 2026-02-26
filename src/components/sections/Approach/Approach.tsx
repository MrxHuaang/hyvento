"use client";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import { useLanguage } from "@/i18n/context";

export default function Approach() {
  const { t } = useLanguage();

  return (
    <Section id="approach" watermark="02" className="bg-black">
      <Container>
        <MotionWrapper>
          <div className="mb-24">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent mb-6">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.approach.label}
            </span>
            <h2
              className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t.approach.title1}
              <br />
              {t.approach.title2}
            </h2>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {t.approach.phases.map((phase, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <div className="group relative py-10 lg:py-12 px-0 lg:px-6 border-t border-white/[0.06] first:lg:pl-0 last:lg:pr-0">
                {index < t.approach.phases.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-0 right-0 w-px h-full bg-white/[0.06]"
                    aria-hidden="true"
                  />
                )}
                <span className="text-xs font-body text-accent tracking-[0.15em] uppercase block mb-5">
                  0{index + 1}
                </span>
                <h3 className="font-display font-semibold text-xl text-white mb-5 tracking-[-0.01em] uppercase transition-transform duration-300 group-hover:-translate-y-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted leading-[1.75] font-body max-w-[55ch]">
                  {phase.description}
                </p>
                <div
                  className="mt-5 h-px bg-accent w-0 group-hover:w-10 transition-all duration-500 ease-out"
                  aria-hidden="true"
                />
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}
