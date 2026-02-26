import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Container from "@/components/primitives/Container";
import MotionWrapper from "@/components/primitives/MotionWrapper";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Hyvento`,
    description: project.scope,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { label: "Challenge", content: project.challenge },
    { label: "System Architecture", content: project.architecture },
    { label: "Result", content: project.result },
  ];

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <section className="relative bg-black pt-[140px] pb-[120px] overflow-hidden">
          <div className="hero-gradient" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <Container className="relative z-10">
            <MotionWrapper>
              <div className="max-w-[800px]">
                <span className="inline-flex items-center gap-3 text-xs font-body font-medium uppercase tracking-[0.2em] text-accent mb-8">
                  <span className="w-10 h-px bg-accent" aria-hidden="true" />
                  {project.label}
                </span>
                <h1
                  className="font-display font-black text-white leading-[0.95] tracking-[-0.04em] uppercase mb-6"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                >
                  {project.title}
                </h1>
                <p className="text-lg text-grey-light/50 font-body leading-relaxed max-w-[55ch]">
                  {project.scope}
                </p>

                {/* Meta grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
                  {[
                    { label: "Client Type", value: project.clientType },
                    { label: "Year", value: project.year },
                    { label: "Scope", value: project.scope },
                    { label: "Stack", value: project.stack.join(" · ") },
                  ].map((meta) => (
                    <div key={meta.label}>
                      <span className="text-xs text-grey/50 block mb-1 font-body uppercase tracking-[0.1em]">
                        {meta.label}
                      </span>
                      <span className="text-sm text-grey-light/60 font-body">
                        {meta.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </Container>
        </section>

        {/* Content Sections */}
        <section className="bg-dark py-[120px]">
          <Container>
            <div className="max-w-[720px]">
              {sections.map((section, index) => (
                <MotionWrapper key={section.label} delay={index * 0.1}>
                  <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs text-accent tracking-[0.15em] uppercase font-body">
                        0{index + 1}
                      </span>
                      <span
                        className="w-10 h-px bg-accent"
                        aria-hidden="true"
                      />
                      <h2 className="font-display font-semibold text-sm text-grey uppercase tracking-[0.1em]">
                        {section.label}
                      </h2>
                    </div>
                    <p className="text-base text-grey-light/40 leading-[1.8] font-body max-w-[55ch]">
                      {section.content}
                    </p>
                  </div>
                </MotionWrapper>
              ))}

              {/* Stack Detail */}
              <MotionWrapper delay={0.3}>
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs text-accent tracking-[0.15em] uppercase font-body">
                      04
                    </span>
                    <span className="w-10 h-px bg-accent" aria-hidden="true" />
                    <h2 className="font-display font-semibold text-sm text-grey uppercase tracking-[0.1em]">
                      Technology Stack
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 border border-border text-sm text-grey-light/50 font-body hover:border-accent/40 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionWrapper>

              <div className="h-px w-full bg-border mb-12" />

              <Button variant="outline" size="md" href="/#portfolio">
                ← Back to Portfolio
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
