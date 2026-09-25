import { HeroSkeleton, SectionSkeleton } from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="bg-background text-on-surface antialiased font-sans min-h-screen">
      <HeroSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
    </div>
  );
}