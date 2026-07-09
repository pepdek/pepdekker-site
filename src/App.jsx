import { Mail, Github, Linkedin } from "lucide-react";
import { verticals, liveCount, findProjectBySlug } from "@/data/projects";
import { Webring } from "@/components/Webring";
import { HitCounter } from "@/components/HitCounter";
import { Home } from "@/pages/Home";
import { ProjectPage } from "@/pages/ProjectPage";

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between font-mono text-xs tracking-wide">
        <a href="/" className="pixel-heading text-ink text-[11px]">
          PEP DEKKER
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-muted">
          {verticals.map((v) => (
            <a key={v.id} href={`/#${v.id}`} className="hover:text-ink transition-colors">
              {v.label.toUpperCase()}
            </a>
          ))}
          <a href="/#faq" className="hover:text-ink transition-colors">
            FAQ
          </a>
          <a href="/#contact" className="hover:text-ink transition-colors">
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

function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-5 sm:px-8 py-16">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <h2 className="pixel-heading text-lg mb-3">Say hi.</h2>
          <p className="text-muted text-sm mb-4 max-w-sm">
            Real email, no funnel, no newsletter. I read it myself - there's
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

      <div className="mx-auto max-w-6xl mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <Webring />
        <div className="flex flex-col items-start sm:items-end gap-2">
          <HitCounter />
          <p className="font-mono text-[10px] text-dim">
            Best viewed at 1024x768. (It's responsive. This is a bit.)
          </p>
        </div>
      </div>
    </footer>
  );
}

// No client router: every route is a fully static, independently prerendered
// HTML file (see scripts/prerender.mjs), so navigation between them is a
// normal full page load - no SPA routing library needed. `path` is passed in
// by the prerenderer for each route it builds; on a real page load in the
// browser it's read straight off the URL.
export default function App({ path = typeof window !== "undefined" ? window.location.pathname : "/" }) {
  const projectMatch = path.match(/^\/projects\/([a-z0-9-]+)\/?$/);
  const page = projectMatch ? <ProjectPage project={findProjectBySlug(projectMatch[1])} /> : <Home />;

  return (
    <div className="min-h-screen">
      <div className="scanlines" aria-hidden="true" />
      <Nav />
      <main>{page}</main>
      <Footer />
    </div>
  );
}
