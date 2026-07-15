import type { Metadata } from "next";
import { site } from "@/lib/content";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "resume",
  description: `Resume of ${site.name}.`,
};

// Harmonized muted palette, one hue per section.
const HUE = {
  teal: "#57b8a8",
  amber: "#d8a94c",
  rose: "#df8b87",
  violet: "#ab9ce6",
  sage: "#90c89b",
};

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2
        className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em]"
        style={{ color }}
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Card({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg border border-rule bg-bg2 p-5"
      style={{ borderLeft: `3px solid ${color}` }}
    >
      {children}
    </div>
  );
}

function Entry({
  title,
  meta,
  stack,
  bullets,
  color,
}: {
  title: string;
  meta?: string;
  stack?: string;
  bullets: string[];
  color: string;
}) {
  return (
    <Card color={color}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="font-bold text-bright">{title}</h3>
        {meta && <span className="text-sm text-faint">{meta}</span>}
      </div>
      {stack && <p className="mt-0.5 text-sm text-faint">{stack}</p>}
      <ul className="mt-3 space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-[0.95rem]">
            <span
              className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-16 pt-8 sm:pt-14">
      <div className="fade-in">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-bright">Aarohi Gandhi</h1>
            <p className="text-sm text-faint">Seattle, WA</p>
          </div>
          <PrintButton />
        </div>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="link">
            github
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            linkedin
          </a>
        </p>

        <Section title="Education" color={HUE.teal}>
          <Entry
            color={HUE.teal}
            title="University of Washington, Seattle"
            meta="Expected Jun 2028"
            stack="B.S. Applied Mathematics with Computer Science (Paul G. Allen School of CS&E) · GPA 3.80 / 4.00"
            bullets={[
              "Admitted to UW at age 15 through the Robinson Center Early Entrance Program, two years ahead of cohort. Dean's List, 4.0 quarter.",
              "Coursework: Algorithms and Data Structures, Databases and Concurrency, Discrete Math and Logic, Machine Learning, Linear Algebra, Applied Probability, Statistical Inference, Optimization, Combinatorics.",
            ]}
          />
        </Section>

        <Section title="Projects" color={HUE.amber}>
          <Entry
            color={HUE.amber}
            title="Adaptive KV Cache Compression for Long Context LLM Inference"
            meta="2026"
            stack="Python · PyTorch · Triton · GPU profiling · CUDA memory"
            bullets={[
              "Cut peak GPU memory 40% at under 2% quality loss by throwing out the HuggingFace generate abstraction, writing a custom greedy decode loop, and taking manual control of the KV cache memory layout for per head and per layer eviction.",
              "Made four eviction methods directly comparable for the first time by building a single pluggable policy interface and running published baselines (StreamingLLM, H2O, SnapKV) plus a novel adaptive per head budget method under identical instrumentation.",
              "Located the decode bottleneck at 30% of per token latency by profiling the hot loop and instrumenting peak memory, per token decode latency, and attention entropy; evaluated on LongBench, needle in a haystack sweeps, and PG19 perplexity against preregistered criteria.",
            ]}
          />
          <Entry
            color={HUE.amber}
            title="Screenshot Brain, Semantic Screenshot Search"
            meta="2026"
            stack="Next.js · React · Supabase (Postgres, pgvector) · Claude API · embeddings"
            bullets={[
              "Built a full stack app that makes any screenshot searchable in plain language by ingesting images, extracting text with a vision model, embedding the content, and serving natural language semantic search over a pgvector index.",
              "Made search quality measurable rather than guessed at by building a labeled evaluation harness that scores top 3 retrieval accuracy; owned the upload pipeline, storage schema, auth, and search UI end to end.",
            ]}
          />
          <Entry
            color={HUE.amber}
            title="Concurrent Scheduling Backend"
            meta="2026"
            stack="Python · SQL · ACID transactions · two phase locking"
            bullets={[
              "Held transactional correctness across 1,000+ simulated concurrent users by implementing two phase locking and transaction isolation over a relational schema built from an empty file, with parameterized queries throughout.",
              "Cut average query latency over 40% by restructuring joins and indexing hot columns. Scored 75 of 75.",
            ]}
          />
          <Entry
            color={HUE.amber}
            title="PhishGuard AI, Microsoft Imagine Cup"
            meta="2024 to 2025"
            stack="Python · NLP · scikit learn · PostgreSQL · REST APIs"
            bullets={[
              "Led a 5 person team through the full lifecycle of an ML threat detection system with fault tolerant fallback handling for model failures and malformed inputs; cut breach rate 45% on test data.",
            ]}
          />
          <Entry
            color={HUE.amber}
            title="Also"
            bullets={[
              "PillPall, iOS medication app shipped solo to the App Store (Swift, SwiftUI).",
              "DubHacks 2024 CareVision, real time multimodal vision system, 2nd of 200+ teams, per frame latency cut 35%.",
              "Independent robustness experiments on the WILDS public benchmark across 10+ domains, evaluation consistency improved 40%.",
              "OCaml interpreter for a typed lambda calculus, self directed.",
            ]}
          />
        </Section>

        <Section title="Experience" color={HUE.rose}>
          <Entry
            color={HUE.rose}
            title="Founder and Lead Engineer, CyberMinds"
            meta="2022 to Present"
            stack="Production Python platform on Linux · 5,000+ monthly active users across 12 countries · 50+ contributors"
            bullets={[
              "Scaled from zero to 5,000+ monthly active users across 12 time zones as sole architect of the entire system, from the request gateway through the model inference layer, with no team, no funding, and no prior codebase.",
              "Cut request failure rate from 30% to under 3% through upstream provider outages by building a fault tolerant multi provider proxy with exponential backoff, per provider rate limiting, idempotent writes, and automatic failover on degradation.",
              "Cut dashboard load time over 50% by profiling the slow request path, restructuring joins, and indexing hot columns; ship on two week cycles with code review and tests on every commit across a 50+ person distributed team.",
            ]}
          />
          <Entry
            color={HUE.rose}
            title="Founder, Blu Birds"
            meta="2023 to Present"
            stack="Technology access initiative for elderly communities · Seattle, WA"
            bullets={[
              "Delivered usable technology training to 200+ elderly participants by running structured interviews at retirement communities, publishing a white paper on senior usability barriers, and rebuilding the curriculum around the failure modes they surfaced.",
            ]}
          />
        </Section>

        <Section title="Technical Skills" color={HUE.violet}>
          <Card color={HUE.violet}>
            <div className="space-y-2 text-[0.95rem]">
              <p>
                <span className="font-bold text-bright">Languages:</span> Python
                (primary, expert), SQL (advanced), Java, TypeScript and
                JavaScript, R, OCaml, Bash.
              </p>
              <p>
                <span className="font-bold text-bright">Systems:</span> Linux,
                concurrency and locking, memory management, performance
                profiling, latency measurement, ACID transactions, Docker, Git,
                GitHub Actions, CI/CD, REST APIs, PostgreSQL, SQLite.
              </p>
              <p>
                <span className="font-bold text-bright">ML and numerics:</span>{" "}
                PyTorch, Triton, HuggingFace Transformers, CUDA memory
                profiling, NumPy, pandas, scikit learn, embeddings and vector
                search, evaluation harness design.
              </p>
              <p>
                <span className="font-bold text-bright">Mathematics:</span>{" "}
                Linear algebra, applied probability, statistical inference,
                discrete math, combinatorics, linear programming and
                optimization.
              </p>
            </div>
          </Card>
        </Section>

        <Section title="Honors" color={HUE.sage}>
          <Card color={HUE.sage}>
            <ul className="space-y-1.5 text-[0.95rem]">
              <li>Competitive chess player since 2020.</li>
              <li>DubHacks 2024, 2nd place of 200+ teams.</li>
              <li>
                MIT Beaver Works Summer Institute 2023: hardware security and
                embedded systems exploitation.
              </li>
              <li>
                Microsoft Imagine Cup competitor. Harvard AI Bootcamp 2024.
                Microsoft Certified Cybersecurity Professional. Congressional
                Gold Volunteer Service Award, 400+ hours.
              </li>
            </ul>
          </Card>
        </Section>
      </div>
    </main>
  );
}
