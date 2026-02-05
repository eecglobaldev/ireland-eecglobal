"use client";

import { useState, useEffect, type ReactNode } from "react";

/**
 * Renders children only after mount so Recharts runs in the browser with real dimensions.
 * Avoids SSR warning "width(-1) and height(-1)" and reduces initial HTML.
 */
export default function ClientChart({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[192px] bg-slate-100/50 rounded-xl animate-pulse" aria-hidden />
    );
  }
  return <>{children}</>;
}
