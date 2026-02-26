"use client";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import TechItem from "./TechItem";
import { technologies } from "@/data/technologies";
import { useLanguage } from "@/i18n/context";

export default function TechStack() {
  const { t } = useLanguage();

  const categories = [
    { key: "frontend" as const, label: t.techStack.frontend },
    { key: "backend" as const, label: t.techStack.backend },
    { key: "infrastructure" as const, label: t.techStack.infrastructure },
  ];

  return (
    <Section id="technology" watermark="03" noiseVariant>
      <Container>
        <MotionWrapper>
          <div className="mb-24">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent mb-6">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.techStack.label}
            </span>
            <h2
              className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t.techStack.title1}
              <br />
              {t.techStack.title2}
            </h2>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {categories.map((cat, catIndex) => {
            const items = technologies.filter(
              (tech) => tech.category === cat.key,
            );
            return (
              <MotionWrapper key={cat.key} delay={catIndex * 0.1}>
                <div
                  className={`py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 ${
                    catIndex < categories.length - 1
                      ? "md:border-r border-accent/20"
                      : ""
                  } ${catIndex > 0 ? "border-t md:border-t-0 border-white/[0.06]" : ""}`}
                >
                  <h3 className="font-display font-semibold text-sm text-accent uppercase tracking-[0.15em] mb-8 pb-4 border-b border-white/[0.06]">
                    {cat.label}
                  </h3>
                  <ul className="flex flex-col gap-0">
                    {items.map((tech) => (
                      <TechItem key={tech.name} technology={tech} />
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
