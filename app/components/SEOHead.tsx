"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ORGANIZATION } from "../data/seoData";
import { getPathSEOConfig, PATH_BREADCRUMB_LABELS } from "../lib/seoConfig";
import {
  generateArticleSchema,
  generateHowToSchema,
  generateFAQPageSchema,
  generateServiceSchema,
  generateEventSchemas,
  generatePersonSchemas,
  generateBreadcrumbListSchema,
  generateWebPageSchema
} from "../lib/schemaGenerators";

/**
 * SEOHead Component
 * Injects page-level structured data (JSON-LD) into the document head
 */
export default function SEOHead() {
  const pathname = usePathname();

  useEffect(() => {
    const baseUrl = "https://ireland.eecglobal.com";
    const currentPath = pathname || '/';
    const seoConfig = getPathSEOConfig(currentPath);

    // SoftwareApplication + WebApplication (dual type for search engine understanding)
    const softwareAppSchema = {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": `${baseUrl}/#webapp`,
      "name": "EEC Ireland Study Guide 2026",
      "description": "Free comprehensive guide to study in Ireland for Indian students. Includes visa requirements, university info, cost calculator, and AI-powered interview preparation.",
      "url": baseUrl,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "author": {
        "@type": "Organization",
        "name": ORGANIZATION.legalName,
        "url": ORGANIZATION.mainSiteUrl
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "2847",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Speakable Schema (Voice Search Optimization) – page-specific URL
    const fullPageUrl = `${baseUrl}${currentPath === '/' ? '' : currentPath}`;
    const speakableSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seoConfig.title,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", "[data-speakable]", "[itemprop=\"text\"]"]
      },
      "url": fullPageUrl
    };

    // Function to inject JSON-LD script
    const injectSchema = (schema: any, id: string) => {
      // Remove existing script if present
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }

      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    // Inject base schemas
    injectSchema(softwareAppSchema, "webapp-schema");
    injectSchema(speakableSchema, "speakable-schema");

    // Page-level WebPage + BreadcrumbList (every path)
    const breadcrumbSchema = generateBreadcrumbListSchema(currentPath, PATH_BREADCRUMB_LABELS);
    const webPageSchema = generateWebPageSchema(currentPath, seoConfig);
    injectSchema({ "@context": "https://schema.org", ...breadcrumbSchema }, "breadcrumb-schema");
    injectSchema({ "@context": "https://schema.org", ...webPageSchema }, "webpage-schema");

    // Page-specific schemas based on path
    const schemas: Array<{ schema: any; id: string }> = [];

    // Article schema for content pages (helps Google understand and rank as substantive content)
    if (['/', '/guide', '/money', '/cities', '/visa', '/apply', '/pay', '/stay', '/family'].includes(currentPath)) {
      const pathForSchema = currentPath === '/' ? '' : currentPath;
      const articleSchema = generateArticleSchema({
        title: seoConfig.title,
        description: seoConfig.description,
        path: pathForSchema || '/',
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0]
      });
      schemas.push({ schema: articleSchema, id: `article-schema-${(pathForSchema || 'home').replace(/\//g, '-')}` });
    }

    // HowTo schema for visa page
    if (currentPath === '/visa') {
      const howToSchema = generateHowToSchema(currentPath);
      schemas.push({ schema: howToSchema, id: 'howto-schema' });
    }

    // FAQPage schema for pages that feature FAQs (enables FAQ rich results in SERPs)
    if (['/', '/guide', '/visa', '/apply'].includes(currentPath)) {
      const pathForFaq = currentPath === '/' ? '/' : currentPath;
      const faqSchema = generateFAQPageSchema(pathForFaq);
      const faqId = pathForFaq === '/' ? 'home' : pathForFaq.slice(1);
      schemas.push({ schema: faqSchema, id: `faq-schema-${faqId}` });
    }

    // Service schema (always include)
    const serviceSchema = generateServiceSchema();
    schemas.push({ schema: serviceSchema, id: 'service-schema' });

    // Event schemas (always include)
    const eventSchemas = generateEventSchemas();
    eventSchemas.forEach((eventSchema, index) => {
      schemas.push({ schema: eventSchema, id: `event-schema-${index + 1}` });
    });

    // Person schemas (always include)
    const personSchemas = generatePersonSchemas();
    personSchemas.forEach((personSchema, index) => {
      const personId = personSchema["@id"].split('#')[1];
      schemas.push({ schema: personSchema, id: `person-schema-${personId}` });
    });

    // Inject all schemas
    schemas.forEach(({ schema, id }) => {
      injectSchema(schema, id);
    });

    return () => {
      // Cleanup all schemas
      const allSchemaIds = [
        "webapp-schema",
        "speakable-schema",
        "breadcrumb-schema",
        "webpage-schema",
        "howto-schema",
        "service-schema",
        ...schemas.map(s => s.id)
      ];
      allSchemaIds.forEach(id => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, [pathname]);

  return null;
}

