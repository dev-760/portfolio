import type { ReactNode } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import Toast from "@/components/Toast";
import Footer from "@/components/Footer";

type LayoutProps = {
  navbar: ReactNode;
  children: ReactNode;
};

const Layout = ({ navbar, children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#191c21] selection:bg-[#ffddb7] selection:text-[#191c21] relative flex flex-col justify-between overflow-x-hidden">
      {/* Ambient background illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(194,132,42,0.06),rgba(255,255,255,0))] opacity-90"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 right-0 z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(72,94,137,0.035),rgba(255,255,255,0))] blur-3xl"
      />

      <ScrollProgress />
      <CommandPalette />
      <KeyboardShortcuts />
      <Toast />

      <div className="relative z-10 w-full flex-1 flex flex-col justify-between">
        <div>
          {navbar}

          <main
            id="main-content"
            tabIndex={-1}
            className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20 space-y-10 sm:space-y-14 outline-none"
          >
            {children}
          </main>
        </div>

        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Layout;
