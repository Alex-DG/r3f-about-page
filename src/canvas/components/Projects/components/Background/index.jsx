import { useThree, useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import { useState, useRef, Suspense } from 'react'
import { isMobile } from '../../../../../utils/mobile'
import useStore from '../../../../../store'

const Background = ({ count = isMobile() ? 10 : 35 }) => {
  const Mask = ({ z }) => {
    const model = useStore((state) => state.models.mask)
    if (!model) return null

    const maskRef = useRef()

    const { viewport, camera } = useThree()
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

    const [data] = useState({
      x: MathUtils.randFloatSpread(1),
      y: MathUtils.randFloatSpread(height * 1.5),
      rX: Math.random() * Math.PI,
      rY: Math.random() * Math.PI,
      rZ: Math.random() * Math.PI,
    })

    useFrame(() => {
      maskRef.current.rotation.set(
        (data.rX += 0.01001),
        (data.rY += 0.001),
        (data.rZ += 0.005)
      )

      maskRef.current.position.set(data.x * width, (data.y += 0.025), z)

      if (data.y > height) data.y = -height
    })

    return (
      <>
        <primitive scale={0.01} ref={maskRef} object={model.scene.clone()} />
      </>
    )
  }

  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const zSpread = -(i / count) * count - 6 // function of the depth and then offset by - 25 so the 3d models are not too close
        return <Mask key={i} z={zSpread} />
      })}
    </>
  )
}

export default Background
