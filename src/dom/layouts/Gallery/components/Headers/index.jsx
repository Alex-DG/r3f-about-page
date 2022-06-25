import styled from 'styled-components'
import { data } from '../data'
import useMouse from '../../../../hooks/useMouse'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: auto;
  z-index: 100;

  .n {
    position: absolute;
    display: none;
    top: 100px;
    left: 150px;
    height: auto;
    width: auto;
    background: transparent;
    transition: opacity 0.3s;
    z-index: 100;
  }
  .n > h3 {
    font-family: 'Bigilla';
    font-size: 6em;
  }
  @media (max-width: 900px) {
    .n {
      top: 40px;
      left: 70px;
    }
    .n > h3 {
      font-size: 2.25em;
    }
  }

  .n > h5 > a {
    font-family: 'Space Grotesk Light';
  }
  .n1 {
    top: 200px;
  }
  .n2 {
    top: 300px;
  }
  .n3 {
    top: 400px;
  }
  .n4 {
    top: 500px;
  }
  .n5 {
    top: 600px;
  }
  .n6 {
    top: 700px;
  }
  .n7 {
    top: 800px;
  }
  .n8 {
    top: 900px;
  }
  .n9 {
    top: 1000px;
  }
  .n10 {
    top: 1100px;
  }
  .n11 {
    top: 1200px;
  }
  .n12 {
    top: 1300px;
  }
  .n13 {
    top: 1400px;
  }
  .n14 {
    top: 1500px;
  }
  .n15 {
    top: 1600px;
  }
`

const Headers = () => {
  const { handleMouseOut, handleMouseOver } = useMouse()
  return (
    <Wrapper id='gallery-header'>
      {data.map(({ title, github, live, article }, index) => {
        return (
          <div
            key={title}
            className={`n n${index}`}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
          >
            <h3>{title}</h3>
            <h5>
              <a
                href={article || live}
                target='_blank'
                rel='noopener noreferrer'
              >
                {article ? 'article' : 'live'}
              </a>{' '}
              {github && (
                <>
                  |{' '}
                  <a href={github} target='_blank' rel='noopener noreferrer'>
                    Github
                  </a>
                </>
              )}
            </h5>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Headers
