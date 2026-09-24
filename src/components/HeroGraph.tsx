"use client";

import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
  { id: "think", label: "THINK", top: "1rem", left: "50%", x: "-50%" },
  { id: "analyze", label: "ANALYZE", top: "50%", left: "0.5rem", y: "-50%" },
  { id: "execute", label: "EXECUTE", top: "50%", right: "0.5rem", y: "-50%" },
  { id: "improve", label: "IMPROVE", bottom: "1rem", left: "50%", x: "-50%" },
];

const GraphNode = memo(({ 
  node, 
  isActive, 
  onHoverStart, 
  onHoverEnd 
}: { 
  node: typeof nodes[0];
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    onHoverStart={onHoverStart}
    onHoverEnd={onHoverEnd}
    className="absolute z-20 cursor-pointer rounded border border-outline-variant/80 bg-surface-container-lowest px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-on-surface transition-colors hover:border-primary hover:bg-primary-fixed"
    style={{
      top: node.top,
      bottom: node.bottom,
      left: node.left,
      right: node.right,
      transform: `translate(${node.x || '0'}, ${node.y || '0'})`,
    }}
  >
    {node.label}
  </motion.div>
));

GraphNode.displayName = "GraphNode";

const CentralHub = memo(({ 
  isActive, 
  onHoverStart, 
  onHoverEnd 
}: { 
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    onHoverStart={onHoverStart}
    onHoverEnd={onHoverEnd}
    className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded bg-on-surface px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-surface-bright shadow-md"
  >
    <span className="flex items-center gap-1.5">
      <span className="size-1.5 rounded-full bg-surface-bright" />
      STRUCTURE
    </span>
  </motion.div>
));

CentralHub.displayName = "CentralHub";

export function HeroGraph() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleNodeHoverStart = useCallback((nodeId: string) => {
    setActiveNode(nodeId);
  }, []);

  const handleNodeHoverEnd = useCallback(() => {
    setActiveNode(null);
  }, []);

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[400px] sm:max-w-[480px] flex-col justify-between overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-4 sm:p-6 shadow-sm grid-lines">
      {/* Top Bar */}
      <div className="z-10 flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-outline">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary" />
          SYS.GRAPH.01
        </span>
        <span className="hidden sm:inline">33.5731° N, 7.5898° W</span>
      </div>

      {/* Graph Canvas */}
      <div className="relative my-auto flex h-[280px] sm:h-[320px] w-full items-center justify-center">
        {/* SVG Lines */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" fill="none" viewBox="0 0 360 320" preserveAspectRatio="xMidYMid meet">
          <line x1="180" y1="52" x2="180" y2="160" stroke={activeNode === "think" ? "#3157ff" : "#c4c5d9"} strokeWidth={activeNode === "think" ? 2.5 : 1.5} strokeDasharray="3 3" />
          <line x1="68" y1="160" x2="180" y2="160" stroke={activeNode === "analyze" ? "#3157ff" : "#c4c5d9"} strokeWidth={activeNode === "analyze" ? 2.5 : 1.5} />
          <line x1="292" y1="160" x2="180" y2="160" stroke={activeNode === "execute" ? "#3157ff" : "#c4c5d9"} strokeWidth={activeNode === "execute" ? 2.5 : 1.5} />
          <line x1="180" y1="268" x2="180" y2="160" stroke={activeNode === "improve" ? "#3157ff" : "#c4c5d9"} strokeWidth={activeNode === "improve" ? 2.5 : 1.5} strokeDasharray="3 3" />
          <circle cx="180" cy="160" r="110" stroke="#e5e2e1" strokeWidth="1" strokeDasharray="4 6" />
          
          {/* Animated Pulse Dots */}
          <circle cx="180" cy="106" r="3" fill="#3157ff" className="animate-pulse-slow" />
          <circle cx="124" cy="160" r="3" fill="#3157ff" className="animate-pulse-slow" style={{ animationDelay: "0.7s" }} />
          <circle cx="236" cy="160" r="3" fill="#3157ff" className="animate-pulse-slow" style={{ animationDelay: "1.4s" }} />
          <circle cx="180" cy="214" r="3" fill="#3157ff" className="animate-pulse-slow" style={{ animationDelay: "2.1s" }} />
        </svg>

        {/* Central Hub */}
        <CentralHub
          isActive={activeNode === "structure"}
          onHoverStart={() => handleNodeHoverStart("structure")}
          onHoverEnd={handleNodeHoverEnd}
        />

        {/* Surrounding Nodes */}
        {nodes.map((node) => (
          <GraphNode
            key={node.id}
            node={node}
            isActive={activeNode === node.id}
            onHoverStart={() => handleNodeHoverStart(node.id)}
            onHoverEnd={handleNodeHoverEnd}
          />
        ))}
      </div>

      {/* Metrics Panel */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 border-t border-outline-variant/30 pt-2 sm:pt-3 font-mono text-[10px] sm:text-[11px] transition-all">
        <span className="flex items-center gap-1.5">
          <span className="uppercase text-outline">Active:</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeNode || "idle"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="font-bold text-primary"
            >
              {activeNode === "think" && "Input Fidelity"}
              {activeNode === "analyze" && "Analytical Throughput"}
              {activeNode === "structure" && "Core Hub Topology"}
              {activeNode === "execute" && "Process Velocity"}
              {activeNode === "improve" && "Iterative Feedback Loops"}
              {!activeNode && "System Equilibrium"}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="font-semibold tracking-tight text-on-surface text-right sm:text-left">
          {activeNode === "think" && "99.4% Synthesized"}
          {activeNode === "analyze" && "Latency < 120ms"}
          {activeNode === "structure" && "Fully Connected Mesh"}
          {activeNode === "execute" && "4.8x Execution Rate"}
          {activeNode === "improve" && "Δ +18.2% Compound"}
          {!activeNode && "Iteration loops: 24/wk"}
        </span>
      </div>
    </div>
  );
}
