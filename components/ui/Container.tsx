import { cn } from '@/lib/utils';

/** Max-width 1680 container with responsive gutters. `bleed` keeps gutters only. */
export default function Container({
  children,
  className,
  bleed = false,
}: {
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <div
      className={cn(
        bleed ? 'px-gutter-sm md:px-gutter' : 'mx-auto w-full max-w-container px-gutter-sm md:px-gutter',
        className,
      )}
    >
      {children}
    </div>
  );
}
