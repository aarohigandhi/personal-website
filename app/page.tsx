import Link from "next/link";
import { site, about, projects, posts, now } from "@/lib/content";
import { formatDate } from "@/lib/format";

/* Small monospace section label — the only "chrome" on the page. */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-faint">
      {children}
    </h2>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-rule py-12">
      <Label>{label}</Label>
      {children}
    </section>
  );
}

/* Plain, underline-on-hover link used throughout. */
function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  const cls =
    "text-accent underline decoration-1 underline-offset-2 hover:decoration-2";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export default function Home() {
  const published = posts
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 sm:py-28">
      {/* Masthead: name + one line. */}
      <header className="pb-4">
        <h1 className="font-serif text-4xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-3 text-lg text-muted">{site.tagline}</p>
      </header>

      {/* About */}
      <Section label="About">
        <div className="space-y-4 text-ink/90">
          {about.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section label="Selected work">
        <ul className="space-y-9">
          {projects.map((p) => (
            <li key={p.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-serif text-xl text-ink">{p.name}</h3>
                <span className="font-mono text-xs text-faint">{p.metric}</span>
              </div>
              <p className="mt-1.5 text-muted">{p.blurb}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                {p.stack && (
                  <span className="font-mono text-xs text-faint">{p.stack}</span>
                )}
                {p.links.map((l) => (
                  <A key={l.label} href={l.href}>
                    {l.label}
                  </A>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Writing — the point of the site. */}
      <Section label="Writing">
        {published.length === 0 ? (
          <p className="text-muted">First essay is on the way.</p>
        ) : (
          <ul className="space-y-6">
            {published.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}/`}
                  className="group block"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-serif text-xl text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <time className="font-mono text-xs text-faint">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <p className="mt-1 text-muted">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* Now */}
      <Section label="Now">
        <ul className="space-y-2 text-ink/90">
          {now.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-faint" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-xs text-faint">
          Updated {now.updated}
        </p>
      </Section>

      {/* Contact — plain links, no form. */}
      <Section label="Contact">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <A href={`mailto:${site.email}`}>Email</A>
          <A href={site.socials.github}>GitHub</A>
          <A href={site.socials.linkedin}>LinkedIn</A>
          <A href={site.socials.resume}>Résumé</A>
        </div>
      </Section>

      <footer className="border-t border-rule pt-8 text-sm text-faint">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js — plain
          HTML, no tracking.
        </p>
      </footer>
    </main>
  );
}
