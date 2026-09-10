"use client";

import profile from "@/data/profile";
import { scrollToSection } from "@/utils/scroll";

const Hero = () => {

  return (
    <header
      id="home"
      className="w-full scroll-mt-24"
    >
      <div className="relative rounded-3xl border border-[#e2e4ec] bg-gradient-to-b from-white via-white to-[#fbfbfe] p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md hover:border-[#845400]/20 transition-all duration-300 overflow-hidden min-h-[calc(100dvh-9rem)] flex flex-col justify-between">
        {/* Subtle Ambient Background Highlights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#ffddb7]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#b6ccfe]/20 blur-3xl"
        />

        {/* Top Status Strip */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e4ec]/70 pb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-2xs backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Projects</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-[#514537]">
            <svg
              className="h-3.5 w-3.5 text-[#845400]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 space-y-6 sm:space-y-8 my-auto py-6 sm:py-8 max-w-3xl">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#191c21] leading-[1.08]">
              {profile.name}
            </h1>
            <p className="font-sans text-xl sm:text-2xl font-semibold text-[#845400] tracking-tight">
              {profile.title}
            </p>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#514537] leading-relaxed pt-1">
              {profile.tagline}
            </p>
          </div>

          {/* Actions Suite */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#191c21] px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-[#845400] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Explore Projects</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-[#e2e4ec] bg-white px-6 py-3.5 text-sm font-semibold text-[#191c21] shadow-2xs hover:bg-[#f2f3fa] hover:border-[#837565]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>


        {/* Bottom Card Strip with Scroll Cue */}
        <div className="relative z-10 flex items-center justify-end pt-4 border-t border-[#e2e4ec]/60 text-xs text-[#514537]">
          <button
            onClick={() => scrollToSection("highlights")}
            className="inline-flex items-center gap-1.5 font-semibold text-[#845400] hover:text-[#191c21] transition-colors cursor-pointer group"
          >
            <span>Scroll down to explore</span>
            <svg
              className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
