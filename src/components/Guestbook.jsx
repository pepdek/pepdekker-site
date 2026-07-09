import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { formatRelative } from "@/lib/relativeTime";

// Only render a submitted link if it's a plain http(s) URL - guestbook
// entries are moderated before going public, but this is a second, free
// guardrail against javascript:/data: URIs ending up clickable.
function safeHref(link) {
  if (!link) return null;
  return /^https?:\/\//i.test(link) ? link : null;
}

const initialForm = { name: "", answer: "", link: "", website: "" };

export function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    supabase
      .from("guestbook_entries")
      .select("name, answer, link, created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error) setEntries(data);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!supabase) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "pending", message: "" });

    const { error } = await supabase.rpc("submit_guestbook_entry", {
      p_name: form.name,
      p_answer: form.answer,
      p_link: form.link,
      p_honeypot: form.website,
    });

    if (error) {
      const message = error.message.includes("rate_limited")
        ? "One entry per five minutes - try again shortly."
        : "That didn't go through. Mind trying again?";
      setStatus({ state: "error", message });
      return;
    }

    setForm(initialForm);
    setStatus({
      state: "success",
      message: "Thanks - it's in the queue for review, not posted instantly.",
    });
  }

  return (
    <section id="guestbook" className="py-20 px-5 sm:px-8 scroll-mt-14 border-t border-border">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="pixel-heading text-xl sm:text-2xl mb-3 text-retro-cyan">Guestbook</h2>
          <p className="text-muted mb-6 max-w-md">
            What industry do you wish had better software? Sign the guestbook.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md" noValidate>
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] w-px h-px overflow-hidden"
            >
              <label htmlFor="website">Leave this field blank</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="gb-name" className="font-mono text-xs text-muted">
                Name (optional)
              </label>
              <input
                id="gb-name"
                type="text"
                maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bevel-inset bg-panel-2 px-3 py-2 text-sm text-ink"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="gb-answer" className="font-mono text-xs text-muted">
                What industry deserves better software? *
              </label>
              <textarea
                id="gb-answer"
                required
                maxLength={500}
                rows={3}
                value={form.answer}
                onChange={(e) => setForm({ ...form, answer: e.target.value })}
                className="bevel-inset bg-panel-2 px-3 py-2 text-sm text-ink resize-y"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="gb-link" className="font-mono text-xs text-muted">
                Your site (optional)
              </label>
              <input
                id="gb-link"
                type="url"
                placeholder="https://"
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                className="bevel-inset bg-panel-2 px-3 py-2 text-sm text-ink"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "pending"}
              className="bevel-raised self-start bg-accent text-accent-ink font-semibold px-5 py-2 text-sm disabled:opacity-60"
            >
              {status.state === "pending" ? "Sending..." : "Sign the guestbook"}
            </button>

            {status.message && (
              <p role="status" className="text-sm text-muted">
                {status.message}
              </p>
            )}
          </form>
        </div>

        <div
          className="bevel-inset bg-panel-2 max-h-[420px] overflow-y-auto p-4 flex flex-col gap-3"
          aria-label="Guestbook entries"
        >
          {loading && <p className="text-sm text-dim">Loading entries...</p>}
          {!loading && entries.length === 0 && (
            <p className="text-sm text-dim">No entries yet. Be the first to sign.</p>
          )}
          {entries.map((entry, i) => {
            const href = safeHref(entry.link);
            return (
              <article
                key={i}
                className="border-b border-border pb-3 last:border-b-0 last:pb-0"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold text-sm text-ink">
                    {entry.name || "Anonymous"}
                  </span>
                  <time
                    dateTime={entry.created_at}
                    className="font-mono text-[11px] text-dim shrink-0"
                  >
                    {formatRelative(entry.created_at)}
                  </time>
                </div>
                <p className="text-sm text-muted mt-1">{entry.answer}</p>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-accent hover:underline"
                  >
                    {href}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
