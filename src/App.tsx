import AmbientPlayer from './components/AmbientPlayer'
import IntroOverlay from './components/IntroOverlay'
import SmoothScroll from './components/SmoothScroll'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <SmoothScroll />
      <IntroOverlay />
      <HomePage />
      <AmbientPlayer />
    </>
  )
}

export default App
