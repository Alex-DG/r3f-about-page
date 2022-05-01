import styled from 'styled-components'
import useGallery from '../../hooks/useGallery'
import Headers from './components/Headers'
import Nav from './components/Nav'
import { CanvasGallery } from '../../../canvas'

const Layout = styled.div`
  position: fixed;
  display: none;
  opacity: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 5;
  justify-content: center;
  align-items: center;

  .active {
    display: block;
  }

  .gallery-content {
    border: 3px solid #fff;
    background-color: #2a75bb;
    height: 100%;
    width: 100%;
  }
`

const Gallery = () => {
  const { galleryRef, handleClose, active } = useGallery()
  const className = active ? 'active' : ''

  return (
    <Layout ref={galleryRef} {...{ className }}>
      <div className='gallery-content'>
        <Headers />
        <Nav onClose={handleClose} />
        <CanvasGallery />
      </div>
    </Layout>
  )
}

export default Gallery
