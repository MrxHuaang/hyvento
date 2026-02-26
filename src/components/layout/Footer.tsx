"use client";

import Container from "@/components/primitives/Container";
import { useLanguage } from "@/i18n/context";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#approach", label: t.nav.approach },
    { href: "#technology", label: t.nav.technology },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-black text-white py-20 border-t border-white/[0.04]">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight uppercase mb-3">
              Hyvento
            </p>
            <p className="text-sm text-muted max-w-[320px] font-body leading-relaxed">
              {t.footer.tagline1}
              <br />
              {t.footer.tagline2}
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors duration-200 font-body uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="pt-6 border-t border-white/[0.04]">
          <p className="text-xs text-grey/50 font-body">
            © {new Date().getFullYear()} Hyvento. {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
