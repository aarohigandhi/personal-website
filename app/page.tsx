import Link from "next/link";
import {
  site,
  hero,
  quickFacts,
  projects,
  posts,
  now,
} from "@/lib/content";
import { formatDate } from "@/lib/format";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const published = posts
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <main>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        <div className="aurora" />
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:pt-28">
          <p className="fade-up font-mono text-sm text-accent">
            {hero.greeting} <span className="inline-block">👋</span>
          </p>
          <h1
            className="fade-up mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-ink sm:text-6xl"
            style={{ animationDelay: "0.05s" }}
          >
            {hero.headline}
          </h1>
          <p
            className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "0.1s" }}
          >
            {hero.blurb}
          </p>

          <div
            className="fade-up mt-7 flex flex-wrap gap-2"
            style={{ animationDelay: "0.15s" }}
          >
            {quickFacts.map((f) => (
              <span
                key={f}
                className="rounded-full border border-rule bg-raised px-3 py-1 font-mono text-xs text-muted"
              >
                {f}
              </span>
            ))}
          </div>

          <div
            className="fade-up mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              href="/projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              See my work
            </Link>
            <Link
              href="/writing"
              className="rounded-full border border-rule bg-raised px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/50"
            >
              Read my writing
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="px-2 text-sm font-medium text-muted underline decoration-1 underline-offset-4 hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- Featured work ---------------- */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <SectionHeading kicker="Selected work" href="/projects" cta="All projects" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>

      {/* ---------------- Latest writing ---------------- */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <SectionHeading kicker="Writing" href="/writing" cta="All writing" />
        {published.length === 0 ? (
          <p className="mt-6 text-muted">First essay is on the way.</p>
        ) : (
          <ul className="mt-6 divide-y divide-rule">
            {published.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}/`}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="sm:flex-1">
                    <h3 className="font-serif text-lg text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">{post.summary}</p>
                  </div>
                  <time className="font-mono text-xs text-faint">
                    {formatDate(post.date)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ---------------- Now + CTA ---------------- */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-6 rounded-2xl border border-rule bg-raised p-7 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <SectionHeading kicker={`Now · ${now.updated}`} />
            <ul className="mt-5 space-y-2">
              {now.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem] text-ink/90">
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/about"
            className="justify-self-start rounded-full border border-rule bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/50 sm:justify-self-end"
          >
            More about me →
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  kicker,
  href,
  cta,
}: {
  kicker: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        {kicker}
      </h2>
      {href && cta && (
        <Link
          href={href}
          className="whitespace-nowrap text-sm text-muted transition-colors hover:text-accent"
        >
          {cta} →
        </Link>
      )}
    </div>
  );
}
