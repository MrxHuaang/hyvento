interface CapabilityBlockProps {
  number: string;
  title: string;
  description: string;
  reversed?: boolean;
}

export default function CapabilityBlock({
  number,
  title,
  description,
  reversed = false,
}: CapabilityBlockProps) {
  return (
    <div
      className={`group grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 py-16 lg:py-24 items-start ${
        reversed ? "md:grid-cols-[1.5fr_1fr] md:[direction:rtl]" : ""
      }`}
    >
      <div className={reversed ? "md:[direction:ltr]" : ""}>
        <span className="text-xs font-body text-accent tracking-[0.15em] uppercase block mb-3">
          {number}
        </span>
        <h3
          className="font-display font-bold text-white leading-[0.95] tracking-[-0.03em] uppercase transition-transform duration-300 group-hover:-translate-y-1"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
        >
          {title}
        </h3>
        <div
          className="mt-4 h-px bg-accent w-0 group-hover:w-16 transition-all duration-500 ease-out"
          aria-hidden="true"
        />
      </div>
      <div className={reversed ? "md:[direction:ltr]" : ""}>
        <p className="text-base text-muted leading-[1.85] font-body max-w-[55ch]">
          {description}
        </p>
      </div>
    </div>
  );
}
