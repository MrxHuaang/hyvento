"use client";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import { useLanguage } from "@/i18n/context";

export default function Security() {
  const { t } = useLanguage();

  return (
    <Section id="security" watermark="05">
      <Container>
        <MotionWrapper>
          <div className="mb-24">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent mb-6">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.security.label}
            </span>
            <h2
              className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t.security.title1}
              <br />
              {t.security.title2}
            </h2>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {t.security.items.map((item, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <div className="group py-12 px-0 md:px-8 first:md:pl-0 border-t border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-body text-accent tracking-[0.15em] mt-1 shrink-0">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white mb-4 tracking-[-0.01em] uppercase transition-transform duration-300 group-hover:-translate-y-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-[1.75] font-body max-w-[55ch]">
                      {item.description}
                    </p>
                    <div
                      className="mt-5 h-px bg-accent w-0 group-hover:w-10 transition-all duration-500 ease-out"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}
