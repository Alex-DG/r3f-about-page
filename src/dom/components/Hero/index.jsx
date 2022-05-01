import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin-top: -50%;

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  .full-body {
    width: auto;
    height: 60vw;
  }

  @media (max-width: 900px) {
    .full-body {
      height: 100vw;
    }
  }

  .hero-container {
    width: 40%;
    float: right;
    perspective: 1500px;
  }

  .hero-container img {
    max-width: 80%;
    transform: rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
    border-radius: 0.25em;
    box-shadow: rgb(0 0 0 / 25%) 2px 10px 30px;
    transition: all 0.3s ease 0s;
  }

  .hero-container img:hover {
    transform: rotate(0);
  }

  @media (max-width: 900px) {
    margin-top: -25px;

    .hero-container {
      width: 100%;
    }
  }
`

const Hero = ({ view }) => {
  return (
    <Wrapper className='hero'>
      <div className='hero-container'>
        <div ref={view} className='face full-body'></div>
      </div>
    </Wrapper>
  )
}

export default Hero
