"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/primitives/Container";
import { useLanguage } from "@/i18n/context";

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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const brandVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
          ? "backdrop-blur-lg bg-gradient-to-b from-black/40 to-black/20 border-b border-white/10 shadow-lg"
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
            className="font-display text-lg font-bold text-white tracking-tight relative z-50 uppercase bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
          >
            Hyvento
          </a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative group font-body text-sm font-semibold text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-wide"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/30 transition-all duration-300 ${
                    hoveredLink === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </motion.div>

          {/* Navigation Controls (Hamburger + Lang) */}
          <div className="flex items-center gap-6">
            <motion.button
              onClick={toggleLocale}
              className="hidden sm:flex text-xs font-body font-bold uppercase tracking-widest border border-white/20 hover:border-white/40 px-3 py-2 text-white/70 hover:text-white relative z-50 cursor-pointer transition-all duration-300 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {locale === "es" ? "EN" : "ES"}
            </motion.button>
            <motion.button
              className="relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 3.5 : 0 }}
              />
              <motion.span
                className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
                animate={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <motion.span
                className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -3.5 : 0 }}
              />
            </motion.button>
          </div>

          {/* ============================================
              FULLSCREEN MOBILE MENU 
              ============================================ */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                className="fixed inset-0 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md z-40 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {/* Top bar inside menu */}
                <div className="flex items-center justify-between px-4 sm:px-6 pt-6 pb-6 border-b border-white/10">
                  <span className="font-display text-xl font-bold text-white uppercase tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                    Hyvento
                  </span>
                  <motion.button
                    onClick={toggleLocale}
                    className="text-xs font-body font-bold uppercase tracking-widest border border-white/20 px-3 py-2 text-white/70 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {locale === "es" ? "EN" : "ES"}
                  </motion.button>
                </div>

                {/* Layout: nav links left, brand right */}
                <div className="flex-1 flex items-center px-4 sm:px-8">
                  <div className="flex w-full items-center justify-between">
                    {/* Nav links — left side */}
                    <motion.ul
                      className="flex flex-col gap-8 sm:gap-6"
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
                <div className="px-4 sm:px-8 pb-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
