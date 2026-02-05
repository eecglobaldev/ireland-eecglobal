/**
 * SEO Configuration Utilities
 * Server-safe functions for generating SEO metadata
 */

export const getPathSEOConfig = (path: string): {
  title: string;
  description: string;
  canonicalPath: string;
} => {
  const pathToConfig: Record<string, { title: string; description: string; canonicalPath: string }> = {
    '/': {
      title: 'Study in Ireland 2026 for Indian Students | Visa, Universities, Stamp 1G | EEC',
      description: 'FREE comprehensive guide to study in Ireland 2026 for Indian students. Ireland student visa requirements, Stamp 1G 2-year work visa, top universities (TCD, UCD, Cork, Galway), costs, scholarships. By EEC - Gujarat\'s #1 study abroad consultant since 1997.',
      canonicalPath: '/'
    },
    '/money': {
      title: 'Ireland Study Cost Calculator 2026 | Tuition Fees, Living Expenses | EEC',
      description: 'Calculate total cost of studying in Ireland for Indian students. Dublin vs other cities comparison, tuition fees, accommodation, food, transport costs. Part-time work income calculator. €14.50/hr minimum wage.',
      canonicalPath: '/money'
    },
    '/cities': {
      title: 'Best Cities to Study in Ireland 2026 | Dublin, Cork, Galway, Limerick | EEC',
      description: 'Compare Irish cities for studying: Dublin (tech hub), Cork (pharma capital), Galway (MedTech leader), Limerick (aviation), Waterford (budget-friendly). University rankings, job opportunities, housing costs.',
      canonicalPath: '/cities'
    },
    '/apply': {
      title: 'How to Apply to Irish Universities 2026 | Admission Guide for Indian Students | EEC',
      description: 'Step-by-step guide to apply to Irish universities from India. Application deadlines, document requirements, SOP writing, LOR tips, interview preparation. EEC helps 2,400+ students annually.',
      canonicalPath: '/apply'
    },
    '/visa': {
      title: 'Ireland Student Visa Guide 2026 | Stamp 2 Visa Requirements for Indian Students | EEC',
      description: 'Complete Ireland student visa (Stamp 2) guide for Indian students. Document checklist, financial proof (€10,000), IELTS requirements, VFS appointment booking, interview tips. 95%+ visa success rate with EEC.',
      canonicalPath: '/visa'
    },
    '/pay': {
      title: 'Ireland Student Visa Financial Requirements 2026 | Bank Balance, Education Loan | EEC',
      description: 'Ireland visa financial proof requirements: €10,000 living expenses + tuition fees. Education bond options, bank statement format, loan sanction letter. EEC guides 2,400+ visa applications annually.',
      canonicalPath: '/pay'
    },
    '/family': {
      title: 'Ireland Spouse Visa Guide 2026 | Family Reunification for Indian Students | EEC',
      description: 'Complete guide to Ireland spouse visa for Indian students. Stamp 3 visa requirements, work rights, financial proof, application process. Bring your spouse to Ireland while studying.',
      canonicalPath: '/family'
    },
    '/stay': {
      title: 'Ireland Post-Study Work Visa 2026 | Stamp 1G 24-Month Work Permit | EEC',
      description: 'Ireland Stamp 1G post-study work visa guide: 24 months for Masters, 12 months for Bachelors. No employer sponsorship needed. €14.50/hr minimum wage. PR pathway after 5 years. EEC expert guidance.',
      canonicalPath: '/stay'
    },
    '/guide': {
      title: 'Ireland Study Guide 2026 | FAQs, Glossary, Compare Countries, Student Reviews | EEC',
      description: 'Complete Ireland study abroad guide for Indian students: EEC & Ireland facts, immigration glossary, 20+ FAQs, Ireland vs UK/Canada/Australia comparison, verified student reviews. Free resource by Gujarat\'s #1 consultant.',
      canonicalPath: '/guide'
    },
  };

  return pathToConfig[path] || pathToConfig['/'];
};

/** Short breadcrumb labels for BreadcrumbList schema (no new content) */
export const PATH_BREADCRUMB_LABELS: Record<string, string> = {
  '/': 'Home',
  '/money': 'Money',
  '/cities': 'Cities',
  '/apply': 'Apply',
  '/visa': 'Visa',
  '/pay': 'Pay',
  '/family': 'Family',
  '/stay': 'Stay',
  '/guide': 'Guide',
};

export const ALL_PATHS = ['/', '/money', '/cities', '/apply', '/visa', '/pay', '/family', '/stay', '/guide'] as const;

