import { useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isMobile } from '../../utils/mobile'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.defaults({
  scrub: 4,
})

if (isMobile()) {
  ScrollTrigger.config({
    autoRefreshEvents: 'DOMContentLoaded,load,visibilitychange',
  })
}

const useSmoothScroll = () => {
  const containerRef = useRef(null)
  return { containerRef }
}

export default useSmoothScroll
