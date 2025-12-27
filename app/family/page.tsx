import type { Metadata } from 'next';
import SpouseVisas from '../components/SpouseVisas';
import { getPathSEOConfig } from '../lib/seoConfig';

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig('/family');
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://ireland.eecglobal.com${seo.canonicalPath}`,
    },
  };
})();

export default function FamilyPage() {
    return <SpouseVisas />;
}
