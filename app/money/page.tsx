import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getPathSEOConfig } from '../lib/seoConfig';

const Dashboard = dynamic(() => import('../components/Dashboard'), {
  ssr: true,
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center" aria-hidden>
      <div className="h-8 w-8 animate-pulse rounded-full bg-emerald-200" />
    </div>
  ),
});

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig('/money');
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://ireland.eecglobal.com${seo.canonicalPath}`,
    },
  };
})();

export default function MoneyPage() {
    return <Dashboard />;
}
