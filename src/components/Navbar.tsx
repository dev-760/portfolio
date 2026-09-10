"use client";

import { useState, useEffect } from "react";
import profile, { type NavItem } from "@/data/profile";
import { scrollToSection } from "@/utils/scroll";

type NavbarProps = {
  navItems: NavItem[];
};

const UiverseButton = () => {
  const defaultText = "ONLINE  ";
  const hoverText = "HIRE ME!";
  
  return (
    <div className="relative overflow-hidden rounded-full bg-[#f2f3fa] border border-[#e2e4ec] flex items-center justify-between p-0.5 pl-2.5 gap-1.5 group transition-all duration-300 hover:bg-[#845400] hover:border-[#845400] shadow-2xs">
      <p className="relative flex font-mono text-[9px] font-bold tracking-widest text-[#845400] h-3 overflow-hidden">
        {/* Original text sliding up */}
        <span className="flex">
          {defaultText.split("").map((char, i) => (
            <span 
              key={i} 
              className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-4"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        {/* Easter egg text sliding in from bottom */}
        <span className="absolute left-0 top-3 flex text-white">
          {hoverText.split("").map((char, i) => (
            <span 
              key={`clone-${i}`}
              className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-3"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </p>

      <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white flex items-center justify-center relative overflow-hidden text-[#845400] border border-[#e2e4ec] group-hover:border-transparent">
        <svg viewBox="0 0 14 15" fill="none" className="w-2 sm:w-2.5 transition-transform duration-300 group-hover:translate-x-4">
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
        </svg>
        <svg viewBox="0 0 14 15" fill="none" className="w-2 sm:w-2.5 absolute -left-4 transition-transform duration-300 group-hover:translate-x-4">
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

const Navbar = ({ navItems }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.filter((item) => item.enabled !== false);
      for (const item of sections) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleScrollToSection = (id: string) => {
    scrollToSection(id, () => setIsMobileMenuOpen(false));
  };

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[#f8f9ff]/90 backdrop-blur-md border-b border-[#e2e4ec] shadow-xs"
            : "bg-[#f8f9ff]/60 backdrop-blur-sm border-b border-[#e2e4ec]/50"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Brand Logo */}
            <button
              onClick={() => handleScrollToSection("home")}
              className="flex items-center gap-2 text-left group"
              aria-label={`${profile.name} — Home`}
            >
              <UiverseButton />
              <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-[#191c21] group-hover:text-[#845400] transition-colors">
                {profile.name}
              </span>
            </button>

            {/* Desktop Navigation Links (Original Data Only) */}
            <ul className="hidden md:flex items-center gap-1 bg-white/80 border border-[#e2e4ec] p-1 rounded-full shadow-xs">
              {navItems.map((item) => {
                const isDisabled = item.enabled === false;
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => !isDisabled && handleScrollToSection(item.id)}
                      disabled={isDisabled}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                        isDisabled
                          ? "cursor-not-allowed opacity-30"
                          : isActive
                          ? "bg-[#191c21] text-white font-semibold shadow-xs"
                          : "text-[#514537] hover:text-[#191c21] hover:bg-[#f2f3fa]"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e2e4ec] bg-white text-[#191c21] hover:bg-[#f2f3fa] transition-colors cursor-pointer shadow-2xs"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-[#e2e4ec] bg-[#f8f9ff] px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150 shadow-sm">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isDisabled = item.enabled === false;
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => !isDisabled && handleScrollToSection(item.id)}
                      disabled={isDisabled}
                      className={`w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isDisabled
                          ? "opacity-30 cursor-not-allowed"
                          : isActive
                          ? "bg-white text-[#845400] font-semibold border border-[#e2e4ec]"
                          : "text-[#514537] hover:bg-white hover:text-[#191c21]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#c2842a]" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2 border-t border-[#e2e4ec] flex items-center justify-between text-xs text-[#514537] px-2">
              <span>{profile.location}</span>
              <a
                href={`mailto:${profile.contact.email}`}
                className="font-medium text-[#845400] hover:underline"
              >
                {profile.contact.email}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
