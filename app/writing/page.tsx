import Link from "next/link";
import type { Metadata } from "next";
import { posts, site } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "writing",
  description: `Essays by ${site.name}.`,
};

export default function WritingIndex() {
  const published = posts
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="mx-auto max-w-2xl px-6 pb-8 pt-10 sm:pt-16">
      <p className="fade-in text-bright">writing</p>
      <p className="fade-in mt-2 text-muted">
        what i built, what broke, and the number that moved. the part nobody
        demos.
      </p>

      {published.length === 0 ? (
        <p className="fade-in mt-10 text-muted">first essay is on the way.</p>
      ) : (
        <ul className="fade-in mt-10 space-y-4">
          {published.map((post) => (
            <li key={post.slug} className="flex flex-wrap gap-x-3">
              <time className="shrink-0 text-faint">
                {formatDate(post.date)}
              </time>
              <span className="text-faint" aria-hidden>
                |
              </span>
              <Link href={`/writing/${post.slug}/`} className="link">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
