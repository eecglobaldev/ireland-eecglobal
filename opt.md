
Complete list of SEO-related improvements
  1. Structured data (JSON-LD)
    • Page-level BreadcrumbList schema for every path (SEOHead).
    • Page-level WebPage schema for every path (SEOHead).
    • SoftwareApplication + WebApplication dual-type schema for the app (SEOHead).
    • Article schema on all main content pages: /, /guide, /money, /cities, /visa, /apply, /pay, /stay, /family.
    • FAQPage schema on /, /guide, /visa, /apply (including guide for FAQ rich results).
    • Speakable schema with page-specific url and name per path.
    • Consistent schema script IDs for FAQ and related schemas (clean injection/cleanup).
  2. Metadata & on-page SEO
    • Canonical URLs for all routes via seoConfig (including /guide).
    • Guide page metadata: dedicated title, description, keywords array, canonical, Open Graph, Twitter, robots: { index: true, follow: true }.
    • seoConfig extended with /guide (title, description, canonicalPath, breadcrumb labels, ALL_PATHS).
    • Guide page on-page: single H1, hero with target keywords, in-page jump links and section IDs for deep links.
  3. Sitemap & discovery
    • Sitemap: /guide added to sitemap.ts with weekly changeFrequency and priority 0.9.
    • robots.txt (app + public): allow-all rules, sitemap and host; no disallow for content; Crawl-delay removed; Googlebot/Googlebot-Image and AI crawlers allowed.
    • `/sw.js` route removed (per earlier implementation).
  4. Crawling & indexing
    • llm.txt: all content URLs listed as primary resources; Guide cluster added; ignore list limited to technical paths so content pages are scrapable.
    • robots meta: index, follow, max-image-preview, max-snippet (layout + AdditionalMetaTags where used).
  5. Internal linking
    • RelatedLinks: guide linked from homepage; guide page has related links (Visa, Apply, Stay).
    • Header nav: Guide link added (supports crawl and UX).
    • Footer: “Ireland Study Guide” bar with links to /guide#guide-about, #guide-glossary, #guide-faqs, #guide-compare, #guide-reviews.
  6. Performance & technical (SEO-relevant)
    • Core Web Vitals reporting (web-vitals + WebVitalsReporter).
    • HTML caching for document routes (e.g. next.config).
    • Image optimization (Next.js config: formats, device/sizes, remote patterns).
  7. Validation & maintenance
    • SEO validation script (scripts/validate-seo.mjs) and `seo:validate` npm script for CI/CD.
