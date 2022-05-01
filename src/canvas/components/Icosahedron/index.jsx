import { useRef } from 'react'
import { Icosahedron as IcosahedronDrei } from '@react-three/drei'

import useJawDroppingScrollBasedAnimations from '../../hooks/useJawDroppingScrollBasedAnimations'
import usePositionShift from '../../hooks/usePositionShift'

import '../../shaders/NoisyPositionMaterial'

const Icosahedron = ({ scrollAnimation, ...props }) => {
  const icosahedronRef = useRef()

  if (scrollAnimation) useJawDroppingScrollBasedAnimations(icosahedronRef)

  const { materialRef } = usePositionShift()

  return (
    <IcosahedronDrei ref={icosahedronRef} {...props}>
      <noisyPositionMaterial ref={materialRef} attach='material' wireframe />
    </IcosahedronDrei>
  )
}

export default Icosahedron
