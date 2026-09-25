"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOTION_EASINGS } from "@/motion/tokens";

interface NodeDef {
  id: string;
  label: string;
  metric: string;
  status: string;
  cx: number;
  cy: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  x?: string;
  y?: string;
}

const DESKTOP_NODES: NodeDef[] = [
  { id: "think", label: "THINK", metric: "Input Fidelity", status: "99.4% Synthesized", cx: 180, cy: 52, top: "1rem", left: "50%", x: "-50%" },
  { id: "analyze", label: "ANALYZE", metric: "Analytical Throughput", status: "Latency < 120ms", cx: 68, cy: 160, top: "50%", left: "0.5rem", y: "-50%" },
  { id: "execute", label: "EXECUTE", metric: "Process Velocity", status: "4.8x Execution Rate", cx: 292, cy: 160, top: "50%", right: "0.5rem", y: "-50%" },
  { id: "improve", label: "IMPROVE", metric: "Iterative Feedback Loops", status: "Δ +18.2% Compound", cx: 180, cy: 268, bottom: "1rem", left: "50%", x: "-50%" },
];

const HUB_NODE = {
  id: "structure",
  label: "STRUCTURE",
  metric: "Core Hub Topology",
  status: "Fully Connected Mesh",
  cx: 180,
  cy: 160,
};

const MOBILE_NODES = [
  {
    id: "think",
    index: "01",
    label: "THINK",
    sublabel: "Input",
    metric: "Input Synthesis",
    status: "99.4% Synthesized",
  },
  {
    id: "structure",
    index: "00",
    label: "STRUCTURE",
    sublabel: "Core",
    metric: "Core Hub Topology",
    status: "Connected Mesh",
  },
  {
    id: "execute",
    index: "02",
    label: "EXECUTE",
    sublabel: "Output",
    metric: "Process Velocity",
    status: "4.8x Rate",
  },
  {
    id: "improve",
    index: "Δ",
    label: "FEEDBACK",
    sublabel: "Loop",
    metric: "Feedback Recursion",
    status: "24 loops/wk",
  },
];

interface HeroGraphProps {
  onSystemReady?: () => void;
  isMobileLayout?: boolean;
}

export const HeroGraph: React.FC<HeroGraphProps> = memo(({ onSystemReady, isMobileLayout = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [proximityMap, setProximityMap] = useState<Record<string, number>>({});
  const rafRef = useRef<number | null>(null);
  const settleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile / touch environment
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Notify parent when system has initialized
  useEffect(() => {
    const timer = setTimeout(() => {
      onSystemReady?.();
    }, 450);
    return () => clearTimeout(timer);
  }, [onSystemReady]);

  // Cursor Proximity calculation on desktop (Network Response)
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile || isMobileLayout) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const scaleX = 360 / rect.width;
        const scaleY = 320 / (rect.height - 80);

        const svgX = mouseX * scaleX;
        const svgY = (mouseY - 36) * scaleY;

        const PROXIMITY_RADIUS = 130;
        let closestId: string | null = null;
        let highestIntensity = 0;
        const newProximity: Record<string, number> = {};

        // Check hub
        const distHub = Math.hypot(svgX - HUB_NODE.cx, svgY - HUB_NODE.cy);
        const hubIntensity = Math.max(0, 1 - distHub / PROXIMITY_RADIUS);
        newProximity[HUB_NODE.id] = hubIntensity;
        if (hubIntensity > highestIntensity && hubIntensity > 0.4) {
          highestIntensity = hubIntensity;
          closestId = HUB_NODE.id;
        }

        // Check peripheral nodes
        DESKTOP_NODES.forEach((node) => {
          const dist = Math.hypot(svgX - node.cx, svgY - node.cy);
          const intensity = Math.max(0, 1 - dist / PROXIMITY_RADIUS);
          newProximity[node.id] = intensity;

          if (intensity > highestIntensity && intensity > 0.35) {
            highestIntensity = intensity;
            closestId = node.id;
          }
        });

        setProximityMap(newProximity);
        if (closestId !== activeNodeId) {
          setActiveNodeId(closestId);
        }
      });
    },
    [isMobile, isMobileLayout, activeNodeId]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setProximityMap({});
    setActiveNodeId(null);
  }, []);

  // Mobile tap interaction: activates node temporarily, then settles
  const handleNodeTap = useCallback((nodeId: string) => {
    if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    setActiveNodeId((prev) => (prev === nodeId ? null : nodeId));
    settleTimeoutRef.current = setTimeout(() => {
      setActiveNodeId(null);
    }, 3200);
  }, []);

  // Determine active metric info
  const activeInfo = React.useMemo(() => {
    if (activeNodeId === "structure") return HUB_NODE;
    const desktopFound = DESKTOP_NODES.find((n) => n.id === activeNodeId);
    if (desktopFound) return desktopFound;
    const mobileFound = MOBILE_NODES.find((n) => n.id === activeNodeId);
    if (mobileFound) return mobileFound;
    return null;
  }, [activeNodeId]);

  const showMobileView = isMobileLayout || isMobile;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative mx-auto flex w-full flex-col justify-between overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-4 sm:p-5 shadow-xs grid-lines transition-all duration-300 ${
        showMobileView
          ? "max-w-full my-3 aspect-auto"
          : "max-w-[420px] lg:max-w-[460px] aspect-square"
      }`}
      role="region"
      aria-label="Interactive Systems Architecture Visualization"
    >
      {/* 1. Header Coordinates & System Spec */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.42, ease: MOTION_EASINGS.sharp }}
        className="z-10 flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-outline border-b border-outline-variant/30 pb-2.5"
      >
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 text-primary inline-flex items-center justify-center">
            <svg className="h-full w-full" fill="none" viewBox="0 0 48 48">
              <path
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <span className="font-semibold text-on-surface">SYS.FLOW.01</span>
        </span>
        <span className="text-[10px] text-outline font-medium tracking-tight">
          33.5731° N, 7.5898° W
        </span>
      </motion.div>

      {/* 2. Main Graph Canvas */}
      {!showMobileView ? (
        /* Desktop Network Canvas with Proximity Field */
        <div className="relative my-auto flex h-[260px] sm:h-[300px] w-full items-center justify-center">
          {/* SVG Connection Matrix */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            viewBox="0 0 360 320"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Equilibrium Orbit */}
            <circle
              cx="180"
              cy="160"
              r="108"
              stroke="#c4c5d9"
              strokeOpacity="0.4"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            {/* Connection: THINK to STRUCTURE */}
            <line
              x1="180"
              y1="52"
              x2="180"
              y2="160"
              stroke={activeNodeId === "think" || (proximityMap["think"] || 0) > 0.3 ? "#3157ff" : "#c4c5d9"}
              strokeWidth={activeNodeId === "think" ? 2.2 : 1.2}
              strokeDasharray="3 3"
              strokeOpacity={activeNodeId === "think" ? 1 : 0.6}
            />

            {/* Connection: ANALYZE to STRUCTURE */}
            <line
              x1="68"
              y1="160"
              x2="180"
              y2="160"
              stroke={activeNodeId === "analyze" || (proximityMap["analyze"] || 0) > 0.3 ? "#3157ff" : "#c4c5d9"}
              strokeWidth={activeNodeId === "analyze" ? 2.2 : 1.2}
              strokeOpacity={activeNodeId === "analyze" ? 1 : 0.6}
            />

            {/* Connection: EXECUTE to STRUCTURE */}
            <line
              x1="292"
              y1="160"
              x2="180"
              y2="160"
              stroke={activeNodeId === "execute" || (proximityMap["execute"] || 0) > 0.3 ? "#3157ff" : "#c4c5d9"}
              strokeWidth={activeNodeId === "execute" ? 2.2 : 1.2}
              strokeOpacity={activeNodeId === "execute" ? 1 : 0.6}
            />

            {/* Connection: IMPROVE to STRUCTURE */}
            <line
              x1="180"
              y1="268"
              x2="180"
              y2="160"
              stroke={activeNodeId === "improve" || (proximityMap["improve"] || 0) > 0.3 ? "#3157ff" : "#c4c5d9"}
              strokeWidth={activeNodeId === "improve" ? 2.2 : 1.2}
              strokeDasharray="3 3"
              strokeOpacity={activeNodeId === "improve" ? 1 : 0.6}
            />

            {/* Telemetry flow dots on active paths */}
            <circle
              cx="180"
              cy="106"
              r="2.5"
              fill="#3157ff"
              className={activeNodeId === "think" ? "animate-ping" : "opacity-75"}
            />
            <circle
              cx="124"
              cy="160"
              r="2.5"
              fill="#3157ff"
              className={activeNodeId === "analyze" ? "animate-ping" : "opacity-75"}
            />
            <circle
              cx="236"
              cy="160"
              r="2.5"
              fill="#3157ff"
              className={activeNodeId === "execute" ? "animate-ping" : "opacity-75"}
            />
            <circle
              cx="180"
              cy="214"
              r="2.5"
              fill="#3157ff"
              className={activeNodeId === "improve" ? "animate-ping" : "opacity-75"}
            />
          </svg>

          {/* Central Hub Node */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ 
              scale: activeNodeId === "structure" ? 1.05 : 1, 
              opacity: 1 
            }}
            transition={{ delay: 0.28, duration: 0.42, ease: MOTION_EASINGS.system }}
            onClick={() => handleNodeTap("structure")}
            className={`absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded px-3.5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
              activeNodeId === "structure"
                ? "bg-primary text-white shadow-md ring-2 ring-primary-fixed"
                : "bg-on-surface text-surface-bright shadow-sm hover:bg-primary"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-white" />
              STRUCTURE
            </span>
          </motion.div>

          {/* Surrounding Nodes */}
          {DESKTOP_NODES.map((node, idx) => {
            const intensity = proximityMap[node.id] || 0;
            const isNodeActive = activeNodeId === node.id || intensity > 0.4;

            return (
              <motion.button
                key={node.id}
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: isNodeActive ? 1.05 : 1,
                  y: isNodeActive ? -2 : 0
                }}
                transition={{ 
                  delay: 0.2 + idx * 0.08, 
                  duration: 0.36, 
                  ease: MOTION_EASINGS.sharp 
                }}
                onClick={() => handleNodeTap(node.id)}
                className={`absolute z-20 cursor-pointer rounded border px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isNodeActive
                    ? "border-primary bg-primary-fixed text-primary-fixed-variant shadow-xs ring-1 ring-primary"
                    : "border-outline-variant/80 bg-surface-container-lowest text-on-surface hover:border-primary hover:bg-surface-container"
                }`}
                style={{
                  top: node.top,
                  bottom: node.bottom,
                  left: node.left,
                  right: node.right,
                  transform: `translate(${node.x || "0"}, ${node.y || "0"})`,
                }}
              >
                {node.label}
              </motion.button>
            );
          })}
        </div>
      ) : (
        /* ========================================================
           Mobile Architectural Closed-Loop System Diagram
           Replaces the rudimentary button column with a high-end
           pipeline network + continuous feedback loop
           ======================================================== */
        <div className="relative py-4 my-auto w-full">
          {/* SVG Vector Rails & Directional Flow */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            viewBox="0 0 340 130"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Feed-forward path 1: THINK to STRUCTURE */}
            <line
              x1="92"
              y1="34"
              x2="128"
              y2="34"
              stroke={activeNodeId === "think" || activeNodeId === "structure" ? "#3157ff" : "#c4c5d9"}
              strokeWidth="1.5"
            />
            {/* Arrow marker 1 */}
            <path
              d="M 124 31 L 130 34 L 124 37"
              stroke={activeNodeId === "think" || activeNodeId === "structure" ? "#3157ff" : "#c4c5d9"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Feed-forward path 2: STRUCTURE to EXECUTE */}
            <line
              x1="212"
              y1="34"
              x2="248"
              y2="34"
              stroke={activeNodeId === "structure" || activeNodeId === "execute" ? "#3157ff" : "#c4c5d9"}
              strokeWidth="1.5"
            />
            {/* Arrow marker 2 */}
            <path
              d="M 244 31 L 250 34 L 244 37"
              stroke={activeNodeId === "structure" || activeNodeId === "execute" ? "#3157ff" : "#c4c5d9"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Closed Feedback Loop: Curved Arc from EXECUTE back to THINK */}
            <path
              d="M 290 56 C 290 106, 50 106, 50 56"
              stroke={activeNodeId === "improve" ? "#3157ff" : "#c4c5d9"}
              strokeWidth="1.2"
              strokeDasharray="4 4"
              strokeOpacity={activeNodeId === "improve" ? 1 : 0.65}
            />
            {/* Reverse return arrow near THINK */}
            <path
              d="M 47 62 L 50 54 L 53 62"
              stroke={activeNodeId === "improve" ? "#3157ff" : "#c4c5d9"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Active Telemetry Flow Pulse on Feedback Loop */}
            <circle
              cx="170"
              cy="98"
              r="2.5"
              fill="#3157ff"
              className={activeNodeId === "improve" ? "animate-ping" : "opacity-80"}
            />
          </svg>

          {/* Primary Pipeline Stage Nodes (01 THINK -> 00 STRUCTURE -> 02 EXECUTE) */}
          <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 items-center">
            {/* Node 1: THINK */}
            <button
              type="button"
              onClick={() => handleNodeTap("think")}
              className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                activeNodeId === "think"
                  ? "border-primary bg-primary text-white shadow-sm ring-2 ring-primary-fixed"
                  : "border-outline-variant/60 bg-surface-container-lowest text-on-surface hover:border-primary/60"
              }`}
            >
              <span className={`font-mono text-[9px] font-bold ${activeNodeId === "think" ? "text-white/80" : "text-primary"}`}>
                01
              </span>
              <span className="text-[11px] font-bold tracking-tight">THINK</span>
              <span className={`text-[9px] font-mono ${activeNodeId === "think" ? "text-white/70" : "text-outline"}`}>
                Input
              </span>
            </button>

            {/* Central Hub: STRUCTURE */}
            <button
              type="button"
              onClick={() => handleNodeTap("structure")}
              className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                activeNodeId === "structure"
                  ? "border-primary bg-primary text-white shadow-md ring-2 ring-primary-fixed"
                  : "border-outline-variant bg-on-surface text-surface-bright shadow-xs hover:bg-primary"
              }`}
            >
              <div className="flex items-center gap-1">
                <div className={`w-2.5 h-2.5 ${activeNodeId === "structure" ? "text-white" : "text-primary-fixed"}`}>
                  <svg className="h-full w-full" fill="none" viewBox="0 0 48 48">
                    <path
                      clipRule="evenodd"
                      d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-mono text-[9px] font-bold opacity-80">00</span>
              </div>
              <span className="text-[11px] font-black tracking-tight">STRUCTURE</span>
              <span className="text-[9px] font-mono opacity-70">Core Hub</span>
            </button>

            {/* Node 2: EXECUTE */}
            <button
              type="button"
              onClick={() => handleNodeTap("execute")}
              className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                activeNodeId === "execute"
                  ? "border-primary bg-primary text-white shadow-sm ring-2 ring-primary-fixed"
                  : "border-outline-variant/60 bg-surface-container-lowest text-on-surface hover:border-primary/60"
              }`}
            >
              <span className={`font-mono text-[9px] font-bold ${activeNodeId === "execute" ? "text-white/80" : "text-primary"}`}>
                02
              </span>
              <span className="text-[11px] font-bold tracking-tight">EXECUTE</span>
              <span className={`text-[9px] font-mono ${activeNodeId === "execute" ? "text-white/70" : "text-outline"}`}>
                Output
              </span>
            </button>
          </div>

          {/* Feedback Loop Control Node */}
          <div className="relative z-10 flex justify-center mt-3 pt-1">
            <button
              type="button"
              onClick={() => handleNodeTap("improve")}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono transition-all duration-200 cursor-pointer ${
                activeNodeId === "improve"
                  ? "border-primary bg-primary text-white shadow-xs ring-1 ring-primary-fixed"
                  : "border-outline-variant/50 bg-surface-container-low text-on-surface-variant hover:border-primary/50"
              }`}
            >
              <span className="flex items-center gap-1 font-bold">
                <span className="text-[11px]">Δ</span>
                <span>FEEDBACK LOOP</span>
              </span>
              <span className="text-outline text-[9px]">•</span>
              <span className={`text-[9px] ${activeNodeId === "improve" ? "text-white/80" : "text-primary font-semibold"}`}>
                24 iter/wk
              </span>
            </button>
          </div>
        </div>
      )}

      {/* 3. Metrics & Live Telemetry Panel */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.42, ease: MOTION_EASINGS.sharp }}
        className="flex flex-row items-center justify-between gap-1 border-t border-outline-variant/30 pt-2.5 font-mono text-[10px] sm:text-[11px]"
      >
        <span className="flex items-center gap-1.5 min-w-0">
          <span className="uppercase text-outline font-medium shrink-0">State:</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeInfo?.id || "idle"}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.18, ease: MOTION_EASINGS.sharp }}
              className="font-bold text-primary truncate"
            >
              {activeInfo ? activeInfo.metric : "System Equilibrium"}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="font-semibold tracking-tight text-on-surface text-right shrink-0">
          {activeInfo ? activeInfo.status : "Loops: 24/wk"}
        </span>
      </motion.div>
    </div>
  );
});

HeroGraph.displayName = "HeroGraph";
export default HeroGraph;
