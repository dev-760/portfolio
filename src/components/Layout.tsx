import type { ReactNode } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import MouseGlow from "@/components/MouseGlow";
import Toast from "@/components/Toast";
import Footer from "@/components/Footer";

type LayoutProps = {
  navbar: ReactNode;
  children: ReactNode;
};

const Layout = ({ navbar, children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07040d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#8b6ff7]/20 to-[#b8a3ff]/5 blur-[140px]" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-tl from-[#8b6ff7]/10 to-[#b8a3ff]/5 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(139,111,247,0.08),_transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(184,163,255,0.05),_transparent_70%)]" />
      </div>

      <ScrollProgress />
      <MouseGlow />
      <CommandPalette />
      <KeyboardShortcuts />
      <Toast />

      {navbar}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-28 pb-32 sm:pb-0">
        <main className="space-y-6 sm:space-y-10">{children}</main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
