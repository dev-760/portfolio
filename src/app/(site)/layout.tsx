import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";
import { StructuredData } from "@/components/StructuredData";
import { generateSiteMetadata } from "@/lib/metadata";

export const metadata = generateSiteMetadata();

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <StructuredData />
      <Analytics />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
    </>
  );
}
