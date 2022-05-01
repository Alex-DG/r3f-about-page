import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { isMobile } from '../../../utils/mobile.js'

const cursor = css`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  opacity: 1;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 5;
`
const CursorDot = styled.div`
  ${cursor};
  width: 8px;
  height: 8px;
  background-color: #0ed4ea;
`
const CursorDotOutline = styled.div`
  ${cursor};
  width: 40px;
  height: 40px;
  background-color: rgba(1, 205, 220, 0.5);
`

const Cursor = () => {
  if (isMobile()) return null

  const delay = 15
  const dot = useRef(null)
  const dotOutline = useRef(null)
  const cursorVisible = useRef(true)
  const timeout = useRef(null)
  const requestRef = useRef(null)
  const endX = useRef(window.innerWidth / 2)
  const endY = useRef(window.innerHeight / 2)
  const x = useRef(0)
  const y = useRef(0)

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveEvent)
    document.addEventListener('mouseenter', mouseEnterEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)

    animateDotOutline()

    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent)
      document.removeEventListener('mouseenter', mouseEnterEvent)
      document.removeEventListener('mouseleave', mouseLeaveEvent)

      clearTimeout(timeout.current)

      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1
      dotOutline.current.style.opacity = 1
    } else {
      dot.current.style.opacity = 0
      dotOutline.current.style.opacity = 0
    }
  }

  const mouseEnterEvent = () => {
    cursorVisible.current = true
    toggleCursorVisibility()
  }

  const mouseLeaveEvent = () => {
    cursorVisible.current = false
    toggleCursorVisibility()
  }

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true
    toggleCursorVisibility()

    endX.current = e.pageX
    endY.current = e.pageY

    dot.current.style.top = endY.current + 'px'
    dot.current.style.left = endX.current + 'px'
  }

  const animateDotOutline = () => {
    x.current += (endX.current - x.current) / delay
    y.current += (endY.current - y.current) / delay

    dotOutline.current.style.top = y.current + 'px'
    dotOutline.current.style.left = x.current + 'px'

    requestRef.current = requestAnimationFrame(animateDotOutline)
  }

  return (
    <>
      <CursorDotOutline
        ref={dotOutline}
        className='cursor-dot-outline'
      ></CursorDotOutline>
      <CursorDot ref={dot} className='cursor-dot'></CursorDot>
    </>
  )
}

export default Cursor
