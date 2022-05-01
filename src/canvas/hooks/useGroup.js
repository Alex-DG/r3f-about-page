import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

/**
 * Custom group hook:
 * Manage group rotation
 */
const useGroup = (speed = 0.1) => {
  const groupRef = useRef(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    groupRef.current.rotation.z = time * speed
    groupRef.current.rotation.x = time * speed
  })

  return { groupRef }
}

export default useGroup
