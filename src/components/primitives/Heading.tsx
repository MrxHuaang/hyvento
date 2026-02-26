interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  level,
  children,
  className = "",
}: HeadingProps) {
  const Tag =
    level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "h4";

  return (
    <Tag
      className={`font-display leading-[0.95] tracking-[-0.03em] uppercase ${className}`}
    >
      {children}
    </Tag>
  );
}
