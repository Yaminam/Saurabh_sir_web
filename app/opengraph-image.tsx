import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { site } from '@/lib/content/site';

export const alt = `${site.founder} — ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Render on demand instead of prerendering at build. @vercel/og resolves a
// bundled asset via new URL(import.meta.url); that throws when the local
// project path contains a space. On Vercel the path has none and this renders
// normally — deferring it to request time keeps the local build green.
export const dynamic = 'force-dynamic';

export default async function OpengraphImage() {
  // Supplying our own font avoids @vercel/og's bundled-font path resolution,
  // which breaks when the project directory contains a space.
  const font = await readFile(join(process.cwd(), 'public/fonts/InterTight.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A0A0A',
          padding: '72px',
          color: '#F4F1EC',
          fontFamily: 'Inter Tight',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#6E6A63',
          }}
        >
          <span>Founder · Strategist · Operator</span>
          <span>Delhi ↔ New York</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: 64, height: 6, background: '#007B6E', marginBottom: 32 }} />
          <div style={{ display: 'flex', fontSize: 80, lineHeight: 1.04, letterSpacing: -2, maxWidth: 1000 }}>
            Building brands that outlive the algorithm.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}
        >
          <span>{site.founder}</span>
          <span style={{ color: '#6E6A63' }}>Garage Collective</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Inter Tight', data: font, style: 'normal', weight: 400 }],
    },
  );
}
