/**
 * "What I do" — the work Garage Collective spans, as described by Saurabh Gupta
 * (LinkedIn /in/activeindian). An AI-first creative and growth group: strategy,
 * storytelling, media, automation, production and brand-IP creation, end to end.
 */

export type Capability = { num: string; title: string; note: string };

export const portfolioIntro =
  'An AI-first creative and growth group — strategy, storytelling, media, automation, performance marketing, content production and brand-IP creation, end to end.';

export const capabilities: Capability[] = [
  {
    num: '01',
    title: 'Brand strategy & campaigns',
    note: 'Creative direction, communication strategy, brand launches, repositioning and integrated campaigns.',
  },
  {
    num: '02',
    title: 'Media & performance marketing',
    note: 'Digital growth, lead generation, e-commerce campaigns, media planning and ROI-focused execution.',
  },
  {
    num: '03',
    title: 'Film, content & production',
    note: 'Ad films, brand films, anthems, launch videos, documentaries, music and IP-led content.',
  },
  {
    num: '04',
    title: 'AI, automation & transformation',
    note: 'AI-led marketing workflows, automation systems, content engines, websites, funnels and growth infrastructure.',
  },
  {
    num: '05',
    title: 'Government & institutional',
    note: 'Large-format communication, event strategy, public-sector campaigns, skilling and digital enablement.',
  },
  {
    num: '06',
    title: 'Original IP & content',
    note: 'Original IPs across content, music, education and brand-led entertainment.',
  },
];
