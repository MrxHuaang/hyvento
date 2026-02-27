"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/i18n/context";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const lineVariant = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const labelVariant = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroContent() {
  const { t } = useLanguage();
  const headlineWords = [t.hero.line1, t.hero.line2, t.hero.line3];

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center py-20 sm:py-[250px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Micro-label with x:-60→0 entrance */}
      <motion.div className="mb-8" variants={labelVariant}>
        <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent">
          <motion.span
            className="h-px bg-accent"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            aria-hidden="true"
          />
          {t.hero.label}
        </span>
      </motion.div>

      {/* MASSIVE Headline — staggered y:80→0 */}
      <div className="flex flex-col gap-0 mb-8 sm:mb-16">
        {headlineWords.map((word, i) => (
          <motion.h1
            key={i}
            className="font-display font-black text-white leading-[0.9] tracking-[-0.04em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 10rem)" }}
            variants={lineVariant}
          >
            {word}
          </motion.h1>
        ))}
      </div>

      {/* Subtitle — delay 0.8s */}
      <motion.p
        className="text-sm sm:text-lg text-grey-light font-body font-normal max-w-[55ch] leading-relaxed mb-8 sm:mb-16"
        variants={fadeUp}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {t.hero.subtitle1}
        <br />
        {t.hero.subtitle2}
      </motion.p>

      {/* CTA — delay 1.0s */}
      <motion.div variants={fadeUp} transition={{ delay: 1.0, duration: 0.6 }} className="inline-block">
        <motion.a
          href="#contact"
          className="relative px-10 py-5 rounded-xl inline-flex items-center gap-3 font-body text-sm font-bold uppercase tracking-[0.15em] overflow-hidden group bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/60 hover:border-accent transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Background glow effect */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-accent/30 to-accent/10" />
          
          {/* Animated border glow */}
          <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg bg-gradient-to-r from-accent to-accent/50 -z-10 transition-opacity duration-500" />
          
          {/* Text content */}
          <span className="relative z-10 text-accent group-hover:text-white transition-colors duration-300 flex items-center gap-3">
            {t.hero.cta}
            <motion.span
              className="inline-block text-lg"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          
          {/* Shine effect on hover */}
          <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 group-hover:translate-x-full" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
