"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/projects", label: "projects" },
  { href: "/writing", label: "writing" },
  { href: "/resume", label: "resume" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="px-6 py-6 sm:px-10 sm:py-8">
      <div className="mx-auto flex max-w-3xl items-center justify-between text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 text-muted transition-colors hover:text-bright"
        >
          <span className="text-[0.55rem] text-link">●</span>
          aarohi gandhi
          <span className="text-[0.55rem] text-link">●</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-5">
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              aria-current={isActive(pathname, t.href) ? "page" : undefined}
              className={`transition-colors hover:text-bright ${
                isActive(pathname, t.href) ? "text-link" : "text-muted"
              }`}
            >
              {t.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Open command menu"
            onClick={() => window.dispatchEvent(new Event("cmdk:open"))}
            className="rounded border border-rule px-1.5 py-0.5 text-xs text-faint transition-colors hover:border-link/50 hover:text-link"
          >
            ⌘K
          </button>
        </nav>
      </div>
    </header>
  );
}
