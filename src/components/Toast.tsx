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
        <div className="fixed bottom-8 right-8 z-50 space-y-3 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`pointer-events-auto rounded-lg px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-sm border ${toast.type === "success"
                                ? "bg-green-500/20 text-green-300 border-green-500/30"
                                : toast.type === "error"
                                    ? "bg-red-500/20 text-red-300 border-red-500/30"
                                    : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <span>
                                {toast.type === "success" && "✓"}
                                {toast.type === "error" && "✕"}
                                {toast.type === "info" && "ℹ"}
                            </span>
                            {toast.message}
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
