'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Mode = 'default' | 'link' | 'label';

/**
 * Custom cursor: a 5px dot that tracks instantly + an outlined ring that lags.
 * Over links the ring swells; over [data-cursor-label] it becomes a labeled
 * pill ("VIEW CASE"). Desktop only — disabled on touch / reduced-motion.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>('default');
  const [label, setLabel] = useState('');

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const labeled = target.closest<HTMLElement>('[data-cursor-label]');
      if (labeled) {
        setLabel(labeled.dataset.cursorLabel || '');
        setMode('label');
        return;
      }
      const interactive = target.closest('a, button, [role="button"], input, textarea');
      setMode(interactive ? 'link' : 'default');
      setLabel('');
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        data-cursor
        className="pointer-events-none fixed left-0 top-0 z-[80] no-print"
        style={{ x, y }}
        aria-hidden
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
          animate={{ scale: mode === 'default' ? 1 : 0, opacity: mode === 'default' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ width: 5, height: 5 }}
        />
      </motion.div>

      {/* Ring / pill — lags */}
      <motion.div
        data-cursor
        className="pointer-events-none fixed left-0 top-0 z-[80] no-print"
        style={{ x: ringX, y: ringY }}
        aria-hidden
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
          animate={{
            width: mode === 'label' ? 116 : mode === 'link' ? 56 : 34,
            height: mode === 'label' ? 40 : mode === 'link' ? 56 : 34,
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 26, mass: 0.5 }}
        >
          {mode === 'label' ? (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-accent px-3 font-mono text-[10px] uppercase tracking-meta text-paper">
              {label}
            </span>
          ) : (
            <span
              className="h-full w-full rounded-full border border-paper mix-blend-difference"
              style={{ opacity: mode === 'link' ? 1 : 0.6 }}
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
