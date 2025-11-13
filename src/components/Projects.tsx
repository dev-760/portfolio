import Section from "@/components/Section";
import profile from "@/data/profile";

const Projects = () => {
  const hasProjects = profile.projects.length > 0;

  return (
    <Section id="projects" title="Projects">
      {hasProjects ? (
        <div className="space-y-6">
          {profile.projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
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
            </article>
          ))}
        </div>
      ) : (
        <p className="text-base text-white/70">
          Projects coming soon. Stay tuned.
        </p>
      )}
    </Section>
  );
};

export default Projects;
