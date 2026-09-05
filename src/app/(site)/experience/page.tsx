import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Volunteering from "@/components/Volunteering";
import Achievements from "@/components/Achievements";

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
