import SlidingCard from "@/components/SlidingCard";
import profile from "@/data/profile";

const PersonalStatement = () => {
  const paragraphs = profile.personalStatement.split("\n\n");

  return (
    <SlidingCard
      id="statement"
      eyebrow="Core Philosophy"
      title="Personal Statement"
      subtitle="Perspective and approach at the intersection of business, software, and automation."
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#e2e4ec] bg-gradient-to-br from-[#fbfbfe] via-white to-[#fdfbf9] p-6 sm:p-8 shadow-2xs">
        {/* Subtle Accent Edge */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c2842a]"
        />

        {/* Ambient watermark quotation mark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-2 select-none text-8xl font-serif text-[#c2842a]/10"
        >
          “
        </div>

        <div className="space-y-5 max-w-3xl pl-2 sm:pl-4 relative z-10">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`leading-relaxed ${
                index === 0
                  ? "text-base sm:text-xl font-semibold text-[#191c21] tracking-tight"
                  : "text-sm sm:text-base text-[#514537]"
              }`}
            >
              {paragraph}
            </p>
          ))}

          {/* Author Signature & Role */}
          <div className="pt-4 border-t border-[#e2e4ec]/70 flex items-center justify-between gap-2 text-xs text-[#514537]">
            <span className="font-semibold text-[#191c21]">{profile.name}</span>
            <span className="text-[#845400] font-medium">Casablanca, Morocco</span>
          </div>
        </div>
      </div>
    </SlidingCard>
  );
};

export default PersonalStatement;
