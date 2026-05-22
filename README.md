# ActiveIndian — Saurabh Gupta

A founder brand ecosystem for **Saurabh Gupta** (ActiveIndian / Garage Collective).
Confident, editorial, internet-native — built to make a visitor think *"this founder
understands branding, culture and strategy better than most agencies."*

Built from scratch as a custom design-engineered site. Not a template.

---

## Stack

| Layer      | Choice                                                            |
| ---------- | ---------------------------------------------------------------- |
| Framework  | Next.js 14 (App Router) + TypeScript                              |
| Styling    | Tailwind CSS with custom design tokens (`lib/tokens.ts`)         |
| Motion     | Framer Motion + Lenis (smooth scroll)                            |
| Fonts      | Self-hosted via `next/font/local` — **no Google CDN at runtime** |
| Images     | `next/image` (AVIF/WebP, blur placeholders)                      |
| Deploy     | Vercel                                                            |

No UI kits (no shadcn / DaisyUI). Every primitive is hand-built.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Requires Node 18.18+ (developed on Node 24).

---

## Project structure

```
app/
  layout.tsx              shell: fonts, metadata, OG, JSON-LD, nav, cursor, loader
  page.tsx                homepage — the eight movements
  globals.css             tokens-in-CSS, grain, selection, focus, reduced-motion, print
  opengraph-image.tsx     dynamic OG/Twitter card (see note below)
  icon.svg                favicon
  not-found.tsx           404
  about/page.tsx          long-form founder essay
  work/[slug]/page.tsx    case-study detail (Context / Approach / Outcome + next case)
  thoughts/[slug]/page.tsx essay reader (reading-progress, related)
components/
  Nav.tsx                 floating nav, hide-on-scroll, mobile takeover
  sections/               Hero, Manifesto, Work, Philosophy, Capabilities, Proof, Dispatches, Contact
  motion/                 SmoothScroll (Lenis), Reveal/MaskText, Magnetic, Marquee
  ui/                     Cursor, SectionIndex, Loader, Counter, Clock, AmbientAudio, Container, MetaLabel, ReadingProgress
lib/
  tokens.ts               single source of truth for colour + type scale
  fonts.ts                self-hosted font definitions
  content/                ALL copy lives here — site, work, dispatches, capabilities, proof, philosophy, about
public/
  fonts/                  self-hosted variable fonts (+ OFL.txt)
  images/                 placeholder imagery (work, dispatches, hero, about)
```

### Editing content

All copy is data, separated from layout — edit these, never the components:

- `lib/content/site.ts` — name, role, email, social links, nav
- `lib/content/work.ts` — the six case studies (+ detail copy + metrics)
- `lib/content/dispatches.ts` — the essays
- `lib/content/capabilities.ts`, `proof.ts`, `philosophy.ts`, `about.ts`

Replace placeholder images in `public/images/**` with real assets (keep the
filenames, or update the `image:` paths in the content files).

---

## ⚠️ Font licensing assumption

The brief's preferred faces are **commercial** (PP Editorial New, PP Neue Montreal,
PP Supply Mono). They are **not bundled** here. The site currently ships the brief's
**free, OFL-licensed fallbacks**, self-hosted in `public/fonts`:

| Role    | Shipped (free, OFL)   | Replace with (licensed)               |
| ------- | --------------------- | ------------------------------------- |
| Display | **Fraunces**          | PP Editorial New / Migra / Reckless   |
| Sans    | **Inter Tight**       | PP Neue Montreal / Söhne              |
| Mono    | **JetBrains Mono**    | PP Supply Mono / JetBrains Mono       |

To swap: drop the licensed font files into `public/fonts/`, update the `src` paths
in `lib/fonts.ts`, and the whole system re-themes. The OFL licence for the bundled
fonts is in `public/fonts/OFL.txt`.

> Fonts are shipped as variable `.ttf`. A future optimisation is subsetting to
> `woff2` (≈50%+ smaller). Tooling for that wasn't available in this environment;
> it does not affect the current Lighthouse scores because the faces load with
> `display: swap` and are not on the critical path.

---

## Lighthouse (production build, desktop)

Measured against `npm run start` with the standard desktop throttling profile:

| Page              | Performance | Accessibility | Best Practices | SEO |
| ----------------- | ----------- | ------------- | -------------- | --- |
| Home (`/`)        | **92**      | **100**       | **100**        | **100** |
| Case (`/work/…`)  | 91          | 96            | 100            | 100 |

Home metrics: **LCP 1.4s · FCP 1.1s · CLS 0.041 · TBT 0ms**.

Notes:
- The first-load **Loader** renders client-side only, so server HTML paints first
  and the loader never gates LCP.
- Display fonts are intentionally **not preloaded** (swap-rendered) to keep the
  ~0.75MB face off the critical path.
- `--muted` secondary-text colour is **context-aware** (a CSS variable that flips
  to a lighter grey under `.tone-dark` sections) so it passes 4.5:1 on both light
  and dark backgrounds.

---

## Notes & deliberate decisions

- **OG image on localhost.** `app/opengraph-image.tsx` generates the card with
  `@vercel/og`. That library resolves a bundled asset via `new URL(import.meta.url)`,
  which throws when the local project path contains a **space** (this folder is
  `sourabh_sir website`). The route is therefore set to `force-dynamic` so the local
  build stays green; it renders correctly on Vercel (no space in the deploy path).
  The `<meta>` tags are present regardless.
- **Section numbering.** The brief's in-section labels were internally inconsistent
  (e.g. Capabilities tagged "06" though it is the 5th movement). The viewport index
  counter uses a clean `01 → 08` by movement; in-section labels follow suit.
- **About in nav.** Added "About" to the primary nav for discoverability (the brief
  listed four items but ships an About page).
- **Ambient sound** is a Web-Audio pad synthesised on the fly (no audio asset),
  off by default, revealed by clicking the footer copyright — never autoplays.
- **Decorative ghost numerals** (the oversized faint indices) are `aria-hidden`;
  the readable index/name is always present as real text.

## Accessibility & motion

- `prefers-reduced-motion` honoured everywhere (reveals become fades, Lenis off,
  marquees and grain stop, loader shortens).
- Custom cursor is desktop-only; touch devices use the native cursor.
- Keyboard-navigable; focus ring styled in the accent colour.
- Semantic landmarks, JSON-LD (Person + Organization), OG/Twitter on every route,
  and a print stylesheet.
```

🤖 Generated with [Claude Code](https://claude.com/claude-code)
