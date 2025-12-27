import type { Metadata } from 'next';
import RegionalExplorer from '../components/RegionalExplorer';
import { getPathSEOConfig } from '../lib/seoConfig';

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig('/cities');
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://ireland.eecglobal.com${seo.canonicalPath}`,
    },
  };
})();

export default function CitiesPage() {
    return <RegionalExplorer />;
}
