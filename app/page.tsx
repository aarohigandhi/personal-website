import { site, about, honors } from "@/lib/content";

/*
  Home is also the about page: who I am, in one place. Kept simple —
  name, one line, a short bio, honors, and how to reach me.
*/
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-10 pt-8 sm:pt-14">
      <div className="fade-in">
        <h1 className="text-2xl text-bright">aarohi gandhi</h1>
        <p className="mt-1 text-muted">
          i build systems where ML meets the real world.
        </p>

        <div className="mt-8 space-y-5 leading-[1.9]">
          {about.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <section className="mt-12">
          <p className="text-faint">
            <span className="text-link">~/</span>honors
          </p>
          <ul className="mt-4 space-y-1.5 text-muted">
            {honors.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
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
      </div>
    </main>
  );
}
