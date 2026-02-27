import Link from "next/link";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses = {
  primary:
    "bg-accent text-black font-semibold hover:bg-accent-hover border border-accent",
  outline:
    "bg-gradient-to-br from-accent/10 to-accent/5 text-accent border border-accent/40 hover:bg-accent hover:text-black hover:border-accent hover:shadow-[0_0_40px_rgba(17,191,156,0.5)] backdrop-blur-lg rounded-lg relative overflow-hidden group",
  ghost:
    "bg-transparent text-grey-light/60 border border-transparent hover:text-white",
};

const sizeClasses = {
  sm: "px-6 py-3 text-xs tracking-[0.12em]",
  md: "px-8 py-3.5 text-sm tracking-[0.12em]",
  lg: "px-12 py-4.5 text-sm tracking-[0.12em]",
};

export default function Button({
  children,
  variant = "outline",
  size = "md",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-body font-medium uppercase transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? "opacity-30 pointer-events-none" : ""
  } ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={(props as ButtonAsButton).onClick}
      type={(props as ButtonAsButton).type || "button"}
    >
      {children}
    </button>
  );
}
