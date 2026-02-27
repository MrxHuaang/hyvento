interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1400px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 ${className}`}
    >
      {children}
    </Component>
  );
}
