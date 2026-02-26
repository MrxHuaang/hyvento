"use client";

import { motion } from "framer-motion";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import { useLanguage } from "@/i18n/context";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

export default function Approach() {
  const { t } = useLanguage();

  return (
    <Section id="approach" watermark="02" className="bg-black">
      <Container>
        <MotionWrapper>
          <div className="mb-8">
            <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              {t.approach.label}
            </span>
          </div>
          <h2
            className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            {t.approach.title1}
            <br />
            {t.approach.title2}
          </h2>
        </MotionWrapper>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {t.approach.phases.map((phase, index) => (
            <motion.div
              key={index}
              className="group relative p-10 md:p-12 border border-white/5 hover:border-white/10 transition-colors duration-200 bg-dark-secondary/30"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <span className="text-xs font-body text-accent tracking-[0.15em] uppercase block mb-6">
                0{index + 1}
              </span>
              <h3 className="font-display font-semibold text-xl text-white mb-6 tracking-[-0.01em] uppercase">
                {phase.title}
              </h3>
              <p className="text-sm text-muted leading-[1.75] font-body">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
