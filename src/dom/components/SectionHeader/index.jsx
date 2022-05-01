import { useRef } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'
import Divider from '../Divider'

const Section = styled.section`
  .section-header-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 12px 0;
    font-size: 16px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .section-title,
  .section-order {
    font-family: 'Space Grotesk Light';
  }

  .section-order {
    padding-right: 20px;
  }
`

const SectionHeader = ({ title, index }) => {
  const headerRef = useRef(null)
  const dividerRef = useRef(null)
  gsap.fromTo(
    dividerRef?.current,
    {
      opacity: 0.5,
      width: 0,
    },
    {
      opacity: 1,
      width: '100%',
      duration: 2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: dividerRef?.current,
        end: '100% 100%',
      },
    }
  )
  gsap.fromTo(
    headerRef?.current,
    {
      opacity: 0,
      x: -80,
    },
    {
      opacity: 1,
      x: 10,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: headerRef?.current,
        end: '100% 100%',
      },
    }
  )

  return (
    <>
      <Section id={title} ref={headerRef} className='section-header'>
        <div className='section-header-container'>
          <div className='section-title'>{title}</div>
          <div className='section-order'>{index}</div>
        </div>
      </Section>
      <Divider ref={dividerRef} glow />
    </>
  )
}

export default SectionHeader
