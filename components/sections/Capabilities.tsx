import Link from 'next/link';
import Container from '@/components/ui/Container';
import MetaLabel from '@/components/ui/MetaLabel';
import Magnetic from '@/components/motion/Magnetic';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { capabilities, portfolioIntro } from '@/lib/content/capabilities';

/**
 * Portfolio — the six service categories from activeindian.com/portfolio/,
 * as a typographic index. Each row inverts on hover/focus and slides its
 * description in from the right.
 */
export default function Capabilities() {
  return (
    <section
      id="portfolio"
      data-index="03"
      className="bg-paper py-section text-ink"
      aria-labelledby="portfolio-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="flex flex-col md:col-span-3">
            <Reveal>
              <MetaLabel>Portfolio — 03</MetaLabel>
              <h2
                id="portfolio-heading"
                className="mt-4 font-display text-display-m leading-[0.92] tracking-[-0.015em]"
              >
                What I do
              </h2>
              <span className="mt-6 block h-px w-12 bg-accent" aria-hidden />
              <p className="mt-6 max-w-xs text-body-m text-muted text-pretty">{portfolioIntro}</p>
            </Reveal>
            <Reveal className="mt-10 lg:mt-auto lg:pt-12">
              <Magnetic>
                <Link
                  href="/#contact"
                  className="link-underline inline-flex items-center gap-2 font-mono text-meta uppercase tracking-meta text-ink"
                >
                  Start a project <span aria-hidden>→</span>
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          <RevealGroup className="md:col-span-9" stagger={0.05}>
            <ul className="border-t border-bone">
              {capabilities.map((c) => (
                <li key={c.num}>
                  <RevealItem>
                    <Link
                      href="/#contact"
                      data-cursor-label="Discuss"
                      className="group block border-b border-bone outline-none"
                    >
                      <div className="-mx-4 flex min-h-[6rem] items-center gap-5 rounded-[2px] border-l-2 border-transparent px-4 py-4 transition-colors duration-300 ease-swap group-hover:border-accent group-hover:bg-ink group-hover:text-paper group-focus-visible:border-accent group-focus-visible:bg-ink group-focus-visible:text-paper md:gap-8">
                        <span className="w-8 shrink-0 font-mono text-meta text-accent transition-colors group-hover:text-paper/50 group-focus-visible:text-paper/50">
                          {c.num}
                        </span>
                        <span className="flex-1 font-display text-heading-l leading-[1.05] tracking-[-0.01em] text-balance">
                          {c.title}
                        </span>
                        <span className="hidden max-w-[38ch] text-right font-mono text-[11px] uppercase leading-relaxed tracking-meta text-muted transition-colors duration-300 group-hover:text-paper/70 group-focus-visible:text-paper/70 lg:block">
                          {c.note}
                        </span>
                        <span
                          className="shrink-0 font-mono text-xl text-accent transition-[transform,color] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper group-focus-visible:text-paper"
                          aria-hidden
                        >
                          ↗
                        </span>
                      </div>
                    </Link>
                  </RevealItem>
                </li>
              ))}
            </ul>
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
