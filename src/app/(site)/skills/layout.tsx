import { generatePageMetadata } from "@/lib/metadata";
import SkillsPageContent from "./page-content";

export const metadata = generatePageMetadata(
  "Skills & Experience",
  "Tools for thinking, organizing, and solving. A calibrated toolkit balancing systemic problem solving with modern business productivity software.",
  "/skills"
);

export default function SkillsLayout() {
  return <SkillsPageContent />;
}