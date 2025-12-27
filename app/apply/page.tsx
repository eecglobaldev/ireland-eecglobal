import type { Metadata } from 'next';
import Admissions from '../components/Admissions';
import { getPathSEOConfig } from '../lib/seoConfig';

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig('/apply');
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://ireland.eecglobal.com${seo.canonicalPath}`,
    },
  };
})();

export default function ApplyPage() {
    return <Admissions />;
}
