/**
 * Site-wide brand data. Subject profile per the brief (section 1).
 * Voice: confident, editorial, restrained. No exclamation marks. No "we".
 */

export const site = {
  name: 'ActiveIndian',
  founder: 'Saurabh Gupta',
  role: 'Founder · Investor · Cultural Strategist · Creative Operator',
  // Rotating roles, exactly as cycled on the original activeindian.com hero.
  roleWords: ['Investor', 'Founder', 'Marketer', 'Entrepreneur'],
  venture: 'Garage Collective',
  ventureLine: 'Production, Media, Music',
  geo: 'Delhi ↔ New York',
  year: 'MMXXVI',
  email: 'saurabh@activeindian.com',
  phone: '+91 99100 52488',
  phoneHref: 'tel:+919910052488',
  availability: 'Available for consulting · Globally available · Ping me for coffee',
  url: 'https://activeindian.com',
  description:
    'Saurabh Gupta — founder, investor and cultural strategist. Twenty years and five hundred brands across India and the United States.',
  tagline: 'Building brands that outlive the algorithm.',
} as const;

export const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/activeindian', short: 'LinkedIn' },
  { label: 'Instagram', href: 'https://www.instagram.com/activeindian', short: 'Instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/activeindian', short: 'Facebook' },
  { label: 'WhatsApp', href: 'https://wa.link/rzf7j1', short: 'WhatsApp' },
  { label: 'Download credentials (PDF)', href: '/credentials.pdf', short: 'Credentials' },
] as const;

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Contact', href: '/#contact' },
] as const;

/** Index labels for the section counter (NN / 08). */
export const sectionCount = 8;
