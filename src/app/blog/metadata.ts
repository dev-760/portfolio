import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Blog & Writing",
  "A collection of notes, ideas, experiments, and lessons from my journey through business administration, systems design, and continuous learning.",
  "/blog"
);
