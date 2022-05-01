import { EffectComposer, Bloom } from '@react-three/postprocessing'

const Postprocessing = ({ enabled, ...props }) => {
  if (!enabled) return null

  return (
    <EffectComposer {...props}>
      <Bloom
        luminanceThreshold={0.0}
        luminanceSmoothing={0.025}
        height={1000}
      />
    </EffectComposer>
  )
}

export default Postprocessing
