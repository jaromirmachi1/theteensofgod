import { css } from 'styled-components'

/** Central type scale – reuse these sizes instead of ad-hoc clamp values. */
export const typeScale = {
  h1: 'clamp(3rem, 8.5vw, 6rem)',
  h2: 'clamp(2.35rem, 5.5vw, 4.25rem)',
  h3: 'clamp(1.4rem, 2.6vw, 1.9rem)',
  lead: 'clamp(1.05rem, 2vw, 1.45rem)',
  body: 'clamp(1rem, 1.6vw, 1.1rem)',
  bodySmall: '0.95rem',
  eyebrow: '0.78rem',
  stat: 'clamp(2.75rem, 8vw, 5.5rem)',
  quote: 'clamp(1.25rem, 2.8vw, 2rem)',
  social: 'clamp(1.75rem, 4vw, 2.75rem)',
} as const

export const headingH1 = css`
  margin: 0;
  font-size: ${typeScale.h1};
  font-weight: 900;
  line-height: 0.84;
  letter-spacing: -0.065em;
  text-wrap: balance;
`

export const headingH2 = css`
  margin: 0;
  font-size: ${typeScale.h2};
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: -0.075em;
  text-wrap: balance;
`

export const headingH3 = css`
  margin: 0;
  font-size: ${typeScale.h3};
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.045em;
`

export const typeLead = css`
  margin: 0;
  font-size: ${typeScale.lead};
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
`

export const typeBody = css`
  margin: 0;
  font-size: ${typeScale.body};
  line-height: 1.65;
`

export const typeEyebrow = css`
  margin: 0;
  font-size: ${typeScale.eyebrow};
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

export const typeStat = css`
  margin: 0;
  font-size: ${typeScale.stat};
  font-weight: 900;
  line-height: 0.78;
  letter-spacing: -0.1em;
`

export const typeQuote = css`
  margin: 0;
  font-size: ${typeScale.quote};
  font-style: italic;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.05em;
`

export const typeSocial = css`
  font-size: ${typeScale.social};
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.07em;
`
