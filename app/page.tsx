import Link from "next/link";
import { projects, posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

/* A section label using a "~/" path motif — a small nod to the terminals I
   build. Original to this site, not borrowed. */
function Label({
  children,
  href,
  cta,
}: {
  children: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="flex items-baseline justify-between">
      <p className="text-sm text-faint">
        <span className="text-link">~/</span>
        {children}
      </p>
      {href && cta && (
        <Link href={href} className="text-sm text-faint hover:text-link">
          {cta} →
        </Link>
      )}
    </div>
  );
}

function firstSentence(s: string) {
  const i = s.indexOf(". ");
  return i === -1 ? s : s.slice(0, i + 1);
}

export default function Home() {
  const work = projects.slice(0, 3);
  const published = posts
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-2xl px-6 pb-10 pt-8 sm:pt-12">
      {/* intro */}
      <div className="fade-in space-y-5 leading-[1.9]">
        <p className="text-lg text-bright">
          i build systems where ML meets the real world.
        </p>
        <p>
          i entered uw at 15 through the{" "}
          <a
            href="https://robinsoncenter.uw.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            robinson center
          </a>
          , studying computer science. at 15 i also founded{" "}
          <span className="text-bright">cyberminds</span>, an ai + cybersecurity
          learning platform that 5,000+ people use across 12 countries.
        </p>
        <p>
          lately i&apos;ve been obsessed with agentic and retrieval systems —
          getting models to actually{" "}
          <span className="text-bright">do</span> things, not just answer.{" "}
          <span className="text-hot">
            i think the fastest way to understand something is to build it and
            measure it.
          </span>
        </p>
      </div>

      {/* work */}
      <section className="fade-in mt-10 border-t border-rule pt-8">
        <Label href="/projects" cta="all">
          work
        </Label>
        <ul className="mt-5 space-y-5">
          {work.map((p) => (
            <li key={p.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="text-bright">{p.name}</span>
                <span className="text-sm text-link">{p.metric}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted">
                {firstSentence(p.blurb)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* writing */}
      <section className="fade-in mt-10 border-t border-rule pt-8">
        <Label href="/writing" cta="all">
          writing
        </Label>
        {published.length === 0 ? (
          <p className="mt-5 text-muted">first essay is on the way.</p>
        ) : (
          <ul className="mt-5 space-y-2">
            {published.map((post) => (
              <li key={post.slug} className="flex flex-wrap gap-x-3">
                <time className="shrink-0 text-faint">
                  {formatDate(post.date)}
                </time>
                <Link href={`/writing/${post.slug}/`} className="link">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* now */}
      <section className="fade-in mt-10 border-t border-rule pt-8">
        <Label>now</Label>
        <p className="mt-5 text-muted">
          building{" "}
          <span className="text-bright">adaptive kv-cache compression</span> —
          my move into inference systems. i&apos;ll publish the result either
          way, including a clean negative one.
        </p>
      </section>
    </main>
  );
}
