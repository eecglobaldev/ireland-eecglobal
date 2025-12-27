"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ORGANIZATION } from "../data/seoData";
import { getPathSEOConfig } from "../lib/seoConfig";
import {
  generateArticleSchema,
  generateHowToSchema,
  generateFAQPageSchema,
  generateServiceSchema,
  generateEventSchemas,
  generatePersonSchemas
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

    // WebApplication Schema
    const webAppSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
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

    // Speakable Schema (Voice Search Optimization)
    const speakableSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Study in Ireland 2026 for Indian Students",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "[data-speakable]", ".faq-answer"]
      },
      "url": baseUrl
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
    injectSchema(webAppSchema, "webapp-schema");
    injectSchema(speakableSchema, "speakable-schema");

    // Page-specific schemas based on path
    const schemas: Array<{ schema: any; id: string }> = [];

    // Article schema for guide pages
    if (['/visa', '/apply', '/stay', '/family'].includes(currentPath)) {
      const articleSchema = generateArticleSchema({
        title: seoConfig.title,
        description: seoConfig.description,
        path: currentPath,
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0]
      });
      schemas.push({ schema: articleSchema, id: `article-schema-${currentPath.replace(/\//g, '-')}` });
    }

    // HowTo schema for visa page
    if (currentPath === '/visa') {
      const howToSchema = generateHowToSchema(currentPath);
      schemas.push({ schema: howToSchema, id: 'howto-schema' });
    }

    // FAQPage schema for home page and relevant pages
    if (['/', '/visa', '/apply'].includes(currentPath)) {
      const faqSchema = generateFAQPageSchema(currentPath);
      schemas.push({ schema: faqSchema, id: `faq-schema-${currentPath.replace(/\//g, '-')}` });
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

