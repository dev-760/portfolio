"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { clsx } from "clsx";
import { useActiveSection } from "@/motion/useActiveSection";
import { MOTION_EASINGS } from "@/motion/tokens";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DesktopNav } from "@/components/DesktopNav";
import { Icon } from "@/components/icons/Icon";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Monographs", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection] = useActiveSection(
    ["home", "about", "work", "skills", "experience", "writing", "contact"],
    "home"
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
        setMobileMenuOpen(false);
      }
    },
    []
  );

  return (
    <>
      <motion.header
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border/80 shadow-xs"
            : "bg-background/80 backdrop-blur-sm border-transparent"
        )}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: MOTION_EASINGS.system }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
            aria-label="Hassan Karasu - Home"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: MOTION_EASINGS.sharp }}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/icon-light.svg"
                alt="Hassan Karasu"
                width={30}
                height={30}
                className="size-7 w-auto object-contain dark:hidden"
                priority
              />
              <Image
                src="/icon-dark.svg"
                alt="Hassan Karasu"
                width={30}
                height={30}
                className="size-7 w-auto object-contain hidden dark:block"
                priority
              />
              <span className="font-sans font-medium text-sm tracking-tight text-foreground hidden sm:inline-block">
                Hassan Karasu
              </span>
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <DesktopNav
              navLinks={navLinks}
              activeSection={activeSection}
              onNavClick={handleNavClick}
            />
          </div>

          {/* Controls: Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden relative size-9 rounded-full flex items-center justify-center text-foreground hover:bg-muted/80 border border-border/80 transition-colors focus-visible:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <Icon name="close" size={18} />
              ) : (
                <Icon name="menu" size={18} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/80 backdrop-blur-md flex flex-col pt-20 px-6 pb-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col justify-between flex-1 max-w-sm mx-auto w-full pt-4"
            >
              {/* Navigation Links */}
              <nav
                className="flex flex-col gap-2"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => {
                  const key = link.name.toLowerCase();
                  const isActive =
                    key === activeSection ||
                    link.href === `#${activeSection}` ||
                    (key === "work" && (activeSection === "work" || activeSection === "pillars"));

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "bg-foreground text-background font-semibold"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive ? (
                        <span className="text-xs uppercase tracking-widest font-mono text-background/80">
                          Active
                        </span>
                      ) : (
                        <Icon
                          name="arrow_forward"
                          size={14}
                          className="text-muted-foreground"
                        />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Quick Action Footer */}
              <div className="pt-6 border-t border-border space-y-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Icon name="mail" size={15} />
                  <span>Direct Correspondence</span>
                </a>
                <p className="text-[11px] text-center text-muted-foreground font-mono">
                  FSJES Aïn Chock · Université Hassan II de Casablanca
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
