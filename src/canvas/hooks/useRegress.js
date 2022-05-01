import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

const useRegress = () => {
  const regress = useThree((state) => state.performance.regress)

  useEffect(() => {
    document.getElementById('gallery-menu')?.addEventListener('click', regress)

    document.addEventListener('scroll', regress)
    return () => {
      document.removeEventListener('scroll', regress)
      document
        .getElementById('gallery-menu')
        ?.removeEventListener('click', regress)
    }
  }, [])
}

export default useRegress
