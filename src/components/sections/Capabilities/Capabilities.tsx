"use client";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import { useLanguage } from "@/i18n/context";

export default function Capabilities() {
  const { t } = useLanguage();

  return (
    <Section id="capabilities" watermark="01">
      <Container>
        <MotionWrapper>
          <div className="mb-8">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.capabilities.label}
            </span>
          </div>
          <h2
            className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            {t.capabilities.title1}
            <br />
            {t.capabilities.title2}
          </h2>
        </MotionWrapper>

        <div className="mt-24 flex flex-col">
          <div className="h-px w-full bg-white/6" />
          {t.capabilities.services.map((service, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              {/* Service block with whileHover: x→8 on title + scaleX line */}
              <div
                className={`group grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 py-20 lg:py-24 items-start border-b border-white/5 hover:border-white/10 transition-colors duration-200 ${
                  index % 2 !== 0
                    ? "md:grid-cols-[1.5fr_1fr] md:[direction:rtl]"
                    : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                  <span className="text-xs font-body text-accent tracking-[0.15em] uppercase block mb-4">
                    0{index + 1}
                  </span>
                  <h3
                    className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                  <p className="text-base text-muted leading-[1.85] font-body max-w-[55ch]">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-white/6" />
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}
