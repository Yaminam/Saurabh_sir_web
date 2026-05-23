/**
 * Design tokens — the single source of truth for the ActiveIndian system.
 * Consumed by tailwind.config.ts and read directly in motion/JS where needed.
 *
 * Principle: a premium black/white base with one restrained accent.
 * No gradients. No glow. No rounded-everything.
 */

export const color = {
  ink: '#0A0A0A', // near-black, primary text on light / dark section bg
  paper: '#F4F1EC', // off-white warm paper, primary bg
  bone: '#E8E4DC', // section dividers, hairlines
  graphite: '#1A1A1A', // dark sections bg
  mist: '#6E6A63', // secondary text
  accent: '#007B6E', // ONE accent — Garage Collective green, used <5% of UI
  signal: '#C8FF00', // acid lime — reserved for one moment per page max
} as const;

/** Cubic-bezier easings used across the motion system. */
export const ease = {
  // Editorial rise — used for reveals
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Symmetric, for hover swaps
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
} as const;

export const duration = {
  reveal: 0.8,
  fast: 0.24,
  slow: 1.2,
} as const;

/**
 * Fluid type scale. Values mirror the brief's spec (desktop → mobile via clamp).
 * Exposed to Tailwind as fontSize entries so they read as `text-display-xl` etc.
 */
export const fontSize = {
  'display-xl': ['clamp(44px, 10vw, 180px)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
  'display-l': ['clamp(44px, 7.5vw, 128px)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
  'display-m': ['clamp(36px, 5vw, 88px)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
  'heading-l': ['clamp(28px, 3vw, 48px)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
  'heading-m': ['20px', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
  'body-l': ['18px', { lineHeight: '1.5' }],
  'body-m': ['16px', { lineHeight: '1.55' }],
  caption: ['13px', { lineHeight: '1.4', letterSpacing: '0.04em' }],
  meta: ['11px', { lineHeight: '1.4', letterSpacing: '0.12em' }],
} as const;

export const tokens = { color, ease, duration, fontSize };
export default tokens;
