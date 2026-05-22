'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import RotatingText from '@/components/ui/RotatingText';
import { MaskText } from '@/components/motion/Reveal';
import { site } from '@/lib/content/site';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      data-index="01"
      className="tone-dark relative min-h-[100svh] overflow-hidden bg-ink text-paper"
      aria-label="Introduction"
    >
      <Container className="relative flex min-h-[100svh] flex-col justify-between py-[clamp(80px,10vh,128px)]">
        {/* Meta bar — fades in last */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 1.1, duration: 0.8, ease: EASE }}
          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-paper/10 pb-5 font-mono text-meta uppercase tracking-meta text-muted"
        >
          <span className="text-paper">Index 01</span>
          <span>Delhi ↔ New York</span>
          <span>MMXXVI</span>
        </motion.div>

        {/* Headline */}
        <div>
          <MaskText
            as="h1"
            className="font-display vf-display text-display-xl font-normal leading-[0.92] tracking-[-0.02em]"
            lines={['Turning creative', 'visions into', 'legendary brands.']}
            stagger={0.12}
          />
          {/* Highlighted rotating roles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.95, duration: 0.7, ease: EASE }}
            className="mt-[clamp(20px,3vw,40px)] flex flex-wrap items-baseline gap-x-3 font-display text-heading-l italic leading-none"
          >
            <span className="text-muted">I am</span>
            <RotatingText
              words={['an investor', 'a founder', 'a marketer', 'an entrepreneur']}
              className="font-normal text-accent"
            />
          </motion.div>

          {/* Stats */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 1.15, duration: 0.8, ease: EASE }}
            className="mt-7 font-mono text-meta uppercase tracking-meta text-muted"
          >
            Nearly two decades · Over 500 brands · India &amp; United States
          </motion.p>
        </div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 1.2, duration: 0.8, ease: EASE }}
          className="flex items-end justify-between"
        >
          <span className="max-w-[60vw] font-mono text-meta uppercase tracking-meta text-muted">
            {site.founder} — Founder, {site.venture}
          </span>
          <ScrollIndicator />
        </motion.div>
      </Container>
    </section>
  );
}

function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3" data-scroll-indicator aria-hidden>
      <span className="font-mono text-meta uppercase tracking-meta text-muted [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb]">
        Scroll
      </span>
      <span className="relative block h-16 w-px overflow-hidden bg-paper/15">
        <motion.span
          className="absolute inset-x-0 top-0 block h-1/3 bg-paper"
          animate={{ y: ['-100%', '300%'] }}
          transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.2 }}
        />
      </span>
    </div>
  );
}
