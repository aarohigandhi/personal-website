import type { Metadata } from "next";
import { site, about, interests, honors } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="fade-up font-mono text-sm text-accent">About</p>
      <h1 className="fade-up mt-3 font-serif text-4xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">
        Hi, I&apos;m Aarohi.
      </h1>

      {/* Bio */}
      <div className="fade-up mt-8 space-y-4 text-lg leading-relaxed text-ink/90">
        {about.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* Beyond the code */}
      <section className="mt-14">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Beyond the code
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {interests.map((it) => (
            <div
              key={it.label}
              className="rounded-2xl border border-rule bg-raised p-5"
            >
              <div className="text-2xl" aria-hidden>
                {it.emoji}
              </div>
              <h3 className="mt-2 font-serif text-lg text-ink">{it.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {it.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Honors */}
      <section className="mt-14">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Honors
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {honors.map((h) => (
            <li
              key={h}
              className="rounded-full border border-rule bg-raised px-3.5 py-1.5 text-sm text-muted"
            >
              {h}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="mt-14 rounded-2xl border border-rule bg-raised p-7">
        <h2 className="font-serif text-2xl text-ink">Let&apos;s talk.</h2>
        <p className="mt-2 text-muted">
          I&apos;m always up for a good problem. The fastest way to reach me is
          email.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent underline decoration-1 underline-offset-2 hover:decoration-2"
          >
            {site.email}
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline decoration-1 underline-offset-2 hover:decoration-2"
          >
            GitHub ↗
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline decoration-1 underline-offset-2 hover:decoration-2"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.socials.resume}
            className="font-medium text-accent underline decoration-1 underline-offset-2 hover:decoration-2"
          >
            Résumé
          </a>
        </div>
      </section>
    </main>
  );
}
