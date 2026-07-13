import Link from "next/link";
import type { Metadata } from "next";
import { posts, site } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Writing",
  description: `Essays by ${site.name}.`,
};

export default function WritingIndex() {
  const published = posts
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="fade-up font-mono text-sm text-accent">Writing</p>
      <h1 className="fade-up mt-3 font-serif text-4xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">
        Notes &amp; essays
      </h1>
      <p className="fade-up mt-4 max-w-2xl text-lg text-muted">
        Long-form write-ups of what I built, what broke, and the number that
        moved. The part nobody demos.
      </p>

      {published.length === 0 ? (
        <p className="mt-10 text-muted">First essay is on the way.</p>
      ) : (
        <ul className="mt-10 divide-y divide-rule border-t border-rule">
          {published.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}/`}
                className="group block py-6"
              >
                <time className="font-mono text-xs text-faint">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-1.5 font-serif text-xl text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-1 text-muted">{post.summary}</p>
                <span className="mt-2 inline-block text-sm font-medium text-accent">
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
