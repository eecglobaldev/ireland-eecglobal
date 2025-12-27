"use client";

import { useEffect } from "react";

/**
 * GTM Head Component
 * Google Tag Manager script injection for head
 */
export default function GTMHead() {
  useEffect(() => {
    // GTM Script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M9XMRNHV');
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[data-gtm]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}

