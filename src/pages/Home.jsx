import { verticals, liveCount } from "@/data/projects";
import { VerticalMark } from "@/components/VerticalMark";
import { ProjectCard } from "@/components/ProjectCard";
import { useReveal } from "@/hooks/useReveal";
import { BuildLogTicker } from "@/components/BuildLogTicker";
import { Guestbook } from "@/components/Guestbook";

function Hero() {
  return (
    <section id="top" className="pt-20 sm:pt-28 pb-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-wide text-accent mb-5">
          TACOMA, WA - SHIPS SOFTWARE NOBODY ELSE WILL BUILD
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
          I build software for industries too boring for Silicon Valley to
          bother with.
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          Solo lawyers. Fishing crews. Longshoremen. Financial advisors
          getting quietly out-hustled by better tools. Nobody's raising a
          Series A for any of it - which is exactly why it's still broken,
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

function VerticalSection({ vertical }) {
  const [ref, visible] = useReveal();
  return (
    <section id={vertical.id} aria-labelledby={`${vertical.id}-heading`} className="py-20 px-5 sm:px-8 scroll-mt-14">
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
              <p className="pixel-heading text-[10px] text-dim mb-2">{vertical.kicker}</p>
              <h2 id={`${vertical.id}-heading`} className="pixel-heading text-lg sm:text-xl">
                {vertical.label}
              </h2>
              <p className="text-muted mt-3 max-w-xl">{vertical.intro}</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vertical.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} verticalId={vertical.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SITE_FAQ = [
  {
    q: "What has Pep Dekker built?",
    a: `Pep Dekker has built ${liveCount} live systems across legal tech, maritime and labor, and financial services, including LawStack, Taita, CourtCal, CheckMySpins, MarineBookkeeper, and Switchboard.`,
  },
  {
    q: "Where is Pep Dekker based?",
    a: "Tacoma, Washington.",
  },
  {
    q: "What technologies does Pep Dekker use?",
    a: "Primarily React, TypeScript, and Supabase, deployed on Netlify.",
  },
  {
    q: "How can I contact Pep Dekker?",
    a: "By email at dekpep@gmail.com, on GitHub at github.com/pepdek, or on LinkedIn at linkedin.com/in/pepdekker.",
  },
];

const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Pep Dekker",
      jobTitle: "Software builder",
      url: "https://pepdekker.com",
      sameAs: ["https://github.com/pepdek", "https://www.linkedin.com/in/pepdekker"],
    },
    {
      "@type": "FAQPage",
      mainEntity: SITE_FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

function HomeFAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 px-5 sm:px-8 border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_JSON_LD) }}
      />
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="pixel-heading text-lg mb-6">
          FAQ
        </h2>
        <dl className="flex flex-col gap-5">
          {SITE_FAQ.map((item) => (
            <div key={item.q}>
              <dt className="font-semibold text-ink mb-1">{item.q}</dt>
              <dd className="text-muted leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <div className="pt-14">
        <BuildLogTicker />
      </div>
      <Hero />
      {verticals.map((vertical) => (
        <VerticalSection key={vertical.id} vertical={vertical} />
      ))}
      <HomeFAQ />
      <Guestbook />
    </>
  );
}
