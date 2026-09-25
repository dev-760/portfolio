/**
 * SYSTEM FLOW - Motion Design System Tokens
 * 
 * Centralized motion tokens respecting the system flow philosophy:
 * IDLE -> ACTIVATE -> CONNECT -> SETTLE
 */

export const MOTION_DURATIONS = {
  fast: 0.16,      // 160ms - micro-interactions, icons, hover ticks
  ui: 0.24,        // 240ms - button states, badge updates, input focus
  standard: 0.42,  // 420ms - card responses, content reveals, active indicators
  section: 0.68,   // 680ms - section boundaries, architectural reveals
  system: 1.0,     // 1000ms - network synthesis, hero initialization
} as const;

export const MOTION_EASINGS = {
  // Primary system flow easing curve: deliberate, organic acceleration with a gentle lock-in settle
  system: [0.22, 0.8, 0.2, 1] as const,
  // High-precision sharp curve for tactile state changes, micro-coordinates, and active indicators
  sharp: [0.16, 1, 0.3, 1] as const,
  // Smooth linear easing for continuous telemetry loops
  linear: [0, 0, 1, 1] as const,
} as const;

export const SYSTEM_TRANSITIONS = {
  // Standard UI transition
  ui: {
    duration: MOTION_DURATIONS.ui,
    ease: MOTION_EASINGS.sharp,
  },
  // Structural assembly transition
  structure: {
    duration: MOTION_DURATIONS.standard,
    ease: MOTION_EASINGS.system,
  },
  // Section entrance transition
  section: {
    duration: MOTION_DURATIONS.section,
    ease: MOTION_EASINGS.system,
  },
  // Full system equilibrium transition
  system: {
    duration: MOTION_DURATIONS.system,
    ease: MOTION_EASINGS.system,
  },
  // Fast tactile interaction
  micro: {
    duration: MOTION_DURATIONS.fast,
    ease: MOTION_EASINGS.sharp,
  },
} as const;
