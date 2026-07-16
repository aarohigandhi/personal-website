import Link from "next/link";
import { site } from "@/lib/content";

// One green accent for all highlighted words. Inline so they render even with
// a stale cached stylesheet.
const ACCENT = "#7fd99a";
const C = { blue: ACCENT, yellow: ACCENT, green: ACCENT };

function Word({ color, children }: { color: string; children: string }) {
  return <span style={{ color }}>{children}</span>;
}

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-10 pt-8 sm:pt-16">
      <div className="fade-in space-y-5 leading-[1.9]">
        <h1 className="text-2xl text-bright">aarohi gandhi</h1>

        <p>
          i started college at <Word color={C.yellow}>fifteen</Word> and have
          been building ever since.
        </p>

        <p>
          i founded <Word color={C.blue}>cyberminds</Word> to make security
          feel easier to learn.
        </p>

        <p className="text-bright">
          i like <Word color={C.green}>building it</Word> end to end, especially
          things people actually use.
        </p>

        <p>
          lately i&apos;ve been thinking about <Word color={C.yellow}>ml</Word>
          and how to make models faster and more useful.
        </p>

        <p className="text-sm text-muted">
          i&apos;m looking for software engineering and ml internships where i
          can ship real work.
        </p>

        <p className="text-muted">
          here&apos;s my{" "}
          <Link href="/projects" className="link">
            projects
          </Link>{" "}
          and{" "}
          <Link href="/writing" className="link">
            writing
          </Link>
          , or email me at{" "}
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
