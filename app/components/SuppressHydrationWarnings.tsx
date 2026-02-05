"use client";

import { useEffect } from 'react';

/**
 * SuppressHydrationWarnings - Removes Dark Reader attributes after hydration
 * to prevent hydration mismatch warnings.
 * Disabled on localhost to avoid observer-triggered reload loops in dev.
 */
export default function SuppressHydrationWarnings() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    let isCleaning = false;

    const removeDarkReaderAttributes = () => {
      if (isCleaning) return;
      const svgs = document.querySelectorAll('svg[data-darkreader-inline-stroke], svg[style*="--darkreader-inline-stroke"]');
      if (svgs.length === 0) return;

      isCleaning = true;
      try {
        svgs.forEach((svg) => {
          svg.removeAttribute('data-darkreader-inline-stroke');
          const style = svg.getAttribute('style');
          if (style) {
            const cleanedStyle = style
              .replace(/--darkreader-inline-stroke:[^;]+;?/g, '')
              .trim();
            if (cleanedStyle) {
              svg.setAttribute('style', cleanedStyle);
            } else {
              svg.removeAttribute('style');
            }
          }
        });
      } finally {
        isCleaning = false;
      }
    };

    removeDarkReaderAttributes();
    const timeout = setTimeout(removeDarkReaderAttributes, 100);

    const observer = new MutationObserver(() => {
      if (isCleaning) return;
      removeDarkReaderAttributes();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'data-darkreader-inline-stroke'],
    });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return null;
}









