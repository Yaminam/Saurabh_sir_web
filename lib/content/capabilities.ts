/**
 * Portfolio / services — the SIX categories exactly as listed on
 * activeindian.com/portfolio/. Sub-services kept as the description (the
 * original "Branding Magic / Negotiation Ninja" labels are cleaned to plain
 * language to match this site's voice; the substance is unchanged).
 */

export type Capability = { num: string; title: string; note: string };

export const portfolioIntro =
  'Turning creative visions into brands. Where ideas come to life — across creative, media, go-to-market, performance, transformation and automation.';

export const capabilities: Capability[] = [
  {
    num: '01',
    title: 'Creative services',
    note: 'Branding, content and design — memorable identities, storytelling across social and video, logos and websites.',
  },
  {
    num: '02',
    title: 'Media buying & planning',
    note: 'Media strategy and negotiation — navigating for visibility and securing the right placements and rates.',
  },
  {
    num: '03',
    title: 'Go-to-market strategy',
    note: 'Launch orchestration and consumer insight — reading market behaviour before entering it.',
  },
  {
    num: '04',
    title: 'Performance marketing',
    note: 'Metrics, conversion and campaign ROI, with relentless optimisation and refinement.',
  },
  {
    num: '05',
    title: 'Digital transformation',
    note: 'Digital guidance and technology adoption — change that actually lands.',
  },
  {
    num: '06',
    title: 'Marketing automation',
    note: 'System efficiency and audience-level personalisation.',
  },
];
