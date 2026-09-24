import { generatePageMetadata } from "@/lib/metadata";
import AdminDashboardContent from "./page-content";

export const metadata = generatePageMetadata(
  "Hassan Admin — Dashboard",
  "Admin dashboard for managing content, posts, and site settings.",
  "/admin"
);

export default function AdminLayout() {
  return <AdminDashboardContent />;
}