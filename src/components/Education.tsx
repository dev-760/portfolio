import SlidingCard from "@/components/SlidingCard";
import profile from "@/data/profile";

const Education = () => {
  const education = profile.sections.education;

  return (
    <SlidingCard
      id="education"
      eyebrow="Academic Studies & Background"
      title="Education"
      subtitle="Academic studies and business administration foundation."
    >
      <div className="space-y-6">
        {education.map((item) => (
          <article
            key={`${item.degree}-${item.institution}`}
            className="rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Graduation Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f2f3fa] text-[#845400] border border-[#e2e4ec]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>

              {/* Education Info */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#e2e4ec] pb-3">
                  <div>
                    <h3 className="font-sans text-xl font-bold text-[#191c21]">
                      {item.degree}
                    </h3>
                    <p className="font-sans text-base font-semibold text-[#845400] mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  {item.details && (
                    <span className="rounded-full bg-[#f2f3fa] px-3.5 py-1 text-xs font-mono font-medium text-[#514537] border border-[#e2e4ec]/60 shrink-0 w-fit">
                      {item.details}
                    </span>
                  )}
                </div>

                {item.field && (
                  <p className="text-sm font-medium text-[#514537] pt-1">
                    {item.field}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SlidingCard>
  );
};

export default Education;
