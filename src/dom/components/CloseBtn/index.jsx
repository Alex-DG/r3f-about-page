import styled from 'styled-components'
import useMouse from '../../hooks/useMouse'

const StyledSpan = styled.span`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  &:active {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  &:before,
  &:after {
    margin: 0.05em;
    position: absolute;
    content: ' ';
    height: 25px;
    width: 2px;
    background-color: rgb(85, 81, 81);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  @media (max-width: 900px) {
    right: 2em;
    top: 2em;
    width: 35px;
    height: 35px;

    &:before,
    &:after {
      height: 20px;
    }
  }
`

const CloseBtn = ({ onClick }) => {
  const { handleMouseOut, handleMouseOver } = useMouse()

  return (
    <StyledSpan
      className='close-btn'
      {...{ onClick }}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    ></StyledSpan>
  )
}

export default CloseBtn
