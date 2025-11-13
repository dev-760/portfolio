import type { ReactNode } from "react";

type LayoutProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

const Layout = ({ sidebar, children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050208] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-10 h-64 w-64 rounded-full bg-[#7b5dff]/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#ff8fb3]/5 blur-[220px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
        <aside className="lg:sticky lg:top-14">
          <div className="space-y-8">{sidebar}</div>
        </aside>
        <main className="space-y-10 pb-12">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
