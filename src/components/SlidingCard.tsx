import type { ReactNode } from "react";

type SlidingCardProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  isHero?: boolean;
};

const SlidingCard = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  contentClassName = "space-y-6",
  isHero = false,
}: SlidingCardProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 w-full ${className}`}
    >
      <div className="relative rounded-3xl border border-[#e2e4ec] bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md hover:border-[#845400]/20 transition-all duration-300 overflow-hidden">
        {/* Ambient Top Light Reflection */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#ffddb7]/20 blur-3xl"
        />

        {!isHero && (title || eyebrow || subtitle) && (
          <div className="relative z-10 space-y-2 border-b border-[#e2e4ec] pb-4 mb-6 sm:mb-8">
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-wider text-[#845400]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#191c21]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base text-[#514537] leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`relative z-10 ${contentClassName}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SlidingCard;
