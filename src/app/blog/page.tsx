import RedirectToSection from "@/components/RedirectToSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Blog & Writing",
  "Ideas, observations, and things I'm learning. A collection of notes, ideas, experiments, and lessons from my journey through business administration, systems design, and continuous learning.",
  "/blog"
);

export default function BlogPage() {
  return <RedirectToSection sectionId="writing" />;
}
