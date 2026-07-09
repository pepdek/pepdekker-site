import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { verticals, liveCount } from "@/data/projects";
import { VerticalMark } from "@/components/VerticalMark";
import { useReveal } from "@/hooks/useReveal";

const STATUS_LABEL = {
  production: "Production",
  "active wip": "Active WIP",
  "early access": "Early access",
  "in development": "In development",
};

const STATUS_DOT = {
  production: "bg-financial",
  "active wip": "bg-accent",
  "early access": "bg-accent",
  "in development": "bg-dim",
};

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between font-mono text-xs tracking-wide">
        <a href="#top" className="text-ink font-semibold">
          PEP DEKKER
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-muted">
          {verticals.map((v) => (
            <a key={v.id} href={`#${v.id}`} className="hover:text-ink transition-colors">
              {v.label.toUpperCase()}
            </a>
          ))}
          <a href="#contact" className="hover:text-ink transition-colors">
            CONTACT
          </a>
        </nav>
        <div className="flex items-center gap-2 text-dim">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-financial opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-financial" />
          </span>
          {liveCount} SYSTEMS LIVE
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-40 pb-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-wide text-accent mb-5">
          TACOMA, WA — SHIPS SOFTWARE NOBODY ELSE WILL BUILD
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
          I build software for industries too boring for Silicon Valley to
          bother with.
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          Solo lawyers. Fishing crews. Longshoremen. Financial advisors
          getting quietly out-hustled by better tools. Nobody's raising a
          Series A for any of it — which is exactly why it's still broken,
          and exactly why there's room to fix it. {liveCount} systems live
          across {verticals.length} industries. All shipped. None of it
          demo-ware.
        </p>
        <p className="mt-4 font-mono text-sm text-dim max-w-2xl">
          No pivot to AI chatbots. No 10x-engineer manifesto. Just tools that
          work for people who don't have time to read one.
        </p>
      </div>
    </section>
  );
}

function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {STATUS_LABEL[status].toUpperCase()}
    </span>
  );
}

function ProjectCard({ project, verticalId }) {
  const [ref, visible] = useReveal();
  const tickColor = `var(--color-${verticalId})`;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} tick-corners bg-panel border border-border rounded-sm overflow-hidden flex flex-col`}
      style={{ "--tick-color": tickColor }}
    >
      <div className="aspect-[16/10] bg-panel-2 border-b border-border relative overflow-hidden">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.name} product screenshot`}
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
          <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-sm text-muted leading-relaxed">{project.description}</p>

        {project.stack && (
          <ul className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] text-dim">
            {project.stack.map((tech) => (
              <li key={tech} className="border border-border rounded-sm px-1.5 py-0.5">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              Visit site
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
            </a>
          ) : (
            <span className="text-sm text-dim">Not yet public</span>
          )}
        </div>
      </div>
    </div>
  );
}

function VerticalSection({ vertical }) {
  const [ref, visible] = useReveal();
  return (
    <section id={vertical.id} className="py-20 px-5 sm:px-8 scroll-mt-14">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`reveal ${visible ? "reveal-visible" : ""} flex items-end justify-between gap-6 mb-10 border-b border-border pb-6`}
        >
          <div className="flex items-start gap-4">
            <VerticalMark
              id={vertical.id}
              className="w-8 h-8 mt-1 shrink-0"
              style={{ color: `var(--color-${vertical.id})` }}
            />
            <div>
              <p className="font-mono text-xs text-dim mb-1">{vertical.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {vertical.label}
              </h2>
              <p className="text-muted mt-2 max-w-xl">{vertical.intro}</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vertical.projects.map((project) => (
            <ProjectCard key={project.name} project={project} verticalId={vertical.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-5 sm:px-8 py-16">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Say hi.</h2>
          <p className="text-muted text-sm mb-4 max-w-sm">
            Real email, no funnel, no newsletter. I read it myself — there's
            no one else here.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="mailto:dekpep@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              dekpep@gmail.com
            </a>
            <a
              href="https://github.com/pepdek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" strokeWidth={1.5} />
              github.com/pepdek
            </a>
            <a
              href="https://www.linkedin.com/in/pepdekker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              linkedin.com/in/pepdekker
            </a>
          </div>
        </div>
        <p className="font-mono text-xs text-dim">
          TACOMA, WA · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        {verticals.map((vertical) => (
          <VerticalSection key={vertical.id} vertical={vertical} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
