"use client";

import { LanguageProvider } from "@/i18n/context";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/sections/Hero/Hero";
import Capabilities from "@/components/sections/Capabilities/Capabilities";
import Approach from "@/components/sections/Approach/Approach";
import TechStack from "@/components/sections/TechStack/TechStack";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Security from "@/components/sections/Security/Security";
import Infrastructure from "@/components/sections/Infrastructure/Infrastructure";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main id="main-content">
          <Hero />
          <Capabilities />
          <Approach />
          <TechStack />
          <Portfolio />
          <Security />
          <Infrastructure />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  );
}
