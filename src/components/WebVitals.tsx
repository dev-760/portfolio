"use client";

import { useReportWebVitals } from "next/web-vitals";

interface GtagEventParams {
  value: number;
  event_label: string;
  non_interaction: boolean;
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: GtagEventParams) => void;
  }
}

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Web Vitals]", metric);
    }

    // Send to analytics service when available
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", metric.name, {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  return null;
}