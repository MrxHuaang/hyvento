interface DividerProps {
  accent?: boolean;
  className?: string;
}

export default function Divider({
  accent = false,
  className = "",
}: DividerProps) {
  return (
    <hr
      className={`border-0 h-px w-full ${
        accent ? "bg-accent" : "bg-border-light"
      } ${className}`}
      aria-hidden="true"
    />
  );
}
