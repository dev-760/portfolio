"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Achievements = () => {
  return (
    <Section
      id="achievements"
      title="Achievements"
      contentClassName="grid gap-4 lg:grid-cols-2"
    >
      {profile.sections.achievements.map((achievement, index) => (
        <motion.article
          key={achievement.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-5 transition-all duration-300 hover:border-white/20 hover:shadow-[0_15px_50px_rgba(123,93,255,0.12)]"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7b5dff]/0 to-[#af8cff]/0 group-hover:from-[#7b5dff]/5 group-hover:to-[#af8cff]/5 transition-all duration-300 pointer-events-none" />

          <div className="relative space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5">⭐</span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white group-hover:text-[#af8cff] transition-colors leading-tight">
                  {achievement.title}
                </h3>
              </div>
            </div>
            {achievement.details && (
              <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors pl-8 leading-relaxed">
                {achievement.details}
              </p>
            )}
          </div>
        </motion.article>
      ))}
    </Section>
  );
};

export default Achievements;
