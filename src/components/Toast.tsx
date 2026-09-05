"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export type ToastType = "success" | "error" | "info";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

const Toast = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        const handleToast = (event: CustomEvent) => {
            const { message, type } = event.detail;
            const id = Date.now().toString();

            setToasts((prev) => [...prev, { id, message, type: type || "info" }]);

            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, 3000);
        };

        window.addEventListener("show-toast", handleToast as EventListener);
        return () => window.removeEventListener("show-toast", handleToast as EventListener);
    }, []);

    return (
        <div className="fixed top-20 right-4 sm:right-6 z-50 space-y-2 pointer-events-none max-w-sm w-full">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: -16, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`pointer-events-auto flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-md border ${
                            toast.type === "success"
                                ? "bg-[#0d1c14]/90 text-emerald-300 border-emerald-500/30 shadow-[0_8px_30px_rgba(16,185,129,0.15)]"
                                : toast.type === "error"
                                    ? "bg-[#1f0d14]/90 text-rose-300 border-rose-500/30 shadow-[0_8px_30px_rgba(244,63,94,0.15)]"
                                    : "bg-[#140e24]/90 text-purple-200 border-[#8b6ff7]/30 shadow-[0_8px_30px_rgba(139,111,247,0.15)]"
                        }`}
                    >
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                                {toast.type === "success" && "✓"}
                                {toast.type === "error" && "✕"}
                                {toast.type === "info" && "ℹ"}
                            </span>
                            <span>{toast.message}</span>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Toast;

export const showToast = (message: string, type: ToastType = "info") => {
    const event = new CustomEvent("show-toast", { detail: { message, type } });
    window.dispatchEvent(event);
};
