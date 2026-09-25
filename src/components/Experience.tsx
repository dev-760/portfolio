"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SlidingCard from "@/components/SlidingCard";
import profile from "@/data/profile";

type ExperienceProps = {
  showLink?: boolean;
};

const Experience = ({ showLink = true }: ExperienceProps) => {
  const experience = profile.sections.experience;
  const pathname = usePathname();
  const shouldShowLink =
    showLink &&
    pathname !== "/education" &&
    !pathname.startsWith("/education") &&
    pathname !== "/experience" &&
    !pathname.startsWith("/experience");

  return (
    <SlidingCard
      id="experience"
      eyebrow="Career & Deliverables"
      title="Experience"
      subtitle="Hands-on software building, AI automation, and production experience."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {experience.map((exp) => (
            <article
              key={`${exp.role}-${exp.organization}`}
              className="rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-6 lg:p-7 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Role, Org, and Dates */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#e2e4ec] pb-4 mb-4">
                  <div>
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-[#191c21]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                      {exp.organizationLink ? (
                        <a
                          href={exp.organizationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#845400] hover:underline"
                        >
                          {exp.organization}
                        </a>
                      ) : (
                        <span className="font-semibold text-[#845400]">{exp.organization}</span>
                      )}
                      {exp.location && (
                        <span className="text-xs text-[#514537]">
                          · {exp.location}
                        </span>
                      )}
                    </div>
                    {exp.tagline && (
                      <p className="text-xs text-[#514537] italic mt-1">
                        {exp.tagline}
                      </p>
                    )}
                  </div>

                  {/* Dates Badge */}
                  <span className="rounded-full bg-white px-3.5 py-1 text-xs font-mono font-medium text-[#514537] border border-[#e2e4ec]/70 shrink-0 w-fit shadow-2xs">
                    {exp.dates}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#514537] leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#c2842a] shrink-0" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing Callout if present */}
              {exp.closing && (
                <div className="mt-5 rounded-xl border border-[#e2e4ec] bg-white p-3.5 text-xs sm:text-sm font-medium text-[#191c21] italic border-l-4 border-l-[#c2842a] shadow-2xs">
                  {exp.closing}
                </div>
              )}
            </article>
          ))}
        </div>

        {shouldShowLink && (
          <div className="pt-2 flex justify-end">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 rounded-xl border border-[#e2e4ec] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#845400] hover:text-[#191c21] hover:border-[#845400]/40 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs transition-all"
            >
              <span>View formal education</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </SlidingCard>
  );
};

export default Experience;
