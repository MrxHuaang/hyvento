import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyvento — Ingeniería de Software Empresarial",
  description:
    "Ingeniería de software con arquitectura definida para operaciones empresariales. Diseñamos y construimos plataformas web, sistemas de automatización y software personalizado con precisión estructural.",
  keywords: [
    "ingeniería de software empresarial",
    "plataformas web",
    "automatización de procesos",
    "sistemas a medida",
    "arquitectura de software",
  ],
  authors: [{ name: "Hyvento" }],
  openGraph: {
    title: "Hyvento — Ingeniería de Software Empresarial",
    description:
      "Ingeniería de software con arquitectura definida para operaciones empresariales.",
    url: "https://hyvento.com",
    siteName: "Hyvento",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyvento — Ingeniería de Software Empresarial",
    description:
      "Ingeniería de software con arquitectura definida para operaciones empresariales.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://hyvento.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hyvento",
              url: "https://hyvento.com",
              description:
                "Firma de ingeniería de software empresarial especializada en plataformas web, automatización de procesos y sistemas a medida.",
              foundingDate: "2024",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Business Inquiries",
                email: "contact@hyvento.com",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Ir al contenido
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
