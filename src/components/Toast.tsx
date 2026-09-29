"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastDetail {
  message: string;
  type?: ToastType;
}

declare global {
  interface WindowEventMap {
    "show-toast": CustomEvent<ToastDetail>;
  }
}

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

const Toast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handleToast = (event: CustomEvent<ToastDetail>) => {
      const { message, type } = event.detail;
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);

      setToasts((prev) => [...prev, { id, message, type: type || "info" }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3500);
    };

    window.addEventListener("show-toast", handleToast);

    return () => window.removeEventListener("show-toast", handleToast);
  }, []);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div
      role="region"
      aria-label="Notifications"
      className="fixed top-20 right-4 sm:right-6 z-50 space-y-2 pointer-events-none max-w-sm w-full"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-3.5 text-sm shadow-lg text-on-surface"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${toast.type === "error"
                    ? "bg-foreground/10 text-foreground"
                    : "bg-muted text-muted-foreground"
                  }`}
              >
                {toast.type === "success" ? (
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : toast.type === "error" ? (
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ) : (
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </span>
              <span className="font-medium text-xs sm:text-sm text-on-surface">{toast.message}</span>
            </div>

            <button
              onClick={() => dismissToast(toast.id)}
              className="text-outline hover:text-on-surface p-1 cursor-pointer shrink-0 rounded-md transition-colors"
              aria-label="Dismiss notification"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;

export const showToast = (message: string, type: ToastType = "info") => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("show-toast", { detail: { message, type } });
    window.dispatchEvent(event);
  }
};
