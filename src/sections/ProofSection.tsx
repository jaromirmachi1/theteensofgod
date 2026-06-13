import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import { referenceQuotes } from '../data/references'
import {
  featuredLecture,
  getFeaturedLectureThumbnail,
  getFeaturedLectureWatchUrl,
} from '../data/featuredLecture'
import { shortViewport, tablet } from '../styles/breakpoints'
import { headingH2, typeBody, typeEyebrow, typeLead, typeQuote } from '../styles/typography'

const Section = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.25rem, 3vw, 2rem);
  min-height: 100svh;
  height: 100svh;
  max-height: 100svh;
  padding: clamp(1.75rem, 4vw, 3.5rem) clamp(1.2rem, 5vw, 4rem);
  padding-bottom: clamp(5rem, 10vw, 6.5rem);
  scroll-margin-top: 0;
  border: 0;
  border-radius: 0;
  background:
    radial-gradient(circle at 12% 28%, rgba(151, 203, 143, 0.14), transparent 20rem),
    radial-gradient(circle at 88% 34%, rgba(244, 181, 255, 0.16), transparent 22rem),
    linear-gradient(
      180deg,
      #070916 0%,
      rgba(17, 20, 142, 0.82) 18%,
      #4f53e8 48%,
      rgba(17, 20, 142, 0.72) 76%,
      #070916 100%
    );
  color: #f7f5ee;
  box-shadow: none;
  overflow: hidden;

  ${shortViewport} {
    height: auto;
    max-height: none;
    min-height: 100svh;
    overflow: visible;
    justify-content: flex-start;
    padding-top: clamp(1.25rem, 3vw, 2rem);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        180deg,
        rgba(5, 7, 13, 0.88) 0%,
        transparent 18%,
        transparent 78%,
        rgba(5, 7, 13, 0.9) 100%
      ),
      radial-gradient(circle at 50% 118%, rgba(2, 3, 10, 0.48), transparent 55%);
    pointer-events: none;
  }
`

const Inner = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto minmax(0, auto);
  gap: clamp(1rem, 2.5vw, 1.75rem);
  width: 100%;
  height: 100%;
  min-height: 0;

  ${shortViewport} {
    height: auto;
    grid-template-rows: auto auto auto;
    gap: clamp(0.85rem, 2vw, 1.25rem);
  }
`

const HeroBand = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(1.25rem, 4vw, 3rem);
  align-items: center;
  min-height: 0;

  ${tablet} {
    grid-template-columns: 1fr;
    align-content: start;
    gap: clamp(0.85rem, 2vw, 1.35rem);
  }
`

const Intro = styled(motion.div)`
  display: grid;
  gap: clamp(0.65rem, 1.8vw, 1rem);
  max-width: 34rem;
  align-self: center;
`

const Eyebrow = styled.p`
  ${typeEyebrow};
  color: #bee3b9;
`

const Title = styled.h2`
  ${headingH2};
  max-width: 11ch;

  ${tablet} {
    max-width: 18ch;
    font-size: clamp(2rem, 5vw, 3.25rem);
  }
`

const Lead = styled.p`
  ${typeLead};
  max-width: 42ch;
  color: rgba(247, 245, 238, 0.9);
  font-size: clamp(1rem, 1.8vw, 1.3rem);
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`

const ChannelLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.85rem;
  padding: 0.8rem 1.05rem;
  border: 1px solid rgba(151, 203, 143, 0.34);
  border-radius: 999px;
  background: rgba(151, 203, 143, 0.1);
  color: #f7f5ee;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(151, 203, 143, 0.18);
  }
`

const VideoShell = styled(motion.div)`
  display: grid;
  align-items: center;
  min-height: 0;
  height: 100%;

  ${shortViewport} {
    height: auto;
    width: 100%;
    max-width: 36rem;
    justify-self: end;
  }

  ${tablet} {
    max-width: none;
    justify-self: stretch;
  }
`

const PlayOrb = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  display: grid;
  place-items: center;
  width: clamp(4rem, 9vw, 5.25rem);
  height: clamp(4rem, 9vw, 5.25rem);
  border: 1px solid rgba(247, 245, 238, 0.22);
  border-radius: 999px;
  background: linear-gradient(135deg, #97cb8f, #9df5d1);
  color: #07110b;
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
  font-weight: 900;
  box-shadow: 0 1.2rem 3rem rgba(151, 203, 143, 0.28);
  transform: translate(-50%, -50%);
  transition: transform 0.25s ease;
`

const VideoFrame = styled.a`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 100%;
  border: 1px solid rgba(247, 245, 238, 0.16);
  border-radius: clamp(1.35rem, 3.5vw, 2.25rem);
  overflow: hidden;
  background:
    radial-gradient(circle at 28% 22%, rgba(151, 203, 143, 0.22), transparent 14rem),
    radial-gradient(circle at 78% 18%, rgba(244, 181, 255, 0.2), transparent 16rem),
    linear-gradient(145deg, rgba(8, 9, 22, 0.96), rgba(2, 3, 10, 0.92));
  box-shadow:
    0 1.5rem 4rem rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(247, 245, 238, 0.08);
  text-decoration: none;
  color: inherit;

  &::before {
    content: '';
    position: absolute;
    inset: 0.85rem;
    border: 1px solid rgba(247, 245, 238, 0.1);
    border-radius: calc(clamp(1.35rem, 3.5vw, 2.25rem) - 0.55rem);
    pointer-events: none;
    z-index: 2;
  }

  &:hover ${PlayOrb},
  &:focus-visible ${PlayOrb} {
    transform: translate(-50%, -50%) scale(1.06);
  }

  &:focus-visible {
    outline: 3px solid #92d6c1;
    outline-offset: 4px;
  }

  ${shortViewport} {
    max-height: clamp(10.5rem, 24vw, 14.5rem);
    width: 100%;
  }
`

const Thumbnail = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(2, 3, 10, 0.06) 18%,
    rgba(2, 3, 10, 0.38) 58%,
    rgba(2, 3, 10, 0.9) 100%
  );
`

const VideoMeta = styled.div`
  position: absolute;
  z-index: 3;
  left: clamp(0.85rem, 2.5vw, 1.25rem);
  right: clamp(0.85rem, 2.5vw, 1.25rem);
  bottom: clamp(0.85rem, 2.5vw, 1.25rem);
  display: grid;
  gap: 0.35rem;
`

const VideoTopic = styled.p`
  margin: 0;
  width: fit-content;
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

const VideoTitle = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.9vw, 1.25rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
`

const VideoAction = styled.p`
  margin: 0;
  color: rgba(247, 245, 238, 0.62);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(247, 245, 238, 0.22) 14%,
    rgba(247, 245, 238, 0.22) 86%,
    transparent
  );
`

const QuotesBlock = styled(motion.div)`
  display: grid;
  gap: clamp(0.65rem, 1.5vw, 0.9rem);
  min-height: 0;
  flex-shrink: 0;

  ${shortViewport} {
    padding-top: 0.15rem;
  }
`

const QuotesHeader = styled.div`
  display: grid;
  gap: 0.3rem;
`

const QuotesLabel = styled.p`
  ${typeEyebrow};
  color: rgba(247, 245, 238, 0.72);
`

const QuotesHint = styled.p`
  ${typeBody};
  margin: 0;
  max-width: 42ch;
  color: rgba(247, 245, 238, 0.62);
  font-size: clamp(0.92rem, 1.4vw, 1rem);
`

const marqueeScroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`

const MarqueeViewport = styled.div`
  position: relative;
  overflow: hidden;
  min-height: clamp(7.5rem, 16svh, 10rem);

  ${shortViewport} {
    min-height: clamp(6.5rem, 14svh, 8.5rem);
  }
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 6%,
    #000 94%,
    transparent
  );

  @media (prefers-reduced-motion: reduce) {
    overflow-x: auto;
    mask-image: none;
    scrollbar-width: thin;
    scrollbar-color: rgba(151, 203, 143, 0.35) transparent;
  }
`

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${marqueeScroll} 64s linear infinite;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    will-change: auto;
  }
`

const MarqueeGroup = styled.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding-right: clamp(0.75rem, 2vw, 1rem);
`

const Quote = styled.blockquote`
  display: grid;
  align-content: space-between;
  gap: 0.85rem;
  flex: 0 0 auto;
  width: clamp(15rem, 26vw, 21rem);
  min-height: clamp(7rem, 14svh, 9.5rem);
  margin: 0;
  padding: clamp(1rem, 2.2vw, 1.4rem);
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-left: 0.45rem solid #97cb8f;
  border-radius: clamp(1.25rem, 2.8vw, 1.75rem);
  background:
    radial-gradient(circle at 10% 6%, rgba(151, 203, 143, 0.1), transparent 12rem),
    rgba(2, 3, 10, 0.38);
  box-shadow: 0 0.85rem 2rem rgba(0, 0, 0, 0.16);

  ${shortViewport} {
    width: clamp(13.5rem, 42vw, 18rem);
    min-height: clamp(6rem, 12svh, 8rem);
    padding: clamp(0.85rem, 2vw, 1.1rem);
  }

  ${tablet} {
    width: clamp(12.5rem, 72vw, 16rem);
  }
`

const QuoteText = styled.p`
  ${typeQuote};
  font-size: clamp(0.98rem, 1.9vw, 1.35rem);
  line-height: 1.1;

  ${tablet} {
    font-size: clamp(0.9rem, 1.6vw, 1.1rem);
    line-height: 1.15;
  }
`

const QuoteMeta = styled.footer`
  color: currentColor;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  opacity: 0.65;
  text-transform: uppercase;
`

const calmEase = [0.22, 1, 0.36, 1] as const

function ProofSection() {
  const watchUrl = getFeaturedLectureWatchUrl()
  const thumbnailUrl = getFeaturedLectureThumbnail()
  return (
    <Section id="recenze" aria-labelledby="proof-title">
      <Inner>
        <HeroBand>
          <Intro
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: calmEase }}
          >
            <Eyebrow>Recenze</Eyebrow>
            <Title id="proof-title">Důkaz musí znít od dětí i dospělých</Title>
            <Lead>
              Nejdřív uvidíš, jak to zní ve třídě — pak reakce, které školy slyší zpět.
            </Lead>
            <Actions>
              <ChannelLink href={featuredLecture.channelUrl} target="_blank" rel="noreferrer">
                Více na YouTube
              </ChannelLink>
            </Actions>
          </Intro>

          <VideoShell
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.008, transition: { duration: 0.35, ease: 'easeOut' } }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.08, ease: calmEase }}
          >
            <VideoFrame
              href={watchUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Přehrát ukázku přednášky: ${featuredLecture.title}. Otevře se na YouTube.`}
            >
              {thumbnailUrl ? (
                <Thumbnail src={thumbnailUrl} alt="" loading="lazy" decoding="async" />
              ) : null}
              <VideoOverlay aria-hidden="true" />
              <PlayOrb aria-hidden="true">▶</PlayOrb>
              <VideoMeta>
                <VideoTopic>
                  {featuredLecture.topic} · {featuredLecture.durationLabel}
                </VideoTopic>
                <VideoTitle>{featuredLecture.title}</VideoTitle>
                <VideoAction>Přehrát na YouTube</VideoAction>
              </VideoMeta>
            </VideoFrame>
          </VideoShell>
        </HeroBand>

        <Divider aria-hidden="true" />

        <QuotesBlock
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: calmEase }}
        >
          <QuotesHeader>
            <QuotesLabel>Po přednášce</QuotesLabel>
            <QuotesHint>Reakce z tříd, škol a domovů.</QuotesHint>
          </QuotesHeader>

          <MarqueeViewport aria-label="Reference po přednáškách">
            <MarqueeTrack>
              <MarqueeGroup>
                {referenceQuotes.map((item, index) => (
                  <Quote key={`${item.meta}-${index}`}>
                    <QuoteText>{item.text}</QuoteText>
                    <QuoteMeta>{item.meta}</QuoteMeta>
                  </Quote>
                ))}
              </MarqueeGroup>
              <MarqueeGroup aria-hidden="true">
                {referenceQuotes.map((item, index) => (
                  <Quote key={`${item.meta}-dup-${index}`}>
                    <QuoteText>{item.text}</QuoteText>
                    <QuoteMeta>{item.meta}</QuoteMeta>
                  </Quote>
                ))}
              </MarqueeGroup>
            </MarqueeTrack>
          </MarqueeViewport>
        </QuotesBlock>
      </Inner>
    </Section>
  )
}

export default ProofSection
