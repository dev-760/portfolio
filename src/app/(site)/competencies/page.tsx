import { Metadata } from "next";
import Skills from "@/components/Skills";
import profile from "@/data/profile";

export const metadata: Metadata = {
  title: `Core Competencies | ${profile.name}`,
  description: "Explore my core competencies, technologies, and skills.",
};

const CompetenciesPage = () => {
  return (
    <div className="space-y-8">
      <Skills />
    </div>
  );
};

export default CompetenciesPage;
