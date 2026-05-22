'use client';

import { useState } from 'react';
import { site } from '@/lib/content/site';

/**
 * Contact form. With no backend wired up it composes a pre-filled email and
 * opens the visitor's mail client (works everywhere, no service required).
 * Swap `handleSubmit` for a POST to Formspree / a route handler when ready.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`Enquiry from ${name || 'activeindian.com'}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${company ? `, ${company}` : ''}\n${email}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Company / Brand" name="company" autoComplete="organization" />
      <Field label="Message" name="message" textarea required />
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
        <button
          type="submit"
          className="link-underline font-mono text-meta uppercase tracking-meta text-accent"
        >
          Send message →
        </button>
        {sent && (
          <span className="font-mono text-meta uppercase tracking-meta text-muted" role="status">
            Opening your mail app…
          </span>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  textarea = false,
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `field-${name}`;
  const base =
    'w-full rounded-none border-b border-paper/20 bg-transparent pb-2 pt-1 text-body-l text-paper outline-none transition-colors placeholder:text-muted focus:border-accent';
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-meta uppercase tracking-meta text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {textarea ? (
        <textarea id={id} name={name} rows={4} required={required} className={`${base} resize-none`} />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={base}
        />
      )}
    </div>
  );
}
