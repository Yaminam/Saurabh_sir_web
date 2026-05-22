'use client';

import { useEffect, useState } from 'react';

/**
 * Live "NN / TT" counter pinned to the right edge. Observes any element
 * carrying a data-index attribute and reports whichever owns mid-viewport.
 * mix-blend-difference keeps it legible over both light and dark sections.
 */
export default function SectionIndex() {
  const [active, setActive] = useState('01');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-index]'));
    if (!items.length) return;
    setTotal(items.length);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.index || '01');
        });
      },
      { rootMargin: '-48% 0px -48% 0px', threshold: 0 },
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);

  if (total === 0) return null;

  return (
    <div
      data-section-index
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 mix-blend-difference no-print lg:block"
    >
      <span className="font-mono text-meta uppercase tracking-meta text-paper">
        {active}
        <span className="opacity-50"> / {String(total).padStart(2, '0')}</span>
      </span>
    </div>
  );
}
