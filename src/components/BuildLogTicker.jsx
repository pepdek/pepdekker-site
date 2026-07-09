import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { formatRelative } from "@/lib/relativeTime";

export function BuildLogTicker() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    supabase
      .from("build_log")
      .select("title, project, happened_on")
      .order("happened_on", { ascending: false })
      .limit(20)
      .then(({ data, error }) => {
        if (!cancelled && !error) setItems(data);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Real data only - nothing fabricated. Until Pep adds rows in Supabase,
  // this section simply doesn't render.
  if (items.length === 0) return null;

  const line = items
    .map((item) => `${item.project}: ${item.title} - ${formatRelative(item.happened_on)}`)
    .join("   //   ");

  return (
    <div
      className="border-b border-border bg-panel overflow-hidden"
      role="region"
      aria-label="Recent build log"
    >
      <div className="ticker-track group" tabIndex={0}>
        <div className="ticker-content font-mono text-xs text-muted py-2">
          <span className="px-6">{line}</span>
          <span className="px-6" aria-hidden="true">
            {line}
          </span>
        </div>
      </div>
    </div>
  );
}
