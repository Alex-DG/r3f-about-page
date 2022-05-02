import { useState, useEffect } from 'react'

const getOrientation = () => window.screen?.orientation?.type

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation())

  const updateOrientation = (_) => {
    setOrientation(getOrientation())
  }

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation)
    return () => {
      window.removeEventListener('orientationchange', updateOrientation)
    }
  }, [])

  return orientation
}

export default useScreenOrientation
