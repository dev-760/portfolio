import Section from "@/components/Section";
import profile from "@/data/profile";

const Achievements = () => {
  return (
    <Section
      id="achievements"
      title="Achievements"
      contentClassName="divide-y divide-white/10"
    >
      {profile.sections.achievements.map((achievement) => (
        <article
          key={achievement.title}
          className="flex flex-col gap-1 py-4 text-sm text-white/80 first:pt-0 last:pb-0"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">
              {achievement.title}
            </h3>
            <span className="text-[0.6rem] uppercase tracking-[0.5em] text-white/30">
              Honor
            </span>
          </div>
          {achievement.details && (
            <p className="text-white/60">{achievement.details}</p>
          )}
        </article>
      ))}
    </Section>
  );
};

export default Achievements;
