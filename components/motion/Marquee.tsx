'use client';

import { cn } from '@/lib/utils';

/**
 * Infinite marquee. Content is rendered twice in one track and translated -50%
 * for a seamless loop. Decorative → aria-hidden. Stops under reduced motion
 * (handled globally). Separators are accent-coloured for rhythm.
 */
export default function Marquee({
  items,
  direction = 'left',
  className,
  itemClassName,
  separator = '·',
}: {
  items: React.ReactNode[];
  direction?: 'left' | 'right';
  className?: string;
  itemClassName?: string;
  separator?: string;
}) {
  const anim = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  const row = (key: string) => (
    <div className={cn('flex shrink-0 items-center', itemClassName)} key={key}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span>{it}</span>
          <span className="select-none px-[clamp(24px,3.5vw,64px)] text-accent" aria-hidden>
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn('relative flex w-full overflow-hidden', className)} aria-hidden>
      <div className={cn('flex w-max', anim)}>
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
}
