"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { MOTION_EASINGS } from "@/motion/tokens";
import { useSystemReducedMotion } from "@/motion/useReducedMotion";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useSystemReducedMotion();

  if (pathname === "/") {
    return <>{children}</>;
  }

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Small system coordinate boundary transition bar */}
      <motion.div
        key={`boundary-${pathname}`}
        initial={{ scaleX: 0, opacity: 0.8 }}
        animate={{ scaleX: [0, 1, 1], opacity: [0.8, 1, 0] }}
        transition={{
          duration: 0.42,
          ease: MOTION_EASINGS.system,
          times: [0, 0.7, 1],
        }}
        style={{ originX: 0 }}
        className="fixed top-16 left-0 right-0 h-[2px] bg-primary z-40 pointer-events-none"
      />

      {/* Converging page content entrance */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.38,
          ease: MOTION_EASINGS.system,
        }}
        className="will-change-[opacity,transform]"
      >
        {children}
      </motion.div>
    </div>
  );
}
