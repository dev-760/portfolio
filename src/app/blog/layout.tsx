import { generatePageMetadata } from "@/lib/metadata";
import BlogPageContent from "./page-content";

export const metadata = generatePageMetadata(
  "Blog & Writing",
  "Ideas, observations, and things I'm learning. A collection of notes, ideas, experiments, and lessons from my journey through business administration, systems design, and continuous learning.",
  "/blog"
);

export default function BlogLayout() {
  return <BlogPageContent />;
}