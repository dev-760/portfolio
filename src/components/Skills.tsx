import Section from "@/components/Section";
import profile from "@/data/profile";

const Skills = () => {
  return (
    <Section
      id="skills"
      title="Skills"
      contentClassName="space-y-6"
    >
      {profile.sections.skills.map((group) => (
        <div
          key={group.category}
          className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
        >
          <div className="border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.4em] text-white/50">
            {group.category}
          </div>
          <ul className="divide-y divide-white/10">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-center justify-between px-4 py-3 text-sm text-white/80"
              >
                <span>{item}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.5em] text-white/30">
                  Focus
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default Skills;
