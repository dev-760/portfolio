import RedirectToSection from "@/components/RedirectToSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Skills & Competencies",
  "Coursework and software Hassan uses for analysis, organization, and communication.",
  "/skills"
);

export default function SkillsPage() {
  return <RedirectToSection sectionId="skills" />;
}
