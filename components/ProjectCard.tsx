import Link from "next/link";
import type { Project } from "@/lib/content";
import { accentVar } from "@/lib/accent";
import { Tag } from "./Tag";

export function ProjectCard({ project }: { project: Project }) {
  const color = accentVar[project.accent];

  return (
    <article
      style={{ "--card": color } as React.CSSProperties}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-rule bg-raised p-6 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--card)_45%,transparent)] hover:shadow-[var(--shadow-lift)]"
    >
      {/* colored top edge */}
      <span className="absolute inset-x-0 top-0 h-1 bg-[var(--card)]" />

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl text-ink">{project.name}</h3>
      </div>
      {project.meta && (
        <p className="mt-0.5 font-mono text-xs text-faint">{project.meta}</p>
      )}

      <p className="mt-1 font-mono text-sm font-medium text-[var(--card)]">
        {project.metric}
      </p>

      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {project.blurb}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Tag key={t} color={color}>
            {t}
          </Tag>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        {project.links.map((l) => {
          const external = l.href.startsWith("http");
          const cls =
            "font-medium text-[var(--card)] underline decoration-1 underline-offset-2 hover:decoration-2";
          return external ? (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cls}
            >
              {l.label} ↗
            </a>
          ) : (
            <Link key={l.label} href={l.href} className={cls}>
              {l.label} →
            </Link>
          );
        })}
      </div>
    </article>
  );
}
