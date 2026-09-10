import { Metadata } from "next";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import profile from "@/data/profile";

export const metadata: Metadata = {
  title: `Experience | ${profile.name}`,
  description: "Explore my professional experience, education, and skills.",
};

const ExperiencePage = () => {
  return (
    <div className="space-y-8">
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default ExperiencePage;
