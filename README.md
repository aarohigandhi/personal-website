# aarohigandhi.com

Personal website and writing. A container for essays, not a portfolio wall.

Single column, two colors, dark mode from system preference. Static HTML —
readable with JavaScript off, built to load in well under a second.

## Stack

- **Next.js 16** (App Router) with `output: "export"` → static HTML/CSS
- **MDX** for essays (`@next/mdx`)
- **Tailwind CSS v4** for styling
- **TypeScript**
- Fonts: Inter (sans) + Newsreader (serif) via `next/font`; system monospace

No client-side framework runtime beyond what Next ships for hydration; pages
are prerendered and render fully without JS.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

`npm run build` writes a fully static site to `out/`. Serve it anywhere
(`npx serve out`) or let Vercel build it.

## Where everything lives

| What | File |
| --- | --- |
| All home-page copy, projects, post list, Now, links | `lib/content.ts` |
| Home page | `app/page.tsx` |
| Writing index | `app/writing/page.tsx` |
| An essay | `app/writing/<slug>/` |
| Colors, fonts, prose styles | `app/globals.css` |
| Post wrapper (title, date, prose) | `components/PostShell.tsx` |

**To change any text on the home page, edit `lib/content.ts`.** Nothing on the
page is hard-coded elsewhere.

## Add a new essay

1. Create `app/writing/<slug>/content.mdx` — write the post in Markdown.
2. Create `app/writing/<slug>/page.tsx` (copy an existing one; change `slug`).
3. Add an entry to `posts` in `lib/content.ts` with the same `slug`,
   `title`, `summary`, `date`, and `published: true`.

The post inherits the shared title/date header and prose styles automatically.

House format for every post: **problem → what I tried → what broke → the
number → what I'd do differently.** One plot at the top.

## Before launch — checklist

- [ ] Replace placeholder copy in `lib/content.ts` (marked `TODO`)
- [ ] Add real project links (currently `#`)
- [ ] Drop your resume at `public/resume.pdf` (delete `public/resume-README.txt`)
- [ ] Confirm `site.url` and the LinkedIn handle
- [ ] Buy the domain and attach it in Vercel
- [ ] Check it on your phone first

## Deploy

Push to GitHub, import the repo in Vercel, attach the domain. Vercel detects
the static export automatically. No configuration needed.
