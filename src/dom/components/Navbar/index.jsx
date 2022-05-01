import Divider from '../Divider'
import styled from 'styled-components'

const Wrapper = styled.div`
  .navbar-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 12px 0;
    font-size: 16px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .navbar-container .site-title {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .navbar-container .site-type {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .navbar-container .site-year {
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    text-align: right;
  }
`

const Navbar = () => {
  return (
    <>
      <Wrapper className='navbar'>
        <div className='navbar-container'>
          <div className='site-title'></div>
          <div className='site-type'></div>
          <div className='site-year'></div>
        </div>
      </Wrapper>
      <Divider skew glow />
    </>
  )
}

export default Navbar
