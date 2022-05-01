import { AdaptiveDpr, PerspectiveCamera, View } from '@react-three/drei'
import { Suspense } from 'react'
import { isMobile } from '../../../utils/mobile'
import useRegress from '../../hooks/useRegress'
import Body from '../../components/Body'
import Face from '../../components/Face'

const Home = ({ views }) => {
  const { view1, view2 } = views

  useRegress()

  return (
    <>
      <AdaptiveDpr pixelated />

      <Suspense fallback={null}>
        <View track={view2}>
          <Face />
          <PerspectiveCamera makeDefault position={[0, 0, 0.5]} fov={75} />
        </View>

        <View track={view1}>
          <pointLight intensity={0.75} position={[0, 1, 1]} />
          <ambientLight intensity={0.5} />

          <Body />

          <PerspectiveCamera
            makeDefault
            position={[0.05, isMobile() ? 0.32 : 0.35, 0.8]}
            near={0.1}
            far={100}
            fov={75}
          />
        </View>
      </Suspense>
    </>
  )
}

export default Home
