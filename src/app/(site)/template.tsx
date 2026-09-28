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
      {/* Page content. No entrance animation; transition only on interaction. */}
      <motion.div
        key={pathname}
        initial={false}
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
