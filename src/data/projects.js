// Real, verified projects only. No fabricated metrics, no placeholder links.
// Screenshots in public/screenshots are direct captures of the live marketing/product pages.
//
// summary: one self-contained, declarative paragraph answering "what is this,
// who built it, what problem does it solve" - written for AI answer engines
// and search snippets, not for persuasion.
//
// howItWorks: pulled from each product's own live copy (not invented) -
// written plain, short-sentence, no jargon. Skipped for projects with no
// live site to verify against (TenderCrew).

export const verticals = [
  {
    id: "legal",
    label: "Legal Tech",
    kicker: "01",
    intro:
      "Solo and small-firm attorneys run on Clio, caffeine, and vibes. Malpractice insurance doesn't cover “I forgot.”",
    projects: [
      {
        slug: "lawstack",
        name: "LawStack",
        url: "https://lawstack.co",
        screenshot: "/screenshots/lawstack-hero.jpg",
        description:
          "AI-Employees that are Clio-connected for solo and small firms - 48 skills rolled up into one high-agency billing coordinator AI-agent at 10th the price - practice coordinator & client coordinator in development.",
        summary:
          "LawStack is a suite of Clio-connected AI employees for solo and small law firms, built by Pep Dekker in Tacoma, WA. Its billing coordinator rolls 48 skills into one AI agent that handles practice-management busywork at a fraction of the cost of hiring a person.",
        status: "production",
        stack: ["React", "TypeScript", "Supabase", "Resend", "Netlify"],
        howItWorks: [
          {
            title: "Connect Clio once.",
            detail:
              "You link your Clio account. LawStack can only read it - it can never create, change, or delete anything. Takes about 90 seconds.",
          },
          {
            title: "The AI agent gets to work.",
            detail:
              "It watches your unbilled time, invoices, and trust accounts every day on its own. No dashboard to check, nothing to configure.",
          },
          {
            title: "You get one email, Monday morning.",
            detail:
              "What got handled, and what needs your OK. About 90 seconds to read, then you go back to practicing law.",
          },
        ],
      },
      {
        slug: "taita",
        name: "Taita",
        url: "https://iq.lawstack.co",
        screenshot: "/screenshots/tiata-hero.jpg",
        description:
          "A weekly practice health score, emailed. Reads Clio, Filevine, and MyCase in the background and scores revenue capture, velocity, risk, and reputation.",
        summary:
          "Taita is a weekly practice health score for solo and small law firms, built by Pep Dekker. It reads Clio, Filevine, or MyCase in the background and emails a single practice health score every week, with no login required.",
        status: "production",
        howItWorks: [
          {
            title: "Link your practice software.",
            detail:
              "Clio, Filevine, or MyCase - whichever you already use. Taita can only read your data, never change it.",
          },
          {
            title: "It watches five things, all week.",
            detail:
              "Money coming in, how fast matters move, risk signs like a low trust balance, your bank account through Plaid, and your online reviews.",
          },
          {
            title: "One email, every Sunday.",
            detail:
              "No dashboard to log into. Just a single score and the story behind it, sitting in your inbox.",
          },
        ],
      },
      {
        slug: "courtcal",
        name: "CourtCal",
        url: "https://courtcal.pepdekker.com",
        screenshot: "/screenshots/courtcal-hero.jpg",
        description:
          "Auto-syncs Pierce County LINX hearings to Outlook or Google Calendar, so docket entry stops eating three hours a week.",
        summary:
          "CourtCal is a court-calendar automation tool for Pierce County, WA family-law firms, built by Pep Dekker. It auto-syncs LINX court hearings to Outlook or Google Calendar so attorneys stop losing hours a week to manual docket entry.",
        status: "early access",
        howItWorks: [
          {
            title: "Connect your LINX login.",
            detail:
              "One time. It's encrypted, and you can revoke access whenever you want.",
          },
          {
            title: "CourtCal reads your whole docket.",
            detail:
              "Every hearing gets pulled out and turned into a clean, structured event - not just a wall of scraped text.",
          },
          {
            title: "It syncs straight to your calendar.",
            detail:
              "Outlook or Google. Courtroom, judge, and case number already filled in.",
          },
        ],
      },
    ],
  },
  {
    id: "maritime",
    label: "Maritime & Labor",
    kicker: "02",
    intro:
      "Deckhands and longshoremen have coordinated six-figure decisions over group texts since before smartphones had autocorrect. That's not a UX problem. That's the whole design brief.",
    projects: [
      {
        slug: "checkmyspins",
        name: "CheckMySpins",
        url: "https://checkmyspins.com",
        screenshot: "/screenshots/checkmyspins-hero.jpg",
        description:
          "Dispatch lookup for ILWU Local 23 longshore workers. Your registration number stays on your phone - nothing is stored server-side.",
        summary:
          "CheckMySpins is a dispatch lookup tool for ILWU Local 23 longshore workers, built by Pep Dekker. It looks up a worker's dispatch status from their registration number without storing that number on any server.",
        status: "production",
        howItWorks: [
          {
            title: "Type your number once.",
            detail: "That's the whole account. No sign-up, nothing to create.",
          },
          {
            title: "It stays on your phone.",
            detail:
              "Your registration number is saved right in your browser, the same way a site remembers your dark mode setting. It never touches a server, because there isn't one.",
          },
          {
            title: "It reads what the union already posts.",
            detail:
              "The dispatch board, the ship schedule, the sheets - all public. CheckMySpins just makes them easy to read on a phone.",
          },
        ],
      },
      {
        slug: "marinebookkeeper",
        name: "MarineBookkeeper",
        url: "https://marinebookkeeper.com",
        screenshot: "/screenshots/marinebookkeeper-hero.jpg",
        description:
          "Crew share settlement calculator for commercial fishing vessels. Enter the gross stock and crew, download a signature-ready settlement PDF.",
        summary:
          "MarineBookkeeper is a crew-share settlement calculator for commercial fishing vessels, built by Pep Dekker. Captains enter the gross stock and crew list and get a signature-ready settlement PDF in about a minute, for a one-time fee instead of an hourly CPA rate.",
        status: "production",
        howItWorks: [
          {
            title: "Enter your gross stock.",
            detail:
              "The total sale value off the fish ticket, plus species and processor.",
          },
          {
            title: "It runs the math your fishery uses.",
            detail:
              "Deducts shared costs like fuel and ice, applies your vessel's share percentage, then splits the crew pool by each person's share units - greenhorn, engineer, whatever your boat uses.",
          },
          {
            title: "You get a signed-ready PDF in 60 seconds.",
            detail:
              "The full calculation is printed right on it, so nobody has to just take your word for the math.",
          },
        ],
      },
      {
        slug: "tendercrew",
        name: "TenderCrew",
        url: null,
        screenshot: null,
        description:
          "A job board for Alaska and PNW commercial fishing crews - captains post by web or text, crew apply in under 60 seconds. Flat pay-once pricing.",
        summary:
          "TenderCrew is an in-development job board for Alaska and Pacific Northwest commercial fishing crews, built by Pep Dekker. Captains will post openings by web or text, and crew will be able to apply in under 60 seconds.",
        status: "in development",
      },
      {
        slug: "helm",
        name: "Helm",
        url: "https://helm.pepdekker.com",
        screenshot: "/screenshots/helm-hero.jpg",
        description:
          "A factory-operations command center concept: 25 manager tasks, daily to annual, in one dashboard, with two working AI agents already reconciling yield data and drafting shift summaries.",
        summary:
          "Helm is a factory-operations command center concept for plant managers, built by Pep Dekker. It brings 25 manager tasks spanning daily to annual responsibilities into one dashboard, with two working AI agents already reconciling yield data and drafting shift summaries.",
        status: "live",
        howItWorks: [
          {
            title: "25 manager tasks, one dashboard.",
            detail:
              "Instead of jumping between systems, everything a plant manager needs shows up in one place.",
          },
          {
            title: "Two of those tasks already run themselves.",
            detail:
              "One AI agent reconciles yield data. Another drafts shift summaries. Both work without a person doing it by hand.",
          },
          {
            title: "The rest is the roadmap.",
            detail:
              "Helm is a concept build, not a finished product. Those two agents are real and working; the other 23 tasks are the plan.",
          },
        ],
        // Not promoted in sitemap.xml/llms.txt - concept demo, kept out of the
        // directories AI crawlers and search engines prioritize. Still has its
        // own page and card, same as everything else.
        unlisted: true,
      },
      {
        slug: "radiocheck",
        name: "Radio Check",
        url: "https://radiocheck.pepdekker.com",
        screenshot: "/screenshots/radiocheck-hero.jpg",
        description:
          "An SMS-first AI agent concept built for crews with no reliable data connection at sea, answering season, delivery, and documentation questions in seconds instead of a phone calls.",
        summary:
          "Radio Check is an SMS-first AI agent concept for fishing crews without reliable data connections at sea, built by Pep Dekker. It answers season, delivery, and documentation questions in seconds instead of requiring a phone call.",
        status: "live",
        howItWorks: [
          {
            title: "Text a question, get an answer.",
            detail:
              "Season dates, delivery windows, paperwork requirements - answered back in seconds, no call, no hold music.",
          },
          {
            title: "It's built for bad signal.",
            detail:
              "Just SMS. No app to download, no data connection needed beyond a text message going through.",
          },
          {
            title: "Right now, it answers what you ask.",
            detail:
              "That's the live part - reactive Q&A. Two-way logistics, proactive alerts, and predictive routing are the roadmap, not built yet.",
          },
        ],
        unlisted: true,
      },
    ],
  },
  {
    id: "financial",
    label: "Financial Services",
    kicker: "03",
    intro:
      "Every RIA loses advisors to a better offer eventually. The only question is whether you hear about it from a resignation letter or from us first.",
    projects: [
      {
        slug: "switchboard",
        name: "Switchboard",
        url: "https://switchboard.pepdekker.com",
        screenshot: "/screenshots/switchboard-hero.jpg",
        description:
          "Competitor intelligence built as a Wealthbox demo. Connects competitor pain signals to enriched RIA profiles and AI-written outreach.",
        summary:
          "Switchboard is a competitor-intelligence tool for RIAs and financial advisors, built by Pep Dekker as a demo for Wealthbox. It connects competitor pain signals to enriched RIA profiles and AI-written outreach.",
        status: "active wip",
        stack: ["SEC IAPD data", "Clay", "Anthropic Claude"],
        howItWorks: [
          {
            title: "It watches who's losing advisors.",
            detail:
              "Switchboard tracks public SEC filings (SEC IAPD data) for signs a competing RIA is struggling - advisors leaving, that kind of thing.",
          },
          {
            title: "It builds a real profile.",
            detail:
              "Using Clay, it fills in the picture: firm size, assets under management, and who the actual decision makers are.",
          },
          {
            title: "Claude writes the first message.",
            detail:
              "Anthropic's AI drafts outreach personalized to that firm's specific situation, so a human isn't starting from a blank page.",
          },
        ],
      },
    ],
  },
];

export const allProjects = verticals.flatMap((v) =>
  v.projects.map((p) => ({ ...p, verticalId: v.id, verticalLabel: v.label }))
);
export const liveCount = allProjects.filter((p) => p.url).length;
export const findProjectBySlug = (slug) => allProjects.find((p) => p.slug === slug);
