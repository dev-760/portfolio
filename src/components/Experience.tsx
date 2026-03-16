import Section from "@/components/Section";
import profile from "@/data/profile";

const Experience = () => {
  const experience = profile.sections.experience;

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between items-baseline gap-4">
                <p className="text-2xl font-semibold text-white">
                  {exp.role}
                </p>
                <p className="text-sm text-white/60 shrink-0">
                  {exp.dates}
                </p>
              </div>
              <p className="text-sm text-white/60">
                {exp.organizationLink ? (
                  <a href={exp.organizationLink} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">
                    {exp.organization}
                  </a>
                ) : (
                  exp.organization
                )}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
            </div>

            {exp.bullets.length === 1 ? (
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-white/75 leading-relaxed">
                  {exp.bullets[0]}
                </p>
              </div>
            ) : (
              <ul className="space-y-3 border-t border-white/10 pt-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/75">
                    <span className="mt-1 inline-flex h-2 w-12 shrink-0 rounded-sm bg-white/10" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {exp.closing && (
              <p className="text-sm font-semibold text-white/80">
                {exp.closing}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
