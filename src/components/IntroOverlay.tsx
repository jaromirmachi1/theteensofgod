import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { headingH1, typeEyebrow } from '../styles/typography'

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  min-height: 100svh;
  height: 100svh;
  padding: 1rem;
  background: #05070d;
  color: #f7f5ee;
`

const IntroCard = styled(motion.div)`
  display: grid;
  gap: 1.4rem;
  width: min(42rem, 100%);
  padding: clamp(1.5rem, 5vw, 3rem);
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-radius: clamp(2rem, 6vw, 4rem);
  background:
    radial-gradient(circle at 18% 18%, rgba(151, 203, 143, 0.22), transparent 17rem),
    radial-gradient(circle at 82% 68%, rgba(94, 98, 245, 0.34), transparent 18rem),
    rgba(247, 245, 238, 0.04);
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.42);
`

const IntroLabel = styled.p`
  ${typeEyebrow};
  color: #97cb8f;
  letter-spacing: 0.2em;
`

const IntroTitle = styled.p`
  ${headingH1};
`

const IntroBar = styled.div`
  height: 0.55rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(247, 245, 238, 0.12);
`

const IntroProgress = styled(motion.span)`
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #97cb8f, #5e62f5, #f4b5ff);
`

function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(false), 1850)

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {isVisible ? (
        <Overlay
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <IntroCard initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <IntroLabel>Digital shelter</IntroLabel>
            <IntroTitle>The Teens of God</IntroTitle>
            <IntroBar aria-hidden="true">
              <IntroProgress initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.35 }} />
            </IntroBar>
          </IntroCard>
        </Overlay>
      ) : null}
    </AnimatePresence>
  )
}

export default IntroOverlay
