import { useEffect } from 'react'
import SectionHeader from '../SectionHeader'
import Whitespace from '../Whitespace'
import { gsap } from 'gsap'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 17vw;
  max-height: fit-content;

  .face {
    position: relative !important;
    flex: 1;
  }
  .about-container {
    flex: 3;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .about-container p {
    margin: 20px 0;
    font-size: 36px;

    font-family: 'Space Grotesk Light';
  }

  @media (max-width: 1110px) {
    flex-direction: column-reverse !important;

    .about-container {
      flex: 2;
    }
    .about-container p {
      font-size: 24px;
    }
    .face {
      min-height: 20em;
    }
  }
`

const About = ({ view }) => {
  useEffect(() => {
    gsap.fromTo(
      '.about-container > p',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        stagger: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-container',
        },
      }
    )
  }, [])

  return (
    <>
      <SectionHeader title='about' index='/001' />

      <Section className='about'>
        <div ref={view} className='face' />

        <div className='about-container'>
          <p>
            Frontend Engineer, with and interest in real-time graphics. I worked
            in France, England, and Scotland for the past 8+ years.
          </p>
          <p>
            Passionate about everything web, with a keen interest in 3D and AR
            development! I'm working to build innovative solutions, improving
            user engagement by making interactive and interesting web
            experiences.
          </p>
          <p>
            What do I like? Exploring new technologies, learning and
            experimenting what I learnt.
          </p>
        </div>
      </Section>

      <Whitespace />
    </>
  )
}

export default About
