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
  // One line on what you are, in a breath.
  tagline: "I build systems where ML meets the real world.",
  description:
    "Aarohi Gandhi — engineer at UW building agentic and retrieval systems. Entered UW at 15 through the Robinson Center. Founded CyberMinds (5,000+ users, 12 countries). I build things that help people, and write down what broke.",
  url: "https://aarohigandhi.com", // TODO: confirm domain before launch
  // TODO: switch to aarohi@aarohigandhi.com once the domain + forwarding are live.
  email: "aarohigandhi@hotmail.com",
  location: "Seattle, WA",
  socials: {
    github: "https://github.com/aarohigandhi",
    linkedin: "https://www.linkedin.com/in/aarohigandhi",
    resume: "/resume.pdf", // TODO: drop the canonical resume PDF into /public/resume.pdf
  },
} as const;

/* --- About: four sentences, max. Who you are, what you build now, what next,
       and one human line. All defensible. --- */
export const about: string[] = [
  "i entered uw at 15 through the robinson center's early entrance program, where i study computer science.",
  "at 15 i also founded cyberminds, an ai + cybersecurity learning platform that 5,000+ people now use across 12 countries. since then i've shipped semantic search with a real eval harness, an ml threat-detection pipeline, and an ios app.",
  "lately i've been obsessed with agentic and retrieval systems — getting models to actually do things, not just answer. i love building things that help people, companies, and systems.",
  "mostly i try to build things that are simple — which, funny enough, is usually the hardest thing to do.",
];

export type Accent = "rust" | "teal" | "plum" | "gold";

export type Project = {
  name: string;
  // Each card gets one of the four palette colors.
  accent: Accent;
  // Optional context/date shown next to the name (e.g. year, "in progress").
  meta?: string;
  // Roughly two lines — what it is, why it's interesting.
  blurb: string;
  // The one number or fact that earns attention.
  metric: string;
  // Tech / topic chips.
  tags: string[];
  links: { label: string; href: string }[];
  // Show on the home page's featured grid.
  featured?: boolean;
};

/* --- Selected work. Order matters: lead with the flagship. --- */
export const projects: Project[] = [
  {
    name: "Screenshot Brain",
    accent: "teal",
    meta: "2026 · flagship",
    blurb:
      "full-stack semantic search over your screenshots — the graveyard of information nobody can search. the interesting part isn't the search, it's the labeled eval harness i built to grade top-3 retrieval accuracy and find where it was quietly failing.",
    metric: "labeled eval harness · top-3 retrieval",
    tags: ["Next.js", "pgvector", "Claude vision", "evals", "search"],
    links: [{ label: "write-up", href: "/writing/screenshot-brain-eval/" }],
    featured: true,
  },
  {
    name: "CyberMinds",
    accent: "rust",
    meta: "2022 – present · founder",
    blurb:
      "an ai + cybersecurity learning platform: browser-based linux terminals on docker, ctf challenges, and courses. i handle the isolation, resource limits, and teardown so thousands of strangers can get a shell without breaking anything that matters.",
    metric: "5,000+ monthly users · 12 countries",
    tags: ["Docker", "Next.js", "WebSockets", "security", "infra"],
    links: [{ label: "site", href: "#" }], // TODO: real link
    featured: true,
  },
  {
    name: "CareVision AI",
    accent: "plum",
    meta: "2024 · DubHacks",
    blurb:
      "a computer-vision tool built at dubhacks to help with everyday sight tasks. built and demoed end-to-end in a weekend with a small team.", // TODO: sharpen what it actually does
    metric: "2nd of 200+ teams",
    tags: ["computer vision", "Python", "health"],
    links: [],
    featured: true,
  },
  {
    name: "PhishGuard AI",
    accent: "gold",
    meta: "2024 – 2025 · Microsoft Imagine Cup",
    blurb:
      "end-to-end ml threat-detection pipeline: feature engineering on url and email metadata, a scikit-learn classifier, an evaluation pipeline, and a real-time alerting dashboard. led a 5-person team through the full lifecycle.",
    metric: "-45% test-set breach rate",
    tags: ["scikit-learn", "Python", "ML", "security"],
    links: [],
    featured: false,
  },
  {
    name: "Adaptive KV-Cache Compression",
    accent: "gold",
    meta: "in progress",
    blurb:
      "a custom decode loop with pluggable kv-cache eviction policies, benchmarked against published baselines under identical instrumentation. my move into inference systems — i'll publish the result either way, including a clean negative one.",
    metric: "coming soon · inference systems",
    tags: ["PyTorch", "transformers", "inference", "LLMs"],
    links: [],
    featured: false,
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
    slug: "build-more-flatter-less",
    title: "build more, flatter less",
    summary:
      "on why the world needs more builders, blunter feedback, and simpler things.",
    date: "2026-07-14",
    published: true,
  },
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

