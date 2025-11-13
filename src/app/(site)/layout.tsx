import type { ReactNode } from "react";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import Sidebar from "@/components/Sidebar";
import { SHOW_PROJECTS_PAGE } from "@/config/site";
import profile from "@/data/profile";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const navItems = profile.navigation.map((item) =>
    item.id === "projects" ? { ...item, enabled: SHOW_PROJECTS_PAGE } : item,
  );

  return (
    <Layout sidebar={<Sidebar navItems={navItems} />}>
      <PageTransition>{children}</PageTransition>
    </Layout>
  );
}
