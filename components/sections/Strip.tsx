import Marquee from '@/components/motion/Marquee';
import { capabilities } from '@/lib/content/capabilities';

/**
 * Kinetic divider — two marquee rows scrolling in opposite directions.
 * Real content only: the service categories + brand facts. Decorative.
 */
const services = capabilities.map((c) => c.title);
const facts = [
  'Garage Collective',
  'Production',
  'Media',
  'Music',
  'Delhi ↔ New York',
  'TiE Delhi Charter',
  'India & United States',
];

export default function Strip() {
  return (
    <section
      className="tone-dark overflow-hidden border-y border-paper/10 bg-ink py-[clamp(36px,5vw,72px)] text-paper"
      aria-label="Services and focus"
    >
      <Marquee
        items={services}
        direction="left"
        itemClassName="font-display text-display-m italic leading-none"
      />
      <Marquee
        items={facts}
        direction="right"
        itemClassName="mt-2 font-display text-display-m italic leading-none text-paper/45"
      />
    </section>
  );
}
