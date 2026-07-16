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
  // One line on who you are, in a breath. Builder, ships real things.
  tagline: "I build things people actually use.",
  description:
    "Aarohi Gandhi builds things people actually use. She started college at 15, founded a cybersecurity education platform that thousands of people rely on across a dozen countries, and works on ML systems and inference. Currently looking for software engineering and ML internships.",
  url: "https://aarohigandhi.com", // TODO: confirm domain before launch
  email: "aarohi.gandhi@gmail.com",
  location: "Seattle, WA",
  socials: {
    github: "https://github.com/aarohigandhi",
    linkedin: "https://www.linkedin.com/in/aarohigandhi",
    resume: "/resume/", // on-site resume page (add a downloadable PDF later)
  },
} as const;

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
      "full stack semantic search over your screenshots, the graveyard of information nobody can search. the interesting part isn't the search, it's the labeled eval harness i built to grade top 3 retrieval accuracy and find where it was quietly failing.",
    metric: "labeled eval harness · top 3 retrieval",
    tags: ["Next.js", "pgvector", "Claude vision", "evals", "search"],
    links: [{ label: "site", href: "https://cacheapp.vercel.app/" }],
    featured: true,
  },
  {
    name: "CyberMinds",
    accent: "rust",
    meta: "2022 to present · founder",
    blurb:
      "an ai + cybersecurity learning platform: browser based linux terminals on docker, ctf challenges, and courses. i handle the isolation, resource limits, and teardown so thousands of strangers can get a shell without breaking anything that matters.",
    metric: "5,000+ monthly users · 12 countries",
    tags: ["Docker", "Next.js", "WebSockets", "security", "infra"],
    links: [{ label: "site", href: "https://cyber-minds.github.io/" }],
    featured: true,
  },
  {
    name: "CareVision AI",
    accent: "plum",
    meta: "2024 · DubHacks",
    blurb:
      "a computer vision tool built at dubhacks to help with everyday sight tasks. built and demoed end to end in a weekend with a small team.", // TODO: sharpen what it actually does
    metric: "2nd of 200+ teams",
    tags: ["computer vision", "Python", "health"],
    links: [],
    featured: true,
  },
  {
    name: "PhishGuard AI",
    accent: "gold",
    meta: "2024 to 2025 · Microsoft Imagine Cup",
    blurb:
      "end to end ml threat detection pipeline: feature engineering on url and email metadata, a scikit learn classifier, an evaluation pipeline, and a real time alerting dashboard. led a 5 person team through the full lifecycle.",
    metric: "cut breach rate 45% on test data",
    tags: ["scikit learn", "Python", "ML", "security"],
    links: [],
    featured: false,
  },
  {
    name: "Adaptive KV Cache Compression",
    accent: "gold",
    meta: "in progress",
    blurb:
      "a custom decode loop with pluggable kv cache eviction policies, benchmarked against published baselines under identical instrumentation. my move into inference systems. i'll publish the result either way, including a clean negative one.",
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
    slug: "tell-the-truth",
    title: "the nicest thing you can do is tell the truth",
    summary:
      "on honest feedback, why the world needs more builders, and how hard it is to keep things simple.",
    date: "2026-07-14",
    published: true,
  },
  {
    slug: "screenshot-brain-eval",
    title: "how i measured whether my semantic search was actually good",
    summary:
      "building an eval harness for screenshot brain, the part nobody demos.",
    date: "2026-07-12",
    published: false, // draft: hidden until rewritten with real numbers
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


