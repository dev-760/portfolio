"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToSection({ sectionId }: { sectionId: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/#${sectionId}`);
  }, [router, sectionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-outline font-mono text-xs">
      <div className="flex items-center gap-2.5">
        <span className="size-2 rounded-full bg-primary animate-pulse" />
        <span>SYS.ROUTER // NAVIGATING TO #{sectionId.toUpperCase()}...</span>
      </div>
    </div>
  );
}

