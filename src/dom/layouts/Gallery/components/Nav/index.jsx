import styled from 'styled-components'
import CloseBtn from '../../../../components/CloseBtn'
import { data } from '../data'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;

  div {
    flex: 1;
    margin-top: 1em;
  }
  ul {
    flex: 10;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  ul > li {
    height: 25px;
    width: 25px;
    display: inline-block;
    opacity: 0.25;
    transition: opacity 0.25s ease-out;
    font-family: 'Space Grotesk Light';
    font-family: 'Movement DirectThin';
    font-family: 'Bigilla';
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul > li:hover {
    opacity: 1;
    transform: scale(3);
    transition: transform 0.25s ease-out;
  }
`

const Nav = ({ onClose }) => {
  return (
    <Wrapper className='nav-wrapper'>
      <div>
        <CloseBtn onClick={onClose} />
      </div>
      <ul className='nav'>
        {data.map((_, index) => {
          return (
            <li key={index} data-nav={index}>
              {index + 1}
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default Nav
