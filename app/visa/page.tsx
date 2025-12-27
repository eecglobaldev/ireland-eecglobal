import type { Metadata } from 'next';
import VisaChecklist from '../components/VisaChecklist';
import { getPathSEOConfig } from '../lib/seoConfig';

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig('/visa');
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://ireland.eecglobal.com${seo.canonicalPath}`,
    },
  };
})();

export default function VisaPage() {
    return <VisaChecklist />;
}
