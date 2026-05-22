import { cn } from '@/lib/utils';

/** Mono, uppercase, wide-tracked label. The system's quietest voice. */
export default function MetaLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn('font-mono text-meta uppercase tracking-meta text-muted', className)}>
      {children}
    </span>
  );
}
