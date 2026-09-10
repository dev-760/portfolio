
import SlidingCard from "@/components/SlidingCard";
import profile from "@/data/profile";

const Highlights = () => {
  return (
    <SlidingCard
      id="highlights"
      eyebrow="Core Focus & Pillars"
      title="Foundations & Highlights"
      subtitle="Practical experience, modern architectures, and business-driven systems."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {profile.homeHighlights.map((highlight) => {
            const getIcon = () => {
              if (highlight.label === "Software") {
                return (
                  <svg className="h-5 w-5 text-[#845400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                );
              }
              if (highlight.label === "Automation") {
                return (
                  <svg className="h-5 w-5 text-[#845400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                );
              }
              return (
                <svg className="h-5 w-5 text-[#845400]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              );
            };

            return (
              <article
                key={highlight.label}
                className="group relative flex flex-col justify-between gap-5 rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#845400]/40 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Category Header with Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#e2e4ec] shadow-2xs group-hover:scale-110 transition-transform">
                      {getIcon()}
                    </div>
                    <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#845400] border border-[#e2e4ec]/70 shadow-2xs">
                      {highlight.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-xl font-bold text-[#191c21] tracking-tight group-hover:text-[#845400] transition-colors">
                    {highlight.value}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#514537] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </SlidingCard>
  );
};

export default Highlights;
