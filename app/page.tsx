import Link from "next/link";
import { site } from "@/lib/content";

// Inline colors (not CSS classes) so they render even with a stale cached
// stylesheet. Soft pastels tuned for a dark background.
const C = { blue: "#89b4fa", yellow: "#f9e2af", green: "#a6e3a1" };

function Word({ color, children }: { color: string; children: string }) {
  return <strong style={{ color }}>{children}</strong>;
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
          <Word color={C.yellow}>fifteen</Word> (applied math and cs at uw), and
          building things is pretty much all i&apos;ve done since.
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
          lately i&apos;ve been exploring the frontier of{" "}
          <Word color={C.yellow}>ml</Word>, especially how to make models faster
          and actually usable.
        </p>

        <p className="text-muted">
          right now i&apos;m after{" "}
          <strong className="text-bright">
            software engineering and ml internships
          </strong>{" "}
          where i can ship real things.
        </p>

        <p className="text-muted">
          <Link href="/projects" className="link">
            projects
          </Link>
          ,{" "}
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
