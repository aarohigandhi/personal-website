import Link from "next/link";
import type { Metadata } from "next";
import { projects, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "projects",
  description: `Selected work by ${site.name}.`,
};

function ProjectLink({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  const arrow = external ? " ↗" : " →";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {label}
      {arrow}
    </a>
  ) : (
    <Link href={href} className="link">
      {label}
      {arrow}
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-8 pt-10 sm:pt-16">
      <p className="fade-in text-bright">projects</p>
      <p className="fade-in mt-2 text-muted">things i&apos;ve built.</p>

      <div className="fade-in mt-12 space-y-12">
        {projects.map((p) => (
          <article key={p.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h2 className="text-bright">{p.name}</h2>
              {p.meta && <span className="text-sm text-faint">{p.meta}</span>}
            </div>

            <p className="mt-1 text-sm text-link">{p.metric}</p>

            <p className="mt-3 text-text">{p.blurb}</p>

            {p.links.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-x-5 text-sm">
                {p.links.map((l) => (
                  <ProjectLink key={l.label} label={l.label} href={l.href} />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
