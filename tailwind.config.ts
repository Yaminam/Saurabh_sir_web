import type { Config } from 'tailwindcss';
import { color, fontSize } from './lib/tokens';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    // Replace the default palette entirely — we only want our tokens visible.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ink: color.ink,
      paper: color.paper,
      bone: color.bone,
      graphite: color.graphite,
      mist: color.mist,
      // Context-aware secondary text. Dark grey on light sections; the
      // `.tone-dark` class flips --muted to a light grey on dark sections.
      // Channels (not hex) so Tailwind's /opacity modifiers keep working.
      muted: 'rgb(var(--muted) / <alpha-value>)',
      accent: color.accent,
      signal: color.signal,
    },
    fontSize: fontSize as unknown as Config['theme'],
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1680px',
        prose: '680px',
      },
      spacing: {
        gutter: '24px',
        'gutter-sm': '16px',
        section: 'clamp(72px, 9vw, 144px)',
      },
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
      },
      borderWidth: {
        hair: '0.5px',
      },
      letterSpacing: {
        meta: '0.12em',
        caption: '0.04em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
        swap: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        'marquee-right': {
          '0%': { transform: 'translate3d(-50%,0,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
