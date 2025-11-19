"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Projects = () => {
  const hasProjects = profile.projects.length > 0;

  return (
    <Section id="projects" title="Projects">
      {hasProjects ? (
        <div className="space-y-6">
          {profile.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-shadow hover:shadow-[0_10px_40px_rgba(123,93,255,0.15)]"
            >
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {project.description}
              </p>
              {project.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8"
          >
            <div className="mb-4 flex justify-center">
              <span className="text-6xl">🚀</span>
            </div>
            <p className="text-lg font-semibold text-white">Projects Coming Soon</p>
            <p className="mt-2 text-sm text-white/60">
              Exciting robotics and mechatronics projects are on the way. Stay tuned!
            </p>
          </motion.div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
