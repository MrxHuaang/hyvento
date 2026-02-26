interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  watermark?: string;
  noiseVariant?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  watermark,
  noiseVariant = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-[120px] lg:py-[160px] bg-dark overflow-hidden ${
        noiseVariant ? "teal-noise-bg" : ""
      } ${className}`}
    >
      {watermark && (
        <span className="section-watermark" aria-hidden="true">
          {watermark}
        </span>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
