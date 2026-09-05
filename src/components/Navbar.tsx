"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profile, { type NavItem } from "@/data/profile";

type NavbarProps = {
  navItems: NavItem[];
};

const Navbar = ({ navItems }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.filter((item) => item.enabled !== false);
      for (const item of sections) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
      window.location.href = id === "home" ? "/" : `/#${id}`;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#07040d]/80 shadow-[0_1px_0_rgba(255,255,255,0.04),0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3"
            >
              <span className="text-sm font-semibold tracking-[0.15em] text-white/90 uppercase group-hover:text-white transition-colors">
                {profile.name.split(" ")[0]}
              </span>
              <span className="h-px w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40 transition-all duration-300" />
              <span className="text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase group-hover:text-white/60 transition-colors">
                Portfolio
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden items-center gap-0.5 md:flex"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item, index) => {
                const isDisabled = item.enabled === false;
                const isActive = activeSection === item.id;

                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.04 }}
                  >
                    <button
                      onClick={() => !isDisabled && scrollToSection(item.id)}
                      disabled={isDisabled}
                      className={`relative px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-200 rounded-md ${
                        isDisabled
                          ? "cursor-not-allowed text-white/15"
                          : isActive
                            ? "text-white"
                            : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navActive"
                          className="absolute inset-0 rounded-md bg-white/[0.08] border border-white/[0.06]"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* Social Links — Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden items-center gap-3 md:flex"
            >
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/80 transition-colors duration-200"
                  title={link.label}
                >
                  <SocialIcon name={link.icon || link.label.toLowerCase()} />
                </a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md md:hidden hover:bg-white/[0.04] transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 7 : 0,
                  width: isMobileMenuOpen ? 18 : 16,
                }}
                className="h-[1.5px] w-4 bg-white/70 transition-all origin-center"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1, scaleX: isMobileMenuOpen ? 0 : 1 }}
                className="h-[1.5px] w-4 bg-white/70 transition-all"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -7 : 0,
                  width: isMobileMenuOpen ? 18 : 12,
                }}
                className="h-[1.5px] w-3 bg-white/70 transition-all origin-center self-end"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[68px] left-4 right-4 z-50 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d0a14]/95 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden"
            >
              <ul className="p-2">
                {navItems.map((item, index) => {
                  const isDisabled = item.enabled === false;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <button
                        onClick={() => !isDisabled && scrollToSection(item.id)}
                        disabled={isDisabled}
                        className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium tracking-[0.1em] transition-all ${
                          isDisabled
                            ? "cursor-not-allowed text-white/15"
                            : isActive
                              ? "bg-white/[0.06] text-white"
                              : "text-white/60 hover:bg-white/[0.03] hover:text-white/90"
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile Social Links */}
              <div className="border-t border-white/[0.06] px-6 py-4">
                <div className="flex items-center gap-5">
                  {profile.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white/70 transition-colors"
                      title={link.label}
                    >
                      <SocialIcon name={link.icon || link.label.toLowerCase()} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* Minimal SVG social icons */
const SocialIcon = ({ name }: { name: string }) => {
  const size = 16;

  switch (name) {
    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 3v2H3.5A1.5 1.5 0 002 6.5v11A1.5 1.5 0 003.5 19H8v2H3.5A3.5 3.5 0 010 17.5v-11A3.5 3.5 0 013.5 3H14zm7 0a3 3 0 013 3v12a3 3 0 01-3 3H10v-2h11a1 1 0 001-1V6a1 1 0 00-1-1H10V3h11z" />
        </svg>
      );
  }
};

export default Navbar;
