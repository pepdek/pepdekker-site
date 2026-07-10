import { ArrowUpRight } from "lucide-react";
import { VerticalMark } from "@/components/VerticalMark";
import { useReveal } from "@/hooks/useReveal";

export const STATUS_LABEL = {
  production: "Production",
  live: "Live",
  "active wip": "Active WIP",
  "early access": "Early access",
  "in development": "In development",
};

export const STATUS_DOT = {
  production: "bg-financial",
  live: "bg-financial",
  "active wip": "bg-accent",
  "early access": "bg-accent",
  "in development": "bg-dim",
};

export function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {STATUS_LABEL[status].toUpperCase()}
    </span>
  );
}

export function ProjectCard({ project, verticalId }) {
  const [ref, visible] = useReveal();
  const tickColor = `var(--color-${verticalId})`;

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} tick-corners bg-panel bevel-raised overflow-hidden flex flex-col`}
      style={{ "--tick-color": tickColor }}
    >
      <div className="aspect-[16/10] bg-panel-2 border-b border-border relative overflow-hidden">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.name} product screenshot: ${project.description}`}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <VerticalMark id={verticalId} className="w-10 h-10 text-dim" />
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">
            <a href={`/projects/${project.slug}/`} className="hover:text-accent transition-colors">
              {project.name}
            </a>
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-sm text-muted leading-relaxed">{project.description}</p>

        {project.stack && (
          <ul className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-dim">
            {project.stack.map((tech) => (
              <li key={tech} className="border border-border px-1.5 py-0.5">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2 flex items-center gap-4">
          <a
            href={`/projects/${project.slug}/`}
            className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            Details
          </a>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              Visit site
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
