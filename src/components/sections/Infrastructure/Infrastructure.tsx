"use client";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import { AccordionItem } from "@/components/ui/Accordion";
import { useLanguage } from "@/i18n/context";

export default function Infrastructure() {
  const { t } = useLanguage();

  return (
    <Section id="infrastructure" watermark="06" className="bg-black">
      <Container>
        <MotionWrapper>
          <div className="mb-8">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.infrastructure.label}
            </span>
          </div>
          <h2
            className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            {t.infrastructure.title1}
            <br />
            {t.infrastructure.title2}
          </h2>
        </MotionWrapper>

        <div className="mt-24 mb-32">
          {t.infrastructure.blocks.map((block, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <div className="group grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-16 py-14 border-t border-white/5 hover:border-white/10 transition-colors duration-200">
                <div>
                  <span className="text-xs font-body text-accent tracking-[0.15em] block mb-4">
                    0{index + 1}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-white tracking-[-0.01em] uppercase">
                    {block.title}
                  </h3>
                </div>
                <p className="text-base text-muted leading-[1.8] font-body max-w-[55ch]">
                  {block.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper>
          <div className="h-px w-full bg-white/6 mb-20 mt-40" />
          <h3 className="font-display font-semibold text-2xl text-white mb-16 tracking-[-0.02em] uppercase">
            {t.infrastructure.slaTitle}
          </h3>
          <div className="max-w-[680px]">
            {t.infrastructure.slaItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}
