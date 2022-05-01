import { MathUtils } from 'three'
import { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'

import Image from './components/Image'
import Background from './components/Background'

import useGallery from '../../hooks/useGallery'
import { isMobile } from '../../../utils/mobile'

import useStore from '../../../store'

const Projects = () => {
  const images = useStore((state) => state.textures.projects)
  const galleryActive = useStore((state) => state.galleryActive)

  const { wrap, elems, navs, nav, groups, data, isReady } = useGallery({
    images,
    galleryActive,
  })

  let position = 1
  let speed = 0
  let startY = 0
  let rounded = 0
  let attracktTo = 0
  let attracktMode = false

  const objs = Array(images.length).fill({ dist: 0 })
  const rots = groups.map((g) => g.rotation)
  const positions = groups.map((g) => g.position)

  const minMaxPosition = () => {
    let pos = position
    if (pos >= 0 && pos <= elems.length - 1) {
      pos += speed
    } else {
      const smooth =
        pos < 1
          ? MathUtils.lerp(pos, Math.ceil(pos), 0.2)
          : MathUtils.lerp(pos, Math.floor(pos), 0.2)
      pos = smooth
    }

    return pos
  }

  useFrame(() => {
    if (isReady) {
      position = minMaxPosition()
      speed *= 0.8

      objs.forEach((o, i) => {
        o.dist = Math.min(Math.abs(position - i), 1)
        o.dist = 1 - o.dist ** 2

        elems[i].style.transform = `scale(${1 + 0.4 * o.dist})`
        elems[i].style.opacity = `${o.dist}`
        // dots[i].style.opacity = `${o.dist + 0.5}`

        if (Math.ceil(o.dist) === 1) {
          elems[i].style.display = 'block'
        } else {
          elems[i].style.display = 'none'
        }

        if (groups.length >= 1) {
          console.log({ groups })
          const image = groups[i].children[0]
          if (image) {
            const aspect = image.userData.aspect
            const scale = 1 + 0.25 * o.dist
            image.position.y = i * aspect - position * aspect
            image.scale.set(scale, scale, scale)
            image.material.uniforms.uDistanceFromCenter.value = o.dist
          }
        }
      })

      rounded = Math.round(position)

      const diff = rounded - position

      if (attracktMode) {
        position += -(position - attracktTo) * 0.04
      } else {
        position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015
      }

      wrap.style.transform = `translate(0, ${-position * 100}px)`
    }
  })

  /**
   * Init events
   */
  useEffect(() => {
    const onTouchMove = (evt) => {
      const deltaY = evt.touches[0].clientY - startY
      speed += deltaY * 0.00015
    }
    const onTouchStart = (evt) => {
      startY = evt.touches[0].clientY
    }
    const onWheelChange = (evt) => {
      speed += evt.deltaY * 0.0002
    }
    const onMouseEnter = () => {
      attracktMode = true
      gsap.to(rots, {
        x: -0.5,
        y: 0,
        z: 0,
        duration: 0.35,
        ease: 'power3.inOut',
      })
      gsap.to(positions, {
        x: 1,
        y: 0.5,
        z: 0,
        duration: 0.35,
        ease: 'power3.inOut',
      })
    }
    const onMouseLeave = () => {
      attracktMode = false
      gsap.to(rots, {
        x: -0.3,
        y: -0.5,
        z: -0.1,
        duration: 0.35,
        ease: 'power3.inOut',
      })
      gsap.to(positions, {
        x: 0,
        y: 0.25,
        z: 0,
        duration: 0.35,
        ease: 'power3.inOut',
      })
    }
    const onMouseOver = (evt) => {
      attracktTo = Number(evt.target.getAttribute('data-nav'))
    }
    const dispose = () => {
      position = 1
      speed = 0
      startY = 0
      rounded = 0
      attracktTo = 0
      attracktMode = false
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('wheel', onWheelChange)
      nav?.removeEventListener('mouseenter', onMouseEnter)
      nav?.removeEventListener('mouseleave', onMouseEnter)
      navs?.forEach((el) => el?.removeEventListener('mouseover', onMouseOver))
    }

    if (isReady) {
      if (isMobile()) {
        window.addEventListener('touchmove', onTouchMove)
        window.addEventListener('touchstart', onTouchStart)
      } else {
        window.addEventListener('wheel', onWheelChange)
      }
      // Navigation - on mouse enter
      nav.addEventListener('mouseenter', onMouseEnter)
      // Navigation - on mouse leave
      nav.addEventListener('mouseleave', onMouseLeave)
      // Navigation - on mouse over
      navs.forEach((el) => el.addEventListener('mouseover', onMouseOver))
    }
    return () => dispose()
  }, [isReady])

  return (
    <>
      {data.map(({ name, url, texture }, index) => (
        <Image
          key={index}
          dom={texture.image}
          {...{ index, name, url, texture, groups }}
        />
      ))}

      <Background />
    </>
  )
}

export default Projects
