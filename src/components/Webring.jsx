// Verified live before wiring in - see conversation for the check. Order is
// fixed by the brief: LawStack -> CheckMySpins -> MarineBookkeeper -> CourtCal
// -> back to pepdekker.com (this site).
const RING = [
  { name: "pepdekker.com", url: null },
  { name: "LawStack", url: "https://lawstack.co" },
  { name: "CheckMySpins", url: "https://checkmyspins.com" },
  { name: "MarineBookkeeper", url: "https://marinebookkeeper.com" },
  { name: "CourtCal", url: "https://courtcal.pepdekker.com" },
];

const HERE = 0;
const prev = RING[(HERE - 1 + RING.length) % RING.length];
const next = RING[(HERE + 1) % RING.length];

function RingLink({ site, children }) {
  if (!site.url) {
    return <span className="text-ink">{children}</span>;
  }
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted hover:text-accent underline underline-offset-2"
    >
      {children}
    </a>
  );
}

export function Webring() {
  return (
    <nav aria-label="Pep's Webring" className="bevel-inset bg-panel-2 inline-flex flex-wrap items-center gap-2 px-3 py-2 font-mono text-xs">
      <RingLink site={prev}>&lsaquo; {prev.name}</RingLink>
      <span className="text-dim" aria-hidden="true">
        |
      </span>
      <span className="text-retro-magenta font-bold">Pep's Webring</span>
      <span className="text-dim" aria-hidden="true">
        |
      </span>
      <RingLink site={next}>{next.name} &rsaquo;</RingLink>
    </nav>
  );
}
