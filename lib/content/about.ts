/**
 * About — content drawn from Saurabh Gupta's own profile (LinkedIn /in/activeindian
 * and activeindian.com/about-me/). First-person, editorial voice.
 * `intro` is the lead/H1; `body` renders as paragraphs with one pull-quote.
 */

export const about = {
  intro:
    'I’m Saurabh Gupta — better known as ActiveIndian — a marketing entrepreneur, investor and founder of Garage Collective, an integrated creative, media, production, music, digital and growth group.',
  body: [
    'Over the last two decades I’ve worked across advertising, digital transformation, media, performance marketing, brand strategy, video production, e-learning and go-to-market execution — contributing to the growth of more than five hundred brands, from large corporates and government institutions to consumer brands, startups and public-sector initiatives.',
    {
      pull: 'Great brands are not created by campaigns alone. They are built through culture, content, distribution, technology and consistent market action.',
    },
    'At Garage Collective we’re now building the next version of the agency model — an AI-first creative and growth company that combines strategy, storytelling, media, automation, performance marketing, content production and brand-IP creation.',
    'My focus sits in three places: building Garage Collective into an AI-first marketing and growth group; backing startups and founders with capital, strategy, storytelling and market access; and creating original IPs across content, music, education and brand-led entertainment.',
    'I’m a Charter Member at TiE Delhi, an investor, and a believer in building profitable, scalable, India-first businesses that can compete globally. For collaborations, brand-growth mandates, startup partnerships, AI-led marketing systems or investment conversations — let’s connect.',
  ],
  // "At a glance" facts — verifiable from the live site and LinkedIn (/in/activeindian).
  facts: [
    { label: 'Founder', value: 'Garage Collective' },
    { label: 'Focus', value: 'AI-first creative & growth' },
    { label: 'Co-founder', value: 'Korporate Karma (2009)' },
    { label: 'Member', value: 'TiE Delhi (Charter)' },
    { label: 'Reach', value: 'India & United States' },
    { label: 'Certified', value: 'Google AdWords' },
    { label: 'Languages', value: 'English · German' },
    { label: 'Track record', value: '~20 years · 500+ brands' },
  ],
} as const;
