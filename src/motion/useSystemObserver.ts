"use client";

import { useEffect, useRef, useState } from "react";
import { MOTION_DURATIONS } from "./tokens";

export type SystemFlowState = "idle" | "activate" | "connect" | "settle";

interface UseSystemObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useSystemObserver({
  threshold = 0.15,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseSystemObserverOptions = {}) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [flowState, setFlowState] = useState<SystemFlowState>(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return "settle";
    }
    return "idle";
  });
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const clearTimers = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimers();
            // Step 1: ACTIVATE
            setFlowState("activate");

            // Step 2: CONNECT after boundary establishes (180ms)
            const t1 = setTimeout(() => {
              setFlowState("connect");
            }, MOTION_DURATIONS.fast * 1000 + 40);

            // Step 3: SETTLE after elements arrive at equilibrium (520ms)
            const t2 = setTimeout(() => {
              setFlowState("settle");
            }, MOTION_DURATIONS.standard * 1000 + 100);

            timersRef.current.push(t1, t2);

            if (triggerOnce) {
              observer.unobserve(el);
            }
          } else if (!triggerOnce) {
            clearTimers();
            setFlowState("idle");
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      clearTimers();
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { containerRef, flowState, isSettled: flowState === "settle", isActivated: flowState !== "idle" };
}
