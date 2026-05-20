import Lenis from 'lenis'
import { useEffect } from 'react'
import { APP_SCROLL_EVENT } from '../lib/scrollEvents'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.78,
    })

    let frameId = 0

    const notifyScroll = () => {
      window.dispatchEvent(new Event(APP_SCROLL_EVENT))
    }

    function raf(time: number) {
      lenis.raf(time)
      notifyScroll()
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll
