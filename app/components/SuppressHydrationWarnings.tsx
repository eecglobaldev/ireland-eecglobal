"use client";

import { useEffect } from 'react';

/**
 * SuppressHydrationWarnings - Removes Dark Reader attributes after hydration
 * to prevent hydration mismatch warnings
 * 
 * This component runs after React hydrates and removes attributes added by
 * browser extensions like Dark Reader that cause hydration mismatches.
 */
export default function SuppressHydrationWarnings() {
  useEffect(() => {
    // This runs after hydration, so we can safely modify the DOM
    // Remove Dark Reader attributes that cause hydration mismatches
    const removeDarkReaderAttributes = () => {
      // Find all SVG elements with Dark Reader attributes
      const svgs = document.querySelectorAll('svg[data-darkreader-inline-stroke], svg[style*="--darkreader-inline-stroke"]');
      
      svgs.forEach((svg) => {
        // Remove Dark Reader data attributes
        svg.removeAttribute('data-darkreader-inline-stroke');
        
        // Remove Dark Reader inline styles
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
    };

    // Run immediately and also after a short delay to catch any late additions
    removeDarkReaderAttributes();
    const timeout = setTimeout(removeDarkReaderAttributes, 100);
    
    // Also watch for new SVG elements added dynamically
    const observer = new MutationObserver(() => {
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







