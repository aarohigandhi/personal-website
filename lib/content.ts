/* ============================================================================
   content.ts — the single source of truth for the site.
   Everything on the home page reads from here. To update the site you edit
   this file (and, for a new essay, add one MDX file under app/writing/).

   GUARDRAILS (from your own rules — keep these true):
   - Major is "Applied Mathematics, intended Computer Science". No CS-major
     claim until the Allen School decision lands.
   - No TA line until you actually hold it.
   - No lab / faculty / PhD / research framing anywhere.
   - No skills section. No number you can't reconstruct on demand.
   Fields marked TODO still need your input.
============================================================================ */

export const site = {
  name: "Aarohi Gandhi",
  // One line on what you build. Not a tagline.
  tagline:
    "Applied math at UW, enrolled at 15 through the Robinson Center. I build ML systems and ship things people use.",
  description:
    "Aarohi Gandhi — applied math at UW. I build ML systems and ship things people actually use: a security-learning platform with thousands of users, semantic search with a real eval harness, and inference-systems work in progress.",
  url: "https://aarohigandhi.com", // TODO: confirm domain before launch
  // TODO: switch to aarohi@aarohigandhi.com once the domain + forwarding are live.
  email: "aarohigandhi@hotmail.com",
  location: "Seattle, WA",
  socials: {
    github: "https://github.com/aarohigandhi",
    linkedin: "https://www.linkedin.com/in/aarohigandhi/", // TODO: confirm handle
    resume: "/resume.pdf", // TODO: host the canonical resume (minus the TA line)
  },
} as const;

/* --- About: four sentences, max. Who you are, what you build now, what next,
       and one human line. All defensible. --- */
export const about: string[] = [
  "I'm an applied math student at the University of Washington, where I enrolled at 15 through the Robinson Center.",
  "I build ML systems and ship things people actually use — a security-learning platform I founded that thousands of people use across a dozen countries, a shipped iOS app, and full-stack semantic search with a real eval harness behind it.",
  "Right now I'm most interested in ML systems and inference: making models measurably faster and better, not just demos that look good.",
  "I've played chess seriously for years — it's where I learned that a good search beats brute force, which is most of what I find interesting about this work.",
];

export type Project = {
  name: string;
  // Optional context/date shown next to the name (e.g. year, "in progress").
  meta?: string;
  // Roughly two lines — what it is, why it's interesting.
  blurb: string;
  // The one number or fact that earns attention. Monospace stat.
  metric: string;
  // Stack / context, shown small.
  stack?: string;
  links: { label: string; href: string }[];
};

/* --- Selected work: four projects, most legible number first. --- */
export const projects: Project[] = [
  {
    name: "CyberMinds",
    meta: "2022 – present · Founder",
    blurb:
      "Browser-based Linux terminals backed by Docker for learning security hands-on — CTF challenges and courses on top. Handles isolation, resource limits, and teardown so thousands of strangers can get a shell without breaking anything that matters.",
    metric: "5,000+ monthly users · 12 countries",
    stack: "Docker · Next.js · WebSockets",
    links: [
      { label: "Site", href: "#" }, // TODO: real link
      { label: "GitHub", href: "#" }, // TODO
    ],
  },
  {
    name: "Screenshot Brain",
    meta: "2026",
    blurb:
      "Full-stack semantic search over your screenshots. The interesting part isn't the search — it's the labeled eval harness I built to grade top-3 retrieval accuracy and find where it was quietly failing.",
    metric: "Labeled eval harness · top-3 retrieval",
    stack: "Next.js · Supabase/pgvector · Claude vision",
    links: [
      { label: "GitHub", href: "#" }, // TODO
      { label: "Write-up", href: "/writing/screenshot-brain-eval/" },
    ],
  },
  {
    name: "Adaptive KV-Cache Compression",
    meta: "In progress",
    blurb:
      "A custom decode loop with pluggable KV-cache eviction policies, benchmarked against published baselines run under identical instrumentation. In progress — I'll publish the result either way, including a clean negative one.",
    metric: "Inference systems · honest baselines",
    stack: "PyTorch · transformers",
    links: [{ label: "GitHub", href: "#" }], // TODO
  },
  {
    name: "PhishGuard AI",
    meta: "2024 – 2025 · Microsoft Imagine Cup",
    blurb:
      "End-to-end ML threat-detection pipeline: feature engineering on URL and email metadata, a scikit-learn classifier, an evaluation pipeline, and a real-time alerting dashboard. Led a 5-person team through the full lifecycle.",
    metric: "-45% test-set breach rate",
    stack: "scikit-learn · Python",
    links: [{ label: "GitHub", href: "#" }], // TODO
  },
];

export type Post = {
  slug: string; // folder name under app/writing/<slug>/
  title: string;
  summary: string; // one line, shown under the title
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
    published: true, // template post — rewrite with your real numbers
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

/* --- Honors: one compact line. Only defensible entries. --- */
export const honors: string[] = [
  "DubHacks 2025 — 2nd of 200+ teams",
  "Microsoft Imagine Cup",
  "MIT Beaver Works",
  "Harvard AI Bootcamp",
  "Congressional Gold Medal",
  "Blu Birds",
];

/* --- Now: what you're on this month. Keep the date stamp honest. --- */
export const now = {
  updated: "July 2026",
  items: [
    "Running adaptive KV-cache compression experiments; publishing the result either way.",
    "Scaling CyberMinds and writing up how the terminal isolation actually works.",
    "Reading papers on inference systems and eval design.",
    "Getting this site to three real posts.",
  ],
};
