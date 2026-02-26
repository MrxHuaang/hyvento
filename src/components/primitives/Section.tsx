interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  watermark?: string;
  noiseVariant?: boolean;
  separator?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  watermark,
  noiseVariant = false,
  separator = true,
}: SectionProps) {
  return (
    <>
      {separator && <div className="section-separator" aria-hidden="true" />}
      <section
        id={id}
        className={`relative py-48 md:py-64 overflow-hidden ${
          noiseVariant ? "teal-noise-bg" : "bg-black"
        } ${className}`}
      >
        {watermark && (
          <span className="section-watermark" aria-hidden="true">
            {watermark}
          </span>
        )}
        <div className="relative z-10">{children}</div>
      </section>
    </>
  );
}
