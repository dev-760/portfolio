"use client";

import React, { Suspense } from "react";
import { SectionSkeleton, HeroSkeleton } from "./LoadingSkeleton";

interface LoadingBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  type?: "section" | "hero" | "card";
}

export function LoadingBoundary({ 
  children, 
  fallback, 
  type = "section" 
}: LoadingBoundaryProps) {
  const defaultFallback = type === "hero" ? <HeroSkeleton /> : <SectionSkeleton />;
  
  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
}