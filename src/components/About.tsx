import Section from "@/components/Section";
import profile from "@/data/profile";

const About = () => {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          {profile.sections.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-white/40">
              Languages
            </p>
            <ul className="mt-2 space-y-1">
              {profile.languages.map((language) => (
                <li key={language.name}>
                  <span className="font-semibold text-white">
                    {language.name}
                  </span>{" "}
                  – {language.level}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">
            Currently in
          </p>
          <p className="text-lg font-semibold text-white">
            {profile.location}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
