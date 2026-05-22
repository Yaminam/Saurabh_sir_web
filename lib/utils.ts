/** Minimal className joiner — keeps deps lean (no clsx). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Clamp helper for motion math. */
export const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);
