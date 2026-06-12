import Lenis from 'lenis'
import { useEffect } from 'react'
import { APP_SCROLL_EVENT } from '../lib/scrollEvents'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.82,
    })

    const notifyScroll = () => {
      window.dispatchEvent(new Event(APP_SCROLL_EVENT))
    }

    lenis.on('scroll', notifyScroll)

    return () => {
      lenis.off('scroll', notifyScroll)
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll
