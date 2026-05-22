import type { Metadata, Viewport } from 'next';
import './globals.css';
import { fontVars } from '@/lib/fonts';
import { site, social } from '@/lib/content/site';
import SmoothScroll from '@/components/motion/SmoothScroll';
import Nav from '@/components/Nav';
import Cursor from '@/components/ui/Cursor';
import SectionIndex from '@/components/ui/SectionIndex';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.founder} — ${site.name}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  keywords: [
    'Saurabh Gupta',
    'ActiveIndian',
    'Garage Collective',
    'cultural strategist',
    'brand strategy',
    'founder',
    'creative operator',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.founder} — ${site.name}`,
    description: site.description,
    url: site.url,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.founder} — ${site.name}`,
    description: site.description,
    creator: '@activeindian',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'light dark',
};

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${site.url}/#person`,
        name: site.founder,
        url: site.url,
        jobTitle: 'Founder, Investor & Cultural Strategist',
        description: site.description,
        sameAs: social.filter((s) => s.href.startsWith('http')).map((s) => s.href),
        worksFor: { '@id': `${site.url}/#org` },
      },
      {
        '@type': 'Organization',
        '@id': `${site.url}/#org`,
        name: site.venture,
        url: site.url,
        description: `${site.venture} — ${site.ventureLine}`,
        founder: { '@id': `${site.url}/#person` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body className="antialiased">
        <Cursor />
        <SectionIndex />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <JsonLd />
      </body>
    </html>
  );
}
