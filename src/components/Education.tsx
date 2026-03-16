import Section from "@/components/Section";
import profile from "@/data/profile";

const Education = () => {
  const education = profile.sections.education;

  return (
    <Section id="education" title="Education">
      <div className="space-y-2">
        <p className="border-l-2 border-white/20 pl-4 text-lg font-semibold text-white">
          {education.degree}
        </p>
        <p className="pl-4 text-sm text-white/60">
          {education.details}
        </p>
      </div>
    </Section>
  );
};

export default Education;
