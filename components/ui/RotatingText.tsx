'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Cycles through `words` one at a time (rises in / out). Width is reserved by an
 * invisible sizer (the longest word) so surrounding layout never jitters.
 * Under reduced motion it renders the words as a static "·" list — no movement.
 */
export default function RotatingText({
  words,
  interval = 2400,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  if (reduce) {
    return <span className={className}>{words.join(' · ')}</span>;
  }

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '');

  return (
    <span className={cn('relative inline-block', className)}>
      <span className="invisible" aria-hidden>
        {longest}
      </span>
      <span className="absolute inset-0 block overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            className="block"
            initial={{ y: '90%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-90%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
