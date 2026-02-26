"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/primitives/Container";
import { useLanguage } from "@/i18n/context";

const menuOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const linkItemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const brandVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#approach", label: t.nav.approach },
    { href: "#technology", label: t.nav.technology },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-[20px] bg-black/70 border-b border-white/6"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-[72px]"
          aria-label="Primary navigation"
        >
          <a
            href="/"
            className="font-display text-xl font-bold text-white tracking-tight relative z-50 uppercase"
          >
            Hyvento
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-body text-muted hover:text-white transition-colors duration-200 uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleLocale}
              className="text-xs font-body font-semibold uppercase tracking-wider border border-white/10 px-3 py-1.5 text-muted hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-pointer"
              aria-label={
                locale === "es" ? "Switch to English" : "Cambiar a Español"
              }
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile hamburger + language */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLocale}
              className="text-xs font-body font-semibold uppercase tracking-wider border border-white/10 px-2.5 py-1 text-muted relative z-50 cursor-pointer"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <button
              className="relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`}
              />
            </button>
          </div>

          {/* ============================================
              FULLSCREEN MOBILE MENU — inspired by reference
              ============================================ */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                className="md:hidden fixed inset-0 bg-black z-40 flex flex-col"
                variants={menuOverlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Top bar inside menu */}
                <div className="flex items-center justify-between px-6 pt-6">
                  <span className="font-display text-lg font-bold text-white uppercase tracking-tight">
                    Hyvento
                  </span>
                </div>

                {/* Layout: nav links left, brand right */}
                <div className="flex-1 flex items-center px-6 sm:px-10">
                  <div className="flex w-full items-center justify-between">
                    {/* Nav links — left side */}
                    <motion.ul
                      className="flex flex-col gap-6"
                      variants={linkContainerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {navLinks.map((link) => (
                        <motion.li key={link.href} variants={linkItemVariants}>
                          <a
                            href={link.href}
                            className="font-display font-black text-white text-4xl sm:text-5xl uppercase tracking-tight hover:text-accent transition-colors duration-200"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </a>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* HYVENTO — large brand on the right */}
                    <motion.div
                      className="hidden sm:block"
                      variants={brandVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <span
                        className="font-display font-black text-white/5 uppercase leading-none select-none"
                        style={{ fontSize: "clamp(6rem, 18vw, 14rem)" }}
                      >
                        HY
                        <br />
                        VEN
                        <br />
                        TO
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom bar — contact info */}
                <div className="px-6 sm:px-10 pb-8 border-t border-white/8 pt-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-body text-white/30 uppercase tracking-[0.15em] mb-1">
                      {locale === "es" ? "Contacto" : "Contact"}
                    </p>
                    <a
                      href="mailto:contact@hyvento.com"
                      className="text-sm font-body text-accent hover:text-white transition-colors duration-200"
                    >
                      contact@hyvento.com
                    </a>
                  </div>
                  <span className="text-xs font-body text-white/20 uppercase tracking-wider">
                    © {new Date().getFullYear()} Hyvento
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </header>
  );
}
