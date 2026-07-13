import { site } from "@/lib/content";

const links = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: site.socials.github },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Résumé", href: site.socials.resume },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {site.name}. Built by hand.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted transition-colors hover:text-accent"
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
