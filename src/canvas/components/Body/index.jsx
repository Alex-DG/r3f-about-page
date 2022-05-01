import { useEffect } from 'react'
import { gsap } from 'gsap'
import { useAnimations } from '@react-three/drei'
import { isMobile } from '../../../utils/mobile'
import useStore from '../../../store'

const SCALE = 0.0041

const Body = () => {
  const model = useStore((state) => state.models.body)
  if (!model) return null

  const appReady = useStore((state) => state.appReady)

  const materials = model.children.map((child) => {
    if (child?.material) {
      child.material.transparent = true
      child.material.opacity = 0
      return child.material
    }
  })
  const { names, actions } = useAnimations(model.animations, model)

  /**
   * Reveal body
   */
  useEffect(() => {
    if (appReady) {
      gsap.to(materials, {
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
      })

      if (!isMobile()) {
        gsap.fromTo(
          model.position,
          {
            y: 0.8,
          },
          {
            y: model.position.y,
            duration: 1.5,
            ease: 'bounce.out',
          }
        )
      }
    }
  }, [appReady])

  /**
   * Trigger animation
   */
  useEffect(() => {
    actions[names[0]]?.play()
  }, [])

  return (
    <>
      <primitive object={model} scale={SCALE} rotation={[0.35, 0, 0]} />
    </>
  )
}

export default Body
