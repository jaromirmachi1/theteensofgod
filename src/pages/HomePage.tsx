import { motion, type Variants } from 'framer-motion'
import styled from 'styled-components'
import HeroSection from '../sections/HeroSection'

const Main = styled.main`
  min-height: 100vh;
  background: #02030a;
  color: #f7f5ee;
`

const Sections = styled.div`
  position: relative;
  z-index: 1;
`

const Section = styled(motion.section)<{ $tone?: 'cream' | 'navy' | 'blue' }>`
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
  padding: clamp(4rem, 9vw, 7rem) clamp(1rem, 5vw, 4rem);
  scroll-margin-top: 2rem;
  background: ${({ $tone }) =>
    $tone === 'navy'
      ? '#050712'
      : $tone === 'blue'
        ? 'linear-gradient(135deg, #11148e, #5e62f5 52%, #ae66d7)'
        : 'radial-gradient(circle at 82% 4%, rgba(94, 98, 245, 0.2), transparent 26rem), #02030a'};
  color: #f7f5ee;
`

const SectionIntro = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 58rem;
`

const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(18rem, 1.1fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Eyebrow = styled.p`
  margin: 0;
  color: #b9b7ff;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const SectionTitle = styled.h2`
  max-width: 13ch;
  margin: 0;
  font-size: clamp(2.8rem, 8vw, 7.4rem);
  line-height: 0.86;
  letter-spacing: -0.075em;
  text-wrap: balance;
`

const SectionText = styled.p`
  max-width: 64ch;
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.18rem);
  line-height: 1.75;
  color: currentColor;
  opacity: 0.7;
`

const Lead = styled.p`
  max-width: 52rem;
  margin: 0;
  font-size: clamp(1.35rem, 3vw, 2.35rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.045em;
`

const Card = styled(motion.article)<{ $accent?: 'green' | 'purple' | 'blue' }>`
  display: grid;
  align-content: start;
  gap: 1rem;
  min-height: 18rem;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid rgba(247, 245, 238, 0.12);
  border-radius: 2rem;
  background:
    linear-gradient(180deg, rgba(247, 245, 238, 0.1), rgba(247, 245, 238, 0.025)),
    rgba(8, 10, 24, 0.72);
  box-shadow: inset 0 1px 0 rgba(247, 245, 238, 0.08);

  &::before {
    content: '';
    width: 2.6rem;
    height: 0.45rem;
    border-radius: 999px;
    background: ${({ $accent }) =>
      $accent === 'green' ? '#92d6c1' : $accent === 'purple' ? '#ae66d7' : '#5e62f5'};
  }
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.35rem, 3vw, 2rem);
  line-height: 1;
  letter-spacing: -0.045em;
`

const SmallText = styled.p`
  margin: 0;
  color: currentColor;
  font-size: 0.98rem;
  line-height: 1.65;
  opacity: 0.75;
`

const LinkButton = styled.a<{ $light?: boolean }>`
  display: inline-flex;
  justify-self: start;
  align-items: center;
  min-height: 3rem;
  padding: 0.85rem 1.1rem;
  border: 1px solid ${({ $light }) => ($light ? 'rgba(247, 245, 238, 0.22)' : 'rgba(185, 183, 255, 0.54)')};
  border-radius: 999px;
  background: ${({ $light }) => ($light ? 'rgba(247, 245, 238, 0.08)' : 'rgba(94, 98, 245, 0.72)')};
  color: #f7f5ee;
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
  border-radius: 2.2rem;
  background:
    radial-gradient(circle at 15% 10%, rgba(174, 102, 215, 0.26), transparent 18rem),
    rgba(2, 3, 10, 0.82);
  color: #f7f5ee;
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.24);

  @media (max-width: 860px) {
    position: static;
  }
`

const StatNumber = styled.p`
  margin: 0;
  color: #92d6c1;
  font-size: clamp(4.8rem, 14vw, 10rem);
  font-weight: 900;
  line-height: 0.78;
  letter-spacing: -0.1em;
`

const StatLabel = styled.p`
  margin: 0;
  max-width: 24rem;
  font-size: clamp(1.1rem, 2.4vw, 1.6rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.035em;
`

const QuoteGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Quote = styled(motion.blockquote)`
  display: grid;
  align-content: space-between;
  gap: 2rem;
  min-height: 20rem;
  margin: 0;
  padding: clamp(1.4rem, 4vw, 2.4rem);
  border-left: 0.45rem solid #b9b7ff;
  border-radius: 0 2rem 2rem 0;
  background: rgba(2, 3, 10, 0.2);
`

const QuoteText = styled.p`
  margin: 0;
  font-size: clamp(1.45rem, 3.5vw, 3rem);
  font-style: italic;
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.055em;
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

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const SocialLink = styled(motion.a)`
  display: grid;
  gap: 1rem;
  min-height: 16rem;
  padding: 1.4rem;
  border: 1px solid rgba(247, 245, 238, 0.12);
  border-radius: 2rem;
  color: #f7f5ee;
  text-decoration: none;
  background: rgba(8, 10, 24, 0.58);
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(94, 98, 245, 0.16);
  }
`

const SocialName = styled.span`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.07em;
`

const Form = styled(motion.form)`
  display: grid;
  gap: 0.85rem;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid rgba(247, 245, 238, 0.16);
  border-radius: 2rem;
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
  min-height: 3.2rem;
  border: 1px solid rgba(247, 245, 238, 0.18);
  border-radius: 1rem;
  background: rgba(247, 245, 238, 0.08);
  color: #f7f5ee;
  font: inherit;
  padding: 0 1rem;
`

const TextArea = styled.textarea`
  min-height: 8rem;
  border: 1px solid rgba(247, 245, 238, 0.18);
  border-radius: 1rem;
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
  background: #92d6c1;
  color: #02030a;
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
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-radius: 999px;
  color: rgba(247, 245, 238, 0.72);
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
    transition: { duration: 0.9, ease: calmEase },
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
          aria-labelledby="project-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          <Split>
            <SectionIntro>
              <Eyebrow>O projektu</Eyebrow>
              <SectionTitle id="project-title">Starší sourozenec pro nový svět</SectionTitle>
            </SectionIntro>
            <div>
              <Lead>
                The Teens of God stojí mezi dvěma světy: teenagery, kteří
                potřebují slyšet pravdu bez pózy, a školami, které hledají hlas,
                kterému děti opravdu věnují pozornost.
              </Lead>
              <SectionText>
                Kristýna Sekaninová, zakladatelka projektu, je ročník 1999.
                Nejstarší Gen Z, která se vrací do škol mluvit o věcech, které
                v osnovách často chybí: digitální svět, AI, emoční inteligence,
                vztahy a řeč těla.
              </SectionText>
            </div>
          </Split>
        </Section>

        <Section
          aria-labelledby="paths-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionIntro>
            <Eyebrow>Dvě cesty</Eyebrow>
            <SectionTitle id="paths-title">Digitální svět. Lidskost.</SectionTitle>
          </SectionIntro>
          <Grid>
            <Card $accent="blue" variants={calmCard} whileHover={{ y: -8 }} transition={{ duration: 0.35 }}>
              <CardTitle>Svět tam venku</CardTitle>
              <SmallText>
                AI, screentime, algoritmy a návyky, které rozhodují o tom, jak
                mladý člověk přemýšlí, odpočívá a vnímá sám sebe.
              </SmallText>
            </Card>
            <Card $accent="green" variants={calmCard} whileHover={{ y: -8 }} transition={{ duration: 0.35 }}>
              <CardTitle>Ty sám</CardTitle>
              <SmallText>
                Emoce, tlak, pozornost, hranice a naděje bez infantilního tónu.
                Obsah pro teenagery, kteří poznají, když někdo jen hraje roli.
              </SmallText>
            </Card>
            <Card $accent="purple" variants={calmCard} whileHover={{ y: -8 }} transition={{ duration: 0.35 }}>
              <CardTitle>Ty s druhými</CardTitle>
              <SmallText>
                Řeč těla, vztahy a schopnost rozumět lidem kolem sebe. Méně
                pouček, více konkrétních situací z reálného života.
              </SmallText>
            </Card>
          </Grid>
        </Section>

        <Section
          id="prednasky"
          $tone="navy"
          aria-labelledby="lectures-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          <Split>
            <SectionIntro>
              <Eyebrow>Přednášky</Eyebrow>
              <SectionTitle id="lectures-title">Pro školy, které chtějí víc než program do rozvrhu</SectionTitle>
              <LinkButton $light href="#kontakt">
                Chci Kristýnu na přednášku
              </LinkButton>
            </SectionIntro>
            <StatPanel aria-label="Výsledek po přednášce" variants={calmCard}>
              <StatNumber>62,5%</StatNumber>
              <StatLabel>
                dětí začalo Kristýnu sledovat po přednášce. Z jedné skupiny 40
                dětí to bylo 25 lidí.
              </StatLabel>
              <SmallText>
                Pro školy je to jasný signál: děti necítí povinnost. Cítí, že
                ten hlas patří do jejich světa.
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
        </Section>

        <Section
          id="recenze"
          $tone="blue"
          aria-labelledby="reviews-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionIntro>
            <Eyebrow>Reference</Eyebrow>
            <SectionTitle id="reviews-title">Důkaz musí znít od dětí i dospělých</SectionTitle>
          </SectionIntro>
          <QuoteGrid>
            <Quote variants={calmCard}>
              <QuoteText>
                „Nejsilnější reference nejsou dokonalé věty. Jsou to zprávy od
                dětí, které po přednášce zůstaly, začaly sledovat a chtěly
                pokračovat.“
              </QuoteText>
              <QuoteMeta>Teenager pohled</QuoteMeta>
            </Quote>
            <Quote variants={calmCard}>
              <QuoteText>
                „Škola potřebuje vidět, že autenticita není riziko. Je to
                důvod, proč děti poslouchají.“
              </QuoteText>
              <QuoteMeta>Školní pohled</QuoteMeta>
            </Quote>
          </QuoteGrid>
        </Section>

        <Section
          id="o-nas"
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
            <div>
              <Lead>
                Pozice Kristýny není kouč ani vzdálený expert. Je to někdo, kdo
                rozumí digitální realitě mladých a umí ji přeložit dospělým.
              </Lead>
              <SectionText>
                Web proto nesmí působit jako motivační plakát. Má být shelter:
                únik z naleštěné reality do místa, kde je upřímnost, teplo a
                naděje.
              </SectionText>
              <PillList aria-label="Hodnoty projektu">
                <Pill>Autenticita</Pill>
                <Pill>Naděje</Pill>
                <Pill>Srozumitelnost</Pill>
              </PillList>
            </div>
          </Split>
        </Section>

        <Section
          id="najdi-me"
          aria-labelledby="social-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionIntro>
            <Eyebrow>Obsah</Eyebrow>
            <SectionTitle id="social-title">Najdi mě tam, kde už jsi</SectionTitle>
            <SectionText>
              Žádná těžká knihovna obsahu. The Teens of God žije na platformách,
              kde teenageři opravdu tráví čas.
            </SectionText>
          </SectionIntro>
          <SocialGrid>
            {socials.map((social) => (
              <SocialLink
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                variants={calmCard}
                whileHover={{ y: -8 }}
              >
                <SocialName>{social.name}</SocialName>
                <SmallText>{social.text}</SmallText>
                <SmallText>@theTeensOfGod</SmallText>
              </SocialLink>
            ))}
          </SocialGrid>
        </Section>

        <Section
          id="kontakt"
          $tone="navy"
          aria-labelledby="contact-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Split>
            <SectionIntro>
              <Eyebrow>Kontakt</Eyebrow>
              <SectionTitle id="contact-title">Přiveď Kristýnu k vám</SectionTitle>
              <SectionText>
                Formulář drží jen to, co škola nebo organizace opravdu
                potřebuje poslat. Bez zbytečných polí, bez tření.
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
        </Section>
      </Sections>
    </Main>
  )
}

export default HomePage
