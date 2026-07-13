import Link from "next/link";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

/* Wraps every essay: same column, title header, and prose styles.
   Post copy lives in a sibling content.mdx; metadata lives in content.ts. */
export function PostShell({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const post = posts.find((p) => p.slug === slug);

  return (
    <main className="mx-auto max-w-[680px] px-5 py-14 sm:py-16">
      <Link
        href="/writing/"
        className="font-mono text-xs text-faint hover:text-accent"
      >
        ← Writing
      </Link>

      <article className="mt-8">
        <header className="mb-10">
          {post && (
            <time className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
              {formatDate(post.date)}
            </time>
          )}
          <h1 className="mt-3 font-serif text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.5rem]">
            {post?.title ?? "Untitled"}
          </h1>
          {post?.summary && (
            <p className="mt-3 text-lg text-muted">{post.summary}</p>
          )}
        </header>

        <div className="prose">{children}</div>
      </article>

      <footer className="mt-16 border-t border-rule pt-8 font-mono text-xs text-faint">
        <Link href="/writing/" className="hover:text-accent">
          ← All writing
        </Link>
      </footer>
    </main>
  );
}
