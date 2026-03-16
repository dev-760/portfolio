"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Skills = () => {
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
          className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
        >
          <div className="border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.4em] text-white/50">
            {group.category}
          </div>
          <ul className="divide-y divide-white/10">
            {group.items.map((item, itemIndex) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: groupIndex * 0.1 + itemIndex * 0.05 }}
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.03)" }}
                className="flex items-center justify-between px-4 py-3 text-sm text-white/80 transition-colors"
              >
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </Section>
  );
};

export default Skills;
