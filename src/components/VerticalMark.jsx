// Hand-drawn technical marks, one per industry vertical. Deliberately not
// a lucide icon - these are the closest thing this site has to a logotype.

function LegalMark(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M16 4v22" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 27h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 7 6 10l4 8.5c.7 1.5 2.3 2.5 4 2.5V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 7l10 3-4 8.5c-.7 1.5-2.3 2.5-4 2.5V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="16" cy="4" r="1.4" fill="currentColor" />
    </svg>
  );
}

function MaritimeMark(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 9.5V26" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 16h16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 19c0 4 4 7 9 7s9-3 9-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FinancialMark(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M5 27V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 27h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="9" y="16" width="3" height="8" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15.5" y="10" width="3" height="14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="22" y="19" width="3" height="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 13l6.5-5 6.5 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const MARKS = {
  legal: LegalMark,
  maritime: MaritimeMark,
  financial: FinancialMark,
};

export function VerticalMark({ id, className, ...rest }) {
  const Mark = MARKS[id];
  if (!Mark) return null;
  return <Mark className={className} aria-hidden="true" {...rest} />;
}
