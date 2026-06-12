import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { compactLaptop, mobile } from '../styles/breakpoints'
import { headingH1, typeBody, typeEyebrow, typeLead } from '../styles/typography'

const Hero = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  min-height: 100svh;
  height: 100svh;
  max-height: 100svh;
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-radius: clamp(2rem, 6vw, 5rem);
  overflow: hidden;
  background: #02030a;
  color: #f7f5ee;
  box-shadow: 0 2rem 7rem rgba(0, 0, 0, 0.45);
  ${compactLaptop} {
    height: auto;
    max-height: none;
    min-height: 100svh;
  }
`

const GradientLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`

const Atmosphere = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(circle at 16% 16%, rgba(151, 203, 143, 0.18), transparent 20rem),
    radial-gradient(circle at 86% 20%, rgba(244, 181, 255, 0.18), transparent 22rem),
    radial-gradient(circle at 50% 42%, rgba(7, 11, 35, 0.02), rgba(2, 3, 10, 0.44) 43%, rgba(2, 3, 10, 0.94) 100%),
    linear-gradient(180deg, rgba(2, 3, 10, 0.12), rgba(2, 3, 10, 0.82) 78%, #02030a);
`

const GridTexture = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(247, 245, 238, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(247, 245, 238, 0.035) 1px, transparent 1px);
  background-size: 4rem 4rem;
  mask-image: linear-gradient(to bottom, black, transparent 82%);
`

const HeroGrid = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(14rem, 0.68fr);
  gap: clamp(0.85rem, 3vw, 2rem);
  align-items: center;
  padding: clamp(1.5rem, 4vw, 2.5rem) clamp(1.15rem, 5vw, 4.5rem) clamp(5.5rem, 9vw, 7rem);

  ${compactLaptop} {
    grid-template-columns: 1fr;
    align-content: start;
    padding-top: clamp(0.85rem, 2.5vw, 1.35rem);
    padding-bottom: clamp(5rem, 8vw, 6.5rem);
  }
`

const HeroCopy = styled(motion.div)`
  display: grid;
  gap: clamp(0.75rem, 2vw, 1.25rem);
  max-width: 62rem;
`

const Label = styled.p`
  ${typeEyebrow};
  width: fit-content;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(151, 203, 143, 0.28);
  border-radius: 999px;
  background: rgba(151, 203, 143, 0.1);
  color: #bee3b9;
  letter-spacing: 0.12em;
`

const Title = styled.h1`
  ${headingH1};
  max-width: 10ch;
  text-shadow: 0 1.2rem 5rem rgba(0, 0, 0, 0.42);

  ${compactLaptop} {
    max-width: 12ch;
    font-size: clamp(2.5rem, 7vw, 4.5rem);
  }
`

const Mission = styled.p`
  ${typeLead};
  max-width: 58rem;
  font-weight: 700;
`

const Description = styled.p`
  ${typeBody};
  max-width: 48rem;
  color: rgba(247, 245, 238, 0.72);
`

const Visual = styled(motion.aside)`
  position: relative;
  height: 100%;
  max-height: min(72svh, 38rem);
  min-height: 14rem;
  border: 1px solid rgba(247, 245, 238, 0.13);
  border-radius: clamp(2rem, 5vw, 4rem);
  background:
    radial-gradient(circle at 36% 20%, rgba(151, 203, 143, 0.28), transparent 15rem),
    radial-gradient(circle at 78% 18%, rgba(244, 181, 255, 0.32), transparent 18rem),
    radial-gradient(circle at 20% 78%, rgba(94, 98, 245, 0.72), transparent 16rem),
    linear-gradient(145deg, rgba(8, 9, 22, 0.86), rgba(2, 3, 10, 0.78));
  box-shadow: 0 2.5rem 6rem rgba(0, 0, 0, 0.34);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 1.25rem;
    border: 1px solid rgba(247, 245, 238, 0.16);
    border-radius: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 22% 18%;
    border-radius: 999px;
    background: rgba(151, 203, 143, 0.18);
    filter: blur(4rem);
  }

  ${compactLaptop} {
    height: min(24svh, 14rem);
    max-height: min(24svh, 14rem);
    min-height: 11rem;
  }
`

const VisualText = styled.div`
  position: absolute;
  z-index: 1;
  inset: auto 1.25rem 1.25rem;
  display: grid;
  gap: 0.5rem;
  padding: clamp(1.1rem, 3vw, 1.5rem);
  border-radius: 2rem;
  border: 1px solid rgba(247, 245, 238, 0.14);
  background: rgba(2, 3, 10, 0.78);
  color: #f7f5ee;
`

const VisualKicker = styled.p`
  margin: 0;
  color: #97cb8f;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`

const VisualQuote = styled.p`
  margin: 0;
  font-size: clamp(1.05rem, 2.3vw, 1.45rem);
  font-style: italic;
  font-weight: 700;
  line-height: 1.22;
`

const ScrollCue = styled.a`
  position: absolute;
  right: clamp(1rem, 5vw, 4rem);
  bottom: clamp(4.5rem, 8vw, 5.5rem);
  z-index: 2;
  color: rgba(247, 245, 238, 0.52);
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-decoration: none;
  text-transform: uppercase;

  ${mobile} {
    display: none;
  }
`

function HeroSection() {
  const [shaderActive, setShaderActive] = useState(true)

  useEffect(() => {
    const hero = document.getElementById('uvod')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setShaderActive(entry.isIntersecting),
      { rootMargin: '12% 0px', threshold: 0 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <Hero id="uvod" aria-label="Úvod The Teens of God">
      <GradientLayer aria-hidden="true">
        <ShaderGradientCanvas style={{ position: 'absolute', inset: 0 }} pixelDensity={1} fov={45}>
          <ShaderGradient
            animate={shaderActive ? 'on' : 'off'}
            brightness={1.3}
            cAzimuthAngle={180}
            cDistance={3.9}
            cPolarAngle={115}
            cameraZoom={1}
            color1="#11148E"
            color2="#AE66D7"
            color3="#5E62F5"
            envPreset="city"
            grain="on"
            lightType="3d"
            positionX={-0.5}
            positionY={0.1}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={235}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={0.8}
            uFrequency={5.5}
            uSpeed={0.1}
            uStrength={2.9}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </GradientLayer>
      <Atmosphere aria-hidden="true" />
      <GridTexture aria-hidden="true" />

      <HeroGrid>
        <HeroCopy
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Label>Gen Z hlas pro školy a teenagery</Label>
          <Title>The Teens of God</Title>
          <Mission>
            Pomáháme mladým zvládnout digitální svět a neztratit v něm sami sebe.
          </Mission>
          <Description>
            Kristýna Sekaninová mluví s teenagery o AI, screentimu, vztazích,
            řeči těla a emocích jazykem, kterému opravdu rozumí. Bez moralizování
            a bez školních frází.
          </Description>
        </HeroCopy>

        <Visual
          aria-label="Vizuální identita projektu The Teens of God"
          initial={{ opacity: 0, y: 42, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.45, ease: 'easeOut' } }}
        >
          <VisualText>
            <VisualKicker>Shelter</VisualKicker>
            <VisualQuote>
              „Někdo, kdo ten svět zná zevnitř a vrací se, aby ho pomohl lépe
              pochopit.“
            </VisualQuote>
          </VisualText>
        </Visual>
      </HeroGrid>

      <ScrollCue href="#prednasky">Scrolluj dál</ScrollCue>
    </Hero>
  )
}

export default HeroSection
