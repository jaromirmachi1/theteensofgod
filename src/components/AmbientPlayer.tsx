import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import reikiHealingTrack from '../assets/music/432 Hz Reiki Healing Music 15 minutes for Chi Balance and Meditation.mp3'

const Player = styled(motion.aside)`
  position: fixed;
  right: clamp(1rem, 3vw, 2rem);
  bottom: clamp(1rem, 3vw, 2rem);
  z-index: 20;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.85rem;
  align-items: center;
  width: min(21rem, calc(100vw - 2rem));
  padding: 0.8rem 0.9rem;
  border: 1px solid rgba(247, 245, 238, 0.14);
  border-radius: 1.7rem;
  background:
    radial-gradient(circle at 18% 18%, rgba(198, 255, 128, 0.18), transparent 8rem),
    rgba(4, 6, 16, 0.72);
  box-shadow: 0 1.4rem 4rem rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(24px);
  color: #f7f5ee;
`

const Toggle = styled.button`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(185, 183, 255, 0.46);
  border-radius: 999px;
  background: #c6ff80;
  color: #070916;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.04em;
`

const Track = styled.div`
  display: grid;
  gap: 0.35rem;
  min-width: 0;
`

const Meta = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
`

const Name = styled.p`
  margin: 0;
  font-size: 0.84rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const State = styled.p`
  margin: 0;
  color: rgba(247, 245, 238, 0.56);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const Bars = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 0.18rem;
  height: 1.6rem;
  align-items: end;
`

const Bar = styled(motion.span)`
  display: block;
  min-height: 0.18rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #c6ff80, #5e62f5);
  opacity: 0.78;
`

const playerBars = Array.from({ length: 24 }, (_, index) => `ambient-bar-${index}`)

function AmbientPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current

    return () => {
      audio?.pause()
    }
  }, [])

  const startAmbient = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    audio.volume = 0.42
    await audio.play()
    setIsPlaying(!audio.paused)
  }

  const pauseAmbient = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  const toggleAmbient = () => {
    if (isPlaying) {
      pauseAmbient()
      return
    }

    void startAmbient()
  }

  return (
    <Player
      aria-label="Ambientní přehrávač"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <audio ref={audioRef} src={reikiHealingTrack} preload="metadata" loop />
      <Toggle type="button" aria-label={isPlaying ? 'Pozastavit ambient' : 'Pustit ambient'} onClick={toggleAmbient}>
        {isPlaying ? 'II' : '▶'}
      </Toggle>
      <Track>
        <Meta>
          <Name>432 Hz Reiki</Name>
          <State>{isPlaying ? 'Playing' : 'Tap to play'}</State>
        </Meta>
        <Bars aria-hidden="true">
          {playerBars.map((bar, index) => (
            <Bar
              key={bar}
              animate={{ scaleY: isPlaying ? [0.24, 1, 0.38] : 0.22 }}
              transition={{
                duration: 1.8 + (index % 5) * 0.24,
                repeat: isPlaying ? Infinity : 0,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
          ))}
        </Bars>
      </Track>
    </Player>
  )
}

export default AmbientPlayer
