"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Projects = () => {
  const hasProjects = profile.projects.length > 0;

  return (
    <Section id="projects" title="Projects">
      {hasProjects ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {profile.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] p-7 backdrop-blur transition-all duration-300 hover:border-white/10 hover:shadow-[0_24px_72px_rgba(139,111,247,0.18)]"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b6ff7]/0 to-[#b8a3ff]/0 group-hover:from-[#8b6ff7]/8 group-hover:to-[#b8a3ff]/4 transition-all duration-300 pointer-events-none" />

              <div className="relative space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#af8cff] transition-colors flex-1 leading-tight">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline transition-all underline-offset-4 decoration-white/40 hover:decoration-white flex items-center gap-2"
                      >
                        {project.title}
                        <span className="text-white/40 group-hover:text-white/60 transition-colors text-sm">↗</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>

                <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors leading-relaxed">
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white/80 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
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
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#7b5dff]/20 to-[#af8cff]/10 text-2xl font-light text-white/60">⟡</span>
            </div>
            <p className="text-lg font-semibold text-white">Project Documentation Coming Soon</p>
            <p className="mt-2 text-sm text-white/60">
              Currently documenting independent research on cognitive frameworks and autonomous system architecture.
            </p>
          </motion.div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
