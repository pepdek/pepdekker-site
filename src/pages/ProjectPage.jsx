import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { VerticalMark } from "@/components/VerticalMark";
import { StatusBadge } from "@/components/ProjectCard";

const APPLICATION_CATEGORY = {
  legal: "LegalService",
  maritime: "BusinessApplication",
  financial: "FinanceApplication",
};

function jsonLdFor(project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    ...(project.url ? { url: project.url } : {}),
    applicationCategory: APPLICATION_CATEGORY[project.verticalId] ?? "BusinessApplication",
    creator: { "@type": "Person", name: "Pep Dekker" },
  };
}

export function ProjectPage({ project }) {
  if (!project) {
    return (
      <div className="pt-32 pb-28 px-5 sm:px-8 text-center">
        <h1 className="text-2xl font-semibold mb-3">Not found</h1>
        <p className="text-muted">
          No project at this address. <a href="/" className="text-accent hover:underline">Back home</a>.
        </p>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-28 px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(project)) }}
      />
      <div className="mx-auto max-w-3xl">
        <a
          href={`/#${project.verticalId}`}
          className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
          Back to {project.verticalLabel}
        </a>

        <div className="flex items-start gap-4 mb-6">
          <VerticalMark
            id={project.verticalId}
            className="w-8 h-8 mt-1 shrink-0"
            style={{ color: `var(--color-${project.verticalId})` }}
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{project.name}</h1>
            <div className="mt-2">
              <StatusBadge status={project.status} />
            </div>
          </div>
        </div>

        <p className="text-lg text-ink leading-relaxed mb-8">{project.summary}</p>

        {project.screenshot && (
          <div className="tick-corners bevel-raised bg-panel-2 mb-8 overflow-hidden" style={{ "--tick-color": `var(--color-${project.verticalId})` }}>
            <img
              src={project.screenshot}
              alt={`${project.name} product screenshot: ${project.description}`}
              className="w-full h-auto"
            />
          </div>
        )}

        <p className="text-muted leading-relaxed mb-8">{project.description}</p>

        {project.howItWorks && (
          <section aria-labelledby="how-heading" className="mb-10">
            <h2 id="how-heading" className="pixel-heading text-sm mb-4">
              How it works
            </h2>
            <ol className="flex flex-col gap-4">
              {project.howItWorks.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="pixel-heading text-xs text-dim shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="text-muted leading-relaxed">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.stack && (
          <section aria-labelledby="stack-heading" className="mb-10">
            <h2 id="stack-heading" className="pixel-heading text-sm mb-3">
              Stack
            </h2>
            <ul className="flex flex-wrap gap-1.5 font-mono text-xs text-dim">
              {project.stack.map((tech) => (
                <li key={tech} className="border border-border px-2 py-1">
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bevel-raised inline-flex items-center gap-2 bg-accent text-accent-ink font-semibold px-5 py-2.5 text-sm"
          >
            Visit {project.name}
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </a>
        ) : (
          <p className="font-mono text-sm text-dim">Not yet public.</p>
        )}
      </div>
    </article>
  );
}
