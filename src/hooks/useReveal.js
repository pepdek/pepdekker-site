import { useEffect, useRef, useState } from "react";

// Scroll-triggered reveal. Skips straight to visible if the browser
// can't observe or the user asked for reduced motion.
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(node);

    // Safety net: a jump-scroll (nav click, anchor, browser restore) can land
    // past an element without ever rendering an intersecting frame. Never
    // leave content permanently invisible over an animation.
    const fallback = setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return [ref, visible];
}
