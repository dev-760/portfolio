"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Icon } from "@/components/icons/Icon";

export interface TimelineMilestone {
  id: string;
  badge: string;
  subtitle?: string;
  period?: string;
  location?: string;
  title: string;
  institution: string;
  institutionDetail?: string;
  isCurrent?: boolean;
  summary?: string;
  modulesTitle?: string;
  modules?: string[];
  content?: React.ReactNode;
}

interface SystemTimelineProps {
  milestones: TimelineMilestone[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function SystemTimeline({
  milestones,
  eyebrow,
  title,
  subtitle,
}: SystemTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 65%"],
  });

  // Smooth the scroll progress with a responsive spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div className="py-2 w-full" ref={containerRef}>
      <div className="w-full">
        {/* Section Header (rendered only if provided) */}
        {(eyebrow || title || subtitle) && (
          <div className="mb-8">
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
            {subtitle && (
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* System Timeline Track */}
        <div className="relative pl-8 sm:pl-10 space-y-8 sm:space-y-10">
          {/* Base Neutral Vertical Track */}
          <div className="absolute left-[7px] top-6 bottom-6 w-[2px] bg-outline-variant/30" />

          {/* Active Progress Path */}
          <motion.div
            style={{ scaleY: smoothProgress, originY: 0 }}
            className="absolute left-[7px] top-6 bottom-6 w-[2px] bg-primary origin-top"
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
    [Math.max(0, milestoneThreshold - 0.1), milestoneThreshold, Math.min(1, milestoneThreshold + 0.1)],
    [1, 1.2, 1]
  );

  return (
    <div className="relative group">
      {/* Timeline Node Marker */}
      <motion.div
        style={{ scale: nodeScale }}
        className="absolute -left-[32px] sm:-left-[40px] top-6 size-4 rounded-full bg-background flex items-center justify-center z-10"
      >
        {item.isCurrent ? (
          <span className="size-2.5 rounded-full bg-primary ring-4 ring-primary/10" />
        ) : (
          <span className="size-1.5 rounded-full bg-outline-variant/60 transition-colors group-hover:bg-outline-variant" />
        )}
      </motion.div>

      {/* Structured Milestone Card */}
      <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 sm:p-7 hover:border-primary/50 transition-all duration-300 shadow-2xs hover:shadow-xs relative overflow-hidden group/card">
        {/* Subtle Ambient Top Accent on Active Card */}
        {item.isCurrent && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
        )}

        {/* Top Header Row: Status Badge, Period & Location */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-outline-variant/20">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase inline-flex items-center gap-1.5 shadow-2xs ${
                item.isCurrent
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant border border-outline-variant/40"
              }`}
            >
              {item.isCurrent && (
                <span className="size-1.5 rounded-full bg-foreground/60" />
              )}
              {item.badge}
            </span>

            {item.subtitle && (
              <span className="text-xs font-semibold text-secondary font-mono">
                {item.subtitle}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-outline font-medium flex-wrap">
            {item.period && (
              <span className="font-mono bg-surface-container-low px-2 py-0.5 rounded-md border border-outline-variant/30">
                {item.period}
              </span>
            )}
            {item.location && (
              <span className="inline-flex items-center gap-1">
                <Icon name="location_on" size={13} className="text-outline" />
                {item.location}
              </span>
            )}
          </div>
        </div>

        {/* Degree & Institution */}
        <div className="pt-4">
          <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
            {item.title}
          </h3>

          <div className="flex items-start sm:items-center gap-2 pt-1.5 text-sm font-semibold text-secondary flex-wrap">
            <Icon name="graduation" size={17} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
            <span>{item.institution}</span>
          </div>

          {item.institutionDetail && (
            <p className="text-xs text-outline font-medium pl-6 pt-0.5">
              {item.institutionDetail}
            </p>
          )}
        </div>

        {/* Narrative Summary */}
        {item.summary && (
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-3">
            {item.summary}
          </p>
        )}

        {/* Coursework & Quantitative Modules Chips */}
        {item.modules && item.modules.length > 0 && (
          <div className="mt-5 pt-4 border-t border-outline-variant/20">
            <div className="text-[11px] font-bold uppercase tracking-wider text-outline mb-2.5 flex items-center gap-1.5 font-mono">
              <Icon name="checklist" size={13} className="text-outline" />
              <span>{item.modulesTitle || "Core Curriculum & Quantitative Areas"}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.modules.map((mod, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface text-xs font-medium border border-outline-variant/30 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Optional Custom Content */}
        {item.content && (
          <div className="mt-4 pt-3 border-t border-outline-variant/20">
            {item.content}
          </div>
        )}
      </div>
    </div>
  );
}
