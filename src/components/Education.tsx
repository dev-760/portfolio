"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Education = () => {
  const education = profile.sections.education;

  return (
    <Section id="education" title="Education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(123,93,255,0.1)]"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7b5dff]/0 to-[#af8cff]/0 group-hover:from-[#7b5dff]/5 group-hover:to-[#af8cff]/5 transition-all duration-300 pointer-events-none" />

        <div className="relative space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl shrink-0">🎓</span>
            <div className="flex-1">
              <p className="text-lg font-semibold text-white group-hover:text-[#af8cff] transition-colors">
                {education.degree}
              </p>
            </div>
          </div>

          <div className="border-l-2 border-[#7b5dff]/40 group-hover:border-[#af8cff]/60 transition-colors pl-4">
            <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors leading-relaxed">
              {education.details}
            </p>
          </div>

          <div className="pt-2 text-xs text-white/50 space-y-1">
            <p>📚 Focus: Physical Sciences, English Track</p>
            <p>🌟 Expected Graduation: 2026</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Education;
