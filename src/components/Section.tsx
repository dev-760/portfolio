import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  contentClassName?: string;
};

const Section = ({
  id,
  title,
  children,
  contentClassName = "space-y-4 text-base leading-relaxed text-white/75",
}: SectionProps) => {
  return (
    <section
      id={id}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#151019]/90 p-8 text-white shadow-[0_25px_90px_rgba(4,0,10,0.55)]"
    >
      <div className="pointer-events-none absolute -right-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#7b5dff]/15 blur-[120px]" />
      <header className="mb-6 flex items-center justify-between text-white/50">
        <div className="flex items-center gap-2">
          <span className="h-3 w-5 rounded-md bg-white/60" />
          <span className="h-3 w-3 rounded-full border border-white/40" />
        </div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.5em]">
          {title}
        </h2>
      </header>
      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default Section;
