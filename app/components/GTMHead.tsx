"use client";

import { useEffect } from "react";

/**
 * GTM Head Component
 * Defers Google Tag Manager until after first paint so LCP/INP are not blocked.
 * Skipped on localhost to avoid dev-only reloads from GTM tags.
 */
function injectGTM() {
  const script = document.createElement("script");
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M9XMRNHV');
  `;
  document.head.appendChild(script);
}

export default function GTMHead() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    const runAfterFirstPaint = () => {
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(() => injectGTM(), { timeout: 2500 });
      } else {
        setTimeout(injectGTM, 1500);
      }
    };
    if (document.readyState === "complete") {
      runAfterFirstPaint();
    } else {
      window.addEventListener("load", runAfterFirstPaint);
      return () => window.removeEventListener("load", runAfterFirstPaint);
    }
  }, []);

  return null;
}

