// Real, verified projects only. No fabricated metrics, no placeholder links.
// Screenshots in public/screenshots are direct captures of the live marketing/product pages.

export const verticals = [
  {
    id: "legal",
    label: "Legal Tech",
    kicker: "01",
    intro:
      "Solo and small-firm attorneys run on Clio, caffeine, and vibes. Malpractice insurance doesn't cover “I forgot.”",
    projects: [
      {
        name: "LawStack",
        url: "https://lawstack.co",
        screenshot: "/screenshots/lawstack-hero.jpg",
        description:
          "Clio-connected email tools for solo and small firms — deadline reminders and unbilled-time tracking, no dashboard or login required.",
        status: "production",
        stack: ["React", "TypeScript", "Supabase", "Resend", "Netlify"],
      },
      {
        name: "Taita",
        url: "https://iq.lawstack.co",
        screenshot: "/screenshots/tiata-hero.jpg",
        description:
          "A weekly practice health score, emailed. Reads Clio, Filevine, and MyCase in the background and scores revenue capture, velocity, risk, and reputation.",
        status: "production",
      },
      {
        name: "CourtCal",
        url: "https://courtcal.pepdekker.com",
        screenshot: "/screenshots/courtcal-hero.jpg",
        description:
          "Auto-syncs Pierce County LINX hearings to Outlook or Google Calendar, so docket entry stops eating three hours a week.",
        status: "early access",
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
        name: "CheckMySpins",
        url: "https://checkmyspins.com",
        screenshot: "/screenshots/checkmyspins-hero.jpg",
        description:
          "Dispatch lookup for ILWU Local 23 longshore workers. Your registration number stays on your phone — nothing is stored server-side.",
        status: "production",
      },
      {
        name: "MarineBookkeeper",
        url: "https://marinebookkeeper.com",
        screenshot: "/screenshots/marinebookkeeper-hero.jpg",
        description:
          "Crew share settlement calculator for commercial fishing vessels. Enter the gross stock and crew, download a signature-ready settlement PDF.",
        status: "production",
      },
      {
        name: "TenderCrew",
        url: null,
        screenshot: null,
        description:
          "A job board for Alaska and PNW commercial fishing crews — captains post by web or text, crew apply in under 60 seconds. Flat pay-once pricing.",
        status: "in development",
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
        name: "Switchboard",
        url: "https://switchboard.pepdekker.com",
        screenshot: "/screenshots/switchboard-hero.jpg",
        description:
          "Competitor intelligence built as a Wealthbox demo. Connects competitor pain signals to enriched RIA profiles and AI-written outreach.",
        status: "active wip",
      },
    ],
  },
];

export const allProjects = verticals.flatMap((v) => v.projects);
export const liveCount = allProjects.filter((p) => p.url).length;
