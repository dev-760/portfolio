"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

const Toast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handleToast = (event: CustomEvent) => {
      const { message, type } = event.detail;
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);

      setToasts((prev) => [...prev, { id, message, type: type || "info" }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3500);
    };

    window.addEventListener("show-toast", handleToast as EventListener);
    return () => window.removeEventListener("show-toast", handleToast as EventListener);
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
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  toast.type === "success"
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
                    : toast.type === "error"
                    ? "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400"
                    : "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400"
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
