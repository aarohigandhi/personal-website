import Link from "next/link";
import { Fragment } from "react";

/*
  Home as a small aligned index — leaning on what monospace is good at
  (columns), not a prose paragraph. Simple, scannable, and its own thing.
*/
const rows: { k: string; v: React.ReactNode }[] = [
  {
    k: "now",
    v: (
      <>
        founder of <span className="text-bright">cyberminds</span> (5,000+ users,
        12 countries). moving into agentic + inference systems.
      </>
    ),
  },
  {
    k: "built",
    v: (
      <>
        semantic search with a real eval harness · an ml threat-detection
        pipeline · a shipped ios app.
      </>
    ),
  },
  {
    k: "me",
    v: (
      <>
        entered uw at 15, studying cs. chess player. i build things to
        understand them.
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-10 pt-8 sm:pt-16">
      <div className="fade-in">
        <h1 className="text-xl text-bright">aarohi gandhi</h1>
        <p className="mt-1 text-muted">
          i build systems where ML meets the real world.
        </p>

        <dl className="mt-10 grid grid-cols-[4rem_1fr] gap-x-5 gap-y-4 leading-[1.8] sm:grid-cols-[5rem_1fr]">
          {rows.map((r) => (
            <Fragment key={r.k}>
              <dt className="text-faint">{r.k}</dt>
              <dd className="text-text">{r.v}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </main>
  );
}
