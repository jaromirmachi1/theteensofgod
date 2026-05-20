import { motion, type Variants } from 'framer-motion'
import styled from 'styled-components'
import {
  headingH2,
  headingH3,
  typeBody,
  typeEyebrow,
  typeLead,
  typeQuote,
  typeSocial,
  typeStat,
} from '../styles/typography'
import { referenceRows } from '../data/references'
import HeroSection from '../sections/HeroSection'
import LectureVideoSection from '../sections/LectureVideoSection'
import PricingSection from '../sections/PricingSection'

const Main = styled.main`
  min-height: 100vh;
  scroll-snap-type: y proximity;
  background:
    radial-gradient(circle at 12% 4%, rgba(151, 203, 143, 0.14), transparent 22rem),
    radial-gradient(circle at 88% 12%, rgba(244, 181, 255, 0.13), transparent 24rem),
    #05070d;
  color: #f7f5ee;
`

const Sections = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
`

type ViewportHeight = 50 | 100

const sectionHeight = (vh: ViewportHeight) => `${vh}svh`

const Section = styled(motion.section)<{
  $tone?: 'cream' | 'navy' | 'blue'
  $vh?: ViewportHeight
  $fit?: boolean
  $start?: boolean
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $start }) => ($start ? 'flex-start' : 'center')};
  gap: clamp(1.25rem, 3vw, 2rem);
  min-height: ${({ $vh = 100 }) => sectionHeight($vh)};
  ${({ $vh, $fit }) => {
    const height = $fit ? 100 : $vh
    if (height === 50) {
      return `
        height: 50svh;
        max-height: 50svh;
        overflow: hidden;
        justify-content: flex-start;
        gap: clamp(0.65rem, 1.5vw, 1rem);
      `
    }
    if ($fit) {
      return `
        height: 100svh;
        max-height: 100svh;
        overflow: hidden;
      `
    }
    return ''
  }}
  padding: ${({ $vh, $fit }) =>
    $vh === 50 && !$fit
      ? 'clamp(1rem, 2.5vw, 1.75rem) clamp(1.2rem, 5vw, 4rem)'
      : 'clamp(1.75rem, 4vw, 3.5rem) clamp(1.2rem, 5vw, 4rem)'};
  padding-bottom: ${({ $vh, $fit }) =>
    $vh === 50 && !$fit ? 'clamp(3.25rem, 5vw, 4rem)' : 'clamp(5rem, 10vw, 6.5rem)'};

  scroll-margin-top: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border: 1px solid
    ${({ $tone }) => ($tone === 'cream' ? 'rgba(5, 7, 13, 0.08)' : 'rgba(247, 245, 238, 0.12)')};
  border-radius: clamp(2rem, 6vw, 5rem);
  background: ${({ $tone }) =>
    $tone === 'navy'
      ? 'radial-gradient(circle at 12% 16%, rgba(151, 203, 143, 0.16), transparent 22rem), #070916'
      : $tone === 'blue'
        ? 'linear-gradient(135deg, #11148e, #5e62f5 50%, #f4b5ff)'
        : $tone === 'cream'
          ? 'linear-gradient(135deg, #f6f0df, #dfffb0)'
          : 'radial-gradient(circle at 82% 4%, rgba(94, 98, 245, 0.22), transparent 26rem), #090b14'};
  color: ${({ $tone }) => ($tone === 'cream' ? '#070916' : '#f7f5ee')};
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.2);
`

const SectionIntro = styled.div`
  display: grid;
  gap: clamp(0.75rem, 2vw, 1rem);
  max-width: 58rem;
`

const SectionBody = styled.div`
  display: grid;
  gap: clamp(0.85rem, 2vw, 1.25rem);
`

const SectionScroll = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  overflow-y: auto;
  padding-right: 0.15rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(151, 203, 143, 0.35) transparent;
`

const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(18rem, 1.1fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.8rem, 2vw, 1.2rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const CreamMerged = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);
  gap: clamp(1rem, 2.5vw, 1.75rem);
  width: 100%;
`

const CreamDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(5, 7, 13, 0.14) 12%,
    rgba(5, 7, 13, 0.14) 88%,
    transparent
  );
`

const CreamPathsBlock = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: clamp(0.85rem, 2vw, 1.25rem);
  min-height: 0;
`

const PathsGrid = styled(Grid)`
  min-height: 0;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(9.5rem, 1fr));
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 0.15rem;
    scroll-snap-type: x proximity;
  }
`

const PathsTitle = styled.h3`
  ${headingH3};
  max-width: 16ch;
`

const Eyebrow = styled.p<{ $onCream?: boolean }>`
  ${typeEyebrow};
  color: ${({ $onCream }) => ($onCream ? '#11148e' : '#97cb8f')};
`

const SectionTitle = styled.h2`
  ${headingH2};
  max-width: 13ch;
`

const SectionText = styled.p`
  ${typeBody};
  max-width: 64ch;
  line-height: 1.7;
  color: currentColor;
  opacity: 0.7;
`

const Lead = styled.p`
  ${typeLead};
  max-width: 52rem;
`

const Card = styled(motion.article)<{ $accent?: 'green' | 'purple' | 'blue' }>`
  display: grid;
  align-content: start;
  gap: 0.85rem;
  min-height: 0;
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-radius: clamp(2rem, 4vw, 3rem);
  background:
    radial-gradient(
      circle at 22% 18%,
      ${({ $accent }) =>
        $accent === 'green'
          ? 'rgba(151, 203, 143, 0.18)'
          : $accent === 'purple'
            ? 'rgba(244, 181, 255, 0.2)'
            : 'rgba(94, 98, 245, 0.22)'},
      transparent 13rem
    ),
    linear-gradient(180deg, rgba(247, 245, 238, 0.11), rgba(247, 245, 238, 0.03)),
    rgba(8, 10, 24, 0.72);
  box-shadow: inset 0 1px 0 rgba(247, 245, 238, 0.08);
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    border-color: rgba(247, 245, 238, 0.28);
    box-shadow:
      inset 0 1px 0 rgba(247, 245, 238, 0.1),
      0 1.5rem 4rem rgba(0, 0, 0, 0.24);
  }

  &::before {
    content: '';
    width: 2.6rem;
    height: 0.45rem;
    border-radius: 999px;
    background: ${({ $accent }) =>
      $accent === 'green' ? '#97cb8f' : $accent === 'purple' ? '#f4b5ff' : '#5e62f5'};
  }
`

const CardTitle = styled.h3`
  ${headingH3};
`

const SmallText = styled.p`
  ${typeBody};
  color: currentColor;
  opacity: 0.75;
`

const LinkButton = styled.a<{ $light?: boolean }>`
  display: inline-flex;
  justify-self: start;
  align-items: center;
  min-height: 3rem;
  padding: 0.85rem 1.1rem;
  border: 1px solid ${({ $light }) => ($light ? 'rgba(151, 203, 143, 0.34)' : 'rgba(151, 203, 143, 0.54)')};
  border-radius: 999px;
  background: ${({ $light }) => ($light ? 'rgba(151, 203, 143, 0.1)' : '#97cb8f')};
  color: ${({ $light }) => ($light ? '#f7f5ee' : '#070916')};
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
`

const StatPanel = styled(motion.aside)`
  position: sticky;
  top: 2rem;
  display: grid;
  gap: 1rem;
  padding: clamp(1.4rem, 4vw, 2.4rem);
  border: 1px solid rgba(247, 245, 238, 0.12);
  border-radius: clamp(2rem, 5vw, 4rem);
  background:
    radial-gradient(circle at 15% 10%, rgba(151, 203, 143, 0.18), transparent 18rem),
    radial-gradient(circle at 80% 82%, rgba(244, 181, 255, 0.18), transparent 16rem),
    rgba(2, 3, 10, 0.82);
  color: #f7f5ee;
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.24);

  @media (max-width: 860px) {
    position: static;
  }
`

const StatNumber = styled.p`
  ${typeStat};
  color: #97cb8f;
`

const StatLabel = styled.p`
  ${typeLead};
  max-width: 24rem;
  letter-spacing: -0.035em;
`

const QuoteGrid = styled(motion.div)`
  display: grid;
  gap: 1rem;
  width: 100%;
`

const QuoteRow = styled.div<{ $flip?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $flip }) => ($flip ? '0.8fr 1.2fr' : '1.2fr 0.8fr')};
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Quote = styled.blockquote`
  display: grid;
  align-content: space-between;
  gap: 1.5rem;
  min-height: 0;
  margin: 0;
  padding: clamp(1.4rem, 4vw, 2.4rem);
  border: 1px solid rgba(247, 245, 238, 0.16);
  border-left: 0.55rem solid #97cb8f;
  border-radius: clamp(2rem, 4vw, 3rem);
  background:
    radial-gradient(circle at 12% 8%, rgba(151, 203, 143, 0.12), transparent 14rem),
    rgba(2, 3, 10, 0.42);
  box-shadow: 0 1.25rem 3rem rgba(0, 0, 0, 0.22);
`

const QuoteText = styled.p`
  ${typeQuote};
`

const QuoteMeta = styled.footer`
  color: currentColor;
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  opacity: 0.68;
  text-transform: uppercase;
`

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const SocialLink = styled(motion.a)`
  display: grid;
  gap: 0.85rem;
  min-height: 0;
  padding: clamp(1.2rem, 2.5vw, 1.6rem);
  border: 1px solid rgba(247, 245, 238, 0.12);
  border-radius: clamp(2rem, 4vw, 3rem);
  color: #f7f5ee;
  text-decoration: none;
  background: rgba(8, 10, 24, 0.58);
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(151, 203, 143, 0.12);
  }
`

const SocialName = styled.span`
  ${typeSocial};
`

const SocialBlock = styled.div`
  display: grid;
  gap: clamp(0.85rem, 2vw, 1.25rem);
  width: 100%;
`

const SocialIntro = styled.p`
  ${typeBody};
  margin: 0;
  max-width: 42ch;
  color: rgba(247, 245, 238, 0.72);
`

const Form = styled(motion.form)`
  display: grid;
  gap: 0.65rem;
  padding: clamp(1rem, 2.5vw, 1.5rem);
  border: 1px solid rgba(247, 245, 238, 0.16);
  border-radius: clamp(2rem, 4vw, 3rem);
  background: rgba(247, 245, 238, 0.06);
`

const Field = styled.label`
  display: grid;
  gap: 0.4rem;
  color: rgba(247, 245, 238, 0.72);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

const Input = styled.input`
  min-height: 2.85rem;
  border: 1px solid rgba(247, 245, 238, 0.18);
  border-radius: 1.2rem;
  background: rgba(247, 245, 238, 0.08);
  color: #f7f5ee;
  font: inherit;
  padding: 0 1rem;
`

const TextArea = styled.textarea`
  min-height: 5.5rem;
  border: 1px solid rgba(247, 245, 238, 0.18);
  border-radius: 1.2rem;
  background: rgba(247, 245, 238, 0.08);
  color: #f7f5ee;
  font: inherit;
  padding: 1rem;
  resize: vertical;
`

const Submit = styled.button`
  min-height: 3.25rem;
  border: 0;
  border-radius: 999px;
  background: #97cb8f;
  color: #070916;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const PillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Pill = styled.li`
  padding: 0.55rem 0.8rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  color: currentColor;
  font-size: 0.8rem;
  font-weight: 800;
`

const lectureThemes = [
  {
    title: 'Digitální svět bez ztráty mozku',
    text: 'AI, screentime, algoritmy a praktické způsoby, jak se v online prostoru neztratit.',
    fit: 'Pro 2. stupeň ZŠ, střední školy a organizace pracující s teenagery.',
    accent: 'blue',
  },
  {
    title: 'Řeč těla a emoce v realitě',
    text: 'Jak číst sebe i druhé, rozumět reakcím a zůstat člověkem i pod tlakem.',
    fit: 'Pro třídy, adaptační programy, preventivní bloky a HR týmy.',
    accent: 'green',
  },
  {
    title: 'Vztahy, tlak a naděje',
    text: 'Bez motivačních frází. Upřímně o tom, co teenager prožívá a málokdy řekne nahlas.',
    fit: 'Pro školy, komunitní akce, festivaly a rodičovské programy.',
    accent: 'purple',
  },
] as const

const socials = [
  {
    name: 'TikTok',
    text: 'Krátké formáty pro teenagery, které mluví jejich jazykem.',
    href: 'https://www.tiktok.com/@theteensofgod',
  },
  {
    name: 'Instagram',
    text: 'Zákulisí, myšlenky, pozvánky a vizuální svět projektu.',
    href: 'https://www.instagram.com/theteensofgod',
  },
  {
    name: 'YouTube',
    text: 'Delší obsah, rozhovory a budoucí video formáty.',
    href: 'https://www.youtube.com/@theteensofgod',
  },
] as const

const calmEase = [0.22, 1, 0.36, 1] as const

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: calmEase,
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
}

const quoteReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: calmEase },
  },
}

const calmCard: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: calmEase },
  },
}

function HomePage() {
  return (
    <Main>
      <HeroSection />
      <Sections>
        <Section
          id="o-projektu"
          $tone="cream"
          $vh={100}
          $fit
          aria-labelledby="project-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          <CreamMerged>
            <Split>
              <SectionIntro>
                <Eyebrow $onCream>O projektu</Eyebrow>
                <SectionTitle id="project-title">Starší sourozenec pro nový svět</SectionTitle>
              </SectionIntro>
              <SectionBody>
                <Lead>
                  The Teens of God propojuje dva světy: teenagery, kteří chtějí mluvit otevřeně a bez
                  přetvářky, a školy, které hledají srozumitelný způsob, jak k mladým opravdu promluvit.
                </Lead>
                <SectionText>
                  Kristýna Sekaninová, zakladatelka projektu, je ročník 1999. Jako zástupkyně starší Gen Z se
                  vrací do škol a otevírá témata, která v běžné výuce často chybí: AI, digitální návyky,
                  vztahy, emoční inteligenci a práci s tlakem.
                </SectionText>
              </SectionBody>
            </Split>

            <CreamDivider aria-hidden="true" />

            <CreamPathsBlock id="temata" aria-labelledby="paths-title">
              <SectionIntro>
                <Eyebrow $onCream>Dvě cesty</Eyebrow>
                <PathsTitle id="paths-title">Digitální svět. Lidskost.</PathsTitle>
              </SectionIntro>
              <PathsGrid>
                <Card $accent="blue" variants={calmCard} whileHover={{ y: -8 }} transition={{ duration: 0.35 }}>
                  <CardTitle>Svět tam venku</CardTitle>
                  <SmallText>
                    AI, algoritmy a digitální návyky, které formují pozornost, rozhodování i každodenní
                    psychickou pohodu.
                  </SmallText>
                </Card>
                <Card $accent="green" variants={calmCard} whileHover={{ y: -8 }} transition={{ duration: 0.35 }}>
                  <CardTitle>Ty sám</CardTitle>
                  <SmallText>
                    Emoce, hranice, sebevědomí a tlak okolí bez infantilního tónu. Obsah, který respektuje
                    realitu mladých lidí.
                  </SmallText>
                </Card>
                <Card $accent="purple" variants={calmCard} whileHover={{ y: -8 }} transition={{ duration: 0.35 }}>
                  <CardTitle>Ty s druhými</CardTitle>
                  <SmallText>
                    Vztahy, komunikace a řeč těla v konkrétních situacích z reálného života. Prakticky,
                    srozumitelně a bez pouček.
                  </SmallText>
                </Card>
              </PathsGrid>
            </CreamPathsBlock>
          </CreamMerged>
        </Section>

        <LectureVideoSection />

        <Section
          id="prednasky"
          $tone="navy"
          $fit
          aria-labelledby="lectures-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          <SectionScroll>
            <Split>
              <SectionIntro>
                <Eyebrow>Přednášky</Eyebrow>
                <SectionTitle id="lectures-title">Pro školy, které chtějí víc než program do rozvrhu</SectionTitle>
                <LinkButton $light href="#cenik">
                  Chci Kristýnu na přednášku
                </LinkButton>
              </SectionIntro>
              <StatPanel aria-label="Výsledek po přednášce" variants={calmCard}>
                <StatNumber>62,5%</StatNumber>
                <StatLabel>
                  účastníků začalo po přednášce Kristýnu aktivně sledovat. V jedné skupině 40 dětí to bylo 25
                  lidí.
                </StatLabel>
                <SmallText>
                  Pro školy je to jasný signál: nejde o povinný program, ale o hlas, který mladí berou jako
                  důvěryhodný a blízký.
                </SmallText>
              </StatPanel>
            </Split>

            <Grid>
              {lectureThemes.map((theme) => (
                <Card key={theme.title} $accent={theme.accent} variants={calmCard} whileHover={{ y: -8 }}>
                  <CardTitle>{theme.title}</CardTitle>
                  <SmallText>{theme.text}</SmallText>
                  <SmallText>
                    <strong>Vhodné:</strong> {theme.fit}
                  </SmallText>
                </Card>
              ))}
            </Grid>
          </SectionScroll>
        </Section>

        <Section
          id="recenze"
          $tone="blue"
          $vh={100}
          $start
          aria-labelledby="reviews-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <SectionIntro>
            <Eyebrow>Reference</Eyebrow>
            <SectionTitle id="reviews-title">Důkaz musí znít od dětí i dospělých</SectionTitle>
            <Lead>
              Nejde o marketingové citace. Jde o to, co říkají teenageři po přednášce
              a co školy vidí ve třídě hned potom.
            </Lead>
          </SectionIntro>
          <QuoteGrid variants={quoteReveal}>
            {referenceRows.map((row, rowIndex) => (
              <QuoteRow key={rowIndex} $flip={rowIndex % 2 === 1}>
                {row.map((item) => (
                  <Quote key={item.meta}>
                    <QuoteText>{item.text}</QuoteText>
                    <QuoteMeta>{item.meta}</QuoteMeta>
                  </Quote>
                ))}
              </QuoteRow>
            ))}
          </QuoteGrid>
        </Section>

        <PricingSection />

        <Section
          id="o-nas"
          $vh={100}
          aria-labelledby="about-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Split>
            <SectionIntro>
              <Eyebrow>Kdo jsem</Eyebrow>
              <SectionTitle id="about-title">Ne expertka na pódiu. Člověk, který už za branou stál.</SectionTitle>
            </SectionIntro>
            <SectionBody>
              <Lead>
                Kristýna není kouč z odstupu ani teoretik zvenčí. Je to průvodce,
                který rozumí digitální realitě mladých a umí ji přeložit
                rodičům, učitelům i školám.
              </Lead>
              <SectionText>
                Proto má projekt působit jako bezpečný prostor: místo, kde je
                možné mluvit otevřeně, prakticky a s respektem k tomu, co mladí
                skutečně prožívají.
              </SectionText>
              <PillList aria-label="Hodnoty projektu">
                <Pill>Autenticita</Pill>
                <Pill>Naděje</Pill>
                <Pill>Srozumitelnost</Pill>
              </PillList>
            </SectionBody>
          </Split>
        </Section>

        <Section
          id="kontakt"
          $tone="navy"
          $fit
          aria-labelledby="contact-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionScroll>
            <Split>
              <SectionIntro>
                <Eyebrow>Kontakt</Eyebrow>
                <SectionTitle id="contact-title">Přiveď Kristýnu k vám</SectionTitle>
                <SectionText>
                  Formulář obsahuje jen to podstatné, aby se škola nebo organizace mohla rychle ozvat a
                  domluvit další kroky bez zbytečné administrativy.
                </SectionText>
              </SectionIntro>
              <Form name="lecture-inquiry" method="post" variants={calmCard}>
                <Field>
                  Jméno
                  <Input name="name" autoComplete="name" required />
                </Field>
                <Field>
                  Škola / Organizace
                  <Input name="organization" autoComplete="organization" required />
                </Field>
                <Field>
                  E-mail
                  <Input name="email" type="email" autoComplete="email" required />
                </Field>
                <Field>
                  Telefon
                  <Input name="phone" type="tel" autoComplete="tel" />
                </Field>
                <Field>
                  Zpráva
                  <TextArea name="message" required />
                </Field>
                <Submit type="submit">Chci Kristýnu na přednášku</Submit>
              </Form>
            </Split>
            <SocialBlock aria-label="Sociální sítě">
              <SocialIntro>
                Najdi mě tam, kde už jsi — TikTok, Instagram a YouTube, bez složité knihovny obsahu.
              </SocialIntro>
              <SocialGrid>
                {socials.map((social) => (
                  <SocialLink
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -8 }}
                  >
                    <SocialName>{social.name}</SocialName>
                    <SmallText>{social.text}</SmallText>
                    <SmallText>@theTeensOfGod</SmallText>
                  </SocialLink>
                ))}
              </SocialGrid>
            </SocialBlock>
          </SectionScroll>
        </Section>
      </Sections>
    </Main>
  )
}

export default HomePage
