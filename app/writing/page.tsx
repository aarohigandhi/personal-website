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
    <main className="mx-auto max-w-[680px] px-6 py-16 sm:py-20">
      <Link href="/" className="font-mono text-xs text-faint hover:text-accent">
        ← {site.name}
      </Link>

      <h1 className="mt-10 font-serif text-4xl font-medium tracking-[-0.02em] text-ink">
        Writing
      </h1>

      {published.length === 0 ? (
        <p className="mt-8 text-muted">First essay is on the way.</p>
      ) : (
        <ul className="mt-12 space-y-8">
          {published.map((post) => (
            <li key={post.slug} className="border-t border-rule pt-8">
              <Link href={`/writing/${post.slug}/`} className="group block">
                <time className="font-mono text-xs text-faint">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 font-serif text-xl text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-1 text-muted">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
