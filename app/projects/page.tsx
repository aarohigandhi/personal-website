import type { Metadata } from "next";
import { projects, site } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected work by ${site.name}.`,
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <p className="fade-up font-mono text-sm text-accent">Selected work</p>
      <h1 className="fade-up mt-3 font-serif text-4xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">
        Things I&apos;ve built
      </h1>
      <p className="fade-up mt-4 max-w-2xl text-lg text-muted">
        Each of these shipped to real users or produced a real result. Numbers
        are ones I can reconstruct on demand.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </main>
  );
}
