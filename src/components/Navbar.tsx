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

      // Update active section based on scroll position
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
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#120d16]/95 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="h-4 w-6 rounded-md bg-white/80" />
                <span className="h-4 w-4 rounded-full border border-white/40" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  {profile.location}
                </p>
                <p className="text-lg font-semibold text-white">{profile.title}</p>
              </div>
            </motion.button>

            {/* Desktop Navigation Items */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/30 p-2 backdrop-blur-lg md:flex"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item, index) => {
                const isDisabled = item.enabled === false;
                const isActive = activeSection === item.id;

                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <button
                      onClick={() => !isDisabled && scrollToSection(item.id)}
                      disabled={isDisabled}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] transition-all ${isDisabled
                          ? "cursor-not-allowed text-white/20 line-through"
                          : isActive
                            ? "text-white"
                            : "text-white/60 hover:text-white/90"
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute inset-0 rounded-full bg-white/10 shadow-inner"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1.5 rounded-lg border border-white/10 bg-black/30 p-2.5 backdrop-blur-lg md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                className="h-0.5 w-5 bg-white/80 transition-all"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="h-0.5 w-5 bg-white/80 transition-all"
              />
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                className="h-0.5 w-5 bg-white/80 transition-all"
              />
            </motion.button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 mx-6 rounded-2xl border border-white/10 bg-[#120d16]/98 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const isDisabled = item.enabled === false;
                const isActive = activeSection === item.id;

                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => !isDisabled && scrollToSection(item.id)}
                      disabled={isDisabled}
                      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.2em] transition-all ${isDisabled
                          ? "cursor-not-allowed text-white/20 line-through"
                          : isActive
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
