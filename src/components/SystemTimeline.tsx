"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

export interface TimelineMilestone {
  id: string;
  badge: string;
  subtitle?: string;
  title: string;
  institution: string;
  isCurrent?: boolean;
  content?: React.ReactNode;
}

interface SystemTimelineProps {
  milestones: TimelineMilestone[];
  eyebrow?: string;
  title?: string;
}

export function SystemTimeline({
  milestones,
  eyebrow,
  title,
}: SystemTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 60%"],
  });

  // Smooth the scroll progress with a responsive spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div className="py-4" ref={containerRef}>
      <div className="max-w-[780px]">
        {/* Section Header (rendered only if provided) */}
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && (
              <p className="text-secondary font-semibold text-xs tracking-[0.14em] uppercase pb-2">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-on-surface text-2xl sm:text-3xl font-bold tracking-tight">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* System Timeline Track */}
        <div className="relative pl-7 sm:pl-9 space-y-12">
          {/* Base Neutral Vertical Track */}
          <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-outline-variant/30" />

          {/* Active Progress Blue Path */}
          <motion.div
            style={{ scaleY: smoothProgress, originY: 0 }}
            className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-primary origin-top"
          />

          {/* Render Milestones */}
          {milestones.map((item, index) => {
            const milestoneThreshold = index / Math.max(1, milestones.length - 1);
            return (
              <TimelineNodeItem
                key={item.id}
                item={item}
                index={index}
                total={milestones.length}
                scrollYProgress={smoothProgress}
                milestoneThreshold={milestoneThreshold}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TimelineNodeItem({
  item,
  scrollYProgress,
  milestoneThreshold,
}: {
  item: TimelineMilestone;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  milestoneThreshold: number;
}) {
  // Transform active states based on scroll position
  const nodeScale = useTransform(
    scrollYProgress,
    [Math.max(0, milestoneThreshold - 0.1), milestoneThreshold, milestoneThreshold + 0.1],
    [1, 1.25, 1]
  );

  const nodeColor = useTransform(
    scrollYProgress,
    [Math.max(0, milestoneThreshold - 0.08), milestoneThreshold],
    ["#c4c5d9", "#003ae4"]
  );

  return (
    <div className="relative group">
      {/* Active System Node Coordinate Marker */}
      <motion.div
        style={{
          scale: nodeScale,
          backgroundColor: nodeColor,
        }}
        className="absolute -left-[30px] sm:size-5 sm:-left-[38px] top-1 size-5 rounded-full border-4 border-background shadow-xs transition-colors duration-200"
      >
        {item.isCurrent && (
          <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        )}
      </motion.div>

      {/* Header Badges */}
      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
        <span
          className={`px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded ${
            item.isCurrent
              ? "bg-primary text-on-primary"
              : "bg-surface-container-highest text-on-surface-variant"
          }`}
        >
          {item.badge}
        </span>
        {item.subtitle && (
          <span className="text-xs font-medium text-outline">{item.subtitle}</span>
        )}
      </div>

      {/* Main Title & Institution */}
      <h3 className="text-lg font-bold text-on-surface tracking-tight mt-1">
        {item.title}
      </h3>
      <p className="text-secondary text-sm font-medium mb-3">
        {item.institution}
      </p>

      {/* Content Body */}
      {item.content}
    </div>
  );
}

export default SystemTimeline;
