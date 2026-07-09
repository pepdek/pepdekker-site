const RTF = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const DAY_MS = 86_400_000;

// "3 days ago", "today", "2 weeks ago" - native Intl, no dependency.
export function formatRelative(dateInput) {
  const days = Math.round((new Date(dateInput) - new Date()) / DAY_MS);
  if (Math.abs(days) < 1) return RTF.format(0, "day");
  if (Math.abs(days) < 7) return RTF.format(days, "day");
  if (Math.abs(days) < 30) return RTF.format(Math.round(days / 7), "week");
  return RTF.format(Math.round(days / 30), "month");
}
