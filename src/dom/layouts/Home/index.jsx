import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Socials from '../../components/Socials'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import useSmoothScroll from '../../hooks/useSmoothScroll'

const Layout = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  .container {
    width: 96%;
    margin: 0px auto;
  }
`

const Home = ({ views }) => {
  const { containerRef } = useSmoothScroll()
  const { view1, view2 } = views

  return (
    <Layout className='home-layout'>
      <div ref={containerRef} className='container'>
        <Navbar />
        <Header />
        <Hero view={view1} />
        <About view={view2} />
        <Projects />
        <Socials />
      </div>
    </Layout>
  )
}

export default Home
