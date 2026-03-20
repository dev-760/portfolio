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
    <div className="relative min-h-screen overflow-hidden bg-[#050208] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-10 h-64 w-64 rounded-full bg-[#7b5dff]/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#ff8fb3]/5 blur-[220px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
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
