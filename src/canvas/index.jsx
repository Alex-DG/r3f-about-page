import { Canvas as CanvasR3F } from '@react-three/fiber'
import AssetsPreload from './preload'

import Background from './layers/Background'
import Home from './layers/Home'
import Gallery from './layers/Gallery'

import { isMobile } from '../utils/mobile'
import useStore from '../store'

const perf = { min: isMobile() ? 0.6 : 0.96 }
const graphic = { alpha: true, antialias: !isMobile() }

/**
 * 3D Experience ~ Entry Point ~ d::{-}_{-}::b
 */
const CanvasMain = ({ mainRef, views }) => (
  <>
    {/**
     * Background Canvas
     */}
    <CanvasR3F className='canvas-background' performance={perf} gl={graphic}>
      <Background />
    </CanvasR3F>

    {/**
     * Home Canvas
     */}
    <CanvasR3F
      className='canvas'
      performance={perf}
      gl={graphic}
      onCreated={(state) => state.events.connect(mainRef.current)}
    >
      <AssetsPreload />
      <Home {...{ views }} />
    </CanvasR3F>
  </>
)

export const CanvasGallery = () => {
  // Bit of code to avoid any THREE.context lost issues: I could also have defined routes.
  // it's an alterntive solution as my web app if very tiny, although having a look at `wouter` could be cool :)
  const galleryActive = useStore((state) => state.galleryActive)
  const loop = galleryActive ? 'always' : 'demand'

  return (
    <>
      {/**
       * Projects gallery
       */}
      <CanvasR3F frameloop={loop} performance={perf} className='detached'>
        <Gallery />
      </CanvasR3F>
    </>
  )
}

export default CanvasMain
