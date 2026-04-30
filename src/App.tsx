import AmbientPlayer from './components/AmbientPlayer'
import FloatingNav from './components/FloatingNav'
import IntroOverlay from './components/IntroOverlay'
import SmoothScroll from './components/SmoothScroll'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <SmoothScroll />
      <IntroOverlay />
      <HomePage />
      <FloatingNav />
      <AmbientPlayer />
    </>
  )
}

export default App
