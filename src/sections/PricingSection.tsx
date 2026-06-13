import { motion, type Variants } from 'framer-motion'
import styled from 'styled-components'
import { pricingTiers } from '../data/pricing'
import { mobile, shortViewport, tablet } from '../styles/breakpoints'
import { headingH2, headingH3, typeBody, typeEyebrow } from '../styles/typography'

const Section = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  min-height: 100svh;
  overflow: hidden;
  padding: clamp(1.75rem, 4vw, 3.5rem) clamp(1.2rem, 5vw, 4rem);
  padding-bottom: clamp(5rem, 10vw, 6.5rem);
  scroll-margin-top: 0;
  border: 1px solid rgba(247, 245, 238, 0.12);
  border-radius: clamp(2rem, 6vw, 5rem);
  background:
    radial-gradient(circle at 12% 14%, rgba(151, 203, 143, 0.2), transparent 23rem),
    radial-gradient(circle at 88% 24%, rgba(244, 181, 255, 0.14), transparent 22rem),
    radial-gradient(circle at 50% 92%, rgba(94, 98, 245, 0.18), transparent 25rem),
    #070916;
  color: #f7f5ee;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.2);

  ${shortViewport} {
    min-height: auto;
    justify-content: flex-start;
  }
`

const Layout = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(18rem, 1.15fr);
  gap: clamp(1.15rem, 3vw, 2rem) clamp(1.5rem, 5vw, 4rem);
  align-items: start;
  width: 100%;
  min-height: 0;

  ${tablet} {
    grid-template-columns: 1fr;
    gap: clamp(1rem, 2.5vw, 1.5rem);
  }
`

const Intro = styled.div`
  display: grid;
  gap: clamp(0.85rem, 2vw, 1.35rem);
  max-width: 42rem;
`

const Eyebrow = styled.p`
  ${typeEyebrow};
  color: #97cb8f;
`

const Title = styled.h2`
  ${headingH2};
  max-width: 14ch;

  ${tablet} {
    max-width: 18ch;
    font-size: clamp(2rem, 5vw, 3.25rem);
  }
`

const IntroText = styled.p`
  ${typeBody};
  max-width: 46ch;
  color: rgba(247, 245, 238, 0.68);
`

const TierList = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2.4vw, 1.5rem);
  min-width: 0;

  ${tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${mobile} {
    grid-template-columns: 1fr;
  }
`

const TierCard = styled(motion.article)<{ $featured?: boolean }>`
  position: relative;
  min-height: clamp(21rem, 38svh, 25rem);
  perspective: 1200px;

  ${shortViewport} {
    min-height: clamp(18rem, 30svh, 22rem);
  }

  ${tablet} {
    min-height: clamp(17rem, 28svh, 20rem);
  }

  &:focus {
    outline: 0;
  }

  &:hover > div,
  &:focus-within > div,
  &:focus > div {
    transform: rotateY(180deg);
  }
`

const TierInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: inherit;
  transform-style: preserve-3d;
  transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
`

const TierFace = styled.div<{ $featured?: boolean; $back?: boolean }>`
  position: absolute;
  inset: 0;
  display: grid;
  align-content: space-between;
  gap: clamp(1.35rem, 2.6vw, 2rem);
  padding: clamp(1.45rem, 3vw, 2rem);
  border: 1px solid
    ${({ $featured }) => ($featured ? 'rgba(151, 203, 143, 0.3)' : 'rgba(247, 245, 238, 0.12)')};
  border-radius: clamp(1.5rem, 4vw, 2.75rem);
  background: ${({ $featured }) =>
    $featured
      ? 'radial-gradient(circle at 18% 18%, rgba(151, 203, 143, 0.18), transparent 15rem), linear-gradient(180deg, rgba(247, 245, 238, 0.13), rgba(247, 245, 238, 0.04)), rgba(8, 10, 24, 0.76)'
      : 'linear-gradient(180deg, rgba(247, 245, 238, 0.09), rgba(247, 245, 238, 0.03)), rgba(8, 10, 24, 0.66)'};
  box-shadow: ${({ $featured }) =>
    $featured ? '0 1.5rem 4rem rgba(0, 0, 0, 0.24)' : '0 1rem 3rem rgba(0, 0, 0, 0.18)'};
  overflow: hidden;
  backface-visibility: hidden;
  transform: ${({ $back }) => ($back ? 'rotateY(180deg)' : 'rotateY(0)')};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${({ $back }) =>
      $back
        ? 'radial-gradient(circle at 50% 18%, rgba(151, 203, 143, 0.18), transparent 13rem)'
        : 'radial-gradient(circle at 18% 12%, rgba(244, 181, 255, 0.09), transparent 14rem)'};
  }
`

const TierStripe = styled.span<{ $featured?: boolean }>`
  display: block;
  width: 2.8rem;
  height: 0.42rem;
  margin-bottom: clamp(0.25rem, 1vw, 0.6rem);
  border-radius: 999px;
  background: ${({ $featured }) =>
    $featured ? 'linear-gradient(90deg, #97cb8f, #f4b5ff)' : 'rgba(247, 245, 238, 0.24)'};
`

const TierTop = styled.div`
  display: grid;
  gap: clamp(1.05rem, 2.2vw, 1.55rem);
`

const TierCopy = styled.div`
  display: grid;
  gap: clamp(0.7rem, 1.5vw, 1rem);
`

const TierTitle = styled.h3`
  ${headingH3};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`

const TierBadge = styled.span`
  padding: 0.35rem 0.6rem;
  border: 1px solid rgba(151, 203, 143, 0.32);
  border-radius: 999px;
  background: rgba(151, 203, 143, 0.12);
  color: #bee3b9;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const TierMeta = styled.p`
  ${typeBody};
  color: rgba(247, 245, 238, 0.62);
  line-height: 1.65;
`

const RevealHint = styled.p`
  margin: 0;
  width: fit-content;
  margin-top: clamp(0.75rem, 2vw, 1.4rem);
  padding: 0.48rem 0.72rem;
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-radius: 999px;
  background: rgba(2, 3, 10, 0.28);
  color: rgba(247, 245, 238, 0.62);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const TierPriceBlock = styled.div`
  display: grid;
  gap: clamp(0.6rem, 1.4vw, 0.9rem);
  padding-bottom: clamp(0.7rem, 1.5vw, 1rem);
  border-bottom: 1px solid rgba(247, 245, 238, 0.1);
`

const TierPrice = styled.p`
  margin: 0;
  font-size: clamp(2.2rem, 4.8vw, 3.6rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.065em;
  color: #f7f5ee;
`

const TierPriceNote = styled.p`
  margin: 0;
  color: #97cb8f;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const TierFootnote = styled.p`
  ${typeBody};
  margin: 0;
  color: rgba(247, 245, 238, 0.66);
  line-height: 1.7;
  font-size: 0.92rem;
`

const BackCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 2.75rem;
  padding: 0.75rem 0.95rem;
  border: 1px solid rgba(151, 203, 143, 0.42);
  border-radius: 999px;
  background: rgba(151, 203, 143, 0.12);
  color: #f7f5ee;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: clamp(0.3rem, 1vw, 0.75rem);
`

const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 3rem;
  padding: 0.85rem 1.1rem;
  border: 1px solid rgba(151, 203, 143, 0.42);
  border-radius: 999px;
  background: linear-gradient(135deg, #97cb8f, #9df5d1);
  color: #07110b;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #bee3b9, #b7ffe3);
  }
`

const calmEase = [0.22, 1, 0.36, 1] as const

const tierReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: calmEase },
  },
}

function PricingSection() {
  return (
    <Section id="cenik" aria-labelledby="pricing-title">
      <Layout>
        <Intro>
          <Eyebrow>Ceník</Eyebrow>
          <Title id="pricing-title">Transparentně, ale bez billboardu</Title>
          <IntroText>
            Honorář má být jasný ještě před první zprávou. Částka je tu pro orientaci, ne jako hlavní pointa.
          </IntroText>
          <Cta href="#kontakt">Domluvit termín</Cta>
        </Intro>

        <TierList>
          {pricingTiers.map((tier, index) => (
            <TierCard
              key={tier.title}
              $featured={'featured' in tier && tier.featured}
              variants={tierReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
              tabIndex={0}
              aria-label={`${tier.title}, otoč kartu pro cenu ${tier.price}`}
            >
              <TierInner>
                <TierFace $featured={'featured' in tier && tier.featured}>
                  <TierTop>
                    <TierStripe $featured={'featured' in tier && tier.featured} aria-hidden="true" />
                    <TierCopy>
                      <TierTitle>
                        {tier.title}
                        {'featured' in tier && tier.featured ? <TierBadge>Výhodnější</TierBadge> : null}
                      </TierTitle>
                      <TierMeta>{tier.meta}</TierMeta>
                    </TierCopy>
                  </TierTop>
                  <RevealHint>Hover pro cenu</RevealHint>
                </TierFace>

                <TierFace $featured={'featured' in tier && tier.featured} $back>
                  <TierTop>
                    <TierStripe $featured={'featured' in tier && tier.featured} aria-hidden="true" />
                    <TierPriceBlock>
                      <TierPrice>{tier.price}</TierPrice>
                      <TierPriceNote>{tier.priceNote}</TierPriceNote>
                    </TierPriceBlock>
                  </TierTop>
                  <TierFootnote>{tier.footnote}</TierFootnote>
                  <BackCta href="#kontakt">Domluvit termín</BackCta>
                </TierFace>
              </TierInner>
            </TierCard>
          ))}
        </TierList>
      </Layout>
    </Section>
  )
}

export default PricingSection
