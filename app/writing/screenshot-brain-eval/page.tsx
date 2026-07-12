import type { Metadata } from "next";
import { PostShell } from "@/components/PostShell";
import { posts } from "@/lib/content";
import Content from "./content.mdx";

const slug = "screenshot-brain-eval";
const post = posts.find((p) => p.slug === slug);

export const metadata: Metadata = {
  title: post?.title,
  description: post?.summary,
};

export default function Page() {
  return (
    <PostShell slug={slug}>
      <Content />
    </PostShell>
  );
}
