import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="px-6 pb-14 pt-10 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 text-sm text-faint">
        <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="link">
          linkedin
        </a>
        <span aria-hidden>·</span>
        <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="link">
          github
        </a>
        <span className="ml-auto text-faint">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
