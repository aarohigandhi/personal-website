"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { site, projects, posts } from "@/lib/content";

type Item = {
  label: string;
  href: string;
  hint: string;
  keywords?: string;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const items = useMemo<Item[]>(() => {
    const pages: Item[] = [
      { label: "home / about", href: "/", hint: "page", keywords: "about" },
      { label: "projects", href: "/projects/", hint: "page" },
      { label: "writing", href: "/writing/", hint: "page" },
    ];
    const proj: Item[] = projects.map((p) => {
      const ext = p.links.find((l) => l.href.startsWith("http"));
      return ext
        ? { label: p.name.toLowerCase(), href: ext.href, hint: "project ↗", keywords: p.tags.join(" ") }
        : { label: p.name.toLowerCase(), href: "/projects/", hint: "project", keywords: p.tags.join(" ") };
    });
    const writ: Item[] = posts
      .filter((p) => p.published)
      .map((p) => ({ label: p.title.toLowerCase(), href: `/writing/${p.slug}/`, hint: "post" }));
    const links: Item[] = [
      { label: "github", href: site.socials.github, hint: "↗" },
      { label: "linkedin", href: site.socials.linkedin, hint: "↗" },
      { label: "email", href: `mailto:${site.email}`, hint: "" },
      { label: "résumé", href: site.socials.resume, hint: "pdf" },
    ];
    return [...pages, ...proj, ...writ, ...links];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (it) =>
        it.label.includes(q) || (it.keywords?.toLowerCase().includes(q) ?? false),
    );
  }, [items, query]);

  const close = useCallback(() => setOpen(false), []);

  const select = useCallback(
    (item?: Item) => {
      if (!item) return;
      close();
      if (item.href.startsWith("/")) router.push(item.href);
      else if (item.href.startsWith("mailto:")) window.location.href = item.href;
      else window.open(item.href, "_blank", "noopener,noreferrer");
    },
    [router, close],
  );

  // Global: ⌘K / Ctrl+K toggles; custom event opens (from the nav button).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("cmdk:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("cmdk:open", onOpen);
    };
  }, []);

  // Reset + focus when opening; lock background scroll while open.
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    setActive((a) => Math.min(a, Math.max(0, results.length - 1)));
  }, [results.length]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      onMouseDown={close}
    >
      <div
        className="mx-auto mt-[14vh] w-[min(92vw,34rem)] overflow-hidden rounded-xl border border-rule bg-bg2 shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
            else if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            } else if (e.key === "Enter") {
              e.preventDefault();
              select(results[active]);
            }
          }}
          placeholder="jump to…"
          className="w-full border-b border-rule bg-transparent px-4 py-3 text-sm text-bright placeholder:text-faint focus:outline-none"
        />
        <ul ref={listRef} className="max-h-[52vh] overflow-y-auto py-1 text-sm">
          {results.length === 0 && (
            <li className="px-4 py-3 text-faint">no matches</li>
          )}
          {results.map((it, i) => (
            <li key={it.label + it.href}>
              <button
                onMouseEnter={() => setActive(i)}
                onClick={() => select(it)}
                className={`flex w-full items-center justify-between px-4 py-2 text-left transition-colors ${
                  i === active ? "bg-white/[0.06] text-bright" : "text-muted"
                }`}
              >
                <span>{it.label}</span>
                <span className="text-faint">{it.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
