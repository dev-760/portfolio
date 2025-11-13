import Projects from "@/components/Projects";
import { SHOW_PROJECTS_PAGE } from "@/config/site";
import { notFound } from "next/navigation";

const ProjectsPage = () => {
  if (!SHOW_PROJECTS_PAGE) {
    // Page stays hidden until SHOW_PROJECTS_PAGE is true.
    notFound();
  }

  return <Projects />;
};

export default ProjectsPage;
