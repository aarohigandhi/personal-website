"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/projects", label: "projects" },
  { href: "/writing", label: "writing" },
  { href: "/about", label: "about" },
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
          className="text-muted transition-colors hover:text-bright"
        >
          <span className="text-link">♞</span> aarohi gandhi
        </Link>

        <nav className="flex items-center gap-5">
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
        </nav>
      </div>
    </header>
  );
}
