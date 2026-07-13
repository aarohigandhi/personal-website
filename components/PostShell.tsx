import Link from "next/link";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

/* Wraps every essay: narrow column, title header, and prose styles.
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
    <main className="mx-auto max-w-2xl px-6 pb-8 pt-10 sm:pt-16">
      <Link href="/writing/" className="text-sm text-faint hover:text-link">
        ← writing
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          {post && (
            <time className="text-sm text-faint">{formatDate(post.date)}</time>
          )}
          <h1 className="mt-2 text-xl font-bold leading-snug text-bright">
            {post?.title ?? "untitled"}
          </h1>
          {post?.summary && <p className="mt-2 text-muted">{post.summary}</p>}
        </header>

        <div className="prose">{children}</div>
      </article>

      <footer className="mt-14 border-t border-rule pt-6 text-sm">
        <Link href="/writing/" className="text-faint hover:text-link">
          ← all writing
        </Link>
      </footer>
    </main>
  );
}
