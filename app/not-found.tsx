import Link from 'next/link';
import Container from '@/components/ui/Container';
import MetaLabel from '@/components/ui/MetaLabel';

const suggestions = [
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
];

export default function NotFound() {
  return (
    <main className="tone-dark flex min-h-[100svh] flex-col justify-between bg-ink text-paper">
      <Container className="flex flex-1 flex-col justify-center py-40">
        <MetaLabel>Error 404</MetaLabel>
        <h1 className="mt-8 font-display vf-display text-display-l font-normal leading-[0.95] tracking-[-0.02em] text-balance">
          index not found —
          <br />
          try another route.
        </h1>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
          {suggestions.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="link-underline font-mono text-meta uppercase tracking-meta text-paper"
              >
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <Container className="pb-10">
        <span className="font-mono text-meta uppercase tracking-meta text-muted">
          ActiveIndian — Delhi ↔ New York
        </span>
      </Container>
    </main>
  );
}
