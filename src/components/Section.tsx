import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  children: ReactNode;
  contentClassName?: string;
  className?: string;
};

const Section = ({
  id,
  title,
  eyebrow,
  subtitle,
  children,
  contentClassName = "space-y-6",
  className = "",
}: SectionProps) => {
  return (
    <section id={id} className={`scroll-mt-24 space-y-8 ${className}`}>
      {/* Section Header */}
      <div className="space-y-2 border-b border-[#e2e4ec] pb-5">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-wider text-[#845400]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#191c21]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-[#514537] leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Section Content */}
      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default Section;
