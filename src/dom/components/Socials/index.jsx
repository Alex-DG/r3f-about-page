import { useEffect } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import useMouse from '../../hooks/useMouse'
import { links } from './data'

const Section = styled.section`
  padding: 15px 0;

  .socials-container {
    display: flex;
    justify-content: space-between;
  }
  .socials-container a {
    text-decoration: none;
    font-family: 'Space Grotesk Light' !important;
    font-size: 3em;
    cursor: none;
  }

  @media (max-width: 900px) {
    .socials-container a {
      font-size: 1.3em;
    }
  }
`

const Link = ({ handleMouseOut, handleMouseOver, url, name }) => (
  <div className='socials-item'>
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      {name}
    </a>
  </div>
)

const Socials = () => {
  const { handleMouseOut, handleMouseOver } = useMouse()

  useEffect(() => {
    gsap.fromTo(
      '.socials-item',
      {
        opacity: 0,
        width: 0,
      },
      {
        opacity: 1,
        width: '100%',
        duration: 2,
        stagger: 0.25,
        scrollTrigger: {
          trigger: '#work',
        },
      }
    )
  }, [])

  return (
    <>
      <SectionHeader title='socials' index='/003' />

      <Section className='socials'>
        <div className='socials-container'>
          {links.map(({ name, url }, index) => (
            <Link
              key={index}
              {...{
                name,
                url,
                handleMouseOut,
                handleMouseOver,
              }}
            />
          ))}
        </div>
      </Section>
    </>
  )
}

export default Socials
