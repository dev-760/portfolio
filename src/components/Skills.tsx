import SlidingCard from "@/components/SlidingCard";
import profile from "@/data/profile";

const Skills = () => {
  return (
    <SlidingCard
      id="skills"
      eyebrow="Capabilities & Frameworks"
      title="Skills"
      subtitle="Technologies, automation frameworks, and problem-solving methodologies."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {profile.sections.skills.map((group) => {
          const getCategoryIcon = () => {
            if (group.category === "AI & Automation") {
              return (
                <svg className="h-4 w-4 text-[#845400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              );
            }
            if (group.category === "Software & Development") {
              return (
                <svg className="h-4 w-4 text-[#845400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              );
            }
            if (group.category === "Business & Productivity") {
              return (
                <svg className="h-4 w-4 text-[#845400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              );
            }
            return (
              <svg className="h-4 w-4 text-[#845400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            );
          };

          return (
            <div
              key={group.category}
              className="rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-6 shadow-2xs hover:shadow-xs hover:border-[#845400]/40 transition-all duration-200 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                {/* Category Header with Icon */}
                <div className="flex items-center gap-2.5 border-b border-[#e2e4ec] pb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#e2e4ec]/80 shadow-2xs">
                    {getCategoryIcon()}
                  </div>
                  <h3 className="font-sans text-base font-bold text-[#191c21]">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 pt-1" role="list" aria-label={group.category}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      role="listitem"
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-[#191c21] border border-[#e2e4ec] hover:border-[#845400]/40 hover:text-[#845400] transition-all shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SlidingCard>
  );
};

export default Skills;
