'use client';

import { useEffect, useState } from 'react';

const fmt = (tz: string) =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());

/** Live Delhi + New York time. Renders a placeholder pre-mount (no SSR mismatch). */
export default function Clock() {
  const [t, setT] = useState<{ d: string; n: string }>({ d: '--:--:--', n: '--:--:--' });

  useEffect(() => {
    const up = () => setT({ d: fmt('Asia/Kolkata'), n: fmt('America/New_York') });
    up();
    const id = setInterval(up, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <dl className="flex gap-8 font-mono text-meta uppercase tracking-meta text-muted">
      <div className="flex flex-col gap-1">
        <dt>Delhi</dt>
        <dd className="text-paper tabular-nums">{t.d}</dd>
      </div>
      <div className="flex flex-col gap-1">
        <dt>New York</dt>
        <dd className="text-paper tabular-nums">{t.n}</dd>
      </div>
    </dl>
  );
}
