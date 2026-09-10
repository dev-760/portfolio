import Link from "next/link";
import SlidingCard from "@/components/SlidingCard";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-9rem)] px-4">
      <SlidingCard
        id="not-found"
        eyebrow="404 Error"
        title="Page Not Found"
        subtitle="The page you are looking for doesn't exist or has been moved."
        className="max-w-2xl mx-auto w-full text-center"
        contentClassName="space-y-8 flex flex-col items-center"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#191c21] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#845400] transition-colors shadow-xs hover:shadow-md cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Return Home</span>
        </Link>
      </SlidingCard>
    </div>
  );
}
