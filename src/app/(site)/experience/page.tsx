import { Metadata } from "next";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Volunteering from "@/components/Volunteering";
import Achievements from "@/components/Achievements";
import profile from "@/data/profile";

export const metadata: Metadata = {
  title: `Experience | ${profile.name}`,
  description: "Explore my professional experience, education, skills, and volunteering work.",
};

const ExperiencePage = () => {
  return (
    <div className="space-y-8">
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Volunteering />
    </div>
  );
};

export default ExperiencePage;
