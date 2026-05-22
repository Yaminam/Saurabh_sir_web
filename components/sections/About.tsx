import Link from 'next/link';
import Container from '@/components/ui/Container';
import MetaLabel from '@/components/ui/MetaLabel';
import { Reveal } from '@/components/motion/Reveal';
import Magnetic from '@/components/motion/Magnetic';
import ParallaxImage from '@/components/motion/ParallaxImage';
import { about } from '@/lib/content/about';
import { site } from '@/lib/content/site';

/**
 * Homepage About section — portrait + facts on the left, lead / journey /
 * pull-quote on the right (balanced heights, no dead space). Content from
 * activeindian.com/about-me/.
 */
export default function About() {
  const paras = about.body.filter((b) => typeof b === 'string') as string[];
  const pull = (about.body.find((b) => typeof b === 'object') as { pull: string } | undefined)?.pull;

  return (
    <section id="about" data-index="02" className="bg-paper py-section text-ink" aria-labelledby="about-heading">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Portrait + facts */}
          <Reveal className="lg:col-span-5">
            <ParallaxImage
              src="/images/founder.jpg"
              alt={site.founder}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full rounded-[2px] bg-bone"
              imgClassName="object-top grayscale"
            />
            <dl className="mt-7 border-t border-bone">
              {about.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-6 border-b border-bone py-3"
                >
                  <dt className="font-mono text-meta uppercase tracking-meta text-muted">{f.label}</dt>
                  <dd className="text-right text-body-m">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Lead + journey + pull */}
          <div className="flex flex-col lg:col-span-6 lg:col-start-7">
            <Reveal>
              <MetaLabel>About — 02</MetaLabel>
              <h2
                id="about-heading"
                className="mt-5 font-display text-display-m leading-[1.0] tracking-[-0.015em] text-balance"
              >
                Branding, performance &amp; storytelling.
              </h2>
            </Reveal>
            <Reveal className="mt-7">
              <div className="flex flex-col gap-6 text-body-l leading-[1.6]">
                <p className="text-pretty">{about.intro}</p>
                <p className="text-pretty text-muted">{paras[0]}</p>
              </div>
            </Reveal>
            {pull && (
              <Reveal className="mt-8">
                <blockquote className="border-l border-accent pl-6 font-display text-heading-l italic leading-[1.18] text-balance">
                  “{pull}”
                </blockquote>
              </Reveal>
            )}
            <Reveal className="mt-auto pt-9">
              <Magnetic>
                <Link
                  href="/about"
                  className="link-underline inline-flex items-center gap-2 font-mono text-meta uppercase tracking-meta text-ink"
                >
                  Read the full story <span aria-hidden>→</span>
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
