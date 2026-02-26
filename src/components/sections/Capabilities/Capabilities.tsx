"use client";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import CapabilityBlock from "./CapabilityBlock";
import { useLanguage } from "@/i18n/context";

export default function Capabilities() {
  const { t } = useLanguage();

  return (
    <Section id="capabilities" watermark="01">
      <Container>
        <MotionWrapper>
          <div className="mb-24">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent mb-6">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.capabilities.label}
            </span>
            <h2
              className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t.capabilities.title1}
              <br />
              {t.capabilities.title2}
            </h2>
          </div>
        </MotionWrapper>

        <div className="flex flex-col">
          <div className="h-px w-full bg-white/[0.06]" />
          {t.capabilities.services.map((service, index) => (
            <MotionWrapper key={index} delay={index * 0.12}>
              <CapabilityBlock
                number={`0${index + 1}`}
                title={service.title}
                description={service.description}
                reversed={index % 2 !== 0}
              />
              <div className="h-px w-full bg-white/[0.06]" />
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}
