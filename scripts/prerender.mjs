// Static-site generation step. No new dependency - react-dom/server ships
// with react-dom already. Renders every route to its own real HTML file so
// crawlers that don't execute JS (most AI answer-engine bots, and even
// Googlebot's delayed JS pass) see actual content, not an empty <div id="root">.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { render } from "../dist-ssr/entry-server.js";
import { verticals, allProjects, liveCount } from "../src/data/projects.js";

const SITE = "https://pepdekker.com";
const template = readFileSync("dist/index.html", "utf-8");

const routes = [
  { path: "/", outPath: "dist/index.html" },
  ...allProjects.map((p) => ({
    path: `/projects/${p.slug}`,
    outPath: `dist/projects/${p.slug}/index.html`,
    project: p,
  })),
];

function metaFor(route) {
  if (route.path === "/") {
    return {
      title: "Pep Dekker - AI systems builder for legal, maritime, and financial services",
      description:
        "Pep Dekker builds production software for legal ops, commercial fishing labor, longshore dispatch, and marine finance - industries that don't get good software. Based in Tacoma, WA.",
      canonical: `${SITE}/`,
      image: `${SITE}/og-image.jpg`,
    };
  }
  const p = route.project;
  return {
    title: `${p.name} - ${p.status === "in development" ? "Coming soon" : "Pep Dekker"}`,
    description: p.summary,
    canonical: `${SITE}/projects/${p.slug}/`,
    image: p.screenshot ? `${SITE}${p.screenshot}` : `${SITE}/og-image.jpg`,
  };
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function applyMeta(html, meta) {
  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );
  const extraTags = `
    <link rel="canonical" href="${meta.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Pep Dekker" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:image" content="${meta.image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${meta.image}" />
  </head>`;
  return html.replace("</head>", extraTags);
}

for (const route of routes) {
  const appHtml = render(route.path);
  const html = applyMeta(template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`), metaFor(route));
  mkdirSync(dirname(route.outPath), { recursive: true });
  writeFileSync(route.outPath, html);
  console.log(`prerendered ${route.path} -> ${route.outPath}`);
}

// unlisted projects (concept demos referencing a third party) still get a
// page and a card, they just aren't promoted in the directories crawlers
// and search engines prioritize.
const listedRoutes = routes.filter((r) => !r.project?.unlisted);

const urls = listedRoutes
  .map((r) => `  <url><loc>${SITE}${r.path === "/" ? "/" : r.path + "/"}</loc></url>`)
  .join("\n");
writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log("wrote dist/sitemap.xml");

// llms.txt - generated from the same data as the site, so the project list
// and "N live systems" count can't drift out of sync the way a hand-written
// copy would.
const listedByVertical = verticals
  .map((v) => ({ ...v, projects: v.projects.filter((p) => !p.unlisted) }))
  .filter((v) => v.projects.length > 0);

const sections = listedByVertical
  .map((v) => {
    const items = v.projects
      .map((p) => {
        const statusNote = p.url ? "" : " In development, no public URL yet.";
        const link = p.url ? ` ${p.url}` : "";
        return `- [${p.name}](${SITE}/projects/${p.slug}/): ${p.description}${statusNote}${link}`;
      })
      .join("\n");
    return `## ${v.label}\n\n${items}`;
  })
  .join("\n\n");

const llmsTxt = `# Pep Dekker

> Pep Dekker builds production software for industries that don't get good
> software: legal ops, commercial fishing labor, longshore dispatch, and
> marine finance. Based in Tacoma, WA. ${liveCount} live systems across
> ${verticals.length} industries, all shipped and in production or active use, not demos.

Contact: dekpep@gmail.com · GitHub: https://github.com/pepdek · LinkedIn: https://www.linkedin.com/in/pepdekker

${sections}

## Other pages

- [Sitemap](${SITE}/sitemap.xml)
`;

writeFileSync("dist/llms.txt", llmsTxt);
console.log("wrote dist/llms.txt");
