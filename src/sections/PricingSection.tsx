import { motion, type Variants } from 'framer-motion'
import styled from 'styled-components'
import { pricingTiers } from '../data/pricing'
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
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border: 1px solid rgba(247, 245, 238, 0.12);
  border-radius: clamp(2rem, 6vw, 5rem);
  background:
    radial-gradient(circle at 12% 14%, rgba(151, 203, 143, 0.2), transparent 23rem),
    radial-gradient(circle at 88% 24%, rgba(244, 181, 255, 0.14), transparent 22rem),
    radial-gradient(circle at 50% 92%, rgba(94, 98, 245, 0.18), transparent 25rem),
    #070916;
  color: #f7f5ee;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.2);
`

const Layout = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(18rem, 1.15fr);
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: center;
  width: 100%;
  min-height: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
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
`

const IntroText = styled.p`
  ${typeBody};
  max-width: 46ch;
  color: rgba(247, 245, 238, 0.68);
`

const PricingNote = styled.p`
  ${typeBody};
  max-width: 44ch;
  color: rgba(247, 245, 238, 0.52);
`

const TierList = styled.div`
  display: grid;
  gap: clamp(0.8rem, 2vw, 1rem);
  min-width: 0;
`

const TierCard = styled(motion.article)<{ $featured?: boolean }>`
  position: relative;
  display: grid;
  gap: clamp(0.85rem, 2vw, 1rem);
  padding: clamp(1.2rem, 3vw, 1.8rem);
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
  backdrop-filter: blur(24px);

  &::before {
    content: '';
    width: 2.6rem;
    height: 0.42rem;
    border-radius: 999px;
    background: ${({ $featured }) =>
      $featured ? 'linear-gradient(90deg, #97cb8f, #f4b5ff)' : 'rgba(247, 245, 238, 0.24)'};
  }
`

const TierMain = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: clamp(1rem, 3vw, 2rem);
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`

const TierCopy = styled.div`
  display: grid;
  gap: 0.35rem;
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
  line-height: 1.5;
`

const TierPriceBlock = styled.div`
  display: grid;
  justify-items: end;
  gap: 0.25rem;
  align-self: start;
  padding: 0.75rem 0.9rem;
  border: 1px solid rgba(247, 245, 238, 0.1);
  border-radius: 1.25rem;
  background: rgba(2, 3, 10, 0.28);
  text-align: right;

  @media (max-width: 640px) {
    justify-items: start;
    text-align: left;
    width: fit-content;
  }
`

const TierPrice = styled.p`
  margin: 0;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: rgba(247, 245, 238, 0.8);
`

const TierPriceNote = styled.p`
  margin: 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(247, 245, 238, 0.46);
`

const TierFootnote = styled.p`
  ${typeBody};
  margin: 0;
  padding-top: clamp(0.75rem, 2vw, 1rem);
  border-top: 1px solid rgba(247, 245, 238, 0.09);
  color: rgba(247, 245, 238, 0.52);
  line-height: 1.55;
  font-size: 0.92rem;
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
          <PricingNote>
            Cestovné se počítá zvlášť podle vzdálenosti od Vyškova. Škola vždy ví výslednou cenu dopředu.
          </PricingNote>
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
            >
              <TierMain>
                <TierCopy>
                  <TierTitle>
                    {tier.title}
                    {'featured' in tier && tier.featured ? <TierBadge>Výhodnější</TierBadge> : null}
                  </TierTitle>
                  <TierMeta>{tier.meta}</TierMeta>
                </TierCopy>
                <TierPriceBlock>
                  <TierPrice>{tier.price}</TierPrice>
                  <TierPriceNote>{tier.priceNote}</TierPriceNote>
                </TierPriceBlock>
              </TierMain>
              <TierFootnote>{tier.footnote}</TierFootnote>
            </TierCard>
          ))}
        </TierList>
      </Layout>
    </Section>
  )
}

export default PricingSection
