import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import reikiHealingTrack from '../assets/music/432 Hz Reiki Healing Music 15 minutes for Chi Balance and Meditation.mp3'

const Player = styled(motion.aside)`
  position: fixed;
  right: clamp(1rem, 3vw, 2rem);
  bottom: clamp(1rem, 3vw, 2rem);
  z-index: 20;
`

const Toggle = styled.button`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(185, 183, 255, 0.46);
  border-radius: 999px;
  background:
    radial-gradient(circle at 30% 30%, rgba(151, 203, 143, 0.35), transparent 70%),
    #97cb8f;
  color: #070916;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(20px);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1.2rem 3rem rgba(151, 203, 143, 0.22);
  }
`

function AmbientPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) {
      return
    }

    let cancelled = false

    const playAmbient = async () => {
      try {
        audio.volume = 0.42
        await audio.play()
        if (!cancelled) {
          setIsPlaying(!audio.paused)
        }
      } catch {
        // Browsers may block autoplay until the first user gesture.
      }
    }

    void playAmbient()

    const playOnGesture = () => {
      if (!audio.paused) {
        return
      }

      void playAmbient()
    }

    window.addEventListener('pointerdown', playOnGesture, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener('pointerdown', playOnGesture)
      audio.pause()
    }
  }, [])

  const startAmbient = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    try {
      audio.volume = 0.42
      await audio.play()
      setIsPlaying(!audio.paused)
    } catch {
      setIsPlaying(false)
    }
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
      <audio ref={audioRef} src={reikiHealingTrack} preload="auto" loop />
      <Toggle type="button" aria-label={isPlaying ? 'Pozastavit ambient' : 'Pustit ambient'} onClick={toggleAmbient}>
        {isPlaying ? 'II' : '▶'}
      </Toggle>
    </Player>
  )
}

export default AmbientPlayer
