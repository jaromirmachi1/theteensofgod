import { motion, type Variants } from "framer-motion";
import styled from "styled-components";
import {
  headingH2,
  headingH3,
  typeBody,
  typeEyebrow,
  typeLead,
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
  box-shadow: ${({ $blend }) =>
    $blend ? "none" : "0 1rem 4rem rgba(0, 0, 0, 0.2)"};

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

const Eyebrow = styled.p`
  ${typeEyebrow};
  color: #97cb8f;
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

const Card = styled(motion.article)<{ $accent?: "green" | "purple" | "blue" }>`
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
        $accent === "green"
          ? "rgba(151, 203, 143, 0.18)"
          : $accent === "purple"
            ? "rgba(244, 181, 255, 0.2)"
            : "rgba(94, 98, 245, 0.22)"},
      transparent 13rem
    ),
    linear-gradient(
      180deg,
      rgba(247, 245, 238, 0.11),
      rgba(247, 245, 238, 0.03)
    ),
    rgba(8, 10, 24, 0.72);
  box-shadow: inset 0 1px 0 rgba(247, 245, 238, 0.08);
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.35s ease;

  &:hover {
    border-color: rgba(247, 245, 238, 0.28);
    box-shadow:
      inset 0 1px 0 rgba(247, 245, 238, 0.1),
      0 1.5rem 4rem rgba(0, 0, 0, 0.24);
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

const ContactSocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.65rem, 2vw, 1rem);
  width: 100%;
  padding-top: clamp(0.35rem, 1.2vw, 0.65rem);
  border-top: 1px solid rgba(247, 245, 238, 0.08);
`;

const SocialIconLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(2.85rem, 7vw, 3.5rem);
  height: clamp(2.85rem, 7vw, 3.5rem);
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-radius: 999px;
  color: rgba(247, 245, 238, 0.78);
  text-decoration: none;
  background:
    radial-gradient(
      circle at 30% 20%,
      rgba(151, 203, 143, 0.1),
      transparent 70%
    ),
    rgba(8, 10, 24, 0.5);
  box-shadow: inset 0 1px 0 rgba(247, 245, 238, 0.06);
  transition:
    color 0.28s ease,
    border-color 0.28s ease,
    background 0.28s ease,
    box-shadow 0.28s ease;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: currentColor;
  }

  &:hover {
    color: #07110b;
    border-color: rgba(151, 203, 143, 0.55);
    background: linear-gradient(135deg, #97cb8f, #9df5d1);
    box-shadow: 0 0.75rem 2rem rgba(151, 203, 143, 0.22);
  }

  &:focus-visible {
    outline: 2px solid #97cb8f;
    outline-offset: 3px;
  }
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
    href: "https://www.tiktok.com/@theteensofgod",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/theteensofgod",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4A3.9 3.9 0 0 0 7.8 20h8.4a3.9 3.9 0 0 0 3.9-3.8V7.8A3.9 3.9 0 0 0 16.2 3.9H7.8zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.8-2.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@theteensofgod",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.7 15.5V8.5L15.8 12l-6.1 3.5z" />
      </svg>
    ),
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
              <ContactForm
                name="lecture-inquiry"
                method="post"
                variants={calmCard}
              >
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
                <ContactSubmit type="submit">
                  Chci Kristýnu na přednášku
                </ContactSubmit>
              </ContactForm>
            </ContactSplit>
            <ContactSocialRow aria-label="Sociální sítě">
              {socials.map((social) => (
                <SocialIconLink
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.name} — @theteensofgod`}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.94 }}
                >
                  {social.icon}
                </SocialIconLink>
              ))}
            </ContactSocialRow>
          </ContactLayout>
        </Section>
      </Sections>
    </Main>
  );
}

export default HomePage;
