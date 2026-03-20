"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Skills = () => {
  const skillIcons: Record<string, string> = {
    "Technical Skills": "⚙️",
    "Soft Skills": "🎯",
  };

  return (
    <Section
      id="skills"
      title="Skills"
      contentClassName="space-y-6"
    >
      {profile.sections.skills.map((group, groupIndex) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.01] hover:border-white/20 transition-all duration-300"
        >
          <div className="border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.4em] text-white/50 font-medium flex items-center gap-2 bg-gradient-to-r from-white/5 to-transparent">
            <span>{skillIcons[group.category] || "✨"}</span>
            {group.category}
          </div>
          <ul className="divide-y divide-white/5">
            {group.items.map((item, itemIndex) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: groupIndex * 0.1 + itemIndex * 0.05 }}
                whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 transition-all duration-200 group cursor-pointer"
              >
                <span className="text-white/40 group-hover:text-white/70 transition-colors">→</span>
                <span className="group-hover:text-white transition-colors">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </Section>
  );
};

export default Skills;
