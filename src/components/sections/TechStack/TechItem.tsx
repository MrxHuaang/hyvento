import { Technology } from "@/types";

interface TechItemProps {
  technology: Technology;
}

export default function TechItem({ technology }: TechItemProps) {
  return (
    <li className="group py-3.5 border-b border-white/[0.04] last:border-0">
      <div className="flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-[2px]">
        <span
          className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-accent transition-all duration-300"
          aria-hidden="true"
        />
        <span className="font-body text-base text-muted group-hover:text-white transition-colors duration-300">
          {technology.name}
        </span>
      </div>
    </li>
  );
}
