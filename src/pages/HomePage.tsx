import { motion, type Variants } from "framer-motion";
import styled from "styled-components";
import {
  headingH2,
  headingH3,
  typeBody,
  typeEyebrow,
  typeLead,
  typeSocial,
  typeStat,
} from "../styles/typography";
import HeroSection from "../sections/HeroSection";
import ProofSection from "../sections/ProofSection";
import PricingSection from "../sections/PricingSection";

const Main = styled.main`
  min-height: 100vh;
  scroll-snap-type: y proximity;
  background:
    radial-gradient(
      circle at 12% 4%,
      rgba(151, 203, 143, 0.14),
      transparent 22rem
    ),
    radial-gradient(
      circle at 88% 12%,
      rgba(244, 181, 255, 0.13),
      transparent 24rem
    ),
    #05070d;
  color: #f7f5ee;
`;

const Sections = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
`;

type ViewportHeight = 50 | 100;

const sectionHeight = (vh: ViewportHeight) => `${vh}svh`;

const Section = styled(motion.section)<{
  $tone?: "cream" | "navy" | "blue";
  $vh?: ViewportHeight;
  $fit?: boolean;
  $start?: boolean;
  $blend?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $start }) => ($start ? "flex-start" : "center")};
  gap: clamp(1.25rem, 3vw, 2rem);
  min-height: ${({ $vh = 100 }) => sectionHeight($vh)};
  ${({ $vh, $fit }) => {
    const height = $fit ? 100 : $vh;
    if (height === 50) {
      return `
        height: 50svh;
        max-height: 50svh;
        overflow: hidden;
        justify-content: flex-start;
        gap: clamp(0.65rem, 1.5vw, 1rem);
      `;
    }
    if ($fit) {
      return `
        height: 100svh;
        max-height: 100svh;
        overflow: hidden;
      `;
    }
    return "";
  }}
  padding: ${({ $vh, $fit }) =>
    $vh === 50 && !$fit
      ? "clamp(1rem, 2.5vw, 1.75rem) clamp(1.2rem, 5vw, 4rem)"
      : "clamp(1.75rem, 4vw, 3.5rem) clamp(1.2rem, 5vw, 4rem)"};
  padding-bottom: ${({ $vh, $fit }) =>
    $vh === 50 && !$fit
      ? "clamp(3.25rem, 5vw, 4rem)"
      : "clamp(5rem, 10vw, 6.5rem)"};

  scroll-margin-top: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border: 1px solid
    ${({ $tone, $blend }) =>
      $blend
        ? "transparent"
        : $tone === "cream"
          ? "rgba(5, 7, 13, 0.08)"
          : "rgba(247, 245, 238, 0.12)"};
  border-radius: ${({ $blend }) => ($blend ? "0" : "clamp(2rem, 6vw, 5rem)")};
  background: ${({ $tone, $blend }) =>
    $blend
      ? "radial-gradient(circle at 12% 18%, rgba(151, 203, 143, 0.14), transparent 22rem), radial-gradient(circle at 88% 72%, rgba(94, 98, 245, 0.16), transparent 24rem), linear-gradient(180deg, #070916 0%, rgba(7, 9, 22, 0.94) 45%, #05070d 100%)"
      : $tone === "navy"
      ? "radial-gradient(circle at 12% 16%, rgba(151, 203, 143, 0.16), transparent 22rem), #070916"
      : $tone === "blue"
        ? "linear-gradient(135deg, #11148e, #5e62f5 50%, #f4b5ff)"
        : $tone === "cream"
          ? "linear-gradient(135deg, #f6f0df, #dfffb0)"
          : "radial-gradient(circle at 82% 4%, rgba(94, 98, 245, 0.22), transparent 26rem), #090b14"};
  color: ${({ $tone }) => ($tone === "cream" ? "#070916" : "#f7f5ee")};
  box-shadow: ${({ $blend }) => ($blend ? "none" : "0 1rem 4rem rgba(0, 0, 0, 0.2)")};

  ${({ $blend }) =>
    $blend &&
    `
      margin-top: clamp(-4rem, -7vw, -2rem);
      padding-top: clamp(5rem, 9vw, 7rem);
      background:
        linear-gradient(
          180deg,
          rgba(7, 9, 22, 0) 0%,
          rgba(7, 9, 22, 0.62) 10%,
          rgba(7, 9, 22, 0.96) 24%,
          rgba(7, 9, 22, 0.94) 58%,
          #05070d 100%
        ),
        radial-gradient(circle at 10% 24%, rgba(151, 203, 143, 0.12), transparent 24rem),
        radial-gradient(circle at 88% 66%, rgba(94, 98, 245, 0.16), transparent 24rem),
        #05070d;
    `}
`;

const SectionIntro = styled.div`
  display: grid;
  gap: clamp(0.75rem, 2vw, 1rem);
  max-width: 58rem;
`;

const SectionBody = styled.div`
  display: grid;
  gap: clamp(0.85rem, 2vw, 1.25rem);
`;

const SectionScroll = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  overflow-y: auto;
  padding-right: 0.15rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(151, 203, 143, 0.35) transparent;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(18rem, 1.1fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.8rem, 2vw, 1.2rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CreamMerged = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);
  gap: clamp(1rem, 2.5vw, 1.75rem);
  width: 100%;
`;

const CreamDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(5, 7, 13, 0.14) 12%,
    rgba(5, 7, 13, 0.14) 88%,
    transparent
  );
`;

const CreamPathsBlock = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: clamp(0.85rem, 2vw, 1.25rem);
  min-height: 0;
`;

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
`;

const PathsTitle = styled.h3`
  ${headingH3};
  max-width: 16ch;
`;

const Eyebrow = styled.p<{ $onCream?: boolean }>`
  ${typeEyebrow};
  color: ${({ $onCream }) => ($onCream ? "#11148e" : "#97cb8f")};
`;

const SectionTitle = styled.h2`
  ${headingH2};
  max-width: 13ch;
`;

const SectionText = styled.p`
  ${typeBody};
  max-width: 64ch;
  line-height: 1.7;
  color: currentColor;
  opacity: 0.7;
`;

const Lead = styled.p`
  ${typeLead};
  max-width: 52rem;
`;

const cardAccentGlow = ($accent?: "green" | "purple" | "blue", $onCream?: boolean) => {
  if ($accent === "green") {
    return $onCream ? "rgba(151, 203, 143, 0.34)" : "rgba(151, 203, 143, 0.18)";
  }
  if ($accent === "purple") {
    return $onCream ? "rgba(244, 181, 255, 0.32)" : "rgba(244, 181, 255, 0.2)";
  }
  return $onCream ? "rgba(94, 98, 245, 0.22)" : "rgba(94, 98, 245, 0.22)";
};

const Card = styled(motion.article)<{
  $accent?: "green" | "purple" | "blue";
  $onCream?: boolean;
}>`
  display: grid;
  align-content: start;
  gap: 0.85rem;
  min-height: 0;
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  border: 1px solid
    ${({ $onCream }) =>
      $onCream ? "rgba(5, 7, 13, 0.1)" : "rgba(247, 245, 238, 0.14)"};
  border-radius: clamp(2rem, 4vw, 3rem);
  background: ${({ $accent, $onCream }) =>
    $onCream
      ? `
    radial-gradient(circle at 22% 18%, ${cardAccentGlow($accent, true)}, transparent 13rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.62), rgba(255, 255, 255, 0.18)),
    rgba(246, 240, 223, 0.82)
  `
      : `
    radial-gradient(circle at 22% 18%, ${cardAccentGlow($accent)}, transparent 13rem),
    linear-gradient(180deg, rgba(247, 245, 238, 0.11), rgba(247, 245, 238, 0.03)),
    rgba(8, 10, 24, 0.72)
  `};
  box-shadow: ${({ $onCream }) =>
    $onCream
      ? "inset 0 1px 0 rgba(255, 255, 255, 0.55)"
      : "inset 0 1px 0 rgba(247, 245, 238, 0.08)"};
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.35s ease;

  &:hover {
    border-color: ${({ $onCream }) =>
      $onCream ? "rgba(5, 7, 13, 0.16)" : "rgba(247, 245, 238, 0.28)"};
    box-shadow: ${({ $onCream }) =>
      $onCream
        ? "inset 0 1px 0 rgba(255, 255, 255, 0.65), 0 1rem 2.5rem rgba(5, 7, 13, 0.08)"
        : "inset 0 1px 0 rgba(247, 245, 238, 0.1), 0 1.5rem 4rem rgba(0, 0, 0, 0.24)"};
  }

  &::before {
    content: "";
    width: 2.6rem;
    height: 0.45rem;
    border-radius: 999px;
    background: ${({ $accent }) =>
      $accent === "green"
        ? "#97cb8f"
        : $accent === "purple"
          ? "#f4b5ff"
          : "#5e62f5"};
  }
`;

const CardTitle = styled.h3`
  ${headingH3};
`;

const SmallText = styled.p`
  ${typeBody};
  color: currentColor;
  opacity: 0.75;
`;

const LinkButton = styled.a<{ $light?: boolean }>`
  display: inline-flex;
  justify-self: start;
  align-items: center;
  min-height: 3rem;
  padding: 0.85rem 1.1rem;
  border: 1px solid
    ${({ $light }) =>
      $light ? "rgba(151, 203, 143, 0.34)" : "rgba(151, 203, 143, 0.54)"};
  border-radius: 999px;
  background: ${({ $light }) =>
    $light ? "rgba(151, 203, 143, 0.1)" : "#97cb8f"};
  color: ${({ $light }) => ($light ? "#f7f5ee" : "#070916")};
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
`;

const StatPanel = styled(motion.aside)`
  position: sticky;
  top: 2rem;
  display: grid;
  gap: 1rem;
  padding: clamp(1.4rem, 4vw, 2.4rem);
  border: 1px solid rgba(247, 245, 238, 0.12);
  border-radius: clamp(2rem, 5vw, 4rem);
  background:
    radial-gradient(
      circle at 15% 10%,
      rgba(151, 203, 143, 0.18),
      transparent 18rem
    ),
    radial-gradient(
      circle at 80% 82%,
      rgba(244, 181, 255, 0.18),
      transparent 16rem
    ),
    rgba(2, 3, 10, 0.82);
  color: #f7f5ee;
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.24);

  @media (max-width: 860px) {
    position: static;
  }
`;

const StatNumber = styled.p`
  ${typeStat};
  color: #97cb8f;
`;

const StatLabel = styled.p`
  ${typeLead};
  max-width: 24rem;
  letter-spacing: -0.035em;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

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
`;

const SocialName = styled.span`
  ${typeSocial};
`;

const SocialBlock = styled.div`
  display: grid;
  gap: clamp(0.85rem, 2vw, 1.25rem);
  width: 100%;
`;

const SocialIntro = styled.p`
  ${typeBody};
  margin: 0;
  max-width: 42ch;
  color: rgba(247, 245, 238, 0.72);
`;

const ContactLayout = styled.div`
  display: grid;
  gap: clamp(0.85rem, 2vw, 1.25rem);
  width: 100%;
  min-height: 0;
`;

const ContactSplit = styled(Split)`
  gap: clamp(1rem, 3vw, 2rem);
  align-items: center;
`;

const ContactIntro = styled(SectionIntro)`
  gap: clamp(0.55rem, 1.5vw, 0.8rem);
`;

const ContactTitle = styled(SectionTitle)`
  max-width: 12ch;
`;

const ContactText = styled(SectionText)`
  max-width: 40ch;
  font-size: clamp(0.92rem, 1.4vw, 1rem);
  line-height: 1.55;
`;

const ContactSocialBlock = styled(SocialBlock)`
  gap: clamp(0.55rem, 1.4vw, 0.85rem);
`;

const ContactSocialIntro = styled(SocialIntro)`
  font-size: clamp(0.92rem, 1.4vw, 1rem);
`;

const ContactSocialGrid = styled(SocialGrid)`
  gap: 0.75rem;
`;

const ContactSocialLink = styled(SocialLink)`
  gap: 0.55rem;
  padding: clamp(0.85rem, 2vw, 1.15rem);
`;

const ContactSocialName = styled(SocialName)`
  font-size: clamp(1.35rem, 3vw, 2rem);
`;

const Form = styled(motion.form)`
  display: grid;
  gap: 0.65rem;
  padding: clamp(1rem, 2.5vw, 1.5rem);
  border: 1px solid rgba(247, 245, 238, 0.16);
  border-radius: clamp(2rem, 4vw, 3rem);
  background: rgba(247, 245, 238, 0.06);
`;

const Field = styled.label`
  display: grid;
  gap: 0.4rem;
  color: rgba(247, 245, 238, 0.72);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Input = styled.input`
  min-height: 2.85rem;
  border: 1px solid rgba(247, 245, 238, 0.18);
  border-radius: 1.2rem;
  background: rgba(247, 245, 238, 0.08);
  color: #f7f5ee;
  font: inherit;
  padding: 0 1rem;
`;

const TextArea = styled.textarea`
  min-height: 5.5rem;
  border: 1px solid rgba(247, 245, 238, 0.18);
  border-radius: 1.2rem;
  background: rgba(247, 245, 238, 0.08);
  color: #f7f5ee;
  font: inherit;
  padding: 1rem;
  resize: vertical;
`;

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
`;

const ContactForm = styled(Form)`
  gap: 0.45rem;
  padding: clamp(0.85rem, 2vw, 1.15rem);
`;

const ContactField = styled(Field)`
  gap: 0.3rem;
  font-size: 0.7rem;
`;

const ContactInput = styled(Input)`
  min-height: 2.45rem;
  padding: 0 0.85rem;
`;

const ContactTextArea = styled(TextArea)`
  min-height: 3.5rem;
  padding: 0.75rem 0.85rem;
  resize: none;
`;

const ContactSubmit = styled(Submit)`
  min-height: 2.85rem;
  margin-top: 0.15rem;
`;

const lectureThemes = [
  {
    title: "Digitální svět bez ztráty mozku",
    text: "AI, screentime, algoritmy a praktické způsoby, jak se v online prostoru neztratit.",
    fit: "Pro 2. stupeň ZŠ, střední školy a organizace pracující s teenagery.",
    accent: "blue",
  },
  {
    title: "Řeč těla a emoce v realitě",
    text: "Jak číst sebe i druhé, rozumět reakcím a zůstat člověkem i pod tlakem.",
    fit: "Pro třídy, adaptační programy, preventivní bloky a HR týmy.",
    accent: "green",
  },
  {
    title: "Vztahy, tlak a naděje",
    text: "Bez motivačních frází. Upřímně o tom, co teenager prožívá a málokdy řekne nahlas.",
    fit: "Pro školy, komunitní akce, festivaly a rodičovské programy.",
    accent: "purple",
  },
] as const;

const socials = [
  {
    name: "TikTok",
    text: "Krátké formáty pro teenagery, které mluví jejich jazykem.",
    href: "https://www.tiktok.com/@theteensofgod",
  },
  {
    name: "Instagram",
    text: "Zákulisí, myšlenky, pozvánky a vizuální svět projektu.",
    href: "https://www.instagram.com/theteensofgod",
  },
  {
    name: "YouTube",
    text: "Delší obsah, rozhovory a budoucí video formáty.",
    href: "https://www.youtube.com/@theteensofgod",
  },
] as const;

const calmEase = [0.22, 1, 0.36, 1] as const;

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
};

const calmCard: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: calmEase },
  },
};

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
                <SectionTitle id="project-title">
                  Starší sourozenec pro nový svět
                </SectionTitle>
              </SectionIntro>
              <SectionBody>
                <Lead>
                  The Teens of God propojuje dva světy: teenagery, kteří chtějí
                  mluvit otevřeně a bez přetvářky, a školy, které hledají
                  srozumitelný způsob, jak k mladým opravdu promluvit.
                </Lead>
                <SectionText>
                  Kristýna Sekaninová, zakladatelka projektu, je ročník 1999.
                  Jako zástupkyně starší Gen Z se vrací do škol a otevírá
                  témata, která v běžné výuce často chybí: AI, digitální návyky,
                  vztahy, emoční inteligenci a práci s tlakem.
                </SectionText>
              </SectionBody>
            </Split>

            <CreamDivider aria-hidden="true" />

            <CreamPathsBlock id="temata" aria-labelledby="paths-title">
              <SectionIntro>
                <Eyebrow $onCream>Dvě cesty</Eyebrow>
                <PathsTitle id="paths-title">
                  Digitální svět. Lidskost.
                </PathsTitle>
              </SectionIntro>
              <PathsGrid>
                <Card
                  $accent="blue"
                  $onCream
                  variants={calmCard}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <CardTitle>Svět tam venku</CardTitle>
                  <SmallText>
                    AI, algoritmy a digitální návyky, které formují pozornost,
                    rozhodování i každodenní psychickou pohodu.
                  </SmallText>
                </Card>
                <Card
                  $accent="green"
                  $onCream
                  variants={calmCard}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <CardTitle>Ty sám</CardTitle>
                  <SmallText>
                    Emoce, hranice, sebevědomí a tlak okolí bez infantilního
                    tónu. Obsah, který respektuje realitu mladých lidí.
                  </SmallText>
                </Card>
                <Card
                  $accent="purple"
                  $onCream
                  variants={calmCard}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <CardTitle>Ty s druhými</CardTitle>
                  <SmallText>
                    Vztahy, komunikace a řeč těla v konkrétních situacích z
                    reálného života. Prakticky, srozumitelně a bez pouček.
                  </SmallText>
                </Card>
              </PathsGrid>
            </CreamPathsBlock>
          </CreamMerged>
        </Section>

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
                <SectionTitle id="lectures-title">
                  Pro školy, které chtějí víc než program do rozvrhu
                </SectionTitle>
                <LinkButton $light href="#cenik">
                  Chci Kristýnu na přednášku
                </LinkButton>
              </SectionIntro>
              <StatPanel aria-label="Výsledek po přednášce" variants={calmCard}>
                <StatNumber>62,5%</StatNumber>
                <StatLabel>
                  účastníků začalo po přednášce Kristýnu aktivně sledovat. V
                  jedné skupině 40 dětí to bylo 25 lidí.
                </StatLabel>
                <SmallText>
                  Pro školy je to jasný signál: nejde o povinný program, ale o
                  hlas, který mladí berou jako důvěryhodný a blízký.
                </SmallText>
              </StatPanel>
            </Split>

            <Grid>
              {lectureThemes.map((theme) => (
                <Card
                  key={theme.title}
                  $accent={theme.accent}
                  variants={calmCard}
                  whileHover={{ y: -8 }}
                >
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

        <ProofSection />

        <PricingSection />

        <Section
          id="kontakt"
          $tone="navy"
          $vh={100}
          $blend
          aria-labelledby="contact-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <ContactLayout>
            <ContactSplit>
              <ContactIntro>
                <Eyebrow>Kontakt</Eyebrow>
                <ContactTitle id="contact-title">
                  Přiveď Kristýnu k vám
                </ContactTitle>
                <ContactText>
                  Formulář obsahuje jen to podstatné, aby se škola nebo
                  organizace mohla rychle ozvat a domluvit další kroky.
                </ContactText>
              </ContactIntro>
              <ContactForm name="lecture-inquiry" method="post" variants={calmCard}>
                <ContactField>
                  Jméno
                  <ContactInput name="name" autoComplete="name" required />
                </ContactField>
                <ContactField>
                  Škola / Organizace
                  <ContactInput
                    name="organization"
                    autoComplete="organization"
                    required
                  />
                </ContactField>
                <ContactField>
                  E-mail
                  <ContactInput
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </ContactField>
                <ContactField>
                  Telefon
                  <ContactInput name="phone" type="tel" autoComplete="tel" />
                </ContactField>
                <ContactField>
                  Zpráva
                  <ContactTextArea name="message" rows={2} required />
                </ContactField>
                <ContactSubmit type="submit">Chci Kristýnu na přednášku</ContactSubmit>
              </ContactForm>
            </ContactSplit>
            <ContactSocialBlock aria-label="Sociální sítě">
              <ContactSocialIntro>
                Najdi mě tam, kde už jsi — TikTok, Instagram a YouTube.
              </ContactSocialIntro>
              <ContactSocialGrid>
                {socials.map((social) => (
                  <ContactSocialLink
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -8 }}
                  >
                    <ContactSocialName>{social.name}</ContactSocialName>
                    <SmallText>{social.text}</SmallText>
                    <SmallText>@theTeensOfGod</SmallText>
                  </ContactSocialLink>
                ))}
              </ContactSocialGrid>
            </ContactSocialBlock>
          </ContactLayout>
        </Section>
      </Sections>
    </Main>
  );
}

export default HomePage;
