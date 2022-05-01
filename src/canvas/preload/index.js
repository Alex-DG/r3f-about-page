import { useFBX, useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'

import useStore from '../../store'

import { imgSources, maskSrc, faceSrc, bodySrc } from './data'

/**
 * Load all assets and store them with zustand
 */
const Preload = () => {
  const images = useTexture(imgSources)
  const mask = useGLTF(maskSrc)
  const face = useGLTF(faceSrc)
  const body = useFBX(bodySrc)

  const setTexture = useStore((state) => state.setTexture)
  const setModel = useStore((state) => state.setModel)

  useEffect(() => {
    if (mask) setModel(mask, 'mask')
    if (body) setModel(body, 'body')
    if (face) setModel(face, 'face')

    if (images) setTexture(images, 'projects')
  }, [images, mask, face, body])

  return null
}

export default Preload
