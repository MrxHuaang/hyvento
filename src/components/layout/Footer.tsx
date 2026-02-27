"use client";

import Container from "@/components/primitives/Container";
import { useLanguage } from "@/i18n/context";

export default function Footer() {
  const { t, locale } = useLanguage();

  const navLinks = [
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#approach", label: t.nav.approach },
    { href: "#technology", label: t.nav.technology },
  ];

  const services = ["Web Platforms", "Process Automation", "Custom Systems"];

  const techItems = ["React", "Next.js", "Node.js", "AWS"];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "#",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-dark text-white border-t border-white/8">
      {/* ROW 1 — Logo + Contact */}
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 pt-40 pb-24">
          <div>
            <p className="font-display text-5xl font-black tracking-tight uppercase mb-4">
              Hyvento
            </p>
            <p className="text-sm text-white/40 font-body leading-relaxed max-w-[320px]">
              {t.footer.tagline1}
              <br />
              {t.footer.tagline2}
            </p>
          </div>
          <a
            href="mailto:contact@hyvento.com"
            className="text-xl text-accent font-body underline-offset-4 hover:underline transition-all duration-200"
          >
            contact@hyvento.com
          </a>
        </div>
      </Container>

      {/* ROW 2 — 4-column grid */}
      <div className="border-t border-white/8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 py-20">
            {/* Navigation */}
            <div>
              <h4 className="font-display font-semibold text-xs text-accent uppercase tracking-[0.2em] mb-6">
                {locale === "es" ? "Navegación" : "Navigation"}
              </h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white inline-block transition-colors duration-200 font-body"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-xs text-accent uppercase tracking-[0.2em] mb-6">
                {locale === "es" ? "Servicios" : "Services"}
              </h4>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s} className="text-sm text-white/40 font-body">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology */}
            <div>
              <h4 className="font-display font-semibold text-xs text-accent uppercase tracking-[0.2em] mb-6">
                {locale === "es" ? "Tecnología" : "Technology"}
              </h4>
              <ul className="flex flex-col gap-3">
                {techItems.map((item) => (
                  <li key={item} className="text-sm text-white/40 font-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-display font-semibold text-xs text-accent uppercase tracking-[0.2em] mb-6">
                {locale === "es" ? "Conectar" : "Connect"}
              </h4>
              <ul className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 font-body"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* ROW 3 — Copyright */}
      <div className="border-t border-white/8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-12">
            <p className="text-sm text-white/30 font-body">
              © {new Date().getFullYear()} Hyvento. {t.footer.rights}
            </p>
            <p className="text-sm text-white/30 font-body italic">
              {t.footer.tagline2}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
