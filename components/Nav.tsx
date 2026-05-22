'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { nav, site } from '@/lib/content/site';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Floating nav. mix-blend-difference so it inverts over any background.
 * Hides on scroll-down, returns on scroll-up, always shown at the very top.
 * Mobile: a full-screen type takeover with a clean MENU ↔ CLOSE swap.
 */
export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > last && y > 140) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 mix-blend-difference no-print"
        animate={{ y: hidden && !open ? '-120%' : '0%' }}
        transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
      >
        <nav className="mx-auto flex max-w-container items-center justify-between px-gutter-sm py-5 md:px-gutter">
          <Link
            href="/"
            className="font-display text-[22px] italic leading-none text-paper"
            aria-label={`${site.name} — home`}
          >
            {site.name}
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="link-underline font-mono text-meta uppercase tracking-meta text-paper"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="font-mono text-meta uppercase tracking-meta text-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="tone-dark fixed inset-0 z-40 bg-ink no-print md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
          >
            <div className="flex h-full flex-col justify-center px-gutter-sm">
              <ul className="space-y-1">
                {nav.map((n, i) => (
                  <motion.li
                    key={n.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.08 + i * 0.06, duration: 0.5, ease: EASE }}
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block py-1 font-display text-display-m leading-[1.05] text-paper"
                    >
                      {n.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12 font-mono text-meta uppercase tracking-meta text-muted">
                {site.geo} — {site.year}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
