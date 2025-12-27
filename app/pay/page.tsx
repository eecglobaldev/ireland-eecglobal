import type { Metadata } from 'next';
import IncomeCalculator from '../components/IncomeCalculator';
import { getPathSEOConfig } from '../lib/seoConfig';

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig('/pay');
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://ireland.eecglobal.com${seo.canonicalPath}`,
    },
  };
})();

export default function PayPage() {
    return <IncomeCalculator />;
}
