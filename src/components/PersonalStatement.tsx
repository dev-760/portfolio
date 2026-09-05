"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const PersonalStatement = () => {
  return (
    <Section id="statement" title="Personal Statement">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.01] p-8 sm:p-10 backdrop-blur transition-all duration-300 hover:border-white/15 hover:shadow-[0_24px_72px_rgba(139,111,247,0.14)]"
      >
        {/* Decorative accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7b5dff]/60 to-transparent" />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b6ff7]/0 to-[#b8a3ff]/0 group-hover:from-[#8b6ff7]/5 group-hover:to-[#b8a3ff]/3 transition-all duration-500 pointer-events-none" />

        <div className="relative">
          {/* Quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-4xl font-serif text-[#7b5dff]/50 leading-none select-none">&ldquo;</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/85 leading-[1.8] font-light tracking-wide group-hover:text-white/95 transition-colors duration-300 whitespace-pre-line"
          >
            {profile.personalStatement}
          </motion.p>

          {/* Closing quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-6 text-right"
          >
            <span className="text-4xl font-serif text-[#7b5dff]/50 leading-none select-none">&rdquo;</span>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default PersonalStatement;
