import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Analytics from '@/components/Features/Analytics';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Michael Altinisik',
  description:
    'Explore my portfolio website with unique, amazing fullstack and frontend projects with custom made Figma designs.',
  openGraph: {
    title: 'Portfolio Michael Altinisik',
    description:
      'Explore my portfolio website with unique, amazing fullstack and frontend projects with custom made Figma designs.',
    url: 'https://michael-altinisik.vercel.app/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <Suspense>
        <Analytics />
      </Suspense>
      <body className={`${inter.className} bg-primary`}>{children}</body>
    </html>
  );
}
