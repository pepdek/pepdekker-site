import { renderToStaticMarkup } from "react-dom/server";
import App from "./App.jsx";

// Called from scripts/prerender.mjs once per route at build time. No
// hydration mismatch to worry about - main.jsx does a plain createRoot
// render on the client, not hydrateRoot, so this only needs to produce
// real markup for crawlers, not match byte-for-byte.
export function render(path) {
  return renderToStaticMarkup(<App path={path} />);
}
