import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { disableScroll, enableScroll } from '../../utils/scroll'
import useStore from '../../store'

const useGallery = () => {
  const galleryActive = useStore((state) => state.galleryActive)
  const setGalleryActive = useStore((state) => state.setGalleryActive)

  const galleryRef = useRef()

  useEffect(() => {
    if (galleryActive) {
      gsap.fromTo(
        galleryRef.current,
        {
          y: -window.innerHeight,
        },
        {
          y: 0,
          opacity: 1,
          display: 'flex',
          duration: 1.25,
          ease: 'power5.out',
          onStart: () => disableScroll(),
        }
      )
    }
  }, [galleryActive])

  const handleClose = () => {
    gsap.to(galleryRef.current, {
      y: -window.innerHeight,
      duration: 1.5,
      opacity: 0,
      delay: 0.1,
      ease: 'power3.inOut',
      onComplete: () => {
        setGalleryActive(false)
        enableScroll()
      },
    })
  }

  return { galleryRef, handleClose, active: galleryActive }
}

export default useGallery
