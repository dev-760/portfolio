import SlidingCard from "@/components/SlidingCard";
import profile from "@/data/profile";

const About = () => {
  return (
    <SlidingCard
      id="about"
      eyebrow="Background & Study"
      title="About"
      subtitle="Study, engineering, and the intersection of business and technology."
    >
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Narrative Prose Column (8 cols on desktop) */}
        <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#514537] leading-relaxed">
          {profile.sections.about.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "text-xl sm:text-2xl font-bold text-[#191c21] tracking-tight leading-snug pb-1 border-b border-[#e2e4ec]/60"
                  : "text-[#514537]"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Info Sidebar (4 cols on desktop) */}
        <aside className="lg:col-span-4 space-y-4">
          {/* Languages Card */}
          <div className="rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-6 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#845400]">
              Languages
            </h3>
            <ul className="space-y-2.5">
              {profile.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c2842a]" />
                    <span className="font-semibold text-[#191c21]">{lang.name}</span>
                  </div>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-[#514537] border border-[#e2e4ec]/70 shadow-2xs">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Card */}
          <div className="rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-6 shadow-2xs space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#845400]">
              Location
            </h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#191c21]">
              <svg
                className="h-4 w-4 text-[#845400] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Contact Direct Link */}
          <div className="rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-6 shadow-2xs space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#845400]">
              Direct Inquiry
            </h3>
            <p className="text-xs text-[#514537] leading-relaxed">
              Have an architecture or software project to discuss?
            </p>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#845400] hover:underline"
            >
              <span>{profile.contact.email}</span>
              <span>→</span>
            </a>
          </div>
        </aside>
      </div>
    </SlidingCard>
  );
};

export default About;
