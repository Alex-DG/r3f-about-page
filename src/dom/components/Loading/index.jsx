import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import styled, { keyframes } from 'styled-components'
import useStore from '../../../store'
import useBaffle from '../../hooks/useBaffle'
import { enableMainScroll } from '../../../utils/scroll'

const fadeIn = keyframes`
    from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const Wrapper = styled.div`
  display: flex;
  background: rgb(27, 27, 31);
  background-image: linear-gradient(to right, #434343 0%, #000 90%);
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 6;

  .loading {
    line-height: 1.45;
    margin-bottom: 0.15em;
    font-size: 1.5em;
    color: #f5f5f5;
  }
  .progress-div {
    height: 2px;
    background-color: #fff;
    box-shadow: 0 1px 40px 1px #fff;
    width: 0%;
    transition: width 0.5s ease-out;
    will-change: width;
  }
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: inherit;
    margin: 0 1em;
    -webkit-animation: ${fadeIn} 2s ease-in alternate;
    -moz-animation: ${fadeIn} 2s ease-in alternate;
    animation: ${fadeIn} 2s ease-in alternate;
  }
  @media (max-width: 900px) {
    .loading-container {
      margin: 0em 0.5em;
    }
  }

  .loading-container > .welcome > span {
    font-family: 'Movement DirectThin';
  }
  .loading-container {
    text-align: center;
    color: #fff;
    font-size: 3em;
  }
  .loading-container > .loading {
    opacity: 1;
    font-family: 'Bigilla';
    padding: 0.35em 0.35em 0.35em 0;
  }
`

const tl = gsap.timeline()

const Loading = ({ progress = 0 }) => {
  const { baffleDone, baffleReveal } = useBaffle()
  const progressRef = useRef(null)
  const setAppReady = useStore((state) => state.setAppReady)

  const loadingSuccess = useCallback(() => {
    baffleReveal()

    tl.to('.loading-container', {
      opacity: 0,
      duration: 0.5,
      delay: 2,
    })
    tl.to('.loading-wrapper', {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        gsap.set('.loading-wrapper', { display: 'none' })
        enableMainScroll()
      },
    })
    tl.to('.dom-content', {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.in',
      onStart: () => setAppReady(true),
    })
  }, [baffleReveal, setAppReady])

  /**
   * Upadate progress bar
   */
  useEffect(() => {
    progressRef.current.style.width = `${progress}%`
    if (progress >= 100 && baffleDone) loadingSuccess()
  }, [progressRef, progress, baffleDone, loadingSuccess])

  return (
    <>
      <Wrapper className='loading-wrapper'>
        <div className='loading-container'>
          <span className='loading'>Loading</span>
          <div ref={progressRef} className='progress-div' />
        </div>
      </Wrapper>
    </>
  )
}

export default Loading
