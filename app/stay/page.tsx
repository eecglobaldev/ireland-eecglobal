import type { Metadata } from 'next';
import Pathways from '../components/Pathways';
import { getPathSEOConfig } from '../lib/seoConfig';

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig('/stay');
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://ireland.eecglobal.com${seo.canonicalPath}`,
    },
  };
})();

export default function StayPage() {
    return <Pathways />;
}
