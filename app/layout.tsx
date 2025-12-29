import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SuppressHydrationWarnings from './components/SuppressHydrationWarnings';
import GTMHead from './components/GTMHead';
import GTMBody from './components/GTMBody';
import AdditionalMetaTags from './components/AdditionalMetaTags';
import SEOHead from './components/SEOHead';
import LLMNoscript from './components/LLMNoscript';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5.0,
};

export const metadata: Metadata = {
  title: 'Study in Ireland 2026 - Complete Guide for Indian Students | EEC',
  description: 'First of its kind 100% FREE Ireland study abroad webapp for Indian students based on 2026 rules. Complete guide for visa, universities, costs, scholarships, Stamp 1G.',
  metadataBase: new URL('https://ireland.eecglobal.com'),
  keywords: 'study in Ireland for Indian students, Ireland student visa 2026, Stamp 1G Ireland, Ireland universities for Indians, masters in Ireland, bachelors in Ireland, Ireland visa interview questions, study abroad Ireland from India, EEC study abroad, Ireland course search, Dublin universities, Cork universities, Galway universities, Ireland education consultants Gujarat',
  authors: [{ name: 'EEC - Enbee Education Center Private Limited' }],
  creator: 'EEC - Enbee Education Center Private Limited',
  publisher: 'EEC - Enbee Education Center Private Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
    ],
    apple: [
      { url: 'https://ai.eecglobal.com/assets/logos/eeclogo-main.png', sizes: '180x180' },
    ],
    shortcut: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Study in Ireland 2026 - FREE Complete Guide for Indian Students | EEC',
    description: '100% FREE guide to study in Ireland for Indian students. Ireland student visa, Stamp 1G work visa, top universities, costs, AI visa interview prep. By Gujarat\'s largest study abroad consultant EEC.',
    url: 'https://ireland.eecglobal.com',
    siteName: 'EEC Ireland Guide 2026',
    images: [
      {
        url: 'https://ai.eecglobal.com/assets/ireland-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Study in Ireland 2026 - EEC Guide for Indian Students',
      },
    ],
    locale: 'en_IN',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eecglobalindia',
    creator: '@eecglobalindia',
    title: 'Study in Ireland 2026 - FREE Guide for Indian Students | EEC',
    description: 'Complete Ireland study abroad guide: visa requirements, Stamp 1G, universities, costs, AI interview prep. 100% FREE by EEC - Gujarat\'s #1 consultant.',
    images: ['https://ai.eecglobal.com/assets/ireland-og-image.png'],
  },
  alternates: {
    canonical: 'https://ireland.eecglobal.com',
    languages: {
      'en-IN': 'https://ireland.eecglobal.com',
      'en': 'https://ireland.eecglobal.com',
      'x-default': 'https://ireland.eecglobal.com',
    },
  },
  verification: {
    google: 'rqiI0_ZlREHbdPNC1E_HUY_RMmHcYEiO6yL9HdZ1VfE',
    yandex: '6b9c139d0f35035f',
    other: {
      'facebook-domain-verification': '9iadbuexyc4cgvlx4gquhxug3269vi',
      'msvalidate.01': '9A9B2AD82F89ED85E7EA6D30FAD943EC',
      'p:domain_verify': 'f322a851a0ee625a14f30abb8d526f73',
      'norton-safeweb-site-verification': 'WZ1HXXMW6-EF4WZXU5MPZBY4T-SK7F5BUT-XWEZRKM5CXITI1PYTLXAQ8BTFHM8LC439MQSZ4MBLDW56RIKHZZMTNDZHW2VQXEM3EVUX94E66UPCLW8ZO0UN9TSJT73Z',
    },
  },
  other: {
    'theme-color': '#10b981',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Ireland Guide',
    'application-name': 'EEC Ireland Guide 2026',
    'format-detection': 'telephone=yes',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" dir="ltr" prefix="og: https://ogp.me/ns#" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <GTMHead />
        <GTMBody />
        <AdditionalMetaTags />
        <SEOHead />
        <LLMNoscript />
        <div className="min-h-screen bg-slate-50 flex flex-col" suppressHydrationWarning>
          <SuppressHydrationWarnings />
          <Header />
          <main className="flex-1 pt-24 sm:pt-32 pb-12 px-0 sm:px-6 lg:px-8" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto" suppressHydrationWarning>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
