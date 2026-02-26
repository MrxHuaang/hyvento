"use client";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/context";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <Section id="portfolio" watermark="04" className="bg-black">
      <Container>
        <MotionWrapper>
          <div className="mb-24">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent mb-6">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.portfolio.label}
            </span>
            <h2
              className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {t.portfolio.title1}
              <br />
              {t.portfolio.title2}
            </h2>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <MotionWrapper key={project.slug} delay={index * 0.12}>
              <ProjectCard project={project} />
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}
