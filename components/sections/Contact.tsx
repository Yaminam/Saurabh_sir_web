import Container from '@/components/ui/Container';
import MetaLabel from '@/components/ui/MetaLabel';
import Clock from '@/components/ui/Clock';
import Magnetic from '@/components/motion/Magnetic';
import AmbientAudio from '@/components/ui/AmbientAudio';
import ContactForm from '@/components/ui/ContactForm';
import { MaskText, Reveal } from '@/components/motion/Reveal';
import { site, social } from '@/lib/content/site';

/**
 * Contact closer + site footer. Big statement, a real form, and the direct
 * channels (email, phone, social) for those who prefer them.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      data-index="04"
      className="tone-dark relative flex min-h-[100svh] flex-col bg-ink text-paper"
      aria-labelledby="contact-heading"
    >
      <Container className="flex flex-1 flex-col gap-[clamp(28px,4vw,52px)] py-[clamp(80px,10vh,128px)]">
        <Reveal>
          <MetaLabel>Index 04 / Work Together</MetaLabel>
          <p className="mt-3 font-mono text-meta uppercase tracking-meta text-muted">
            {site.availability}
          </p>
        </Reveal>

        <MaskText
          as="h2"
          className="font-display vf-display text-display-l font-normal leading-[0.95] tracking-[-0.02em] text-balance"
          lines={['Open to', 'interesting projects.']}
          stagger={0.12}
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Direct channels */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-meta uppercase tracking-meta text-muted">
                Reach directly
              </p>
              <Magnetic strength={8}>
                <a
                  href={`mailto:${site.email}`}
                  data-cursor-label="Email"
                  className="link-underline mt-5 inline-flex items-baseline gap-3 font-display text-heading-l italic text-accent"
                >
                  {site.email}
                  <span aria-hidden className="not-italic">
                    ↗
                  </span>
                </a>
              </Magnetic>
              <div className="mt-5">
                <a
                  href={site.phoneHref}
                  className="link-underline font-mono text-meta uppercase tracking-meta text-muted"
                >
                  {site.phone}
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                {social.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="link-underline font-mono text-meta uppercase tracking-meta text-paper/80 hover:text-paper"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <h3 id="contact-heading" className="font-mono text-meta uppercase tracking-meta text-muted">
                Send a message
              </h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <Container className="pb-8">
        <div className="mb-8">
          <Clock />
        </div>
        <div className="flex flex-col gap-4 border-t border-paper/10 pt-6 md:flex-row md:items-center md:justify-between">
          <AmbientAudio label={`© ${site.founder} — ${site.year} · ${site.geo} · Built quietly.`} />
          <span className="font-mono text-meta uppercase tracking-meta text-muted">{site.name}</span>
        </div>
      </Container>
    </section>
  );
}
