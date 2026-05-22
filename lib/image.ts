/** Lightweight blur placeholder for next/image (no build-time static import needed). */

const shimmer = (w: number, h: number) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
  `<rect width="100%" height="100%" fill="#17120d"/></svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export const blur = (w = 12, h = 12) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
