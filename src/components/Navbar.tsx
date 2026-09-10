"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profile, { type NavItem } from "@/data/profile";
import { scrollToSection } from "@/utils/scroll";
import { SocialIcon } from "@/components/icons/SocialIcon";

type NavbarProps = {
  navItems: NavItem[];
};

const Navbar = ({ navItems }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleScrollToSection = (id: string) => {
    scrollToSection(id, () => setIsMobileMenuOpen(false));
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
              onClick={() => handleScrollToSection("home")}
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
                      onClick={() => !isDisabled && handleScrollToSection(item.id)}
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
                        onClick={() => !isDisabled && handleScrollToSection(item.id)}
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

export default Navbar;
