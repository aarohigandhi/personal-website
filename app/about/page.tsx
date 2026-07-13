import type { Metadata } from "next";
import { site, about, interests, honors } from "@/lib/content";

export const metadata: Metadata = {
  title: "about",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-8 pt-10 sm:pt-16">
      <p className="fade-in text-bright">about</p>

      <div className="fade-in mt-6 space-y-5 leading-[1.9]">
        {about.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* Beyond the code */}
      <section className="fade-in mt-12">
        <p className="text-faint">
          <span className="text-link">~/</span>beyond-the-code
        </p>
        <ul className="mt-4 space-y-3">
          {interests.map((it) => (
            <li key={it.label} className="flex gap-3">
              <span aria-hidden>{it.emoji}</span>
              <span>
                <span className="text-bright">{it.label}</span>
                <span className="text-muted"> — {it.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Honors */}
      <section className="fade-in mt-12">
        <p className="text-faint">
          <span className="text-link">~/</span>honors
        </p>
        <ul className="mt-4 space-y-1.5 text-muted">
          {honors.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="fade-in mt-12">
        <p className="text-faint">
          <span className="text-link">~/</span>say-hi
        </p>
        <p className="mt-4 text-text">
          i&apos;m always up for a good problem. fastest way to reach me is
          email —{" "}
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
