import localFont from 'next/font/local';

/**
 * Self-hosted fonts. No Google CDN at runtime — files live in /public/fonts.
 *
 * NOTE ON LICENSING: these are the brief's FREE fallbacks (all OFL-licensed):
 *   Display → Fraunces      (placeholder for PP Editorial New / Migra / Reckless)
 *   Sans    → Inter Tight   (placeholder for PP Neue Montreal / Söhne)
 *   Mono    → JetBrains Mono (placeholder for PP Supply Mono)
 * Swap these files when the commercial faces are licensed — see README.
 *
 * Roman + Italic are kept in the SAME localFont call per family so that
 * `font-style: italic` resolves naturally for pull-quotes and emphasis.
 */

export const display = localFont({
  src: [
    { path: '../public/fonts/Fraunces.ttf', weight: '100 900', style: 'normal' },
    { path: '../public/fonts/Fraunces-Italic.ttf', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  // Not preloaded: with display:swap the fallback paints instantly, keeping the
  // ~0.75MB variable face off the critical render path (LCP/FCP).
  adjustFontFallback: 'Times New Roman',
  preload: false,
});

export const sans = localFont({
  src: [
    { path: '../public/fonts/InterTight.ttf', weight: '100 900', style: 'normal' },
    { path: '../public/fonts/InterTight-Italic.ttf', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', 'Helvetica Neue', 'Arial', 'sans-serif'],
  preload: false,
});

export const mono = localFont({
  src: [{ path: '../public/fonts/JetBrainsMono.ttf', weight: '100 800', style: 'normal' }],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
  preload: false,
});

export const fontVars = `${display.variable} ${sans.variable} ${mono.variable}`;
