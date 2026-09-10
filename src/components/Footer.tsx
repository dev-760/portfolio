"use client";

import profile from "@/data/profile";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site footer"
      className="border-t border-[#e2e4ec] bg-white text-[#191c21] py-8 mt-8"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#514537]">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-[#845400] transition-colors inline-flex items-center gap-1.5 cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <span aria-hidden="true">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
