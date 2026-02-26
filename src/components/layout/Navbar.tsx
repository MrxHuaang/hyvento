"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/primitives/Container";
import { useLanguage } from "@/i18n/context";

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#approach", label: t.nav.approach },
    { href: "#technology", label: t.nav.technology },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-[20px] bg-black/70 border-b border-white/[0.06]"
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

            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-body text-muted hover:text-accent transition-colors duration-200 uppercase tracking-wider"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className="text-xs font-body font-semibold uppercase tracking-wider border border-white/10 px-3 py-1.5 text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label={
                  locale === "es" ? "Switch to English" : "Cambiar a Español"
                }
              >
                {locale === "es" ? "EN" : "ES"}
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLocale}
                className="text-xs font-body font-semibold uppercase tracking-wider border border-white/10 px-2.5 py-1 text-muted relative z-50"
              >
                {locale === "es" ? "EN" : "ES"}
              </button>
              <button
                className="relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <span
                  className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""}`}
                />
                <span
                  className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`}
                />
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${
                mobileOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-3xl font-display font-bold text-white hover:text-accent transition-colors duration-200 uppercase"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}
