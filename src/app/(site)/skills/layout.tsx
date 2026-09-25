import { generatePageMetadata } from "@/lib/metadata";
import RedirectToSection from "@/components/RedirectToSection";

export const metadata = generatePageMetadata(
  "Skills & Experience",
  "Tools for thinking, organizing, and solving. A calibrated toolkit balancing systemic problem solving with modern business productivity software.",
  "/skills"
);

export default function SkillsLayout() {
  return <RedirectToSection sectionId="skills" />;
}