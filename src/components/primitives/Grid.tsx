interface GridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const colMap = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

const gapMap = {
  sm: "gap-6",
  md: "gap-8 lg:gap-12",
  lg: "gap-12 lg:gap-16",
};

export default function Grid({
  children,
  columns = 2,
  gap = "md",
  className = "",
}: GridProps) {
  return (
    <div
      className={`grid grid-cols-1 ${colMap[columns]} ${gapMap[gap]} ${className}`}
    >
      {children}
    </div>
  );
}
