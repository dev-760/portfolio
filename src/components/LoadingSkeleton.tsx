"use client";

import { motion } from "framer-motion";
import { MOTION_EASINGS } from "@/motion/tokens";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  variant?: "text" | "circular" | "rectangular";
}

function Skeleton({ 
  className = "", 
  width = "100%", 
  height = "1rem", 
  variant = "rectangular" 
}: SkeletonProps) {
  const baseClasses = "bg-surface-container";
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded"
  };

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
      animate={{
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: MOTION_EASINGS.system,
      }}
      aria-hidden="true"
    />
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton width="60px" height="24px" variant="text" />
        <Skeleton width="32px" height="32px" variant="circular" />
      </div>
      <Skeleton width="80%" height="20px" variant="text" />
      <Skeleton width="100%" height="16px" variant="text" />
      <Skeleton width="60%" height="16px" variant="text" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-between border-b border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-between">
        <div className="max-w-3xl py-12 lg:py-20 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <Skeleton width="200px" height="20px" variant="text" />
            <div className="space-y-3">
              <Skeleton width="90%" height="48px" variant="text" />
              <Skeleton width="70%" height="48px" variant="text" />
            </div>
            <Skeleton width="60%" height="24px" variant="text" />
            <div className="flex gap-4 pt-4">
              <Skeleton width="140px" height="48px" variant="rectangular" />
              <Skeleton width="120px" height="48px" variant="rectangular" />
            </div>
          </div>
          <div className="pt-12 lg:pt-8">
            <Skeleton width="200px" height="16px" variant="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <section className="py-20 lg:py-24 border-b border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <Skeleton width="150px" height="16px" variant="text" />
            <Skeleton width="400px" height="40px" variant="text" />
          </div>
          <Skeleton width="200px" height="16px" variant="text" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </section>
  );
}