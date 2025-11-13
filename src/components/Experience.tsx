import Section from "@/components/Section";
import profile from "@/data/profile";

const Experience = () => {
  const experience = profile.sections.experience;

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.5em] text-white/40">
          {experience.organization}
        </p>
        <p className="text-2xl font-semibold text-white">
          {experience.role}
        </p>
        <p className="text-sm text-white/60">
          {experience.location} · {experience.dates}
        </p>
      </div>

      <ul className="space-y-3 border-t border-white/10 pt-4">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm text-white/75">
            <span className="mt-1 inline-flex h-2 w-12 rounded-sm bg-white/10" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm font-semibold text-white/80">
        {experience.closing}
      </p>
    </Section>
  );
};

export default Experience;
