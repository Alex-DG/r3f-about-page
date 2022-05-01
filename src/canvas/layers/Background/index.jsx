import { AdaptiveDpr, Float } from '@react-three/drei'
import Postprocessing from '../../effects'
import Icosahedron from '../../components/Icosahedron'
import { isMobile } from '../../../utils/mobile'
import useGroup from '../../hooks/useGroup'
import useRegress from '../../hooks/useRegress'

const Background = () => {
  const { groupRef } = useGroup()

  useRegress()

  return (
    <>
      <AdaptiveDpr pixelated />
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <group ref={groupRef} position={[0, 0, -21]}>
          <Icosahedron
            position={[0, 0, 0]}
            scale={[1.1, 1.1, 1.1]}
            args={[isMobile() ? 8 : 12, 0]}
            scrollAnimation
          />
        </group>
      </Float>

      <Postprocessing enabled={!isMobile()} />
    </>
  )
}

export default Background
