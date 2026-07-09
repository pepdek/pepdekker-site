import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

export function HitCounter() {
  const [count, setCount] = useState(null);
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return; // StrictMode double-invoke guard
    called.current = true;
    supabase.rpc("increment_hit_counter").then(({ data, error }) => {
      if (!error) setCount(data);
    });
  }, []);

  const digits = String(count ?? 0).padStart(6, "0").split("");

  return (
    <div className="flex items-center gap-2" aria-label={`Page views: ${count ?? "loading"}`}>
      <span className="font-mono text-[10px] text-dim uppercase tracking-wide">
        Visitors
      </span>
      <span className="bevel-inset bg-[#0a1f14] flex gap-[2px] px-1.5 py-1" aria-hidden="true">
        {digits.map((d, i) => (
          <span
            key={i}
            className="pixel-heading text-sm leading-none text-[#3dd873] w-[14px] text-center"
          >
            {count === null ? "-" : d}
          </span>
        ))}
      </span>
    </div>
  );
}
