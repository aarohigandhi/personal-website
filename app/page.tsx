import Link from "next/link";
import { site } from "@/lib/content";

// Two greens: "build" words in bright green, the rest in soft lime. Inline so
// they render even with a stale cached stylesheet.
const GREEN = "#7fd99a";
const LIME = "#d4f79b";
const C = { blue: LIME, yellow: LIME, green: GREEN };

function Word({ color, children }: { color: string; children: string }) {
  return <span style={{ color }}>{children}</span>;
}

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-10 pt-8 sm:pt-16">
      <div className="fade-in space-y-5 leading-[1.9]">
        <div>
          <h1 className="text-2xl text-bright">aarohi gandhi</h1>
          <p className="mt-1 text-muted">
            i <Word color={C.green}>build</Word> things people actually use.
          </p>
        </div>

        <p>
          i dropped out of high school to start college at{" "}
          <Word color={C.yellow}>fifteen</Word>{" "}(applied math and cs at uw),
          and building things is pretty much all i&apos;ve done since.
        </p>

        <p>
          as a teenager i founded <Word color={C.blue}>cyberminds</Word>, a
          security learning platform{" "}
          <strong className="text-bright">thousands of people</strong> now use
          across a dozen countries.
        </p>

        <p className="text-bright">
          i think the best way to understand something is to{" "}
          <Word color={C.green}>build it</Word>.
        </p>

        <p>
          i care about clear communication, simple systems, and building things
          end to end.
        </p>

        <p>
          lately i&apos;ve been exploring the frontier of{" "}
          <Word color={C.yellow}>ml</Word>, especially how to make models faster
          and actually usable.
        </p>

        <p className="text-sm text-muted">
          right now i&apos;m after{" "}
          <strong className="text-bright">
            software engineering and ml internships
          </strong>{" "}
          where i can ship real things.
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
