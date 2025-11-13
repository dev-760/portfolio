import Section from "@/components/Section";
import profile from "@/data/profile";

const Volunteering = () => {
  const volunteering = profile.sections.volunteering;

  return (
    <Section id="volunteering" title="Volunteering">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.5em] text-white/40">
          {volunteering.organization}
        </p>
        <p className="text-2xl font-semibold text-white">
          {volunteering.role}
        </p>
        <p className="text-sm text-white/60">{volunteering.dates}</p>
      </div>

      <ul className="space-y-3 border-t border-white/10 pt-4">
        {volunteering.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm text-white/75">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#d2befc]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm font-semibold text-white/80">
        {volunteering.closing}
      </p>
    </Section>
  );
};

export default Volunteering;
