import type { Metadata } from 'next';
import RoadFromIndia from './components/RoadFromIndia';
import { getPathSEOConfig } from './lib/seoConfig';

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig('/');
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://ireland.eecglobal.com${seo.canonicalPath}`,
    },
  };
})();

export default function Home() {
  return <RoadFromIndia />;
}
