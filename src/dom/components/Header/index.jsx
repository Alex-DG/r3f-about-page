import { useEffect } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 80px 0 60px;
  z-index: 2 !important;

  .header-container h2 {
    font-family: 'Movement DirectThin';
    font-size: 8vw;
  }

  .header-container h1.name {
    font-family: 'Bigilla';
    font-size: 12vw;
  }
`

const Header = () => {
  useEffect(() => {
    const scrollTrigger = {
      start: 'top top',
      end: '+=50%',
    }

    gsap.fromTo(
      '.header > .header-container > h1',
      {
        opacity: 1,
      },
      {
        x: 1000,
        opacity: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger,
      }
    )

    gsap.fromTo(
      '.header > .header-container > h2',
      {
        opacity: 1,
        x: 0,
      },
      {
        x: -400,
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        stagger: 0.4,
        scrollTrigger,
      }
    )
  }, [])

  return (
    <Wrapper className='header'>
      <div className='header-container'>
        <h1 className='name'>Alex Di Guida</h1>
        <h2>Creative</h2>
        <h2>Front-end</h2>
        <h2>Developer</h2>
      </div>
    </Wrapper>
  )
}

export default Header
