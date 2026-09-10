import { Metadata } from "next";
import Education from "@/components/Education";
import profile from "@/data/profile";

export const metadata: Metadata = {
  title: `Education | ${profile.name}`,
  description: "Explore my academic background and formal education.",
};

const EducationPage = () => {
  return (
    <div className="space-y-8">
      <Education />
    </div>
  );
};

export default EducationPage;
