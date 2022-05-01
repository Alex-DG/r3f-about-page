import { useEffect } from 'react'

import { gsap } from 'gsap'

/**
 * Very long name custom hook:
 * Give a meshRef and trigger tweens based on
 * the dom sections
 *
 * @param meshRef - Mesh react ref
 */
const useJawDroppingScrollBasedAnimations = (meshRef) => {
  useEffect(() => {
    const sections = document.getElementsByTagName('section')
    const shouldTween = !!sections && !!meshRef?.current

    if (shouldTween) {
      const { rotation, position, scale } = meshRef.current // Ico mesh

      // gsap.fromTo(
      //   rotation,
      //   {
      //     y: Math.PI,
      //   },
      //   {
      //     y: 0,
      //     duration: 1.5,
      //     ease: 'power3.out',
      //   }
      // )

      // gsap.from(position, {
      //   y: 1,
      //   duration: 1,
      //   ease: 'expo',
      // })

      gsap.to(rotation, {
        x: Math.PI * 2.5,
        duration: 1.5,
        scrollTrigger: {
          trigger: sections[0],
        },
      })

      gsap.to(scale, {
        x: 1.8,
        y: 1.8,
        scrollTrigger: {
          trigger: sections[1],
        },
      })

      gsap.to(rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: sections[2],
          end: 'bottom bottom',
        },
      })
    }
  }, [meshRef])
}

export default useJawDroppingScrollBasedAnimations
