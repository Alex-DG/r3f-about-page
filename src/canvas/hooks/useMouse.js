import { useRef, useEffect } from 'react'

const useMouse = (x = 0, y = 0) => {
  const mouse = useRef({
    x,
    y,
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return { mouse }
}

export default useMouse
