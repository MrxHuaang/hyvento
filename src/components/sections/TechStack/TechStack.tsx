"use client";

import { motion } from "framer-motion";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
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
          <div className="mb-8">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.techStack.label}
            </span>
          </div>
          <h2
            className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            {t.techStack.title1}
            <br />
            {t.techStack.title2}
          </h2>
        </MotionWrapper>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-0">
          {categories.map((cat, catIndex) => {
            const items = technologies.filter(
              (tech) => tech.category === cat.key,
            );
            return (
              <MotionWrapper key={cat.key} delay={catIndex * 0.1}>
                <div
                  className={`py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 ${
                    catIndex < categories.length - 1
                      ? "md:border-r border-white/10"
                      : ""
                  } ${catIndex > 0 ? "border-t md:border-t-0 border-white/6" : ""}`}
                >
                  <h3 className="font-display font-semibold text-sm text-accent uppercase tracking-[0.15em] mb-10 pb-4 border-b border-white/6">
                    {cat.label}
                  </h3>
                  <ul className="flex flex-col gap-y-6">
                    {items.map((tech, techIdx) => (
                      <motion.li
                        key={tech.name}
                        className="group flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: techIdx * 0.05 }}
                      >
                        <span
                          className="text-accent text-sm shrink-0 font-body"
                          aria-hidden="true"
                        >
                          —
                        </span>
                        <span className="font-body text-base text-muted group-hover:text-accent transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.li>
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
