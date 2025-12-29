"use client";

import { useEffect } from "react";

/**
 * AdditionalMetaTags Component
 * Injects meta tags that aren't supported by Next.js Metadata API
 */
export default function AdditionalMetaTags() {
  useEffect(() => {
    // Function to set or update meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      // For http-equiv tags, use httpEquiv attribute
      const isHttpEquiv = name === "Content-Language" || name === "X-UA-Compatible";
      let meta = document.querySelector(`meta[${isHttpEquiv ? "http-equiv" : attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        if (isHttpEquiv) {
          meta.setAttribute("http-equiv", name);
        } else {
          meta.setAttribute(attribute, name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Function to set or update link tag
    const setLinkTag = (rel: string, href: string, type?: string, title?: string, hreflang?: string) => {
      let selector = `link[rel="${rel}"]`;
      if (hreflang) selector += `[hreflang="${hreflang}"]`;
      else if (href) selector += `[href="${href}"]`;
      
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        if (href) link.setAttribute("href", href);
        if (type) link.setAttribute("type", type);
        if (title) link.setAttribute("title", title);
        if (hreflang) link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
    };

    // HTTP-Equiv Meta Tags
    setMetaTag("Content-Language", "en-IN");
    setMetaTag("X-UA-Compatible", "IE=edge");

    // Copyright meta tag
    setMetaTag("copyright", "© 2026 Enbee Education Center Private Limited");

    // Keywords meta tag
    setMetaTag("keywords", "study in Ireland for Indian students, Ireland student visa 2026, Stamp 1G Ireland, Ireland universities for Indians, masters in Ireland, bachelors in Ireland, Ireland visa interview questions, study abroad Ireland from India, EEC study abroad, Ireland course search, Dublin universities, Cork universities, Galway universities, Ireland education consultants Gujarat");

    // Author meta tag
    setMetaTag("author", "EEC - Enbee Education Center Private Limited");

    // Additional SEO Meta Tags
    setMetaTag("color-scheme", "light");
    setMetaTag("referrer", "origin-when-cross-origin");
    setMetaTag("distribution", "global");
    setMetaTag("revisit-after", "3 days");
    setMetaTag("target", "all");
    setMetaTag("audience", "all");
    setMetaTag("coverage", "Worldwide");
    setMetaTag("classification", "Education, Study Abroad, Ireland, Universities");
    setMetaTag("subject", "Ireland Study Abroad Guide for Indian Students 2026");
    setMetaTag("abstract", "100% FREE Ireland study abroad guide for Indian students. Complete guide for visa, universities, costs, scholarships, Stamp 1G by EEC Gujarat.");
    setMetaTag("pagetype", "Application");
    setMetaTag("HandheldFriendly", "True");
    setMetaTag("MobileOptimized", "320");
    setMetaTag("rating", "General");
    setMetaTag("format-detection", "telephone=yes");
    setMetaTag("mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-status-bar-style", "default");
    setMetaTag("apple-mobile-web-app-title", "Ireland Guide");
    setMetaTag("application-name", "EEC Ireland Guide 2026");
    setMetaTag("theme-color", "#10b981");
    setMetaTag("msapplication-TileColor", "#10b981");
    setMetaTag("msapplication-navbutton-color", "#10b981");

    // Robots meta tags
    setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMetaTag("googlebot", "index, follow");
    setMetaTag("bingbot", "index, follow");

    // Geo Tags for Local SEO
    setMetaTag("geo.region", "IN-GJ");
    setMetaTag("geo.placename", "Gujarat, India");
    setMetaTag("geo.position", "22.3072;73.1812");
    setMetaTag("ICBM", "22.3072, 73.1812");

    // Article Meta Tags
    setMetaTag("article:author", "Amit Jalan", true);
    setMetaTag("article:publisher", "https://www.facebook.com/eecglobal", true);
    setMetaTag("article:section", "Education", true);
    // Multiple article:tag entries
    const articleTags = ["Ireland Universities", "Study in Ireland", "Stamp 1G", "Ireland Student Visa", "Dublin Universities", "Cork Universities", "Galway Universities"];
    articleTags.forEach(tag => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "article:tag");
      meta.setAttribute("content", tag);
      document.head.appendChild(meta);
    });
    setMetaTag("article:modified_time", new Date().toISOString(), true);

    // Pinterest Rich Pins
    setMetaTag("pinterest-rich-pin", "true");
    // Multiple og:see_also entries
    const seeAlsoLinks = [
      "https://eecglobal.com",
      "https://www.instagram.com/eecglobal",
      "https://www.youtube.com/@eecgujarat"
    ];
    seeAlsoLinks.forEach(link => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:see_also");
      meta.setAttribute("content", link);
      document.head.appendChild(meta);
    });

    // LinkedIn
    setMetaTag("linkedin:owner", "eecindia", true);

    // Search Engine Verification Tags
    setMetaTag("google-site-verification", "rqiI0_ZlREHbdPNC1E_HUY_RMmHcYEiO6yL9HdZ1VfE");
    setMetaTag("facebook-domain-verification", "9iadbuexyc4cgvlx4gquhxug3269vi");
    setMetaTag("msvalidate.01", "9A9B2AD82F89ED85E7EA6D30FAD943EC");
    setMetaTag("p:domain_verify", "f322a851a0ee625a14f30abb8d526f73");
    setMetaTag("yandex-verification", "6b9c139d0f35035f");
    setMetaTag("norton-safeweb-site-verification", "WZ1HXXMW6-EF4WZXU5MPZBY4T-SK7F5BUT-XWEZRKM5CXITI1PYTLXAQ8BTFHM8LC439MQSZ4MBLDW56RIKHZZMTNDZHW2VQXEM3EVUX94E66UPCLW8ZO0UN9TSJT73Z");
    setMetaTag("indexnow-key", "4088adb68ffc44ea8f8eece712b11b12");

    // Preconnect for Performance
    setLinkTag("preconnect", "https://ai.eecglobal.com", undefined, undefined);
    const aiLink = document.querySelector('link[rel="preconnect"][href="https://ai.eecglobal.com"]');
    if (aiLink) {
      aiLink.setAttribute("crossorigin", "anonymous");
    }
    setLinkTag("preconnect", "https://fonts.googleapis.com", undefined, undefined);
    const fontsLink = document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]');
    if (fontsLink) {
      fontsLink.setAttribute("crossorigin", "anonymous");
    }
    setLinkTag("preconnect", "https://fonts.gstatic.com", undefined, undefined);
    const gstaticLink = document.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]');
    if (gstaticLink) {
      gstaticLink.setAttribute("crossorigin", "anonymous");
    }
    setLinkTag("preconnect", "https://www.googletagmanager.com", undefined, undefined);
    const gtmLink = document.querySelector('link[rel="preconnect"][href="https://www.googletagmanager.com"]');
    if (gtmLink) {
      gtmLink.setAttribute("crossorigin", "anonymous");
    }
    setLinkTag("dns-prefetch", "https://courses.eecglobal.com");
    setLinkTag("dns-prefetch", "https://esm.sh");

    // Hreflang Tags for International SEO
    const baseUrl = "https://ireland.eecglobal.com";
    const currentPath = window.location.pathname;
    const fullUrl = `${baseUrl}${currentPath}`;
    
    const hreflangTags = [
      { lang: "en-IN", href: fullUrl },
      { lang: "en", href: fullUrl },
      { lang: "x-default", href: fullUrl }
    ];

    hreflangTags.forEach(({ lang, href }) => {
      setLinkTag("alternate", href, undefined, undefined, lang);
    });

    // Favicon - Add explicit link tags for better production support
    // Primary SVG favicon (Ireland flag)
    setLinkTag("icon", "/icon.svg", "image/svg+xml");
    // Fallback ICO favicon
    setLinkTag("icon", "/favicon.ico", "image/x-icon", undefined, undefined);
    // Alternative format for better browser support
    const existingIcon = document.querySelector('link[rel="icon"][href="/icon.svg"]');
    if (existingIcon) {
      existingIcon.setAttribute("type", "image/svg+xml");
    }
    // Ensure favicon.ico is also available
    const existingFavicon = document.querySelector('link[rel="icon"][href="/favicon.ico"]');
    if (existingFavicon) {
      existingFavicon.setAttribute("type", "image/x-icon");
      existingFavicon.setAttribute("sizes", "any");
    }

    // Apple Touch Icon
    setLinkTag("apple-touch-icon", "https://ai.eecglobal.com/assets/logos/eeclogo-main.png", undefined, undefined);
    const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (appleIcon) {
      appleIcon.setAttribute("sizes", "180x180");
    }

    // OpenGraph Image Additional Properties
    setMetaTag("og:image:secure_url", "https://ai.eecglobal.com/assets/ireland-og-image.png", true);
    setMetaTag("og:image:type", "image/png", true);
  }, []);

  return null;
}

