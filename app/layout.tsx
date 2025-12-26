import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SuppressHydrationWarnings from './components/SuppressHydrationWarnings';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Study in Ireland 2026 - Complete Guide for Indian Students | EEC',
  description: 'First of its kind 100% FREE Ireland study abroad webapp for Indian students based on 2026 rules. Complete guide for visa, universities, costs, scholarships, Stamp 1G.',
  metadataBase: new URL('https://ireland.eecglobal.com'),
  openGraph: {
    title: 'Study in Ireland 2026 - Complete Guide for Indian Students | EEC',
    description: '100% FREE Ireland study abroad guide for Indian students 2026.',
    url: 'https://ireland.eecglobal.com',
    siteName: 'EEC Ireland Guide',
    images: [
      {
        url: 'https://ai.eecglobal.com/assets/ireland.png', // Fallback or main image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
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
