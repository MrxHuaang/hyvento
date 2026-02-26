import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block relative bg-dark-secondary border border-white/5 hover:border-white/10 transition-colors duration-200 overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-white/6 flex items-center justify-between">
        <span className="text-xs font-body text-accent tracking-[0.15em] uppercase font-medium">
          {project.label}
        </span>
        <span className="text-xs font-body text-grey">{project.year}</span>
      </div>
      <div className="p-6 lg:p-8 min-h-[260px] flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-xl lg:text-2xl text-white mb-4 tracking-[-0.02em] uppercase group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed max-w-[55ch] font-body">
            {project.scope}
          </p>
        </div>
        <div className="mt-8 pt-5 border-t border-white/4">
          <div className="grid grid-cols-2 gap-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            <div>
              <span className="text-xs text-grey block mb-1.5 font-body uppercase tracking-wider">
                Client Type
              </span>
              <span className="text-sm text-grey-light font-body">
                {project.clientType}
              </span>
            </div>
            <div>
              <span className="text-xs text-grey block mb-1.5 font-body uppercase tracking-wider">
                Stack
              </span>
              <span className="text-sm text-grey-light font-body">
                {project.stack.slice(0, 3).join(" · ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
