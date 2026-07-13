"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href="/"
          className="font-serif text-lg font-medium tracking-tight text-ink"
        >
          Aarohi Gandhi
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {tabs.map((t) => {
            const active = isActive(pathname, t.href);
            return (
              <Link
                key={t.href}
                href={t.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "text-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {t.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}

          <a
            href={site.socials.resume}
            className="ml-2 hidden rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20 sm:inline-block"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
