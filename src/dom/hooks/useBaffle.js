import baffle from 'baffle'

import { useEffect, useState, useRef, useCallback } from 'react'

const useBaffle = (startDelay = 1000, revealDelay = 100) => {
  const [baffleDone, setDone] = useState(false)

  let b = useRef(null)
  let timeoutStart = useRef(null)
  let timeoutDone = useRef(null)

  const baffleReveal = () => b.current.text(() => 'Welcome').reveal(revealDelay)

  const start = useCallback(() => {
    if (!b?.current) {
      timeoutStart.current = setTimeout(() => {
        b.current = baffle('.loading', { speed: 100 })
        b.current.start()
      }, startDelay)

      timeoutDone.current = setTimeout(
        () => setDone((prev) => !prev),
        startDelay * 1.5
      )
    }
  }, [b, startDelay])

  useEffect(() => {
    start()

    return () => {
      timeoutStart.current && clearTimeout(timeoutStart.current)
      timeoutDone.current && clearTimeout(timeoutDone.current)
    }
  }, [])

  return { baffleDone, baffleReveal }
}

export default useBaffle
