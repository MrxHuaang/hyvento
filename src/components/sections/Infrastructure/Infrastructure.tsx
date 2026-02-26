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
          <div className="mb-24">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent mb-6">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.infrastructure.label}
            </span>
            <h2
              className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t.infrastructure.title1}
              <br />
              {t.infrastructure.title2}
            </h2>
          </div>
        </MotionWrapper>

        <div className="mb-24">
          {t.infrastructure.blocks.map((block, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16 py-12 border-t border-white/[0.06]">
                <div>
                  <span className="text-xs font-body text-accent tracking-[0.15em] block mb-3">
                    0{index + 1}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-white tracking-[-0.01em] uppercase transition-transform duration-300 group-hover:-translate-y-1">
                    {block.title}
                  </h3>
                  <div
                    className="mt-3 h-px bg-accent w-0 group-hover:w-10 transition-all duration-500 ease-out"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base text-muted leading-[1.8] font-body max-w-[55ch]">
                  {block.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper>
          <div className="h-px w-full bg-white/[0.06] mb-14" />
          <h3 className="font-display font-semibold text-xl text-white mb-10 tracking-[-0.02em] uppercase">
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
