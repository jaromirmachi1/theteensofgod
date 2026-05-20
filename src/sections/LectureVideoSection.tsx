import { motion } from 'framer-motion'
import styled from 'styled-components'
import {
  featuredLecture,
  getFeaturedLectureThumbnail,
  getFeaturedLectureWatchUrl,
} from '../data/featuredLecture'

const Section = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100svh;
  height: 100svh;
  max-height: 100svh;
  overflow: hidden;
  padding: clamp(1.75rem, 4vw, 3.5rem) clamp(1.2rem, 5vw, 4rem);
  padding-bottom: clamp(5rem, 10vw, 6.5rem);
  scroll-margin-top: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border: 1px solid rgba(247, 245, 238, 0.12);
  border-radius: clamp(2rem, 6vw, 5rem);
  background:
    radial-gradient(circle at 14% 18%, rgba(151, 203, 143, 0.14), transparent 22rem),
    radial-gradient(circle at 88% 72%, rgba(94, 98, 245, 0.2), transparent 24rem),
    #070916;
  color: #f7f5ee;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.2);
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(18rem, 1.05fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    align-content: center;
  }
`

const Copy = styled(motion.div)`
  display: grid;
  gap: clamp(0.85rem, 2vw, 1.35rem);
  max-width: 36rem;
`

const Eyebrow = styled.p`
  margin: 0;
  color: #97cb8f;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const Title = styled.h2`
  max-width: 12ch;
  margin: 0;
  font-size: clamp(2.2rem, 5.5vw, 4.6rem);
  line-height: 0.88;
  letter-spacing: -0.075em;
  text-wrap: balance;
`

const Text = styled.p`
  margin: 0;
  max-width: 42ch;
  font-size: clamp(1rem, 1.8vw, 1.12rem);
  line-height: 1.65;
  color: rgba(247, 245, 238, 0.72);
`

const ChannelLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 3rem;
  padding: 0.85rem 1.1rem;
  border: 1px solid rgba(151, 203, 143, 0.34);
  border-radius: 999px;
  background: rgba(151, 203, 143, 0.1);
  color: #f7f5ee;
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
    background: rgba(151, 203, 143, 0.18);
  }
`

const PlayOrb = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  display: grid;
  place-items: center;
  width: clamp(4rem, 10vw, 5.5rem);
  height: clamp(4rem, 10vw, 5.5rem);
  border: 1px solid rgba(247, 245, 238, 0.22);
  border-radius: 999px;
  background: linear-gradient(135deg, #97cb8f, #9df5d1);
  color: #07110b;
  font-size: clamp(1.1rem, 2.5vw, 1.45rem);
  font-weight: 900;
  box-shadow: 0 1.2rem 3rem rgba(151, 203, 143, 0.28);
  transform: translate(-50%, -50%);
  transition: transform 0.25s ease;
`

const VideoFrame = styled(motion.a)`
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  width: 100%;
  max-height: min(62svh, 34rem);
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-radius: clamp(1.5rem, 4vw, 2.75rem);
  overflow: hidden;
  background:
    radial-gradient(circle at 28% 22%, rgba(151, 203, 143, 0.22), transparent 14rem),
    radial-gradient(circle at 78% 18%, rgba(244, 181, 255, 0.2), transparent 16rem),
    linear-gradient(145deg, rgba(8, 9, 22, 0.96), rgba(2, 3, 10, 0.92));
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.38);
  text-decoration: none;
  color: inherit;

  &::before {
    content: '';
    position: absolute;
    inset: 1rem;
    border: 1px solid rgba(247, 245, 238, 0.12);
    border-radius: calc(clamp(1.5rem, 4vw, 2.75rem) - 0.65rem);
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
    rgba(2, 3, 10, 0.08) 18%,
    rgba(2, 3, 10, 0.42) 58%,
    rgba(2, 3, 10, 0.92) 100%
  );
`

const VideoMeta = styled.div`
  position: absolute;
  z-index: 3;
  left: clamp(1rem, 3vw, 1.5rem);
  right: clamp(1rem, 3vw, 1.5rem);
  bottom: clamp(1rem, 3vw, 1.5rem);
  display: grid;
  gap: 0.45rem;
`

const VideoTopic = styled.p`
  margin: 0;
  width: fit-content;
  padding: 0.4rem 0.65rem;
  border: 1px solid rgba(151, 203, 143, 0.32);
  border-radius: 999px;
  background: rgba(151, 203, 143, 0.12);
  color: #bee3b9;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const VideoTitle = styled.p`
  margin: 0;
  font-size: clamp(1.05rem, 2.2vw, 1.45rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
`

const VideoAction = styled.p`
  margin: 0;
  color: rgba(247, 245, 238, 0.62);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

const calmEase = [0.22, 1, 0.36, 1] as const

function LectureVideoSection() {
  const watchUrl = getFeaturedLectureWatchUrl()
  const thumbnailUrl = getFeaturedLectureThumbnail()

  return (
    <Section id="ukazka" aria-labelledby="lecture-preview-title">
      <Layout>
        <Copy
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: calmEase }}
        >
          <Eyebrow>Ukázka</Eyebrow>
          <Title id="lecture-preview-title">Podívej se, jak to zní ve třídě</Title>
          <Text>{featuredLecture.subtitle}</Text>
          <ChannelLink href={featuredLecture.channelUrl} target="_blank" rel="noreferrer">
            Více na YouTube
          </ChannelLink>
        </Copy>

        <VideoFrame
          href={watchUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Přehrát ukázku přednášky: ${featuredLecture.title}. Otevře se na YouTube.`}
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.015, transition: { duration: 0.35, ease: 'easeOut' } }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.95, delay: 0.12, ease: calmEase }}
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
      </Layout>
    </Section>
  )
}

export default LectureVideoSection
