/**
 * Schema Generators for Ireland SSR
 * Creates structured data schemas for Article, HowTo, FAQPage, Service, Event, and Person
 */

import { 
  HOWTO_VISA_APPLICATION, 
  FAQ_DATA, 
  EVENTS_DATA, 
  LEADERSHIP,
  ORGANIZATION 
} from '../data/seoData';

const baseUrl = 'https://ireland.eecglobal.com';

/**
 * Generate Article schema for guide pages
 */
export const generateArticleSchema = (options: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) => {
  const {
    title,
    description,
    path,
    datePublished = '2024-01-01',
    dateModified = new Date().toISOString().split('T')[0],
    author = 'Amit Jalan',
    image = 'https://ai.eecglobal.com/assets/ireland-og-image.png'
  } = options;

  const fullUrl = `${baseUrl}${path}`;

  return {
    "@type": "Article",
    "@id": `${fullUrl}#article`,
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "@id": `${baseUrl}/#person-${author.toLowerCase().replace(/\s+/g, '-')}`,
      "name": author,
      "url": ORGANIZATION.mainSiteUrl
    },
    "publisher": {
      "@id": `${ORGANIZATION.mainSiteUrl}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "articleSection": "Education",
    "keywords": [
      "Study in Ireland",
      "Ireland Student Visa",
      "Irish Universities",
      "Ireland Study Abroad",
      "Stamp 1G",
      "Ireland Education"
    ],
    "inLanguage": "en-IN"
  };
};

/**
 * Generate HowTo schema for step-by-step guides
 */
export const generateHowToSchema = (path: string) => {
  const fullUrl = `${baseUrl}${path}`;

  return {
    "@type": "HowTo",
    "@id": `${fullUrl}#howto`,
    "name": HOWTO_VISA_APPLICATION.name,
    "description": HOWTO_VISA_APPLICATION.description,
    "totalTime": HOWTO_VISA_APPLICATION.totalTime,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": HOWTO_VISA_APPLICATION.estimatedCost.currency,
      "value": HOWTO_VISA_APPLICATION.estimatedCost.value
    },
    "supply": HOWTO_VISA_APPLICATION.supply.map(item => ({
      "@type": "HowToSupply",
      "name": item
    })),
    "tool": HOWTO_VISA_APPLICATION.tool.map(item => ({
      "@type": "HowToTool",
      "name": item
    })),
    "step": HOWTO_VISA_APPLICATION.steps.map(step => ({
      "@type": "HowToStep",
      "position": step.position,
      "name": step.name,
      "text": step.text,
      "url": step.url || fullUrl,
      "duration": step.duration
    })),
    "image": "https://ai.eecglobal.com/assets/ireland-og-image.png"
  };
};

/**
 * Generate FAQPage schema
 */
export const generateFAQPageSchema = (path: string) => {
  const fullUrl = `${baseUrl}${path}`;

  return {
    "@type": "FAQPage",
    "@id": `${fullUrl}#faqpage`,
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generate Service schema for EEC services
 */
export const generateServiceSchema = () => {
  return {
    "@type": "Service",
    "@id": `${baseUrl}/#service-ireland-study-abroad`,
    "name": "Ireland Study Abroad Consultation Services",
    "description": "Comprehensive study abroad services for Indian students planning to study in Ireland. Includes university selection, application assistance, visa guidance, financial planning, and post-arrival support.",
    "provider": {
      "@id": `${ORGANIZATION.mainSiteUrl}/#organization`
    },
    "serviceType": "EducationalConsulting",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": baseUrl,
      "servicePhone": ORGANIZATION.phone,
      "serviceSmsNumber": ORGANIZATION.whatsapp
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free consultation and guidance services"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ireland Study Abroad Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "University Application Assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ireland Student Visa Guidance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Planning & Documentation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Study Work Visa (Stamp 1G) Guidance"
          }
        }
      ]
    }
  };
};

/**
 * Generate Event schema for webinars and events
 */
export const generateEventSchemas = () => {
  return EVENTS_DATA.map((event, index) => ({
    "@type": "Event",
    "@id": `${baseUrl}/#event-${index + 1}`,
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "eventStatus": `https://schema.org/${event.eventStatus}`,
    "eventAttendanceMode": `https://schema.org/${event.eventAttendanceMode}`,
    "location": event.eventAttendanceMode === "OnlineEventAttendanceMode" 
      ? {
          "@type": "VirtualLocation",
          "url": event.location.url
        }
      : {
          "@type": "Place",
          "name": event.location.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": event.location.address
          }
        },
    "organizer": {
      "@type": "Organization",
      "@id": `${ORGANIZATION.mainSiteUrl}/#organization`,
      "name": event.organizer
    },
    ...(event.performer ? {
      "performer": {
        "@type": "Person",
        "name": event.performer
      }
    } : {}),
    "offers": {
      "@type": "Offer",
      "price": event.offers.price.toString(),
      "priceCurrency": event.offers.priceCurrency,
      "availability": `https://schema.org/${event.offers.availability}`,
      "validFrom": event.offers.validFrom
    },
    "image": event.image || "https://ai.eecglobal.com/assets/ireland-og-image.png"
  })).filter(event => event !== null);
};

/**
 * Generate Person schema for key personnel
 */
export const generatePersonSchemas = () => {
  return LEADERSHIP.map((person) => {
    const personId = person.name.toLowerCase().replace(/\s+/g, '-');
    
    const personSchema: any = {
      "@type": "Person",
      "@id": `${ORGANIZATION.mainSiteUrl}/#person-${personId}`,
      "name": person.name,
      "jobTitle": person.title,
      "worksFor": {
        "@id": `${ORGANIZATION.mainSiteUrl}/#organization`
      },
      "image": person.image,
      "url": person.linkedin,
      "sameAs": [person.linkedin],
      "knowsAbout": person.expertise,
      "description": `${person.title} at ${ORGANIZATION.legalName}. ${person.credentials}. ${person.experience} of experience in ${person.expertise.join(', ')}.`
    };

    // Add alumniOf if exists
    if (person.alumniOf) {
      personSchema.alumniOf = {
        "@type": "EducationalOrganization",
        "name": person.alumniOf.name,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": person.alumniOf.country
        }
      };
    }

    // Add hasCredential if exists
    if (person.hasCredential) {
      personSchema.hasCredential = {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": person.hasCredential.name,
        "recognizedBy": {
          "@type": "Organization",
          "name": person.hasCredential.issuedBy
        }
      };
    }

    // Add previousEmployer if exists (keep current worksFor, add previous)
    if (person.previousEmployer) {
      personSchema.alumniOf = personSchema.alumniOf || undefined;
      // Note: worksFor already set above, previousEmployer is separate
    }

    return personSchema;
  });
};

