import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const usePositionShift = () => {
  const materialRef = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    // Update material
    materialRef.current.uniforms.uTime.value = time * 0.25
  })

  return { materialRef }
}

export default usePositionShift
