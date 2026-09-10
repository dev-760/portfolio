"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // The homepage already has elaborate scroll and entrance animations built-in.
  // We apply this transition only to the dedicated sub-routes.
  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="will-change-[opacity,transform,filter]"
    >
      {children}
    </motion.div>
  );
}
