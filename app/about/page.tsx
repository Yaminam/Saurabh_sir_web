import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import MetaLabel from '@/components/ui/MetaLabel';
import { Reveal } from '@/components/motion/Reveal';
import Contact from '@/components/sections/Contact';
import { about } from '@/lib/content/about';
import { site } from '@/lib/content/site';
import { blur } from '@/lib/image';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About',
  description: about.intro.slice(0, 158),
  openGraph: { title: `About — ${site.name}`, description: about.intro.slice(0, 158) },
};

export default function AboutPage() {
  return (
    <main>
      <article className="bg-paper text-ink">
        <header className="pt-[clamp(132px,18vh,220px)]">
          <Container>
            <Reveal>
              <MetaLabel>About — {site.founder}</MetaLabel>
            </Reveal>
            <Reveal className="mt-10 max-w-5xl">
              <h1 className="font-display vf-text text-display-m font-normal italic leading-[1.06] tracking-[-0.015em] text-balance">
                {about.intro}
              </h1>
            </Reveal>
          </Container>
        </header>

        <Container className="py-section">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex max-w-prose flex-col gap-7 text-body-l leading-[1.65]">
                {about.body.map((b, i) =>
                  typeof b === 'string' ? (
                    <Reveal key={i}>
                      <p className={cn('text-pretty', i === 0 && 'dropcap')}>{b}</p>
                    </Reveal>
                  ) : (
                    <Reveal key={i}>
                      <blockquote className="my-3 font-display text-heading-l italic leading-[1.2] tracking-[-0.01em] text-balance">
                        “{b.pull}”
                      </blockquote>
                    </Reveal>
                  ),
                )}
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28">
                <div className="relative mb-10 aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-bone">
                  <Image
                    src="/images/founder.jpg"
                    alt={site.founder}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    placeholder="blur"
                    blurDataURL={blur()}
                    className="object-cover object-top"
                  />
                </div>
                <MetaLabel>At a glance</MetaLabel>
                <dl className="mt-6 border-t border-bone">
                  {about.facts.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-baseline justify-between gap-6 border-b border-bone py-4"
                    >
                      <dt className="font-mono text-meta uppercase tracking-meta text-muted">
                        {c.label}
                      </dt>
                      <dd className="text-right text-body-m">{c.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </article>
      <Contact />
    </main>
  );
}
