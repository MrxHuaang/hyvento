"use client";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/i18n/context";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Section
      id="contact"
      watermark="07"
      noiseVariant
      className="py-[200px]! md:py-[280px]!"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-32">
          <MotionWrapper>
            <div className="flex flex-col gap-8">
              <div className="mb-8">
                <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent">
                  <span className="w-10 h-px bg-accent" aria-hidden="true" />
                  {t.contact.label}
                </span>
              </div>
              <h2
                className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                {t.contact.title1}
                <br />
                {t.contact.title2}
              </h2>
              <p className="text-base text-muted leading-relaxed max-w-[55ch] font-body mt-4">
                {t.contact.description}
              </p>
              <div className="mt-10 pt-10 border-t border-white/6">
                <p className="text-sm text-grey font-body">{t.contact.email}</p>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.15}>
            <ContactForm />
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
}
