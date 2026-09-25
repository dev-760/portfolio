"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { MOTION_EASINGS } from "@/motion/tokens";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: MOTION_EASINGS.sharp }}
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 z-50 flex h-[50px] w-[50px] hover:w-[140px] focus-visible:w-[140px] items-center justify-center rounded-full bg-primary hover:bg-accent text-on-primary hover:text-white shadow-lg hover:shadow-xl hover:shadow-accent/25 ring-4 ring-primary/15 dark:ring-accent/25 cursor-pointer overflow-hidden transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Scroll to top"
        >
          {/* Arrow Icon - Moves up and fades out on hover */}
          <span className="transition-all duration-300 ease-out group-hover:-translate-y-8 group-hover:opacity-0 group-focus-visible:-translate-y-8 group-focus-visible:opacity-0 select-none inline-flex items-center justify-center">
            <ArrowUp size={20} strokeWidth={2.5} />
          </span>

          {/* "Back to Top" Label - Slides up and centers on hover */}
          <span className="absolute translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-300 ease-out text-xs font-bold tracking-wider uppercase text-white whitespace-nowrap select-none">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;