// Real, verified projects only. No fabricated metrics, no placeholder links.
// Screenshots in public/screenshots are direct captures of the live marketing/product pages.
//
// summary: one self-contained, declarative paragraph answering "what is this,
// who built it, what problem does it solve" - written for AI answer engines
// and search snippets, not for persuasion. faq: grounded only in verified facts.

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
        faq: [
          {
            q: "What is LawStack?",
            a: "LawStack is a suite of Clio-connected AI employees for solo and small law firms, built by Pep Dekker.",
          },
          {
            q: "What does LawStack's billing coordinator do?",
            a: "It rolls up 48 skills into one AI agent that handles billing coordination tasks, at roughly a tenth of the cost of a human hire.",
          },
          {
            q: "What is LawStack built with?",
            a: "React and TypeScript on the frontend, Supabase for the backend, Resend for email, and Netlify for hosting.",
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
        faq: [
          {
            q: "What is Taita?",
            a: "Taita is a practice intelligence tool for solo and small law firms that emails a weekly practice health score.",
          },
          {
            q: "What does Taita measure?",
            a: "Revenue capture, velocity, risk, and reputation, scored from data it reads out of Clio, Filevine, or MyCase.",
          },
          {
            q: "Is Taita part of LawStack?",
            a: "No, Taita is a separate product at iq.lawstack.co, though it serves the same solo and small-firm legal market.",
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
        faq: [
          {
            q: "What is CourtCal?",
            a: "CourtCal auto-syncs Pierce County LINX court hearings to Outlook or Google Calendar for solo and small family-law firms.",
          },
          {
            q: "Is CourtCal available outside Pierce County?",
            a: "Not yet - it's in early access for Pierce County, WA, with King and Snohomish counties planned for Q3 2026.",
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
        faq: [
          {
            q: "What is CheckMySpins?",
            a: "CheckMySpins is a dispatch lookup tool for ILWU Local 23 longshore workers.",
          },
          {
            q: "Does CheckMySpins store my registration number?",
            a: "No, your registration number stays on your phone. Nothing is stored server-side.",
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
        faq: [
          {
            q: "What is MarineBookkeeper?",
            a: "MarineBookkeeper is a crew-share settlement calculator for commercial fishing vessel operators.",
          },
          {
            q: "What fisheries does MarineBookkeeper support?",
            a: "Bristol Bay salmon, Alaska king crab, Dungeness crab, Pacific halibut, and Gulf shrimp.",
          },
          {
            q: "How much does MarineBookkeeper cost?",
            a: "$97 one-time per settlement sheet, no subscription.",
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
        faq: [
          {
            q: "Is TenderCrew live?",
            a: "Not yet - it's in development and doesn't have a public URL.",
          },
        ],
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
        faq: [
          {
            q: "What is Switchboard?",
            a: "Switchboard is a competitor-intelligence tool built for Wealthbox, aimed at RIAs and financial advisors.",
          },
          {
            q: "Is Switchboard a finished product?",
            a: "It's an active work-in-progress demo, not yet a shipped product.",
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
