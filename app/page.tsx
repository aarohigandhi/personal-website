import Link from "next/link";
import { site } from "@/lib/content";

/*
  Home is also the about page. Short, airy lines. Important words are bold and
  highlighted in soft blue / green / yellow. No dashes.
*/
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-10 pt-8 sm:pt-16">
      <div className="fade-in space-y-5 leading-[1.9]">
        <div>
          <h1 className="text-2xl text-bright">aarohi gandhi</h1>
          <p className="mt-1 text-muted">
            i <span className="hl hl-a">build</span> things people actually
            use.
          </p>
        </div>

        <p>
          started college at <span className="hl hl-b">fifteen</span>{" "}
          (applied math and cs at uw), and building things is pretty much all
          i&apos;ve done since.
        </p>

        <p>
          as a teenager i founded{" "}
          <span className="hl hl-c">cyberminds</span>, a security learning
          platform <strong className="text-bright">thousands of people</strong>{" "}
          now use across a dozen countries.
        </p>

        <p className="text-bright">
          i think the best way to understand something is to{" "}
          <span className="hl hl-a">build it</span>.
        </p>

        <p>
          when i&apos;m not building i&apos;m usually playing{" "}
          <span className="hl hl-b">chess</span>, or taking apart a new
          programming language to see how it thinks.
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
