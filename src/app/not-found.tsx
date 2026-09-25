import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-20 text-center">
      <div className="max-w-md w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-8 sm:p-10 shadow-sm space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-mono text-sm font-bold mx-auto">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
            Page Not Found
          </h1>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-semibold text-on-primary hover:bg-primary/90 transition-colors shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

