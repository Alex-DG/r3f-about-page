import { useRef, useEffect } from 'react'
import { Plane, MeshWobbleMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { gsap } from 'gsap'

import XRayMaterial from '../../shaders/XRayMaterial'
import useStore from '../../../store'

const Face = () => {
  const model = useStore((state) => state.models.face)
  if (!model) return null

  const appReady = useStore((state) => state.appReady)

  const modelRef = useRef()
  const basicMatRef = useRef()

  model.scene.position.z = -0.31
  model.scene.position.y = -0.23

  let materials = []
  model.scene.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = XRayMaterial
      materials.push(child.material)
    }
  })

  useFrame(({ clock }) => {
    modelRef.current.position.y =
      Math.sin(clock.getElapsedTime()) * -0.025 - 0.22

    modelRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.11
  })

  useEffect(() => {
    if (appReady) {
      const opacities = materials.map((mat) => mat.uniforms.uOpacity)
      gsap.to(opacities, {
        value: 1,
        delay: 1.5,
        duration: 2,
        ease: 'power3.out',
      })
      gsap.to(basicMatRef.current, {
        opacity: 0.25,
        delay: 1.5,
        duration: 2,
        ease: 'power3.out',
      })
    }
  }, [appReady])

  useEffect(() => {
    gsap.fromTo(
      modelRef.current.scale,
      {
        x: 1,
        y: 1,
        z: 1,
      },
      {
        x: 2,
        y: 2,
        z: 2,
        scrollTrigger: {
          trigger: '#about',
        },
      }
    )
  }, [])

  return (
    <group>
      <Plane
        args={[1.3, 1.3]}
        position={[0, -0.2, -1.3]}
        rotation={[-0.1, 0.2, 0]}
      >
        <meshBasicMaterial
          ref={basicMatRef}
          attach='material'
          color='black'
          transparent
          opacity={0}
        />
      </Plane>
      <primitive
        ref={modelRef}
        object={model.scene}
        scale={[2.25, 2.25, 2.25]}
      />
    </group>
  )
}

export default Face
