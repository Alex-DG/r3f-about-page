import { useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'

import '../../../../shaders/ImageMaterial'

const Image = ({ dom, name, index, url, texture, groups }) => {
  const aspect = dom.naturalWidth / dom.naturalHeight
  const groupRef = useRef()
  const materialRef = useRef()

  useFrame(({ clock }) => {
    materialRef.current.time = clock.getElapsedTime()
  }, [])

  useEffect(() => {
    if (groupRef?.current) {
      groups.push(groupRef.current)
    }
  }, [groupRef])

  return (
    <>
      <group
        ref={groupRef}
        rotation={[-0.2, -0.5, -0.1]}
        position={[0, 0.25, 0]}
      >
        <mesh
          name={`photo-${index}`}
          userData={{ name, url, aspect, index }}
          position={[-1, index * aspect, -1.5]}
        >
          <planeBufferGeometry
            attach='geometry'
            args={[aspect, 1.15, 32, 32]}
          />
          <imageMaterial
            attach='material'
            ref={materialRef}
            texture={texture}
          />
        </mesh>
      </group>
    </>
  )
}

export default Image
