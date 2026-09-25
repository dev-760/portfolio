"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { clsx } from "clsx";
import { useActiveSection } from "@/motion/useActiveSection";
import { MOTION_EASINGS } from "@/motion/tokens";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GooeyNav, GooeyNavItem } from "@/components/GooeyNav";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

const gooeyNavItems: GooeyNavItem[] = navLinks.map((link) => ({
  label: link.name,
  href: link.href,
}));


export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection] = useActiveSection(
    ["home", "about", "work", "skills", "experience", "writing", "contact"],
    "home"
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
      setIsMobileMenuOpen(false);
    }
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Keyboard accessibility: Escape closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const sectionToIndex: Record<string, number> = {
    about: 0,
    work: 1,
    pillars: 1,
    skills: 2,
    experience: 3,
    writing: 4,
    contact: 5,
  };
  const activeGooeyIndex = sectionToIndex[activeSection] ?? 0;

  const handleGooeyClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: GooeyNavItem) => {
      handleNavClick(e, item.href);
    },
    [handleNavClick]
  );

  // Determine active item based on single-page active section
  const getIsActive = (linkName: string) => {
    const key = linkName.toLowerCase();
    if (key === activeSection) return true;
    if (key === "work" && (activeSection === "work" || activeSection === "pillars")) return true;
    return false;
  };

  return (
    <>
      {/* Top Reading & Scroll Telemetry Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-secondary to-primary z-[60] origin-left pointer-events-none"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <motion.header
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-background/90 backdrop-blur-md border-b border-border/50"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: MOTION_EASINGS.system }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
            aria-label="Hassan Karasu - Home"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: MOTION_EASINGS.sharp }}
              className="flex items-center"
            >
              <Image
                src="/logo-light.svg"
                alt="Hassan Karasu - Business Administration Student Logo"
                width={160}
                height={48}
                className="h-7 sm:h-8 w-auto object-contain logo-light-img dark:hidden"
                priority
              />
              <Image
                src="/logo-dark.svg"
                alt="Hassan Karasu - Business Administration Student Logo"
                width={160}
                height={48}
                className="h-7 sm:h-8 w-auto object-contain logo-dark-img hidden dark:block"
                priority
              />
            </motion.div>
          </a>

          {/* Desktop Nav with GooeyNav from React Bits */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <div className="rounded-full bg-slate-900/90 dark:bg-slate-950/80 border border-slate-700/50 shadow-md backdrop-blur-md px-3.5 py-1">
              <GooeyNav
                items={gooeyNavItems}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                activeIndex={activeGooeyIndex}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                onItemClick={handleGooeyClick}
              />
            </div>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            
            <button
              className="flex size-10 sm:size-9 items-center justify-center rounded-lg lg:hidden bg-muted hover:bg-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-on-surface inline-flex items-center"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: MOTION_EASINGS.sharp }}
              className="lg:hidden fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-surface/98 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="px-6 py-8 space-y-2">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold tracking-wider uppercase text-primary">Menu</span>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                      onClick={toggleMobileMenu}
                      className="p-2 rounded-lg hover:bg-surface-container transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label="Close menu"
                    >
                      <X size={20} className="text-on-surface" />
                    </button>
                  </div>
                </div>
                
                {navLinks.map((link, index) => {
                  const isActive = getIsActive(link.name);
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2, ease: MOTION_EASINGS.sharp }}
                      className={clsx(
                        "flex items-center gap-3 text-base font-medium min-h-[48px] px-4 rounded-xl transition-all cursor-pointer",
                        isActive
                          ? "bg-primary-fixed/40 text-primary font-semibold"
                          : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                      )}
                      role="menuitem"
                      aria-current={isActive ? "page" : undefined}
                    >
                      {isActive && <span className="size-2 rounded-full bg-primary" aria-hidden="true" />}
                      <span>{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
