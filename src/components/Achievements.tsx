"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Achievements = () => {
  return (
    <Section
      id="achievements"
      title="Achievements"
      contentClassName="divide-y divide-white/10"
    >
      {profile.sections.achievements.map((achievement, index) => (
        <motion.article
          key={achievement.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ x: 5 }}
          className="flex flex-col gap-1 py-4 text-sm text-white/80 first:pt-0 last:pb-0"
        >
          <div className="flex items-start sm:items-center justify-between gap-4">
            <h3 className="text-base font-semibold text-white">
              {achievement.title}
            </h3>
            <span className="text-[0.6rem] uppercase tracking-[0.5em] text-white/30 shrink-0">
              Honor
            </span>
          </div>
          {achievement.details && (
            <p className="text-white/60">{achievement.details}</p>
          )}
        </motion.article>
      ))}
    </Section>
  );
};

export default Achievements;
