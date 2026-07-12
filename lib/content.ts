/* ============================================================================
   content.ts — the single source of truth for the site.
   Everything on the home page reads from here. To update the site you edit
   this file (and, for a new essay, add one MDX file under app/writing/).

   Fields marked TODO are placeholders drafted from your notes — replace them
   with your real copy. Keep it honest and specific; numbers over adjectives.
============================================================================ */

export const site = {
  name: "Aarohi Gandhi",
  // One line on what you build. No "aspiring", no "passionate", no taglines.
  tagline: "I build tools people learn and tinker with.",
  description:
    "Aarohi Gandhi — I build tools people learn and tinker with: browser terminals, semantic search, and ML tooling. Notes on what I've shipped and measured.",
  url: "https://aarohigandhi.com", // TODO: confirm domain before launch
  email: "aarohigandhi@hotmail.com",
  location: "", // TODO e.g. "Seattle, WA" — optional
  socials: {
    github: "https://github.com/aarohigandhi",
    linkedin: "https://www.linkedin.com/in/aarohigandhi/", // TODO: confirm handle
    resume: "/resume.pdf", // TODO: drop your resume PDF into /public/resume.pdf
  },
} as const;

/* --- About: four sentences, max. Who you are, what you build now, what next. */
export const about: string[] = [
  // TODO: rewrite in your own voice. These are scaffolding.
  "I'm an engineer who likes giving people a live system to poke at — a terminal, a search box, a model — rather than a slide about one.",
  "Right now I'm building CyberMinds, browser-based Linux terminals that let thousands of people learn security hands-on without spinning up their own boxes.",
  "Before that I shipped an iOS app, a hackathon-winning vision tool, and a pile of ML experiments I measured properly and wrote up.",
  "Next I want to work on the systems and evaluation side of ML — making models measurably better, not just demos that look good.",
];

export type Project = {
  name: string;
  // Exactly two lines of description — what it is, why it's interesting.
  blurb: string;
  // The one number that earns attention. Shows up as a monospace stat.
  metric: string;
  // Stack / context, shown small.
  stack?: string;
  links: { label: string; href: string }[];
};

/* --- Selected work: four projects, best number first. --- */
export const projects: Project[] = [
  {
    name: "CyberMinds",
    blurb:
      "Browser-based Linux terminals on Docker for learning security hands-on. Handles isolation, resource limits, and teardown so beginners can't break anything that matters.",
    metric: "5,000+ monthly users · 12 countries",
    stack: "Docker · Next.js · WebSockets",
    links: [
      { label: "Site", href: "#" }, // TODO
      { label: "GitHub", href: "#" }, // TODO
    ],
  },
  {
    name: "Screenshot Brain",
    blurb:
      "Semantic search over your screenshots. The interesting part isn't the search — it's the eval harness I built to check whether the retrieval was actually any good.",
    metric: "Eval harness · measured retrieval quality",
    stack: "Embeddings · vector search · Python",
    links: [
      { label: "GitHub", href: "#" }, // TODO
      { label: "Write-up", href: "/writing/screenshot-brain-eval/" },
    ],
  },
  {
    name: "WILDS",
    blurb:
      "Independent, self-directed experiments on a public distribution-shift benchmark — testing how models hold up when the test data stops looking like the training data.",
    metric: "Self-directed · public benchmark",
    stack: "PyTorch · WILDS",
    links: [{ label: "GitHub", href: "#" }], // TODO
  },
  {
    name: "PillPal",
    blurb:
      "A shipped iOS app for medication tracking and reminders. Real users, App Store review, the whole loop of getting something small into people's hands.",
    metric: "Shipped to the App Store",
    stack: "Swift · SwiftUI",
    links: [{ label: "App Store", href: "#" }], // TODO — or swap for CareVision AI (DubHacks, 2nd place)
  },
];

export type Post = {
  slug: string; // folder name under app/writing/<slug>/
  title: string;
  // One line, shown under the title in the list.
  summary: string;
  date: string; // ISO: "2026-07-20"
  published: boolean; // false = draft, hidden from the site
};

/* --- Writing: the point of the site. Three real posts is the goal. --- */
export const posts: Post[] = [
  {
    slug: "screenshot-brain-eval",
    title: "How I measured whether my semantic search was actually good",
    summary:
      "Building an eval harness for Screenshot Brain — the part nobody demos.",
    date: "2026-07-12",
    published: true, // starter/template post — rewrite with real content
  },
  // Planned (add MDX + flip published to true as they're written):
  // {
  //   slug: "cyberminds-root-shell",
  //   title: "Giving 5,000 strangers a root shell without setting the server on fire",
  //   summary: "Isolation, limits, and what an attacker actually tried.",
  //   date: "",
  //   published: false,
  // },
  // {
  //   slug: "adaptive-kv-cache",
  //   title: "Adaptive KV-cache compression: what I found (even the negative result)",
  //   summary: "",
  //   date: "",
  //   published: false,
  // },
];

/* --- Now: what you're on this month. Keep the date stamp honest. --- */
export const now = {
  updated: "July 2026",
  items: [
    "Scaling CyberMinds and writing up how the terminal isolation actually works.", // TODO
    "Running adaptive KV-cache compression experiments; planning to publish the result either way.", // TODO
    "Reading papers on distribution shift and eval design.", // TODO
    "Getting this site to three real posts.", // TODO
  ],
};
