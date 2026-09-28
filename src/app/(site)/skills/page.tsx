import RedirectToSection from "@/components/RedirectToSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Skills & Competencies",
  "Tools for thinking, organizing, and solving. A calibrated toolkit balancing systemic problem solving with modern business productivity software.",
  "/skills"
);

export default function SkillsPage() {
  return <RedirectToSection sectionId="skills" />;
}
