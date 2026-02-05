"use client";

import { useEffect } from "react";
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

declare global {
  interface Window {
    gtag?: (command: string, name: string, params: Record<string, unknown>) => void;
  }
}

function pushToDataLayer(metric: Metric) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag!("event", metric.name, {
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true,
  });
}

function pushToDataLayerFallback(metric: Metric) {
  try {
    const w = window as Window & { dataLayer?: unknown[] };
    if (typeof w.dataLayer !== "undefined" && Array.isArray(w.dataLayer)) {
      w.dataLayer.push({
        event: "web_vitals",
        event_category: "Web Vitals",
        event_action: metric.name,
        event_value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  } catch {
    // ignore
  }
}

export default function WebVitalsReporter() {
  useEffect(() => {
    const report = (metric: Metric) => {
      pushToDataLayer(metric);
      pushToDataLayerFallback(metric);
    };
    onCLS(report);
    onFCP(report);
    onINP(report);
    onLCP(report);
    onTTFB(report);
  }, []);
  return null;
}
