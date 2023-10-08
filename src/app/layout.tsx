import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import GoogleAnalytics from '@/components/Features/GoogleAnalytics';
// import TagManager from '@/utils/gtmComponent';
import Analytics from '@/components/Features/Analytics';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Michael Altinisik',
  description:
    'Portfolio main page created with NextJs. Shows a contact form, projects and an about me.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      {/* {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )} */}
      <Suspense>
        <Analytics />
      </Suspense>
      <body className={`${inter.className} bg-primary`}>{children}</body>
    </html>
  );
}
