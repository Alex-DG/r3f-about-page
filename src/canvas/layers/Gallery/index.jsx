import { AdaptiveDpr, PerspectiveCamera, Sparkles } from '@react-three/drei'
import Projects from '../../components/Projects'
import useRegress from '../../hooks/useRegress'

const Gallery = () => {
  useRegress()
  return (
    <>
      <AdaptiveDpr pixelated />
      <Projects />
      <PerspectiveCamera makeDefault position={[0, 0, 0.5]} fov={75} />
      <Sparkles count={25} speed={0.24} opacity={1} />
    </>
  )
}

export default Gallery
