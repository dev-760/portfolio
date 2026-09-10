import SlidingCard from "@/components/SlidingCard";
import profile from "@/data/profile";

const Projects = () => {
  const hasProjects = profile.projects.length > 0;
  const subtitle =
    profile.sections.projectsMessage ||
    "Software I build to solve problems I encounter — from personal tools and productivity systems to AI-powered applications and business automation.";

  return (
    <SlidingCard
      id="projects"
      eyebrow="Selected Work & Systems"
      title="Projects"
      subtitle={subtitle}
    >
      <div className="space-y-6">
        {hasProjects ? (
          <div className="grid gap-6">
            {profile.projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between gap-6 rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-6 sm:p-8 shadow-2xs hover:shadow-md hover:border-[#845400]/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#e2e4ec] pb-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#845400]">
                          Featured Project
                        </span>
                      </div>
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#191c21] tracking-tight group-hover:text-[#845400] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#e2e4ec] px-4 py-2 text-xs sm:text-sm font-semibold text-[#191c21] hover:text-[#845400] hover:border-[#845400]/40 shadow-2xs hover:shadow-xs transition-all shrink-0"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span>View on GitHub</span>
                        <span className="flex items-center justify-center">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </a>
                    )}
                  </div>

                  <p className="font-sans text-base sm:text-lg text-[#514537] leading-relaxed max-w-3xl pt-1">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e2e4ec]/60">
                  {/* Technology Badges */}
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="rounded-lg bg-white px-3 py-1.5 text-xs font-mono font-medium text-[#514537] border border-[#e2e4ec]/80 shadow-2xs hover:border-[#845400]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#e2e4ec] p-8 text-center bg-[#fbfbfe]">
            <p className="text-base text-[#514537]">No projects available at this time.</p>
          </div>
        )}

        <div className="flex justify-end pt-2">
          <a
            href="https://github.com/dev-760"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e2e4ec] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#845400] hover:text-[#191c21] hover:border-[#845400]/40 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs transition-all"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>Explore more on GitHub (dev-760)</span>
            <span className="flex items-center justify-center">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </SlidingCard>
  );
};

export default Projects;

