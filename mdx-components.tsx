import type { MDXComponents } from "mdx/types";

// Applies to every MDX file. We keep styling in CSS (.prose in globals.css)
// so posts stay plain HTML — no per-element client components, no extra JS.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
