import Link from "next/link";

/*
  Home is deliberately simple: a short first-person intro, a small credo, and
  one quiet line of links. Everything else lives behind the nav. Let the
  writing carry it.
*/
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-10 pt-8 sm:pt-14">
      <div className="fade-in space-y-5 leading-[1.9]">
        <p className="text-lg text-bright">
          i build systems where ML meets the real world.
        </p>

        <p>
          i entered uw at 15 through the{" "}
          <a
            href="https://robinsoncenter.uw.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            robinson center
          </a>
          , studying computer science. at 15 i also founded{" "}
          <span className="text-bright">cyberminds</span>, an ai + cybersecurity
          learning platform that 5,000+ people use across 12 countries.
        </p>

        <p>
          lately i&apos;ve been obsessed with agentic and retrieval systems —
          getting models to actually <span className="text-bright">do</span>{" "}
          things, not just answer.
        </p>

        {/* credo */}
        <p className="pt-3">
          <span className="text-muted">how i work — </span>
          <span className="text-hot">build it. measure it. improve it.</span>
        </p>

        {/* one quiet line of links */}
        <p className="pt-4 text-muted">
          here&apos;s my{" "}
          <Link href="/projects" className="link">
            work
          </Link>
          , my{" "}
          <Link href="/writing" className="link">
            writing
          </Link>
          , and{" "}
          <Link href="/about" className="link">
            more about me
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
