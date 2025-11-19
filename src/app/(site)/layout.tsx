import type { ReactNode } from "react";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { SHOW_PROJECTS_PAGE } from "@/config/site";
import profile from "@/data/profile";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const navItems = profile.navigation.map((item) =>
    item.id === "projects" ? { ...item, enabled: SHOW_PROJECTS_PAGE } : item,
  );

  return (
    <Layout navbar={<Navbar navItems={navItems} />}>
      {children}
    </Layout>
  );
}
