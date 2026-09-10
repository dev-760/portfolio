import { Metadata } from "next";
import Projects from "@/components/Projects";
import { SHOW_PROJECTS_PAGE } from "@/config/site";
import { notFound } from "next/navigation";
import profile from "@/data/profile";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: "View my software projects, tools, and automation solutions.",
};

const ProjectsPage = () => {
  if (!SHOW_PROJECTS_PAGE) {
    // Page stays hidden until SHOW_PROJECTS_PAGE is true.
    notFound();
  }

  return <Projects />;
};

export default ProjectsPage;
