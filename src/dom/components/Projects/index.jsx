import { useEffect } from 'react'
import { gsap } from 'gsap'
import styled, { keyframes } from 'styled-components'
import Divider from '../Divider'
import SectionHeader from '../SectionHeader'
import Whitespace from '../Whitespace'
import useMouse from '../../hooks/useMouse'
import useStore from '../../../store'
import { isMobile } from '../../../utils/mobile'
import { projectData } from './data'

const marquee = keyframes`
  0% {
    -webkit-transform: translate3d(var(--move-initial), 0, 0);
    transform: translate3d(var(--move-initial), 0, 0);
  }
  100% {
    -webkit-transform: translate3d(var(--move-final), 0, 0);
    transform: translate3d(var(--move-final), 0, 0);
  }
`
const Section = styled.section`
  .menu-item {
    position: relative;
    margin: 10px;
  }
  .menu-item-link {
    display: inline-block;
    position: relative;
    color: #fff;
    cursor: none;
    -webkit-transition: opacity 0.4s;
    transition: opacity 0.4s;
    font-family: 'Bigilla';
    text-transform: uppercase;
  }
  @media (pointer: fine) {
    .menu-item-link:hover {
      -webkit-transition-duration: 0.1s;
      transition-duration: 0.1s;
      opacity: 0;
    }
  }
  .menu {
    --offset: 20vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));
    font-size: 2em;
  }
  .marquee {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #fff;
    pointer-events: none;
    mix-blend-mode: difference;
  }
  .marquee-inner {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -webkit-animation: ${marquee} 5s linear infinite;
    animation: ${marquee} 5s linear infinite;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
    opacity: 0;
    -webkit-transition: opacity 0.1s;
    transition: opacity 0.1s;
  }
  @media (pointer: fine) {
    .menu-item-link:hover ~ .marquee .marquee-inner {
      -webkit-animation-play-state: running;
      animation-play-state: running;
      opacity: 1;
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;
    }
  }
  .menu-item-link,
  .marquee span {
    white-space: nowrap;
    font-size: 2em;
    padding: 1.6vw 1vw;
    font-weight: 900;
    font-family: 'Movement DirectThin';
    text-decoration: none;
  }
  @media (max-width: 900px) {
    .menu-item-link,
    .marquee span {
      font-size: 1.5em;
    }
  }
  .marquee span {
    text-transform: uppercase;
  }
`

const Project = ({
  name,
  url,
  mobile,
  callback,
  marquee,
  handleMouseOut,
  handleMouseOver,
  index,
}) => {
  return (
    <>
      <div className='menu-item'>
        {callback ? (
          <span
            id='gallery-menu'
            className='menu-item-link'
            onClick={callback}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
          >
            / {name}
          </span>
        ) : (
          <a
            className='menu-item-link'
            target='_blank'
            rel='noopener noreferrer'
            href={url}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
          >
            / {name}
          </a>
        )}

        {!mobile && (
          <div className='marquee'>
            <div className='marquee-inner'>
              <span>{marquee}</span>
              <span>{marquee}</span>
              <span>{marquee}</span>
              <span>{marquee}</span>
              <span>{marquee}</span>
            </div>
          </div>
        )}
      </div>

      {index < projectData.length - 1 && <Divider id='proj-div' />}
    </>
  )
}

const Projects = () => {
  const setGalleryActive = useStore((state) => state.setGalleryActive)
  const { handleMouseOut, handleMouseOver } = useMouse()
  const mobile = isMobile()

  useEffect(() => {
    gsap.fromTo(
      '.menu > .menu-item',
      {
        opacity: 0,
        scale: 0,
        y: '+=10%',
      },
      {
        opacity: 1,
        y: '-=20%',
        scale: 1,
        duration: 1,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.menu',
        },
      }
    )
    gsap.fromTo(
      '#proj-div.divider',
      {
        opacity: 0,
        width: 0,
      },
      {
        opacity: 1,
        width: '100%',
        ease: 'expo.in',
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.menu',
          end: '100% 100%',
        },
      }
    )
  }, [])

  return (
    <>
      <SectionHeader title='work' index='/002' />

      <Section className='project'>
        <div className='project-container'>
          <div>
            <nav className='menu'>
              {projectData.map((project, index) => (
                <Project
                  {...{
                    ...project,
                    index,
                    mobile,
                    handleMouseOut,
                    handleMouseOver,
                    callback: () => setGalleryActive(true),
                  }}
                  key={index}
                />
              ))}
            </nav>
          </div>
        </div>
      </Section>

      <Whitespace />
    </>
  )
}

export default Projects
